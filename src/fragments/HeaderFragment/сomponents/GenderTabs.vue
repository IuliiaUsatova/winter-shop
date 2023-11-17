<script setup>
import { useGenderStore } from "@/stores/genderStore/genderStore";
const genderStore = useGenderStore();

const categories = ["Мужчинам", "Женщинам", "Детям"];
</script>

<template>
  <ul class="menu-list">
    <li
      class="menu-list__item"
      v-for="(category, index) in categories"
      :key="index"
    >
      <a
        class="menu-link"
        href="#"
        :class="{ active: genderStore.gender === category }"
        @click="genderStore.changeGender(category)"
        >{{ category }}</a
      >
    </li>
  </ul>
</template>

<style scoped>
.menu-list {
  display: flex;
  gap: 25px;
}
.menu-link {
  font-family: "GrtskPeta", sans-serif;
  font-weight: 500;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  padding-bottom: 5px;
  transition: all 0.2s;
}
.menu-link:hover {
  border-bottom: 2px solid #000;
}
.active {
  border-bottom: 2px solid #000;
}
</style>
