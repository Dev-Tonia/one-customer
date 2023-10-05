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
      <main class="bg-[#F3F5F9] py-5 sm:px-6 px-3">
        <slot>Easy Pay </slot>
      </main>
      <footer class="bg-white px-4 sm:px-10">
        <div class="footer__content py-10 grid grid-cols-5 gap-10">
          <div class="logo__social--section col-span-2">
            <img src="/logo-full.png" alt="Logo footer" width="140" />
            <!-- email -->
            <div class="email mt-3">
              <p class="text-sm">
                <a href="mailto:" class="hover:underline font-semibold"
                  >l9yQ8@example.com</a
                >
              </p>
            </div>
            <div class="address mt-2 max-w-[250px]">
              <p class="text-sm">
                6B Peter Odili Rd, Port Harcourt, Rivers, Nigeria.
              </p>
            </div>
            <div class="social__links mt-6 flex gap-3">
              <a href="#">
                <span
                  class="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:scale-110 transition duration-200 cursor-pointer"
                >
                  <i class="ri-linkedin-fill"></i>
                </span>
              </a>
              <a href="#">
                <span
                  class="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:scale-110 transition duration-200 cursor-pointer"
                >
                  <i class="ri-twitter-fill"></i>
                </span>
              </a>
              <a href="#">
                <span
                  class="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:scale-110 transition duration-200 cursor-pointer"
                >
                  <i class="ri-facebook-fill"></i>
                </span>
              </a>
              <a href="#">
                <span
                  class="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:scale-110 transition duration-200 cursor-pointer"
                >
                  <i class="ri-instagram-fill"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="products__section">
            <h2 class="text-xl font-semibold">Products</h2>
            <div class="">
              <ul>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <i class="ri-phone-line text-gray-400 text-xl"></i>
                    <span class="text-sm">Airtime</span>
                  </a>
                </li>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <i class="ri-global-line text-gray-400 text-xl"></i>
                    <span class="text-sm">Mobile Data</span>
                  </a>
                </li>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <i class="ri-tv-line text-gray-400 text-xl"></i>
                    <span class="text-sm">TV Subscription</span>
                  </a>
                </li>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <i class="ri-battery-charge-line text-gray-400 text-xl"></i>
                    <span class="text-sm">Electricity Bill</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="legal__section">
            <h2 class="text-xl font-semibold">Legal</h2>
            <div class="">
              <ul>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <span class="text-sm">Terms & Conditions</span>
                  </a>
                </li>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <span class="text-sm">Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="company__section">
            <h2 class="text-xl font-semibold">Company</h2>
            <div class="">
              <ul>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <span class="text-sm">About Us</span>
                  </a>
                </li>
                <li class="py-2">
                  <a href="#" class="flex items-center gap-3">
                    <span class="text-sm">Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
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
