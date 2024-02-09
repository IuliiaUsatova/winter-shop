<script setup>
import { ref } from "vue";
const radio = ref(props.showFilter);

const props = defineProps({
  items: Array,
});
</script>
<template>
  <div v-for="(item, index) in props.items" :key="index">
    <div class="snow-board__category-radio">
      <el-radio-group v-model="radio">
        <el-radio :label="item.value">{{ item.category }}</el-radio>
      </el-radio-group>
      <ul class="snow-board__category-peace">
        <li>{{ item.peace }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.el-radio-group {
  flex-direction: column;
  align-items: flex-start;
}
.snow-board__category-radio {
  display: flex;
  justify-content: space-between;
  gap: 190px;
}
.snow-board__category-peace {
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}
</style>
