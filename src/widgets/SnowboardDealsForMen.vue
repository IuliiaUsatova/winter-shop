<script setup>
import PromoProduct from "@/components/PromoProduct.vue";
import { ref } from "vue";
import { ElBreadcrumb } from "element-plus";

const products = ref([
  {
    image: require("@/assets/image/promo-1.jpg"),
    alt: "Промоакция-1",
    title: "НАЗВАНИЕ АКЦИИ №1",
  },
  {
    image: require("@/assets/image/promo-2.jpg"),
    alt: "Промоакция-2",
    title: "НАЗВАНИЕ АКЦИИ №2",
  },
  {
    image: require("@/assets/image/promo-3.jpg"),
    alt: "Промоакция-3",
    title: "НАЗВАНИЕ АКЦИИ №3",
  },
]);
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">Мужчинам</a></el-breadcrumb-item>
        <el-breadcrumb-item>Сноуборд</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="snowboard-deals-male">
        <PromoProduct :products="products" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: black;
}
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.snowboard-deals-male {
  padding: 83px 0 50px;
  display: flex;
  gap: 27px;
}
</style>
