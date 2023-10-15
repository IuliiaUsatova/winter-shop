<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/css";
import { defineProps } from "vue";
const products = defineProps([
  {
    products: Array,
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
  <div class="new-arrival__block-slider swiper-arrival">
    <div class="swiper-wrapper">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="swiper-slide swiper-slide__arrival"
      >
        <img class="arrival-img" :src="product.image" alt="" />
        <div class="new-arrival__details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <span>{{ product.price }}</span>
        </div>
      </div>
      <div
        v-for="(product, index) in products"
        :key="index"
        class="swiper-slide swiper-slide__arrival"
      >
        <div class="arrival-product">
          <img class="arrival-img" :src="product.image" alt="" />
          <span class="arrival-sales">{{ product.sale }}</span>
        </div>
        <div class="new-arrival__details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="new-arrival__price">
            <span class="new-arrival__old-price">{{ product.oldPrice }}</span>
            <span class="new-arrival__new-price">{{ product.newPrice }}</span>
          </div>
        </div>
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
.arrival-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #f9f9f9;
  padding: 50px 0;
}
.swiper-arrival {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.swiper-slide__arrival {
  display: flex;
  flex-direction: column;
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
.arrival-product {
  position: relative;
}
.arrival-sales {
  background-color: #eb5757;
  color: #f2f2f2;
  padding: 10px;
  max-width: 55px;
  position: absolute;
  bottom: 0;
}
.new-arrival__details {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.new-arrival__details h2 {
  font-size: 16px;
  line-height: 1.6;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.new-arrival__details p {
  color: #828b8d;
  margin-bottom: 10px;
}
.new-arrival__details span {
  font-size: 18px;
  line-height: 1.7;
  text-transform: uppercase;
}
.new-arrival__price {
  display: flex;
  gap: 15px;
}
.new-arrival__old-price {
  text-decoration: line-through;
}
.new-arrival__new-price {
  color: #eb5757;
}
</style>
