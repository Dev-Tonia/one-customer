<script setup>
import { useOpenNavbarStore } from "../store/openNavbar";
import SideBar from "../components/SideBar.vue";
import MobileSideBar from "../components/MobileSideBar.vue";
import Footer from "../components/Footer.vue";
import TopNavbar from "../components/TopNavbar.vue";
const openSideBar = useOpenNavbarStore();
</script>
<template>
  <div :class="{ 'md:flex': openSideBar.isOpen }">
    <div :class="{ 'md:w-[23%]': openSideBar.isOpen }">
      <div class="" v-if="openSideBar.isOpen">
        <SideBar class="hidden md:block w-[23%]" />
        <MobileSideBar class="md:hidden" />
      </div>
    </div>
    <div :class="{ ' md:w-[77%]': openSideBar.isOpen }">
      <header class="bg-white">
        <TopNavbar />
        <nav class="wrapper py-3">
          <div class="flex justify-start">
            <i
              class="ri-menu-2-fill text-2xl font-bold cursor-pointer"
              @click="openSideBar.updateIsOpen"
            ></i>
          </div>
        </nav>
      </header>
      <main class="">
        <slot>Easy Pay </slot>
      </main>
      <Footer />
    </div>
  </div>
</template>
<style scoped>
header {
  box-shadow: 0 0 2rem 0 rgba(33, 37, 41, 0.1);
}
</style>
