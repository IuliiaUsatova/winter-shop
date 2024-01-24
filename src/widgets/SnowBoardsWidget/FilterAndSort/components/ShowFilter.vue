<script setup>
import TheRadio from "./TheRadio.vue";
import { defineEmits } from "vue";

const props = defineProps({
  toggleFilter: Function,
});
const emit = defineEmits(["filter"]);

// const categoryData = ref([
//   {
//     title: "Категории товаров",
//     label: "Сноуборды",
//     value: 3,
//     peace: "10",
//   },
//   {
//     title: "Размеры",
//     label: "Крепления",
//     value: 6,
//     peace: "1",
//   },
// ]);

const toggleSelection = () => {
  props.toggleFilter();
  emit("filter", props.showFilter);
};
</script>
<template>
  <div class="wrapper">
    <div @click="toggleSelection" class="select">
      <div class="select-wrapper">
        <img src="./image/vector.svg" alt="vector" />
        <p>Показать фильтры</p>
      </div>
    </div>
    <!-- <div v-if="isActiveSelect"> -->
    <!-- <div class="snow-board__category">
        <TheRadio
          :items="categoryData"
          @select="optionSelect"
          :showFilter="showFilter"
        />
      </div> -->
    <!-- </div> -->
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
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
  margin-bottom: 50px;
}
.select-wrapper img {
  position: absolute;
  left: 20px;
  width: 10px;
  height: 10px;
  transform: rotate(180deg);
}
.select-wrapper img:hover {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}
.snow-board__category {
  position: absolute;
}
.snow-board__category h2 {
  margin-bottom: 23px;
  font-family: Grtsk Peta;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.32px;
}
</style>
