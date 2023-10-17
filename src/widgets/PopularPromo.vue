<script setup>
import ButtonFragments from "@/components/ButtonFragments.vue";
import SliderNewArrival from "@/components/SliderNewArrival.vue";
import { ref } from "vue";

const products = ref([
  {
    image: "@/assets/image/arrival-1.png",
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
  {
    image: "@/assets/image/arrival-2.png",
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
  {
    image: "@/assets/image/arrival-3.png",
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    oldPrice: "34392 ₽",
    newPrice: "17392 ₽",
    sale: "-50%",
  },
  {
    image: "@/assets/image/arrival-4.png",
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    price: "34392 ₽",
  },
]);
</script>

<template>
  <section class="popular-collection">
    <div class="container-slider">
      <div class="popular-collection__block">
        <h2>DC Shoes популярное в коллекции</h2>
        <SliderNewArrival
          :products="products"
          class="popular-collection__block-slider"
        />
        <ButtonFragments class="btn-black">Показать больше</ButtonFragments>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.popular-collection {
  position: relative;
  height: 100%;
}
.container-slider {
  max-width: 1458px;
  padding: 0px 49px;
  margin: 0 auto;
  position: relative;
}
.popular-collection__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 0 100px;
}
.popular-collection__block h2 {
  font-size: 32px;
  font-weight: 700;
}
.popular-collection__block-slider {
  padding-top: 50px;
}
</style>
