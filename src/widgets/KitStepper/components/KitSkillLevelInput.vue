<script setup>
import TheButton from "@/components/TheButton.vue";
import TheSelect from "@/components/TheSelect.vue";
import { ref } from "vue";

const props = defineProps({ stepper: Object });
const options = ["Вариант 1", "Вариант 2", "Вариант 3"];
const isActiveSelect = ref(false);

const toggleOptions = () => {
  isActiveSelect.value = !isActiveSelect.value;
};
</script>

<template>
  <ul class="stepper-block">
    <li class="stepper-block_number">{{ props.stepper.number }}</li>
    <li class="stepper-block_name">
      <span>{{ props.stepper.name }}</span>
      <TheButton @click="toggleOptions" class="btn-underline btn-step">{{
        props.stepper.btnStep
      }}</TheButton>
      <div v-if="isActiveSelect">
        <TheSelect :options="options" />
      </div>
    </li>
    <li><img :src="props.stepper.imgSrc" alt="" /></li>
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
