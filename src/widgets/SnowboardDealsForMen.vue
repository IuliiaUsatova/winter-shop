<script setup>
import PromoProduct from "@/components/PromoProduct.vue";
import { ref } from "vue";
import { ElBreadcrumb } from "element-plus";
import { useGenderStore } from "@/stores/genderStore/genderStore";
const genderStore = useGenderStore();

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
      <ElBreadcrumb class="breadcrumb" separator="/">
        <ElBreadcrumbItem :to="{ path: '/' }">Главная</ElBreadcrumbItem>
        <ElBreadcrumbItem>Сноуборд</ElBreadcrumbItem>
        <ElBreadcrumbItem
          ><router-link :to="{ path: '/' }">{{
            genderStore.gender
          }}</router-link></ElBreadcrumbItem
        >
      </ElBreadcrumb>
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
.el-breadcrumb {
  padding: 25px 0 0;
}
.snowboard-deals-male {
  padding: 44px 0 50px;
  display: flex;
  gap: 27px;
}
</style>
