<script setup>
import { ElBreadcrumb } from "element-plus";

const props = defineProps({
  items: Array,
});
</script>

<template>
  <ElBreadcrumb separator="/">
    <ElBreadcrumbItem v-for="item in props.items" :key="item.to">
      <router-link :to="item.to">{{ item.name }}</router-link>
    </ElBreadcrumbItem>
  </ElBreadcrumb>
</template>
