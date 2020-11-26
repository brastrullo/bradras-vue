<template>
  <label :for="name" class="mb-6 relative focus-within:text-indigo-700 text-left flex flex-col justify-start appearance-none display-none text-xs">
    <span class="pl-2">{{ label }}</span>
    <div class="focus-within:border-indigo-700 text-base flex items-center border-b border-gray-900 pt-0 pb-1">
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 p-2 pb-0 leading-tight focus:outline-none"
        :value="modelValue"
        @input="emitValue"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
      />
    </div>
    <p v-for="(error,index) of v.$errors" :key="index" class="flex justify-start text-sm text-red-400 ml-2">
      {{ error.$message }}
    </p>
  </label>
</template>


<style scoped>
  input:-webkit-autofill {
      background-color: transparent !important;
      box-shadow: 0 0 0 50px white inset;
      -webkit-box-shadow: 0 0 0 50px white inset;
  }
</style>

<script>
export default {
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [Number, String],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    v: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      if (this.name === "phone") return "tel";
      if (this.name === "email") return "email";
      else return "text";
    },
  },
  methods: {
    emitValue(e) {
      let value = e.target.value;
      value = value.trim();
      this.$emit("update:modelValue", value);
      this.v.$touch()
    },
  },
};
</script>
