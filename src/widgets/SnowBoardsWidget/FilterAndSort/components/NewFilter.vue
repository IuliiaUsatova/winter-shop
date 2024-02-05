<script setup>
import TheSelect from "./TheSelect.vue";
import { ref, defineEmits } from "vue";

const props = defineProps({
  selected: String,
  default: {
    newFilter: "",
  },
});

const emit = defineEmits(["select"]);
const isActiveSelect = ref(false);

const options = ["Вариант 3", "Вариант 4", "Вариант 5"];

const toggleSelection = () => {
  isActiveSelect.value = !isActiveSelect.value;
};
const optionSelect = (option) => {
  isActiveSelect.value = false;
  emit("select", option);
};
</script>
<template>
  <div class="select" @click="toggleSelection">
    <div class="select-wrapper">{{ props.selected || "Новинки" }}</div>
  </div>
  <div v-if="isActiveSelect">
    <TheSelect
      :options="options"
      @select="optionSelect"
      :selected="props.selected"
      class="select-new"
    />
  </div>
</template>
<style scoped>
.select {
  display: inline-block;
  position: relative;
}
.select-new {
  position: absolute;
  top: 73px;
  right: 0;
  max-width: 315px;
  width: 100%;
}
.select-wrapper {
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  padding: 15px 240px 15px 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}
.select-wrapper::after {
  content: "";
  position: absolute;
  top: 22px;
  right: 20px;
  width: 10px;
  height: 10px;
  border-color: transparent rgba(0, 0, 0, 1) rgba(0, 0, 0, 1) transparent;
  border-style: solid;
  border-width: 2px;
  transform: translate(-30%, -80%) rotate(45deg);
}
</style>
