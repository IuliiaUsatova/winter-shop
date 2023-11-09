<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/css";
import ProductCard from "@/components/ProductCard.vue";
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
  {
    image: require("@/assets/image/arrival-3.png"),
    title: "LIB TECH",
    description: "Мужской Сноуборд",
    oldPrice: "34392 ₽",
    newPrice: "17392 ₽",
    sale: "-50%",
  },
]);

const swiperInstanceArrival = ref(null);
onMounted(() => {
  swiperInstanceArrival.value = new Swiper(".swiper-arrival", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>
<template>
  <div class="swiper-arrival">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductCard :products="product" />
      </div>
    </div>
    <div class="arrival-button swiper-button-prev">
      <img src="@/assets/image/arrow-left.svg" alt="" />
    </div>
    <div class="arrival-button swiper-button-next">
      <img src="@/assets/image/arrow-right.svg" alt="" />
    </div>
  </div>
</template>
<style scoped>
.swiper-arrival {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.swiper-slide {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
}
.arrival-button {
  z-index: 1;
  position: absolute;
  cursor: pointer;
  top: 40%;
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
</style>
