<script setup>
const props = defineProps({
  products: Array,
});
</script>

<template>
  <div
    v-for="(product, index) in props.products"
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
