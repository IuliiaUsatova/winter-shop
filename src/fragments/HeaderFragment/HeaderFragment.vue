<script setup>
import GenderTabs from "@/fragments/HeaderFragment/Components/GenderTabs.vue";
</script>

<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <nav class="nav nav-top">
          <ul class="menu-list menu-top__left">
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">
                <img src="@/assets/image/location-logo.svg" alt="location" />
                <p class="region-link">Ваш регион доставки: Москва</p>
              </a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">Магазины</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">Помощь</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">Блоги</a>
            </li>
          </ul>
          <ul class="menu-list menu-top__right">
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">
                <img src="@/assets/image/delivery-logo.svg" alt="location" />
                <p>Бесплатная доставка *</p>
              </a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">
                <img src="@/assets/image/pay-logo.svg" alt="location" />
                <p>Оплата при получении</p>
              </a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__top" href="#">
                <img src="@/assets/image/refund-logo.svg" alt="location" />
                <p>Возврат в течение 14 дней</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header-middle">
      <div class="container">
        <nav class="nav nav-middle">
          <GenderTabs />
          <a class="menu-link" href="#"
            ><img src="@/assets/image/main-logo.svg" alt="main-logo"
          /></a>
          <ul class="menu-list menu-middle__right">
            <li class="menu-item">
              <a class="menu-link menu-link__middle" href="#">
                <img src="@/assets/image/login-logo.svg" alt="login-logo" />
                <p>войти</p>
              </a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__middle" href="#">
                <img src="@/assets/image/star-logo.svg" alt="star-logo" />
                <p>избранное</p>
              </a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__middle" href="#">
                <img src="@/assets/image/basket-logo.svg" alt="basket-logo" />
                <p>корзина</p>
              </a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__middle" href="#">
                <img src="@/assets/image/search-logo.svg" alt="search-logo" />
                <p>поиск</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <nav class="nav nav-bottom">
          <ul class="menu-list menu__bottom">
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Новинки</a>
            </li>
            <li class="menu-item">
              <router-link to="/snowboard" class="menu-link menu-link__bottom"
                >Сноуборд</router-link
              >
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Лыжи</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Скейт</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Лонгборд</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Вейкборд</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Серф</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Sup</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Одежда</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Обувь</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Аксессуары</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom" href="#">Бренды</a>
            </li>
            <li class="menu-item">
              <a class="menu-link menu-link__bottom menu-link__red" href="#"
                >Распродажа</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.header-top {
  background-color: #000;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-top {
  padding: 15px 0;
}
.menu-top__left,
.menu-top__right {
  gap: 30px;
}
.menu-link {
  font-family: "GrtskPeta", sans-serif;
  font-weight: 500;
}
.menu-link__top {
  font-size: 12px;
  line-height: 1.7;
  font-weight: 500;
  color: #f2f2f2;
  position: relative;
  display: flex;
  gap: 15px;
}
.region-link::after {
  content: "";
  position: absolute;
  top: 10px;
  right: -17px;
  width: 5px;
  height: 5px;
  border-color: transparent rgba(255, 255, 255, 1) rgba(255, 255, 255, 1)
    transparent;
  border-style: solid;
  border-width: 1px;
  transform: translate(-30%, -80%) rotate(45deg);
}
.nav-middle {
  padding: 22px 0;
}
.menu-list {
  display: flex;
  align-items: center;
}
.menu-middle__right {
  gap: 25px;
}
.menu-middle__right {
  align-items: flex-end;
}
.menu-link__middle,
.menu-link__bottom {
  font-size: 14px;
  line-height: 1.8;
  color: #000;
}
.menu-link__middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.menu-link__middle p {
  text-transform: uppercase;
  font-size: 8px;
  line-height: 1.2;
}
.menu-link__middle img {
  width: 24px;
}
.header-bottom {
  background-color: #f9f9f9;
}
.nav-bottom {
  padding: 17px 0 18px;
}
.menu__bottom {
  gap: 25px;
}
.menu-link__red {
  color: #eb5757;
}
</style>
