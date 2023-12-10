<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";
import { ref } from "vue";

const selectedHeight = ref("");
const selectedWeight = ref("");

const place = ref("");
const level = ref("");
const options = ["Вариант 1", "Вариант 2", "Вариант 3"];
const optionSelect = (option) => {
  place.value = option;
  level.value = option;
};

const toggleHeightSelect = (stepperHeight) => {
  selectedHeight.value = stepperHeight;
};
const toggleWeightSelect = (stepperWeight) => {
  selectedWeight.value = stepperWeight;
};
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <KitPicker />
      <KitHeightWeightInput
        @height="toggleHeightSelect"
        @weight="toggleWeightSelect"
      />
      <KitSkillLevelInput
        @select="optionSelect"
        :value="place"
        :options="options"
        :number="2"
        name="Где планируете катать"
        btnStep="Укажите место "
        :imgSrc="require('@/widgets/KitStepper/image/mountain.svg')"
      />
      <KitSkillLevelInput
        @select="optionSelect"
        :options="options"
        :value="level"
        :number="3"
        name="Ваш уровень катания "
        btnStep="Укажите ваш уровень "
        :imgSrc="require('@/widgets/KitStepper/image/level.svg')"
      />
    </div>
  </div>
</template>

<style scoped>
.stepper-blocks {
  display: flex;
  align-items: stretch;
}
</style>
