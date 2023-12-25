<script setup>
import TheSelect from "./TheSelect.vue";
import { ref, defineEmits } from "vue";

const emit = defineEmits(["select"]);
const isActiveSelect = ref(false);
const selected = ref("");
const options = ["Вариант 1", "Вариант 2", "Вариант 3"];

const toggleSelection = () => {
  isActiveSelect.value = !isActiveSelect.value;
};
const optionSelect = (option) => {
  selected.value = option;
  isActiveSelect.value = false;
  emit("select", option);
};
</script>
<template>
  <div @click="toggleSelection" class="select">
    <div class="select-wrapper">Показать фильтры</div>
  </div>
  <div v-if="isActiveSelect">
    <TheSelect :options="options" @select="optionSelect" class="select-show" />
  </div>
</template>
<style scoped>
.select {
  display: inline-block;
  position: relative;
}
.select-show {
  position: absolute;
  top: 47px;
  left: 0px;
  max-width: 319px;
  width: 100%;
}
.select-wrapper {
  position: relative;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  padding: 15px 100px 15px 89px;
  background-color: #f9f9f9;
  border-radius: 4px;
}
.select-wrapper::before {
  content: "";
  position: absolute;
  top: 22px;
  left: 20px;
  width: 10px;
  height: 10px;
  border-color: transparent rgba(0, 0, 0, 1) rgba(0, 0, 0, 1) transparent;
  border-style: solid;
  border-width: 2px;
  transform: translate(-30%, -80%) rotate(45deg);
}
</style>
