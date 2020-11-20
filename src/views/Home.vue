<template>
  <main class="mb-auto">
    <Hero />
    <Benefits />
    <Contact />
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Benefits from '@/components/Benefits.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Benefits,
    Contact
  }
}
</script>
