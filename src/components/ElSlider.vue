<script setup>
import { ref } from "vue";
import { ElSlider } from "element-plus";
const slider = ref([4, 8]);
</script>
<template>
  <div class="block">
    <el-slider v-model="slider" range show-stops :max="3"> </el-slider>
  </div>
</template>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");
</style>
