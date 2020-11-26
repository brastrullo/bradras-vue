<template>
  <form
    @submit.prevent="submitForm"
    v-if="!emailSent"
    class="flex flex-col justify-center box-border mx-6 mt-4 mb-12"
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
  </form>
  <div v-else>
    <img src="" alt="" />
    <p>Thanks for reaching out! I'll get back to your shortly.</p>
  </div>
</template>

<script>
import Input from "@/components/form/Input.vue";
import Select from "@/components/form/Select.vue";
import TextArea from "@/components/form/TextArea.vue";
import {
  required,
  minLength,
  maxLength,
  email,
} from "@vuelidate/validators";
import emailjs, { init } from 'emailjs-com';

export default {
  name: "Contact",
  components: {
    Input,
    Select,
    TextArea
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
        message: this.message,
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
    submitForm() {
      if (this.isSubmitReady) {
        init("user_1xaXQ5O7JncGDW1UZxXLV");
        // const templateID = 'template_frsrbyr'
        const templateID = 'template_rsy7tuj'
        emailjs.send('default_service', templateID, this.inputObj);
        console.log("sent", this.inputObj);
        this.name = "";
        this.email = "";
        this.budget = "";
        this.project = "";
        this.message = "";
        this.emailSent = true;
      }
    },
  },
  data() {
    return {
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
