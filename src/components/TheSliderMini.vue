<script setup>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import "swiper/css";

const swiperInstance = ref(null);

const props = defineProps({
  items: Array,
});

onMounted(() => {
  swiperInstance.value = new Swiper(".swiper", {
    slidesPerView: 9,
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
    <div class="container-slider">
      <div class="collection-slider swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in props.items"
            :key="index"
            class="swiper-slide category-item"
          >
            <img class="collection-img" :src="item.image" alt="" />
          </div>
        </div>
      </div>
      <div class="collection-button swiper-button-prev">
        <img src="@/assets/image/arrow-left.svg" alt="" />
      </div>
      <div class="collection-button swiper-button-next">
        <img src="@/assets/image/arrow-right.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.collection-block {
  padding-top: 25px;
  height: 100%;
}
.container-slider {
  max-width: 1458px;
  padding: 0px 40px;
  margin: 0 auto;
  position: relative;
}
.swiper {
  height: 100%;
  width: 100%;
}
.category-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 123px;
  border-radius: 50%;
  background-color: #f9f9f9;
}
.collection-img {
  display: block;
  width: 77px;
  height: 77px;
  object-fit: cover;
}
/* .swiper-slide {
  width: 80%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 40%;
} */
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
</style>
