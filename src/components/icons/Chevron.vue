<template>
  <svg class="fill-current text-indigo-600" :fill="fill" :width="width" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.42 6.1c.27-.26.7-.26.98 0s.27.71 0 .98l-7.91 7.83a.7.7 0 01-.98 0l-7.9-7.83a.68.68 0 010-.97.7.7 0 01.97 0L10 13.25l7.42-7.14z"/></svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "black"
    },
    width: {
      type: Number,
      default: 15
    }
  }
}
</script>