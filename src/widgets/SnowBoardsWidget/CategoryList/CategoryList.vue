<script setup>
import CategoryProduct from "./CategoryProduct.vue";
import BrandSearchOptions from "./BrandSearchOptions.vue";

import { ref, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:model-value"]);
const categoryData = ref({
  title: "Категория товара",
  category: ["Cноуборды", "Крепления", "Обувь"],
});
const brandData = ref({
  title: "Бренд",
  brand: ["DC Shoes", "BoardRiders", "Quicksilver"],
});
const toggleCategory = (option) => {
  emit("update:model-value", option);
};
const toggleBrand = (option) => {
  emit("update:model-value", option);
};
</script>

<template>
  <CategoryProduct
    class="category-block"
    :items="categoryData"
    @category="toggleCategory"
    :radio="props.modelValue"
  />
  <BrandSearchOptions
    class="brand-block"
    :items="brandData"
    @brand="toggleBrand"
    :radio="props.modelValue"
  />
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

.category-block,
.brand-block {
  margin-bottom: 20px;
}
</style>
