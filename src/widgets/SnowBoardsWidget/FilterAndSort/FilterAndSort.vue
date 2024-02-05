<script setup>
import NewFilter from "./components/NewFilter.vue";
import ShowFilter from "./components/ShowFilter.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["toggleFilter", "toggleImage"]);
const props = defineProps({
  isActiveSelect: Boolean,
  modelValue: String,
});

const optionShowFilter = () => {
  emit("toggleFilter");
};

const optionNewFilter = (option) => {
  emit("update:model-value", option);
};
</script>
<template>
  <div class="wrapper">
    <ShowFilter
      @filter="optionShowFilter"
      :isActiveSelect="props.isActiveSelect"
    />
    <div class="short-new">
      <p class="title">Сортировать по:</p>
      <NewFilter @select="optionNewFilter" :selected="props.modelValue" />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: relative;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.title {
  color: #828b8d;
  font-size: 14px;
  margin-right: 15px;
}
.short-new {
  display: flex;
  align-items: center;
}
</style>
