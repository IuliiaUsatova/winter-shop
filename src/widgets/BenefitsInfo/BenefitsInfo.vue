<script setup>
import CardBenefit from "@/components/CardBenefit.vue";
import TheButton from "@/components/TheButton.vue";
import TheInput from "@/components/TheInput.vue";

const items = [
  {
    title: "Программа лояльности",
    description: "Зарабатывайте баллы и получайте преимущества",
    imageSrc: require("./image/loyalty-icon.svg"),
    backgroundImage: require("./image/loyalty-bg.png"),
    component: TheButton,
    attr: { isWhite: true },
  },
  {
    title: "Скидка -10%",
    description: "За подписку на наши новости",
    imageSrc: require("./image/mail-icon.svg"),
    backgroundImage: require("./image/discount-bg.png"),
    component: TheInput,
    attr: {},
  },
];
</script>

<template>
  <div class="container">
    <div class="benefits__block">
      <CardBenefit
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :description="item.description"
        :imageSrc="item.imageSrc"
        :backgroundImage="item.backgroundImage"
      >
        <component :attr="item.attr" :is="item.component"
          >Вступить в клуб</component
        >
      </CardBenefit>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.benefits__block {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 47px 0 60px;
}
</style>
