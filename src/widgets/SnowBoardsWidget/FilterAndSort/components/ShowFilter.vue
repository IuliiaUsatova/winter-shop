<script setup>
// import TheRadio from "./TheRadio.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["filter"]);
const props = defineProps({
  isActiveSelect: Boolean,
});

const toggleSelection = () => {
  emit("filter");
};
</script>
<template>
  <div class="wrapper">
    <div @click="toggleSelection" class="select">
      <div class="select-wrapper">
        <img
          :class="{ rotated: props.isActiveSelect }"
          src="./image/vector.svg"
          alt="vector"
        />
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
}
.rotated {
  transform: rotate(180deg);
}
</style>
