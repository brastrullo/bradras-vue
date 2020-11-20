<template>
  <form
    @submit.prevent="submitForm"
    class="flex flex-col justify-center box-border mx-6 mt-4 mb-12"
  >
    <legend class="m-4">Contact</legend>
    <Input name="name" label="Name" v-model="inputObj.name" :error="$v.name.$errors" />
    <Input name="phone" label="Phone" v-model="inputObj.phone" :error="$v.phone.$errors" />
    <Input name="email" label="Email" v-model="inputObj.email" :error="$v.email.$errors" />
    <button :disabled="!isSubmitReady" class="rounded text-white disabled:pointer-events-none disabled:opacity-25 focus:shadow-outline focus:outline-none bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-900">Submit</button>
  </form>
</template>

<script>
import Input from "@/components/form/Input.vue";
import { required, minLength, email } from '@vuelidate/validators';

export default {
  name: "Contact",
  components: {
    Input,
  },
  computed: {
    isSubmitReady() {
      const noEntriesEmpty = Object.keys(this.inputObj).every(
        (key) => this.inputObj[key].length > 0
      );
      return noEntriesEmpty;
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    phone: {
      required,
      minLength: minLength(10)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    submitForm() {
      const { name, phone, email } = this.inputObj;
      const nameIsValid = /^[a-zA-Z-`]+$/.test(name);
      const phoneIsValid = /^(\+)?([ 0-9]){10,16}$/.test(phone);
      const emailIsValid = /(.+)@(.+){2,}\.(.+){2,}/.test(email);

      const formIsValid =
        nameIsValid &&
        phoneIsValid &&
        emailIsValid;

      if (formIsValid) {
        alert("sent: ", this.inputObj);
      } else {
        alert(JSON.stringify(this.inputObj))
        alert(JSON.stringify(this.errorObj))
        if (!nameIsValid) {
          console.log(name)
          this.errorObj.name = 'Please enter a valid name. \n';
        }
        if (!phoneIsValid) {
          console.log(phone)
          this.errorObj.phone = 'Please enter a valid phone number. \n';
        }
        if (!emailIsValid) {
          console.log(email)
          this.errorObj.email = 'Please enter a valid email. \n';
        }
      }
    },
  },
  data() {
    return {
      errorObj: {
        name: "",
        phone: "",
        email: "",
      },
      inputObj: {
        name: "",
        phone: "",
        email: "",
      }
    };
  },
};
</script>
