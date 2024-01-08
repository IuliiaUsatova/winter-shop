<script setup>
import TheButton from "@/components/TheButton.vue";
import TheSelect from "./TheSelect.vue";
import { ref, defineEmits } from "vue";

const props = defineProps({
  selectedAll: Object,
});
const emit = defineEmits(["select"]);

const stepperHeight = ["180 см", "190 см", "200 см"];
const stepperWeight = ["300кг", "250кг", "275кг"];

const isActiveSelectHeight = ref(false);
const isActiveSelectWeight = ref(false);

const toggleOptionsHeight = () => {
  isActiveSelectHeight.value = !isActiveSelectHeight.value;
  if (isActiveSelectHeight.value) {
    isActiveSelectWeight.value = false;
  }
};
const toggleOptionsWeight = () => {
  isActiveSelectWeight.value = !isActiveSelectWeight.value;
  if (isActiveSelectWeight.value) {
    isActiveSelectHeight.value = false;
  }
};
const optionSelectHeight = (option) => {
  isActiveSelectHeight.value = false;
  emit("select", {
    height: option,
    weight: props.selectedAll.weight,
  });
};
const optionSelectWeight = (option) => {
  isActiveSelectWeight.value = false;
  emit("select", {
    height: props.selectedAll.height,
    weight: option,
  });
};
</script>
<template>
  <ul class="stepper-block">
    <li class="stepper-block_number">1</li>
    <li class="stepper-block_name">
      <span>Укажите свой рост и вес</span>
      <div class="btn-group">
        <TheButton @click="toggleOptionsHeight" class="btn-underline btn-step"
          >Рост: {{ props.selectedAll.height }}</TheButton
        >
        <div v-if="isActiveSelectHeight">
          <TheSelect
            class="select"
            :options="stepperHeight"
            @select="optionSelectHeight"
          />
        </div>

        <TheButton @click="toggleOptionsWeight" class="btn-underline btn-step"
          >Вес: {{ props.selectedAll.weight }}</TheButton
        >
        <div v-if="isActiveSelectWeight">
          <TheSelect
            class="select"
            :options="stepperWeight"
            @select="optionSelectWeight"
          />
        </div>
      </div>
    </li>
    <li><img src="../image/dimensions.svg" alt="" /></li>
  </ul>
</template>
<style scoped>
.btn-group {
  display: flex;
}
.select {
  top: 60px;
  left: 70px;
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
.stepper-block_name {
  margin-right: 10px;
}
.btn-step {
  margin-top: 5px;
  margin-right: 12px;
  font-size: 12px;
}
</style>
