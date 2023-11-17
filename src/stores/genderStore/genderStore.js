import { defineStore } from "pinia";

export const useGenderStore = defineStore("genderStore", {
  state: () => {
    return {
      gender: "",
    };
  },
  actions: {
    changeGender(newGender) {
      this.gender = newGender;
    },
  },
});
