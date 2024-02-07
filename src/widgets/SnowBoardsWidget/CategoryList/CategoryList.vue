<script setup>
import TheRadio from "./TheRadio.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["category"]);
const props = defineProps({
  items: Array,
  modelValue: String,
});

const toggleCategory = (option) => {
  emit("update:model-value", option);
};
</script>

<template>
  <div class="snow-board__category">
    <TheRadio :items="props.items" @click="toggleCategory" />
  </div>
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
