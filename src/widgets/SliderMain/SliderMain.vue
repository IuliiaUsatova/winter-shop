<script setup>
import { ref } from "vue";
import SliderCollection from "../../components/SliderCollection.vue";

const sliderItems = ref([
  {
    image: "image/collection-img-1.jpg",
    text: "50%",
  },
  {
    image: "image/collection-img-2.jpg",
    text: "70%",
  },
]);
</script>

<template>
  <SliderCollection :items="sliderItems" />
</template>
