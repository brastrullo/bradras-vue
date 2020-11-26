<template>
  <form
    @submit.prevent="executeRecaptcha"
    v-if="!emailSent"
    class="flex flex-col justify-center h-screen md:mx-auto md:w-1/2 box-border mx-6 mt-4 mb-12"
  >
    <legend class="m-4">Contact</legend>
      <div class="flex md:flex-row flex-col justify-between">
      <Input
        class="md:w-1/2 w-full"
        name="name"
        label="Name"
        placeholder="e.g. Tony"
        v-model.trim="$v.name.$model"
        :v="$v.name"
      />
      <Input
        class="md:w-1/2 w-full"
        name="email"
        label="Email"
        placeholder="e.g. tony@starkenterprises.com"
        v-model.trim="$v.email.$model"
        :v="$v.email"
      />
    </div>
    <div class="flex md:flex-row flex-col justify-between">
      <Select
        class="md:w-1/2 w-full"
        name="budget"
        label="Budget"
        :options="budgetOptions"
        v-model="$v.budget.$model"
        :v="$v.budget"
      />
      <Select
        class="md:w-1/2 w-full"
        name="project"
        label="Project"
        :options="projectOptions"
        v-model="$v.project.$model"
        :v="$v.project"
      />
    </div>
    <TextArea
      name="message"
      label="Message"
      v-model.trim="$v.message.$model"
      :v="$v.message"
    />
    <button
      :disabled="!isSubmitReady"
      class="rounded text-white disabled:pointer-events-none disabled:opacity-25 p-2 focus:shadow-outline focus:outline-none bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-900"
    >
      Submit
    </button>
    <div class="my-4 flex flex-row justify-end">
      <Recaptcha ref="recaptcha" @verify="submitForm"/>
    </div>
  </form>
  <MailSent v-else />
</template>

<script>
import Input from "@/components/form/Input.vue";
import Select from "@/components/form/Select.vue";
import TextArea from "@/components/form/TextArea.vue";
import Recaptcha from "@/components/form/Recaptcha.vue";
import MailSent from "@/components/MailSent.vue";
import {
  required,
  minLength,
  maxLength,
  email,
} from "@vuelidate/validators";
// import emailjs, { init } from 'emailjs-com';

export default {
  name: "Contact",
  components: {
    Input,
    Select,
    TextArea,
    Recaptcha,
    MailSent,
  },
  computed: {
    isSubmitReady() {
      return (
        !this.$v.$invalid &&
        this.$v.name.$model.length > 0 &&
        this.$v.email.$model.length > 0 &&
        this.$v.budget.$model.length > 0 &&
        this.$v.project.$model.length > 0
      );
    },
    inputObj() {
      return {
        name: this.name,
        email: this.email,
        budget: this.budget,
        project: this.project,
        message: this.message === "" ? '(No Message)' : this.message,
      };
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(30),
    },
    email: {
      required,
      email,
    },
    budget: {
      required,
      minLength: minLength(1)
    },
    project: {
      required,
      minLength: minLength(1)
    },
    message: {
      minLength: minLength(5),
      maxLength: maxLength(500)
    }
  },
  methods: {
    executeRecaptcha() {
      this.$refs.recaptcha.execute()
    },
    submitForm(response) {
      console.log({response})
      if (this.isSubmitReady) {
        // init(this.appID)
        let data = {
          service_id: 'default_service',
          template_id: this.templateID,
          user_id: this.appID,
          template_params: {
            ...this.inputObj,
            'g-recaptcha-response': response
          }
        };
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((result) => {
            console.log('SUCCESS!', result.status, result.statusText, result.text, this.inputObj);
            this.name = "";
            this.email = "";
            this.budget = "";
            this.project = "";
            this.message = "";
            this.emailSent = true;
        }, (error) => {
            console.log('FAILED...', error);
            alert(error)
        });
      }
    },
  },
  data() {
    return {
      appID: process.env.VUE_APP_EMAILJS_APP_ID,
      templateID: process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
      emailSent: false,
      name: "",
      email: "",
      budget: "",
      project: "",
      message: "",
      budgetOptions: [
        { id: 0, label: "$500 - $1k", value: 500 },
        { id: 1, label: "$1k - $3k", value: 1000 },
        { id: 2, label: "$3k - $5k", value: 3000 },
        { id: 3, label: "$5k - $8k", value: 5000 },
        { id: 4, label: "$8k - $12k", value: 8000 },
        { id: 5, label: "$12k+", value: 12000 },
      ],
      projectOptions: [
        { id: 0, label: "General Inquiry", value: "GEN" },
        { id: 1, label: "Porfolio/Landing Page", value: "PLP" },
        { id: 2, label: "E-Commerce", value: "ECOMM" },
        { id: 3, label: "POS System", value: "POS" },
        { id: 4, label: "Real-Time Apps", value: "RTC" },
        { id: 5, label: "UX Consulting/Business Development", value: "BUS" },
        { id: 6, label: "Not sure yet", value: "MISC" },
      ],
    };
  }
};
</script>
