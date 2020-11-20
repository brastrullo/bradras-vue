<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="flex flex-row container justify-between items-center px-2">
      <router-link class="px-1" to="/">
        <img class="m-2 h-6 w-6" :src="mainLogo" alt="Rastr Logo"
      /></router-link>

      <nav class="flex p-0 m-0 justify-between">
        <router-link class="px-1" to="/">Home</router-link>
        <router-link class="px-1" to="/about">About</router-link>
      </nav>
    </header>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      mainLogo: require("./assets/logo.svg"),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
