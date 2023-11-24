<script setup>
import TheButton from "./TheButton.vue";
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <ul class="stepper-block">
        <li class="stepper-block_name">Подбери борд</li>
      </ul>
      <ul class="stepper-block">
        <li class="stepper-block_number">1</li>
        <li class="stepper-block_name">
          <span>Укажите свой рост и вес</span>
          <TheButton class="btn-underline btn-step">Рост: 190 см</TheButton>
          <TheButton class="btn-underline btn-step">Вес: 300кг</TheButton>
        </li>
        <li><img src="dimensions.svg" alt="" /></li>
      </ul>
      <ul class="stepper-block">
        <li class="stepper-block_number">2</li>
        <li class="stepper-block_name">
          <span>Где планируете катать</span>
          <TheButton class="btn-underline btn-step">Укажите место</TheButton>
        </li>
        <li><img src="mountain.svg" alt="" /></li>
      </ul>
      <ul class="stepper-block">
        <li class="stepper-block_number">3</li>
        <li class="stepper-block_name">
          <span>Ваш уровень катании</span>
          <TheButton class="btn-underline btn-step"
            >Укажите ваш уровень</TheButton
          >
        </li>
        <li><img src="level.svg" alt="" /></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.stepper-blocks {
  display: flex;
  align-items: stretch;
}
.btn-step {
  margin-top: 5px;
  margin-right: 12px;
  font-size: 12px;
}
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
</style>
