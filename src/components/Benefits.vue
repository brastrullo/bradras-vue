<template>
  <section class="m-8">
    <article class="my-48" v-for="benefit in benefits" :key="benefit.id">
      <p>{{ benefit.text }}</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "Benefits",
  data() {
    return {
      benefits: [
        {
          id: 0,
          text:
            "Leading UX. Truly cater to client necessities and stay relevant.",
        },
        {
          id: 1,
          text:
            "Custom Pixel Perfect Designs, distinguished from the competition.",
        },
        {
          id: 2,
          text: "Modern & Scalable. Future Proof Your Business.",
        },
      ],
    };
  },
};
</script>
