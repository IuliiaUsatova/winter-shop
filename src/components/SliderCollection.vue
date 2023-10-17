<script setup>
import { ref, onMounted, defineProps } from "vue";
import Swiper from "swiper";
import "swiper/css";

const swiperInstance = ref(null);

const props = defineProps({
  items: Array,
});

onMounted(() => {
  swiperInstance.value = new Swiper(".swiper", {
    slidesPerView: 1,
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
  <section class="collection-block">
    <div class="collection-slider swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in props.items"
          :key="index"
          class="swiper-slide collection-item"
        >
          <img class="collection-img" :src="item.image" alt="" />
          <div class="collection-item__sales">
            <p>WINTER SALE ДО {{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="collection-button swiper-button-prev">
        <img src="@/assets/image/arrow-left-big.svg" alt="" />
      </div>
      <div class="collection-button swiper-button-next">
        <img src="@/assets/image/arrow-right-big.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.collection-block {
  padding-top: 25px;
  position: relative;
  height: 100%;
}
.swiper {
  height: 100%;
  width: 100%;
}
.collection-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.collection-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.collection-button {
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
.collection-item__sales {
  position: absolute;
  left: 0;
  background-color: black;
  bottom: 15%;
  padding: 15px 38px;
}
.collection-item__sales p {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
}
</style>
