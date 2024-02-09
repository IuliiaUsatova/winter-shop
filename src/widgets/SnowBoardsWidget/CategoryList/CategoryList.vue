<script setup>
import CategoryProduct from "./CategoryProduct.vue";
import { ref } from "vue";

const categoryData = ref({
  title: "Категория товара",
  category: ["Cноуборды", "Крепления", "Обувь"],
});
</script>

<template>
  <CategoryProduct :items="categoryData" />
</template>

<style scoped>
.snow-board__category {
  position: absolute;
}
.snow-board__category-title {
  margin-bottom: 23px;
  font-family: Grtsk Peta;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.32px;
}
</style>
