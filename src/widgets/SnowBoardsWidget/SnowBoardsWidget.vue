<script setup>
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import KitStepper from "./KitStepper/KitStepper.vue";
import FilterAndSort from "./FilterAndSort/FilterAndSort.vue";

const stateAll = ref({
  place: "",
  level: "",
  selectedAll: { height: "", weight: "" },
});
const isActiveSelect = ref(false);
const toggleFilter = () => {
  isActiveSelect.value = !isActiveSelect.value;
};
// const filterAll = ref({
//   showFilter: "",
//   newFilter: "",
// });

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
      <KitStepper v-model="stateAll" />
      <FilterAndSort @toggleFilter="toggleFilter" />
      <div class="snow-board__section">
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
.snow-board__card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: auto;
  gap: 25px;
  margin-left: 320px;
}
</style>
