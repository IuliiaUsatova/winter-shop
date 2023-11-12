<template>
  <ul class="menu-list menu-middle__left">
    <li class="menu-item">
      <a class="menu-link" href="#">Мужчинам</a>
    </li>
    <li class="menu-item">
      <a class="menu-link" href="#">Женщинам</a>
    </li>
    <li class="menu-item">
      <a class="menu-link" href="#">Детям</a>
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
  transition: border-bottom 0.1s ease;
}
.menu-link:hover {
  border-bottom: 2px solid #000;
}
</style>
