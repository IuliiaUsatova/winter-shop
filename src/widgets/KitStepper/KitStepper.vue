<script setup>
import KitPicker from "./components/KitPicker.vue";
import KitHeightWeightInput from "./components/KitHeightWeightInput.vue";
import KitSkillLevelInput from "./components/KitSkillLevelInput.vue";
</script>

<template>
  <div class="stepper">
    <div class="stepper-blocks">
      <KitPicker />
      <KitHeightWeightInput />
      <KitSkillLevelInput />
    </div>
  </div>
</template>

<style scoped>
.stepper-blocks {
  display: flex;
  align-items: stretch;
}
</style>
