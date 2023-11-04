<script setup>
import { ref } from "vue";
import TheSliderMini from "@/components/TheSliderMini.vue";

const sliderItems = ref([
  {
    image: require("@/widgets/SliderMini/image/image-1.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-2.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-3.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-4.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-5.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-6.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-7.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-8.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-9.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-1.png"),
  },
  {
    image: require("@/widgets/SliderMini/image/image-2.png"),
  },
]);
</script>
<template>
  <TheSliderMini :items="sliderItems" />
</template>
