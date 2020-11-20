<template>
  <main class="mb-auto">
    <Hero />
    <Benefits />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Benefits
  }
}
</script>
