<script setup>
const props = defineProps({
  products: Object,
});
</script>

<template>
  <div class="card__wrapper">
    <div class="card-product">
      <img class="card-img" :src="props.products.image" alt="" />
      <span v-if="props.products.sale" class="card-sales">{{
        props.products.sale
      }}</span>
    </div>
    <div class="card__details">
      <h2>{{ props.products.title }}</h2>
      <p>{{ props.products.description }}</p>
      <span v-if="props.products.price">{{ props.products.price }}</span>
      <div v-if="props.products.sale" class="card__price">
        <span class="card__old-price">{{ props.products.oldPrice }}</span>
        <span class="card__new-price">{{ props.products.newPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card__wrapper {
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.card-product {
  position: relative;
}
.card-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #f9f9f9;
  padding: 50px 0;
}
.card-sales {
  background-color: #eb5757;
  color: #f2f2f2;
  padding: 10px;
  max-width: 55px;
  position: absolute;
  bottom: 0;
}
.card__details {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.card__details h2 {
  font-size: 16px;
  line-height: 1.6;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.card__details p {
  color: #828b8d;
  margin-bottom: 10px;
}
.card__details span {
  font-size: 18px;
  line-height: 1.7;
  text-transform: uppercase;
}
.card__price {
  display: flex;
  gap: 15px;
}
.card__old-price {
  text-decoration: line-through;
}
.card__new-price {
  color: #eb5757;
}
</style>
