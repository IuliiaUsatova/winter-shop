<script setup>
import { ref } from "vue";
import SliderCollection from "../../components/SliderCollection.vue";

const sliderItems = ref([
  {
    image: "./widgets/SliderMain/image/collection-img-1.jpg",
    text: "50%",
  },
  {
    image: "./widgets/SliderMain/image/collection-img-2.jpg",
    text: "70%",
  },
  {
    image: "./widgets/SliderMain/image/collection-img-3.jpg",
    text: "70%",
  },
]);
</script>

<template>
  <SliderCollection :items="sliderItems" />
</template>
