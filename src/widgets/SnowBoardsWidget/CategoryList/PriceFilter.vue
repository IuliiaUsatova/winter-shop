<script setup>
import TheButton from "@/components/TheButton.vue";
import { defineEmits, ref } from "vue";

const value = ref([1, 2]);
const emit = defineEmits(["price"]);

const toggleBrand = (option) => {
  emit("price", option);
};
</script>
<template>
  <div class="snow-board__category">
    <h2 class="snow-board__category-title">Цена, ₽</h2>
    <div class="snow-board__price-wrapper">
      <input class="snow-board__category-input left-input" />
      <p>-</p>
      <input class="snow-board__category-input right-input" />
      <TheButton class="btn-black snow-board__small-btn">OK</TheButton>
    </div>
    <div class="slider-demo-block">
      <el-slider v-model="value" range show-stops :max="2" />
    </div>
  </div>
</template>
<style scoped>
.snow-board__category-title {
  margin-bottom: 23px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.32px;
}
.left-input {
  margin-right: 15px;
}
.right-input {
  margin-left: 15px;
  margin-right: 15px;
}
.snow-board__category-input {
  border: 1px solid #ced4d7;
  width: 109px;
  height: 35px;
}
.snow-board__small-btn {
  padding: 2px 19px;
  max-width: 74px;
  margin-top: 0;
}
.snow-board__price-wrapper {
  display: flex;
  align-items: center;
}
.snow-board__price-wrapper p {
  color: #ced4d7;
}
.slider-demo-block {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.el-slider__bar {
  background-color: #eb5757;
}
</style>
