<script setup>
import SliderMain from "../widgets/SliderMain/SliderMain.vue";
import LogoPromo from "../widgets/LogoPromo.vue";
import PromotionProduct from "../widgets/PromotionProduct.vue";
import HeaderComponent from "../fragments/HeaderComponent.vue";
import FooterComponent from "../fragments/FooterComponent.vue";
import BenefitsInfo from "../widgets/BenefitsInfo/BenefitsInfo.vue";
import ArrivalPromo from "../widgets/ArrivalPromo.vue";
import PopularPromo from "../widgets/PopularPromo.vue";
import ElRadio from "../components/ElRadio.vue";
import ElSlider from "../components/ElSlider.vue";
import ElPagination from "../components/ElPagination.vue";
import ElSelect from "../components/ElSelect.vue";
import ElBreadCrumb from "../components/ElBreadCrumb.vue";
import SliderMini from "../components/TheSliderMini.vue";
</script>

<template>
  <HeaderComponent />
  <SliderMini />
  <!-- <ElBreadCrumb /> -->
  <!-- <ElSelect />
  <ElPagination />
  <ElRadio />
  <ElSlider /> -->
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
