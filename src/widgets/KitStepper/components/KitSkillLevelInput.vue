<script setup>
import TheButton from "@/components/TheButton.vue";
import TheSelect from "@/widgets/KitStepper/components/TheSelect.vue";
import { ref, defineEmits } from "vue";

const emit = defineEmits(["select"]);
const props = defineProps({
  value: String,
  number: Number,
  name: String,
  btnStep: String,
  imgSrc: String,
  options: Array,
});
const isActiveSelect = ref(false);
const selected = ref("");

const toggleOptions = () => {
  isActiveSelect.value = !isActiveSelect.value;
};
const optionSelect = (option) => {
  selected.value = option;
  isActiveSelect.value = false;
  emit("select", option);
};
</script>

<template>
  <ul class="stepper-block">
    <li class="stepper-block_number">{{ props.number }}</li>
    <li class="stepper-block_name">
      <span>{{ props.name }}</span>
      <TheButton @click="toggleOptions" class="btn-underline btn-step">{{
        selected || props.btnStep
      }}</TheButton>
      <div v-if="isActiveSelect">
        <TheSelect :options="options" @select="optionSelect" />
      </div>
    </li>
    <li><img :src="props.imgSrc" alt="" /></li>
  </ul>
</template>
<style scoped>
.stepper-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ced4d7;
  padding: 15px 30px;
  position: relative;
}
.stepper-block_number {
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.96px;
  margin-right: 18px;
}
.btn-step {
  margin-top: 5px;
  margin-right: 12px;
  font-size: 12px;
}
</style>
