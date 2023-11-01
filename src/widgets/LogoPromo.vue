<script setup>
import LogoList from "@/components/LogoList.vue";
import PromoProduct from "@/components/PromoProduct.vue";
import { ref } from "vue";

const logoItems = ref([
  {
    image: "logo-block-1.svg",
    alt: "Логотип 1",
  },
  {
    image: "logo-block-2.svg",
    alt: "Логотип 2",
  },
  {
    image: "logo-block-3.svg",
    alt: "Логотип 3",
  },
  {
    image: "logo-block-4.svg",
    alt: "Логотип 4",
  },
  {
    image: "logo-block-5.svg",
    alt: "Логотип 5",
  },
  {
    image: "logo-block-6.svg",
    alt: "Логотип 6",
  },
  {
    image: "logo-block-7.svg",
    alt: "Логотип 7",
  },
  {
    image: "logo-block-8.svg",
    alt: "Логотип 8",
  },
  {
    image: "logo-block-9.svg",
    alt: "Логотип 9",
  },
  {
    image: "logo-block-10.svg",
    alt: "Логотип 10",
  },
]);

const products = ref([
  {
    image: "promo-img-1.png",
    alt: "Промоакция-1",
    title: "НАЗВАНИЕ АКЦИИ №1",
  },
  {
    image: "promo-img-2.png",
    alt: "Промоакция-1",
    title: "НАЗВАНИЕ АКЦИИ №2",
  },
]);
</script>

<template>
  <section>
    <div class="container">
      <div class="promotion__block">
        <div class="promotion__logo-block">
          <LogoList :logoList="logoItems" />
        </div>
        <div class="promotion__promo-products">
          <PromoProduct :products="products" />
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
