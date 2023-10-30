<script setup>
import { ref } from "vue";
import TheSliderMini from "../../components/TheSliderMini.vue";

const sliderItems = ref([
  {
    image: require("@/widgets/SliderMain/image/collection-img-1.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-2.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-3.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-1.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-2.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-3.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-1.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-2.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-3.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-1.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-2.jpg"),
  },
  {
    image: require("@/widgets/SliderMain/image/collection-img-3.jpg"),
  },
]);
</script>

<template>
  <TheSliderMini :items="sliderItems" />
</template>
