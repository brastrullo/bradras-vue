<template>
  <label :for="name" class="mb-4 relative focus-within:text-indigo-700 text-left flex flex-col justify-start appearance-none display-none text-xs">
    <span class="pl-2">{{ label }}</span>
  <div class="focus-within:border-indigo-700 text-base flex items-center border-b border-gray-900 pt-0 pb-1">
    <textarea
      class="text-base w-full pl-2 pb-1"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :id="name"
      :placeholder="`Please enter ${label.toLowerCase()} here...`"
    />
  </div>
  <span class="flex justify-end text-xs text-gray-500">{{modelValue.trim().length}}</span>
  <p v-for="(error,index) of v.$errors" :key="index" class="flex justify-start text-sm text-red-400 ml-2 -m-4">
    {{ error.$message }}
  </p>
  </label>
</template>

<script>
export default {
  name: "TextArea",
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
    v: {
      type: Object,
      required: true,
    }
  },
};
</script>
