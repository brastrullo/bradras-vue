<template>
  <label :for="name" class="mb-6 relative text-transparent focus-within:text-indigo-600 text-left flex flex-col justify-start appearance-none display-none text-xs">
    <span class="pl-2">{{ label }}</span>
    <div class="focus-within:border-indigo-600 text-base flex items-center border-b border-gray-900 pt-0 pb-1">
      <input
        class="focus:text-indigo-500 overflow-ellipsis overflow-hidden appearance-none bg-transparent border-none w-full text-gray-700 mr-3 p-2 pb-0 leading-tight focus:outline-none"
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
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: rgba(79, 70, 229, 1);
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
