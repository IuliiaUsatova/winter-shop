<script setup>
const products = [
  {
    image: "image/promo-main-img.png",
    alt: "Промо продукт",
    title: "Название Акции",
    description:
      "Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории являет собою противоположность как раз этому.",
  },
];
</script>

<template>
  <section>
    <div class="container">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="promotion-product__main-product"
      >
        <img :src="product.image" :alt="product.alt" />
        <h3>{{ product.title }}</h3>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.promotion-product__main-product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.promotion-product__main-product img {
  max-width: 1360px;
  width: 100%;
  padding-bottom: 25px;
}
.promotion-product__main-product h3 {
  font-size: 21px;
  font-weight: 500;
  line-height: 1.7;
}
.promotion-product__main-product p {
  color: #828282;
  padding-top: 10px;
  text-align: center;
  max-width: 668px;
  line-height: 1.8;
}
.promotion-product__main-product span {
  font-size: 18px;
  line-height: 1.7;
  text-transform: uppercase;
}
</style>
