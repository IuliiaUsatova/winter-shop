<script setup>
import { ElBreadcrumb } from "element-plus";
</script>
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">Подбери борд</el-breadcrumb-item>
    <el-breadcrumb-item>Укажите свой рост и вес</el-breadcrumb-item>
    <el-breadcrumb-item>Где планируете катать</el-breadcrumb-item>
    <el-breadcrumb-item>Ваш уровень катании</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");
</style>
