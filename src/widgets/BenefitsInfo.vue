<script setup>
import ButtonFragment from "@/fragments/ButtonFragments.vue";
</script>

<template>
  <div class="container">
    <div class="benefits__block">
      <div class="benefits__block-loyalty">
        <img src="../image/loyalty-icon.svg" alt="" />
        <h2>Программа лояльности</h2>
        <p>Зарабатывайте баллы и получайте преимущества</p>
        <ButtonFragment class="btn-white">Вступить в клуб</ButtonFragment>
      </div>
      <div class="benefits__block-discounts">
        <img src="../image/mail-icon.svg" alt="" />
        <h2>Скидка -10%</h2>
        <p>За подписку на наши новости</p>

        <label for="custom-input" class="benefits__block-discounts-label">
          <input
            class="benefits__block-loyalty-input"
            type="text"
            id="custom-input"
            name="custom-input"
            placeholder="Email"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* benefits */

.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.benefits__block {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 47px 0 60px;
}
.benefits__block-loyalty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 789px;
  background-image: url(../image/loyalty-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.benefits__block-loyalty h2 {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
.benefits__block-loyalty p {
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
.benefits__block-discounts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 789px;
  background-image: url(../image/discount-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.benefits__block-discounts h2 {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
.benefits__block-discounts p {
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}

.benefits__block-discounts-label {
  position: relative;
  display: inline-block;
}
.benefits__block-discounts-label::before,
.benefits__block-discounts-label::after {
  content: "";
  position: absolute;
  top: 25%;
  height: 17px;
  width: 21px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.benefits__block-discounts-label::before {
  left: 3%;
  background-image: url("../image/mail-icon-black.svg");
}

.benefits__block-discounts-label::after {
  right: 3%;
  background-image: url("../image/next-icon.svg");
}

.benefits__block-loyalty-input {
  border: none;
  padding: 13px 214px 12px 47px;
}
</style>
