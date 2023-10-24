<script setup>
const props = defineProps({
  backgroundImage: String,
  imageSrc: String,
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="benefits__block-loyalty"
    :style="{ backgroundImage: `url(${props.backgroundImage})` }"
  >
    <img :src="props.imageSrc" alt="" />
    <h2>{{ props.title }}</h2>
    <p>{{ props.description }}</p>
    <slot />
  </div>
</template>

<style scoped>
.benefits__block-loyalty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 789px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.benefits__block-loyalty h2 {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
.benefits__block-loyalty p {
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
