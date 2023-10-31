<script setup>
import { ref } from "vue";
import TheSliderCollection from "../../components/TheSliderCollection.vue";

const sliderItems = ref([
  {
    image: require("@/widgets/SliderMain/image/collection-img-1.jpg"),
    text: "50%",
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-2.jpg"),
    text: "70%",
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-3.jpg"),
    text: "70%",
  },
]);
</script>

<template>
  <TheSliderCollection :items="sliderItems" />
</template>
