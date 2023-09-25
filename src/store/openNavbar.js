import { defineStore } from "pinia";
export const useOpenNavbarStore = defineStore("openNavbar", {
  state: () => ({
    isOpen: true,
  }),
  actions: {
    updateIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
});
