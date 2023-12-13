<script setup>
import TheButton from "@/components/TheButton.vue";
import TheSelect from "@/components/TheSelect.vue";
import { ref, defineEmits, watch } from "vue";

const emit = defineEmits(["height", "weight"]);

const stepperHeight = ["180 см", "190 см", "200 см"];
const stepperWeight = ["300кг", "250кг", "275кг"];

const isActiveSelectHeight = ref(false);
const isActiveSelectWeight = ref(false);
const selectedHeight = ref("");
const selectedWeight = ref("");

const toggleOptionsHeight = () => {
  isActiveSelectHeight.value = !isActiveSelectHeight.value;
};
const toggleOptionsWeight = () => {
  isActiveSelectWeight.value = !isActiveSelectWeight.value;
};
const optionSelectHeight = (option) => {
  selectedHeight.value = option;
  isActiveSelectHeight.value = false;
};
const optionSelectWeight = (option) => {
  selectedWeight.value = option;
  isActiveSelectWeight.value = false;
};

watch([selectedHeight, selectedWeight], () => {
  emit("select", {
    height: selectedHeight.value,
    weight: selectedWeight.value,
  });
});
</script>
<template>
  <ul class="stepper-block">
    <li class="stepper-block_number">1</li>
    <li class="stepper-block_name">
      <span>Укажите свой рост и вес</span>

      <TheButton @click="toggleOptionsHeight" class="btn-underline btn-step"
        >Рост: {{ selectedHeight }}</TheButton
      >
      <div v-if="isActiveSelectHeight">
        <TheSelect :options="stepperHeight" @select="optionSelectHeight" />
      </div>

      <TheButton @click="toggleOptionsWeight" class="btn-underline btn-step"
        >Вес: {{ selectedWeight }}</TheButton
      >
      <div v-if="isActiveSelectWeight">
        <TheSelect :options="stepperWeight" @select="optionSelectWeight" />
      </div>
    </li>
    <li><img src="../image/dimensions.svg" alt="" /></li>
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
