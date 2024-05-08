<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import Button from "../components/Button.vue";
import MenuItem from "./MenuItem.vue";
import TopNavbar from "./TopNavbar.vue";
const windowSize = ref(window.innerWidth);
const isMenuOpen = ref(true);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowSize.value = window.innerWidth;
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    windowSize.value = window.innerWidth;
  });
});
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
console.log(windowSize);
</script>
<template>
  <header class="">
    <nav class="fixed top-0 right-0 left-0 z-20">
      <TopNavbar />
      <div
        class="bg-white py-2 wrapper bg-opacity-[95%] md-lg:bg-opacity-[98%]"
      >
        <div class="flex items-center justify-between">
          <div class="brand-logo h-12 w-28 flex justify-center items-center">
            <RouterLink to="/">
              <img
                src="../assets/images/easypay-1-logo.png"
                alt=""
                class="bg-contain w-full"
              />
            </RouterLink>
          </div>
          <div class="md-lg:hidden" @click="toggleMenu">
            <i class="ri-menu-2-line text-primary text-3xl"></i>
          </div>
          <div class="hidden md-lg:block">
            <MenuItem />
          </div>
          <div class="md-lg:flex space-x-4 hidden">
            <div>
              <RouterLink to="/sign-up">
                <Button class=""> Sign In</Button>
              </RouterLink>
            </div>
            <div>
              <router-link to="/dashboard">
                <Button> Dashboard</Button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="md-lg:hidden" :class="{ 'hidden bg-black ': isMenuOpen }">
          <MenuItem :toggleMenu="toggleMenu" />
        </div>
      </div>
    </nav>
  </header>

  <div class="bg-transparent md-lg:bg-white mt-[110px]"></div>
</template>

<style scoped></style>
