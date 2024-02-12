<script setup>
import CategoryProduct from "./CategoryProduct.vue";
import { ref, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:model-value"]);
const categoryData = ref({
  title: "Категория товара",
  category: ["Cноуборды", "Крепления", "Обувь"],
});
const toggleCategory = (option) => {
  emit("update:model-value", option);
};
</script>

<template>
  <CategoryProduct
    :items="categoryData"
    @category="toggleCategory"
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
</style>
