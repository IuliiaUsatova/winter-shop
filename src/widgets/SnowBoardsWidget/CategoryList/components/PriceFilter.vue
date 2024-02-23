<script setup>
import TheButton from "@/components/TheButton.vue";
import { defineEmits, ref, computed } from "vue";

const price = ref([1, 2]);
// const emit = defineEmits(["price"]);

// const toggleBrand = (option) => {
//   emit("price", option);
// };
const startPrice = computed({
  get() {
    return price.value[0];
  },
  set(newValue) {
    price.value[0] = Number(newValue);
  },
});
const finishPrice = computed({
  get() {
    return price.value[1];
  },
  set(newValue) {
    price.value[1] = Number(newValue);
  },
});
</script>
<template>
  <div class="snow-board__category">
    <h2 class="snow-board__category-title">Цена, ₽</h2>
    <div class="snow-board__price-wrapper">
      <input
        class="snow-board__category-input left-input"
        v-model="startPrice"
      />
      <p>-</p>
      <input
        class="snow-board__category-input right-input"
        v-model="finishPrice"
      />
      <TheButton class="btn-black snow-board__small-btn">OK</TheButton>
    </div>
    <div class="slider-demo-block">
      <el-slider v-model="price" range :max="100000" class="color" />
    </div>
  </div>
</template>
<style scoped>
.color ::v-deep .el-slider__bar {
  background-color: #eb5757;
}
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
.bar {
  background-color: #eb5757;
}
</style>
