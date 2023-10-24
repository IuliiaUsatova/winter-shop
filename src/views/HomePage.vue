<script setup>
import SliderMain from "../widgets/SliderMain/SliderMain.vue";
import LogoPromo from "../widgets/LogoPromo.vue";
import PromotionProduct from "../widgets/PromotionProduct.vue";
import HeaderComponent from "../fragments/HeaderComponent.vue";
import FooterComponent from "../fragments/FooterComponent.vue";
import BenefitsInfo from "../widgets/BenefitsInfo/BenefitsInfo.vue";
import ArrivalPromo from "../widgets/ArrivalPromo.vue";
import PopularPromo from "../widgets/PopularPromo.vue";
</script>

<template>
  <HeaderComponent />
  <SliderMain />
  <LogoPromo />
  <ArrivalPromo />
  <PromotionProduct />
  <PopularPromo />
  <SliderMain />
  <BenefitsInfo />
  <FooterComponent />
</template>

<style scoped>
@font-face {
  font-family: "GrtskPeta", sans-serif;
  src: url(../assets/fonts/GrtskPeta-Bold.woff2);
}
</style>
