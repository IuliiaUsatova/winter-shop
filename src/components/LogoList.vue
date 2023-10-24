<script setup>
const props = defineProps({
  logoList: Array,
});
</script>

<template>
  <ul class="promotion__logo-list">
    <li v-for="(logo, index) in props.logoList" :key="index">
      <a href="#"> <img :src="logo.image" :alt="logo.alt" /></a>
    </li>
  </ul>
</template>

<style scoped>
.promotion__logo-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
