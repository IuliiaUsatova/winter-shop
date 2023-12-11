<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";
import { ref } from "vue";

const selectedAll = ref({ height: "", weight: "" });

const place = ref("");
const level = ref("");
const options = ["Вариант 1", "Вариант 2", "Вариант 3"];
const optionsTwo = ["Вариант 4", "Вариант 5", "Вариант 6"];
const optionSelectPlace = (option) => {
  place.value = option;
  console.log(option);
};
const optionSelectLevel = (option) => {
  level.value = option;
  console.log(option);
};

const toggleSelectAll = (option) => {
  selectedAll.value = option;
  console.log(option);
};
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <KitPicker />
      <KitHeightWeightInput @select="toggleSelectAll" />
      <KitSkillLevelInput
        @select="optionSelectPlace"
        :value="place"
        :options="options"
        :number="2"
        name="Где планируете катать"
        btnStep="Укажите место "
        :imgSrc="require('@/widgets/KitStepper/image/mountain.svg')"
      />
      <KitSkillLevelInput
        @select="optionSelectLevel"
        :options="optionsTwo"
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
