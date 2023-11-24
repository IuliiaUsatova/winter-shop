<script setup>
import TheButton from "./TheButton.vue";
const props = defineProps({
  stepper: Object,
});
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <ul class="stepper-block">
        <li class="stepper-block_name">{{ props.stepName }}</li>
      </ul>
      <ul class="stepper-block">
        <li class="stepper-block_number">{{ props.stepNumber }}</li>
        <li class="stepper-block_name">
          <span>{{ props.stepDescription }}</span>
          <TheButton class="btn-underline btn-step">{{
            props.buttonLabel
          }}</TheButton>
        </li>
        <li><img :src="props.imageSrc" alt="" /></li>
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
