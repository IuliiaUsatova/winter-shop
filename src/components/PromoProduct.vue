<script setup>
const products = [
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
];
</script>

<template>
  <div
    v-for="(product, index) in products"
    :key="index"
    class="promotion__product"
  >
    <img :src="product.image" :alt="product.alt" />
    <div class="promotion__product-name">
      <p>{{ product.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.promotion__product img {
  max-width: 667px;
  width: 100%;
}
.promotion__product p {
  background-color: #000;
  text-align: center;
  padding: 22px 0 24px;
  color: #fff;
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
}
.promotion__product-name {
  position: relative;
  top: -3px;
}
</style>
