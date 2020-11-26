<template>
  <footer class="w-screen flex flex-col place-content-end pt-4 bg-gray-900 bg">
    <ul class="flex flex-col justify-start">
      <li class="my-1" v-for="link in navLinks" :key="link.id">
        <a class="focus:underline text-gray-300" :href="link.path">{{ link.text }}</a>
      </li>
    </ul>
    <div class="text-center">
      <Logo fill="#e2e8f0" :width="24" class="mx-auto mt-4" />
      <small>{{ copyright }}</small>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/icons/Logo.vue";

export default {
  name: "Footer",
  components: {
    Logo,
  },
  data() {
    return {
      mainLogo: require("../assets/logo.svg"),
      copyright: `© ${new Date().getFullYear()} Rastr Digital Solutions`,
      navLinks: [
        {
          id: 0,
          text: "Work",
          path: "/work",
        },
        {
          id: 1,
          text: "Blog",
          path: "/blog",
        },
        {
          id: 2,
          text: "About",
          path: "/about",
        },
        { id: 3, text: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>
