<script setup>
import PromoProduct from "@/components/PromoProduct.vue";
import { ref, computed } from "vue";
import { useGenderStore } from "@/stores/genderStore/genderStore";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";

const genderStore = useGenderStore();
const breadCrumb = computed(() => {
  return [
    {
      to: "/",
      name: "Главная",
    },
    {
      to: "/",
      name: genderStore.gender,
    },
    {
      to: "/",
      name: "Cноуборд",
    },
  ].filter(({ name }) => name !== "");
});
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
      <TheBreadCrumbs :items="breadCrumb" />
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
