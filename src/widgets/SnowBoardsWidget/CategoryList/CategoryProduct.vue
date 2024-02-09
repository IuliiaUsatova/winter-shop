<script setup>
import { ref } from "vue";

// const emit = defineEmits(["category"]);
const props = defineProps({
  items: Object,
});
const radio = ref("");
</script>
<template>
  <div class="snow-board__category">
    <h2 class="snow-board__category-title">{{ props.items.title }}</h2>
    <div v-for="(category, index) in props.items.category" :key="index">
      <div>
        <el-radio-group v-model="radio" class="ml-4">
          <el-radio :label="category">{{ category }}</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.snow-board__category {
  position: absolute;
}
.snow-board__category-title {
  margin-bottom: 23px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.32px;
}
</style>
