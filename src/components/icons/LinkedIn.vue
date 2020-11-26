<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width">
    <path d="M44 40h-9.7V26c0-3.7-1.5-6.3-4.9-6.3-2.5 0-4 1.7-4.6 3.4-.3.6-.2 1.4-.2 2.2V40h-9.7V12.8h9.7v4.3c.5-1.9 3.6-4.5 8.5-4.5 6.1 0 10.9 3.9 10.9 12.3V40zM5.2 9.4C2 9.4 0 7.4 0 4.7S2 0 5.2 0s5.1 2 5.2 4.7c0 2.6-2 4.7-5.2 4.7zm-4 3.4h8.5V40H1V12.8z" fill="#007EBB" fill-rule="evenodd"/>
  </svg>
</template>

<script>
export default {
  name: "Instagram",
  props: {
    width: {
      type: Number,
      default: 44
    }
  }
}
</script>