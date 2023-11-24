<script setup>
import TheButton from "@/components/TheButton.vue";
</script>
<template>
  <ul class="stepper-block">
    <li class="stepper-block_number">2</li>
    <li class="stepper-block_name">
      <span>Где планируете катать</span>
      <TheButton class="btn-underline btn-step">Укажите место</TheButton>
    </li>
    <li><img src="../image/mountain.svg" alt="" /></li>
  </ul>
  <ul class="stepper-block">
    <li class="stepper-block_number">3</li>
    <li class="stepper-block_name">
      <span>Ваш уровень катании</span>
      <TheButton class="btn-underline btn-step">Укажите ваш уровень</TheButton>
    </li>
    <li><img src="../image/level.svg" alt="" /></li>
  </ul>
</template>
<style scoped>
.stepper-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ced4d7;
  padding: 15px 30px;
  position: relative;
}
.stepper-block_number {
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.96px;
  margin-right: 18px;
}
.btn-step {
  margin-top: 5px;
  margin-right: 12px;
  font-size: 12px;
}
</style>
