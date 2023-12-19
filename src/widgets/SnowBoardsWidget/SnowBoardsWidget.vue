<script setup>
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import TheRadio from "@/components/TheRadio.vue";
import KitStepper from "./KitStepper/KitStepper.vue";

const categoryData = ref([
  {
    title: "Категории товаров",
    label: "Сноуборды",
    value: 3,
    peace: "10",
  },
  {
    title: "Размеры",
    label: "Крепления",
    value: 6,
    peace: "1",
  },
]);
const products = ref([
  {
    image: require("@/assets/image/arrival-1.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
  {
    image: require("@/assets/image/arrival-2.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
  {
    image: require("@/assets/image/arrival-3.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    oldPrice: "34392 ₽",
    newPrice: "17392 ₽",
    sale: "-50%",
  },
]);
</script>
<template>
  <div class="snow-board__wrapper">
    <div class="container">
      <h1 class="snow-board__title">Сноуборд<sup>358</sup></h1>
      <KitStepper />
      <div class="snow-board__section">
        <div class="snow-board__category">
          <TheRadio :items="categoryData" />
        </div>
        <div class="snow-board__card">
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :products="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.snow-board__wrapper {
  margin-top: 50px;
}
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.snow-board__title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.64px;
  margin-bottom: 25px;
}
.snow-board__title sup {
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 700;
  vertical-align: super;
  margin-left: 15px;
}
.snow-board__section {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.snow-board__category {
  margin-right: 43px;
}
.snow-board__category h2 {
  margin-bottom: 23px;
  font-family: Grtsk Peta;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6; /* 156.25% */
  letter-spacing: -0.32px;
}
.snow-board__card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: auto;
  gap: 25px;
}
</style>
