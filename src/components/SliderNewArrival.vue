<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/css";
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
      <div class="swiper-slide flex-container">
        <slot />
        <!-- <div class="swiper-slide swiper-slide__arrival">
          <div class="arrival-product">
            <img class="arrival-img" :src="product.image" alt="" />
            <span v-if="product.sale" class="arrival-sales">{{
              product.sale
            }}</span>
          </div>
          <div class="new-arrival__details">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <span v-if="product.price">{{ product.price }}</span>
            <div v-if="product.sale" class="new-arrival__price">
              <span class="new-arrival__old-price">{{ product.oldPrice }}</span>
              <span class="new-arrival__new-price">{{ product.newPrice }}</span>
            </div>
          </div>
        </div> -->
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
.flex-container {
  display: flex;
}
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
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.arrival-button {
  z-index: 1;
  position: absolute;
  cursor: pointer;
  top: 40%;
}
</style>
