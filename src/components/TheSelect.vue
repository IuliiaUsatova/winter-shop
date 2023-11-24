<script setup>
const props = defineProps({
  options: Array,
});
</script>

<template>
  <div class="select-block">
    <ul class="select-block_list">
      <li
        class="select-block_item"
        v-for="(option, index) in props.options"
        :key="index"
      >
        {{ option }}
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
  border: 1px solid var(--Grey, #ced4d7);
  background: var(--White, #fff);
  z-index: 2;
}
.select-block_item {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.24px;
}
.select-block_item + .select-block_item {
  margin-top: 10px;
}
</style>
