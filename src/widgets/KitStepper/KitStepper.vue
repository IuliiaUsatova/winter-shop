<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";

const stepper = [
  {
    number: "2",
    name: "Где планируете катать",
    btnStep: "Укажите место",
    imgSrc: require("@/widgets/KitStepper/image/mountain.svg"),
  },
  {
    number: "3",
    name: "Ваш уровень катании",
    btnStep: "Укажите ваш уровень",
    imgSrc: require("@/widgets/KitStepper/image/level.svg"),
  },
];
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <KitPicker />
      <KitHeightWeightInput />
      <KitSkillLevelInput
        v-for="(step, index) in stepper"
        :key="index"
        :stepper="step"
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
