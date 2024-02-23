<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
  modelValue: String,
});
const handleInput = (event) => {
  emit("update:model-value", event.target.value);
};
</script>
<template>
  <label for="custom-input" class="benefits__block-discounts-label">
    <input
      class="benefits__block-loyalty-input"
      type="text"
      id="custom-input"
      name="custom-input"
      placeholder="Поиск"
      :searchTerm="props.modelValue"
      @input="handleInput"
    />
  </label>
</template>
<style scoped>
.benefits__block-discounts-label {
  position: relative;
  display: inline-block;
}

.benefits__block-loyalty-input {
  border: 1px solid #ced4d7;
  padding: 13px 154px 12px 20px;
}
</style>
