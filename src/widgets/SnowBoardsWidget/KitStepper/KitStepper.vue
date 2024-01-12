<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["update:model-value"]);

const props = defineProps({
  modelValue: Object,
});

const options = ["Вариант 1", "Вариант 2", "Вариант 3"];
const optionsTwo = ["Вариант 4", "Вариант 5", "Вариант 6"];

const optionSelectPlace = (option) => {
  emit("update:model-value", {
    place: option,
    level: props.modelValue.level,
    selectedAll: props.modelValue.selectedAll,
  });
};
const optionSelectLevel = (option) => {
  emit("update:model-value", {
    place: props.modelValue.place,
    level: option,
    selectedAll: props.modelValue.selectedAll,
  });
};

const toggleSelectAll = (option) => {
  console.log(option);
  emit("update:model-value", {
    place: props.modelValue.place,
    level: props.modelValue.level,
    selectedAll: option,
  });
};
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <KitPicker />
      <KitHeightWeightInput
        @select="toggleSelectAll"
        :selectedAll="props.modelValue.selectedAll"
      />
      <KitSkillLevelInput
        @select="optionSelectPlace"
        :options="options"
        :selected="props.modelValue.place"
        :number="2"
        name="Где планируете катать"
        btnStep="Укажите место "
        :imgSrc="require('./image/mountain.svg')"
      />
      <KitSkillLevelInput
        @select="optionSelectLevel"
        :options="optionsTwo"
        :selected="props.modelValue.level"
        :number="3"
        name="Ваш уровень катания "
        btnStep="Укажите ваш уровень "
        :imgSrc="require('./image/level.svg')"
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
