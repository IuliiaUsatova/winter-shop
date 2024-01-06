<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["selectAll", "selectPlace", "selectLevel"]);

const props = defineProps({
  selectedAll: Object,
  place: String,
  level: String,
});

const options = ["Вариант 1", "Вариант 2", "Вариант 3"];
const optionsTwo = ["Вариант 4", "Вариант 5", "Вариант 6"];

const optionSelectPlace = (option) => {
  emit("selectPlace", option);
};
const optionSelectLevel = (option) => {
  emit("selectLevel", option);
};

const toggleSelectAll = (option) => {
  emit("selectAll", option);
};
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <KitPicker />
      <KitHeightWeightInput
        @select="toggleSelectAll"
        :value="props.optionSelectAll"
      />
      <KitSkillLevelInput
        @select="optionSelectPlace"
        :value="props.place"
        :options="options"
        :number="2"
        name="Где планируете катать"
        btnStep="Укажите место "
        :imgSrc="require('./image/mountain.svg')"
      />
      <KitSkillLevelInput
        @select="optionSelectLevel"
        :options="optionsTwo"
        :value="props.level"
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
