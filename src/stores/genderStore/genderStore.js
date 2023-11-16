import { defineStore } from "pinia";

export const useStore = defineStore("genderStore", {
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
