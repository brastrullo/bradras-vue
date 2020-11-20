<template>
<div class="mb-6 relative">

  <label :for="name" class="flex justify-start appearance-none display-none text-xs pl-2">{{ label }}</label>
  <div class="flex items-center border-b border-gray-900 pt-0 pb-1">
    <input
      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none"
      :value="modelValue"
      @input="emitValue"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="label"
    />
  </div>
  <span v-for="(error,index) of errors"  :key="index" class="absolute flex justify-start text-sm text-red-400 ml-2">
    <strong>{{ error.$validator }}</strong>
    <small> on property</small>
    <strong>{{ error.$property }}</strong>
    <small> says:</small>
    <strong>{{ error.$message }}</strong>
  </span>
</div>
</template>

<script>
export default {
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    modelValue: [Number, String],
    name: String,
    label: String,
    errors: Array
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
    },
  },
};
</script>
