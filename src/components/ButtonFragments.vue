<template>
  <button class="btn"><slot></slot></button>
</template>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.9;
}
.btn-black {
  max-width: 322px;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 10px 90px;
  margin-top: 75px;
}
.btn-white {
  max-width: 292px;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 10px 81px;
}
</style>
