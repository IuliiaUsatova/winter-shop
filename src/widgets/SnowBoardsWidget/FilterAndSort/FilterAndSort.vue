<script setup>
import NewFilter from "./components/NewFilter.vue";
import ShowFilter from "./components/ShowFilter.vue";
import { ref } from "vue";

const showFilter = ref("");
const newFilter = ref("");

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
      <NewFilter @select="optionSelectNew" :newFilter="newFilter" />
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
