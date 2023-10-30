<script setup>
import ButtonFragments from "@/components/TheButton.vue";
import SliderNewArrival from "@/components/SliderNewArrival.vue";
import { ref } from "vue";

const products = ref([
  {
    image: require("@/assets/image/arrival-1.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
  {
    image: require("@/assets/image/arrival-2.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
  {
    image: require("@/assets/image/arrival-3.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    oldPrice: "34392 ₽",
    newPrice: "17392 ₽",
    sale: "-50%",
  },
  {
    image: require("@/assets/image/arrival-4.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
]);
</script>

<template>
  <section class="new-arrival">
    <div class="container-slider">
      <div class="new-arrival__block">
        <h2>Новинки</h2>
        <SliderNewArrival :products="products" />
        <ButtonFragments class="btn-black">Показать больше</ButtonFragments>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container-slider {
  max-width: 1458px;
  padding: 0px 49px;
  margin: 0 auto;
  position: relative;
}
.new-arrival {
  position: relative;
  height: 100%;
}
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
