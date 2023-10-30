<script setup>
import { ref } from "vue";
import { ElRadio } from "element-plus";
const radio = ref("2");
</script>
<template>
  <el-radio v-model="radio" label="1">Option A</el-radio>
  <el-radio v-model="radio" label="2">Option B</el-radio>
</template>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");
</style>
