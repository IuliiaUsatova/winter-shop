<template>
  <label for="custom-input" class="benefits__block-discounts-label">
    <input
      class="benefits__block-loyalty-input"
      type="text"
      id="custom-input"
      name="custom-input"
      placeholder="Email"
    />
  </label>
</template>
<style scoped>
.benefits__block-discounts-label {
  position: relative;
  display: inline-block;
}
.benefits__block-discounts-label::before,
.benefits__block-discounts-label::after {
  content: "";
  position: absolute;
  top: 25%;
  height: 17px;
  width: 21px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.benefits__block-discounts-label::before {
  left: 3%;
  background-image: url("@/assets/image/mail-icon-black.svg");
}
.benefits__block-discounts-label::after {
  right: 3%;
  background-image: url("@/assets/image/next-icon.svg");
}
.benefits__block-loyalty-input {
  border: none;
  padding: 13px 214px 12px 47px;
}
</style>
