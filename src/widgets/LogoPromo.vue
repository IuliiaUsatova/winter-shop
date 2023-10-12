<script setup>
import LogoList from "../components/LogoList.vue";
import PromoProduct from "../components/PromoProduct.vue";
</script>

<template>
  <section>
    <div class="container">
      <div class="promotion__block">
        <div class="promotion__logo-block">
          <LogoList />
        </div>
        <div class="promotion__promo-products">
          <PromoProduct />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.promotion__block {
  padding: 55px 0 100px;
}
.promotion__logo-block {
  padding: 0 32px 55px;
}
.promotion__promo-products {
  position: relative;
  display: flex;
  gap: 26px;
}
</style>
