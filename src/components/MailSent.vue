<template>
  <div class="h-screen container m-auto flex flex-col justify-center items-center">
    <div class="rounded-full h-44 w-44 flex items-center justify-center bg-green-300">
      <MailSuccess fill="white" :width="120" />
    </div>
    <p class="m-4 text-lg">Thanks for reaching out! I'll get back to your shortly.</p>
    <p>Here is where else you can find me:</p>
    <ul class="flex flex-row">
      <li><a href=""><Instagram /></a></li>
      <li><a href=""><LinkedIn /></a></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import MailSuccess from "@/components/icons/MailSuccess.vue";
import Instagram from "@/components/icons/Instagram.vue";
import LinkedIn from "@/components/icons/LinkedIn.vue";

export default {
  name: "MailSent",
  components: {
    MailSuccess,
    Instagram,
    LinkedIn
  }
};
</script>
