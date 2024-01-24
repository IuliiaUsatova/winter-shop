<script setup>
// import NewFilter from "./components/NewFilter.vue";
import ShowFilter from "./components/ShowFilter.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  // modelValue: Object,
  toggleFilter: Function,
});

const optionShowFilter = (option) => {
  console.log(option);
  emit("update:model-value", {
    showFilter: option,
    // newFilter: props.modelValue.newFilter,
  });
};
// const optionNewFilter = (option) => {
//   emit("update:model-value", {
//     showFilter: props.modelValue.showFilterFilter,
//     newFilter: option,
//   });
// };
</script>
<template>
  <div class="wrapper">
    <ShowFilter :toggleFilter="props.toggleFilter" @filter="optionShowFilter" />
    <!-- <div class="short-new">
      <p class="title">Сортировать по:</p>
      <NewFilter
        @select="optionNewFilter"
        :newFilter="props.modelValue.newFilter"
      />
    </div> -->
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
