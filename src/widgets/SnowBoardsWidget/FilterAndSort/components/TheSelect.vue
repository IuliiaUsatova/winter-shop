<script setup>
import { defineEmits } from "vue";
const props = defineProps({
  options: Array,
});
const emit = defineEmits(["select"]);

const selectOption = (option) => {
  emit("select", option);
};
</script>

<template>
  <div class="select-block">
    <ul class="select-block_list">
      <li
        class="select-block_item"
        v-for="(option, index) in props.options"
        :key="index"
        @click="selectOption(option)"
      >
        <p>{{ option }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.select-block {
  position: absolute;
  max-width: 225px;
  width: 100%;
  padding: 20px 15px;
  border-radius: 4px;
  border: 1px solid #ced4d7;
  background: #fff;
  z-index: 2;
}
.select-block_item a {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
  transition: text-decoration 0.5s ease;
}

.select-block_item + .select-block_item {
  margin-top: 10px;
}

.select-block_item a:hover {
  text-decoration: underline;
}
</style>
