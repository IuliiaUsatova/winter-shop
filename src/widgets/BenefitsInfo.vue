<script setup>
import CardBenefit from "@/components/CardBenefit.vue";
import { ref } from "vue";

const items = ref([
  {
    title: "Программа лояльности",
    descr: "Зарабатывайте баллы и получайте преимущества",
    img: "loyalty-icon.svg",
    backgroundImage: "loyalty-bg.png",
  },
  {
    title: "Скидка -10%",
    descr: "За подписку на наши новости",
    img: "mail-icon.svg",
    backgroundImage: "discount-bg.png",
  },
]);
</script>

<template>
  <CardBenefit :items="items" />
</template>
