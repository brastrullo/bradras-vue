<template>
  <label :for="name" class="mb-6 relative focus-within:text-indigo-700 text-left flex flex-col justify-start appearance-none display-none text-xs">
    <span class="pl-2">{{ label }}</span>
  <div class="focus-within:border-indigo-700 flex items-center border-b border-gray-900 pt-0 pb-1">
    <select
      class="text-base appearance-none bg-transparent border-none w-full text-gray-700 mr-3 p-2 pb-0 leading-tight focus:outline-none"
      :name="name"
      :id="name"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option class="text-indigo-700" :key="Number(0)" value="">Select {{ label }}</option>
      <option
        v-for="option in options"
        :key="option.id + 1"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <span class="absolute right-2 text-base">+</span>
  </div>
  <p v-for="(error,index) of v.$errors" :key="index" class="flex justify-start text-sm text-red-400 ml-2">
    {{ error.$message }}
  </p>
  </label>
</template>

<script>
export default {
  name: "Select",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    v: {
      type: Object,
      required: true,
    }
  },
};
</script>
