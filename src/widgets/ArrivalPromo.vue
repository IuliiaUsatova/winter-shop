<script setup>
import ButtonFragments from "@/fragments/ButtonFragments.vue";
import SliderNewArrival from "./SliderNewArrival.vue";
</script>

<template>
  <div class="new-arrival__block">
    <h2>Новинки</h2>
    <SliderNewArrival />
    <ButtonFragments class="btn-black">Показать больше</ButtonFragments>
  </div>
</template>

<style lang="css" scoped>
.new-arrival__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
}
.new-arrival__block h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
}
</style>
