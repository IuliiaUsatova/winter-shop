<script setup>
import ButtonFragments from "@/fragments/ButtonFragments.vue";
import SliderNewArrival from "./SliderNewArrival.vue";
</script>

<template>
  <div class="popular-colection__block">
    <h2>DC Shoes популярное в коллекции</h2>
    <SliderNewArrival class="popular-colection__block-slider" />
    <ButtonFragments class="btn-black">Показать больше</ButtonFragments>
  </div>
</template>

<style lang="css" scoped>
.popular-colection__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 0 100px;
}
.popular-colection__block h2 {
  font-size: 32px;
  font-weight: 700;
}
.popular-colection__block-slider {
  padding-top: 50px;
}
</style>
