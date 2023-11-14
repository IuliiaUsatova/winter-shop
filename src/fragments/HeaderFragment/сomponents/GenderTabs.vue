<script setup>
import { useStore } from "@/stores/genderTabs/genderStore";
const store = useStore();
const changeGender = (newGender) => {
  store.gender = newGender;
};
</script>

<template>
  <ul class="menu-list menu-middle__left">
    <li class="menu-item">
      <a
        class="menu-link"
        href="#"
        :class="{ active: store.gender === 'Мужчинам' }"
        @click="changeGender('Мужчинам')"
        >Мужчинам</a
      >
    </li>
    <li class="menu-item">
      <a
        class="menu-link"
        href="#"
        :class="{ active: store.gender === 'Женщинам' }"
        @click="changeGender('Женщинам')"
        >Женщинам</a
      >
    </li>
    <li class="menu-item">
      <a
        class="menu-link"
        href="#"
        :class="{ active: store.gender === 'Детям' }"
        @click="changeGender('Детям')"
        >Детям</a
      >
    </li>
  </ul>
</template>

<style scoped>
.menu-list {
  display: flex;
  align-items: center;
}
.menu-middle__left {
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
