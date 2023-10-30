<script setup>
import { reactive, ref } from "vue";
import { ElSelect, ElOption } from "element-plus";
const value = ref("");
const options = reactive([
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
]);
</script>
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");
</style>
