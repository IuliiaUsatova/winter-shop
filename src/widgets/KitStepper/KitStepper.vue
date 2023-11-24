<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";

// const value = ref("");
// const options = [
//   {
//     value: "Option1",
//     label: "Option1",
//   },
//   {
//     value: "Option2",
//     label: "Option2",
//     disabled: true,
//   },
//   {
//     value: "Option3",
//     label: "Option3",
//   },
//   {
//     value: "Option4",
//     label: "Option4",
//   },
//   {
//     value: "Option5",
//     label: "Option5",
//   },
// ];
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
