<script setup>
import LogoList from "../fragments/LogoList.vue";
import PromoProduct from "../components/PromoProduct.vue";
</script>

<template>
  <div class="promotion__block">
    <div class="promotion__logo-block">
      <ul class="promotion__logo-list">
        <LogoList />
      </ul>
    </div>
    <div class="promotion__promo-products">
      <PromoProduct />
    </div>
  </div>
</template>

<style lang="css" scoped>
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
</style>
