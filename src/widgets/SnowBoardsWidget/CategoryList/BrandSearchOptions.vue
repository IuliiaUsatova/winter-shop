<script setup>
import TheInput from "./TheInput.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["brand"]);
const props = defineProps({
  items: Object,
  radio: String,
});
const toggleBrand = (option) => {
  emit("brand", option);
};
</script>
<template>
  <div class="snow-board__category">
    <h2 class="snow-board__category-title">{{ props.items.title }}</h2>
    <TheInput class="snow-board__category-input" />
    <div v-for="(brand, index) in props.items.brand" :key="index">
      <div>
        <el-radio-group
          class="ml-4"
          @change="toggleBrand"
          :model-value="props.radio"
        >
          <el-radio :label="brand">{{ brand }}</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<style scoped>
.snow-board__category {
  position: absolute;
}
.snow-board__category-title {
  margin-bottom: 23px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.32px;
}
.snow-board__category-input {
  margin-bottom: 20px;
}
</style>
