<script setup>
import TheButton from "@/components/TheButton.vue";
const props = defineProps({ stepper: Object });
</script>
<template>
  <ul class="stepper-block">
    <li class="stepper-block_number">{{ props.number }}</li>
    <li class="stepper-block_name">
      <span>{{ props.name }}</span>
      <TheButton class="btn-underline btn-step">{{ props.btnStep }}</TheButton>
    </li>
    <li><img src="props.imgSrc" alt="" /></li>
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
