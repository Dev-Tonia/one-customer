<script setup>
import { useOpenNavbarStore } from "../store/openNavbar";
const openSideBar = useOpenNavbarStore();
</script>
<template>
  <div :class="{ 'md:flex': openSideBar.isOpen }">
    <div :class="{ 'md:w-[23%]': openSideBar.isOpen }"></div>
    <div :class="{ ' md:w-[77%]': openSideBar.isOpen }">
      <header class="py-3 px-5 bg-white">
        <nav class="">
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
      <footer class="bg-white py-3 px-5">
        <div class="flex justify-between">
          <div class="flex">
            <p class="font-semibold text-gray-400">Easy Pay</p>
            <span class="font-light">&copy;</span>
          </div>
          <div class="">
            <a href="#" class="text-gray-400 mr-2 inline-block hover:underline"
              >Contact</a
            >
            <a href="#" class="text-gray-400 hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
header {
  box-shadow: 0 0 2rem 0 rgba(33, 37, 41, 0.1);
}
</style>
