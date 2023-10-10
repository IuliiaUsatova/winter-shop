<script setup>
import SliderCollection from "../widgets/SliderCollection.vue";
import LogoPromo from "../widgets/LogoPromo.vue";
import PromotionProduct from "../widgets/PromotionProduct.vue";
import HeaderMain from "../fragments/HeaderMain.vue";
import FooterMain from "../fragments/FooterMain.vue";
import BenefitsInfo from "../widgets/BenefitsInfo.vue";
import ArrivalPromo from "../widgets/ArrivalPromo.vue";
import PopularPromo from "../widgets/PopularPromo.vue";
</script>

<template>
  <HeaderMain />
  <main class="main">
    <section class="collection-block">
      <SliderCollection />
    </section>

    <section class="promotion">
      <div class="container">
        <LogoPromo />
      </div>
    </section>

    <section class="new-arrival">
      <div class="container-slider">
        <ArrivalPromo />
      </div>
    </section>

    <section class="promotion-product">
      <div class="container">
        <PromotionProduct />
      </div>
    </section>

    <section class="popular-collection">
      <div class="container-slider">
        <PopularPromo />
      </div>
    </section>

    <section class="blog-slider">
      <SliderCollection />
    </section>

    <BenefitsInfo />

    <FooterMain />
  </main>
</template>

<style scoped>
@font-face {
  font-family: "GrtskPeta", sans-serif;
  src: url(../assets/fonts/GrtskPeta-Bold.woff2);
}

.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}

.collection-block {
  padding-top: 25px;
  position: relative;
  height: 100%;
}

.promotion__block {
  padding: 55px 0 100px;
}
.promotion__logo-block {
  padding: 0 32px 55px;
}
.promotion__logo-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.promotion__promo-products {
  position: relative;
  display: flex;
  gap: 26px;
}

.new-arrival {
  position: relative;
  height: 100%;
}
.container-slider {
  max-width: 1458px;
  padding: 0px 49px;
  margin: 0 auto;
  position: relative;
}

.popular-collection {
  position: relative;
  height: 100%;
}
</style>
