<template>
  <header class="flex flex-row justify-between items-center px-2">
    <router-link class="px-1" to="/">
      <img class="m-2 h-6 w-6" :src="mainLogo" alt="Rastr Logo"/>
    </router-link>
    <nav class="flex p-0 m-0 justify-between">
      <router-link class="px-1" to="/">Home</router-link>
      <router-link class="px-1" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mainLogo: require("../assets/logo.svg"),
    };
  },
};
</script>