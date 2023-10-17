<script setup>
import ButtonFragment from "@/components/ButtonFragments.vue";
import InputFragment from "@/components/InputFragment.vue";
import { defineProps } from "vue";

const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="container">
    <div class="benefits__block">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="benefits__block-loyalty"
        :style="{ backgroundImage: `url(${item.backgroundImage})` }"
      >
        <img :src="item.img" alt="" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.descr }}</p>
        <ButtonFragment
          v-if="item.title === 'Программа лояльности'"
          class="btn-white"
          >Вступить в клуб</ButtonFragment
        >
        <InputFragment v-else />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.benefits__block {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 47px 0 60px;
}
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
.benefits__block-discounts {
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
.benefits__block-discounts h2 {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
.benefits__block-discounts p {
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
}
</style>
