<template>
  <section class="flex flex-col container bg-gray-100 text-left p-8">
    <div class="p-2 text-4xl">
      <p>{{ heroTitle[0] }}</p>
      <p>{{ heroTitle[1] }}</p>
    </div>
    <p class="p-2 text-xl">
      {{ heroSubtitle }}
    </p>
    <button
      class="max-w-xs mt-5 p-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      {{ heroCTAText }}
    </button>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heroTitle: ["Dream Big.", "We Can Build It."],
      heroSubtitle: "Creative Digital Solutions for you and your customers.",
      heroCTAText: "Let's Collab",
    };
  },
};
</script>
