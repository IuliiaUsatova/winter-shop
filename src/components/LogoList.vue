<script setup>
const logoList = [
  {
    image: "logo-block-1.svg",
    alt: "Логотип 1",
  },
  {
    image: "logo-block-2.svg",
    alt: "Логотип 2",
  },
  {
    image: "logo-block-3.svg",
    alt: "Логотип 3",
  },
  {
    image: "logo-block-4.svg",
    alt: "Логотип 4",
  },
  {
    image: "logo-block-5.svg",
    alt: "Логотип 5",
  },
  {
    image: "logo-block-6.svg",
    alt: "Логотип 6",
  },
  {
    image: "logo-block-7.svg",
    alt: "Логотип 7",
  },
  {
    image: "logo-block-8.svg",
    alt: "Логотип 8",
  },
  {
    image: "logo-block-9.svg",
    alt: "Логотип 9",
  },
  {
    image: "logo-block-10.svg",
    alt: "Логотип 10",
  },
];
</script>
<template>
  <ul class="promotion__logo-list">
    <li v-for="(logo, index) in logoList" :key="index">
      <a href="#"> <img :src="logo.image" :alt="logo.alt" /></a>
    </li>
  </ul>
</template>

<style scoped>
.promotion__logo-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
