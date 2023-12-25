<script setup>
import NewFilter from "./components/NewFilter.vue";
import ShowFilter from "./components/ShowFilter.vue";
import { ref } from "vue";

const showFilter = ref("");
const newFilter = ref("");

// const options = ["Вариант 1", "Вариант 2", "Вариант 3"];
// const optionsTwo = ["Вариант 4", "Вариант 5", "Вариант 6"];

const optionSelectShow = (option) => {
  showFilter.value = option;
};
const optionSelectNew = (option) => {
  newFilter.value = option;
};
</script>
<template>
  <div class="wrapper">
    <ShowFilter @select="optionSelectShow" :value="showFilter" />
    <div class="short-new">
      <p class="title">Сортировать по:</p>
      <NewFilter @select="optionSelectNew" :value="newFilter" />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: relative;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
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
