<script setup>
import { ref } from "vue";
import SocialLinks from "./SocialLinks.vue";
const date = ref(new Date());
const currentYear = date.value.getFullYear();
</script>

<template>
  <footer class="bg-[#000017] py-4">
    <div class="md:grid md:grid-cols-3 wrapper">
      <div class="mb-6 md:mb-0 md:w-40 md:col-span-1 self-center">
        <RouterLink to="/" class="flex justify-center items-center">
          <img
            src="../assets/images/easypay-1-logo.png"
            class="mr-3 h-12 w-full object-contain"
            alt="FlowBite Logo"
          />
        </RouterLink>
        <div class="mt-4 flex items-center gap-3 md:block">
          <span class="text-gray-300 inline-block mb-2"> Follows on:</span>
          <SocialLinks class="gap-x-6" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:col-span-2">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white"
          >
            Products
          </h2>
          <ul class="text-gray-400">
            <li class="mb-4">
              <RouterLink to="/electricity" class="hover:underline"
                >Electricity</RouterLink
              >
            </li>
            <li class="mb-4">
              <RouterLink to="/buy-tv-sub" class="hover:underline">
                Cable Subscription</RouterLink
              >
            </li>
            <li class="mb-4">
              <RouterLink to="/buy-data" class="hover:underline">
                Data Subscription</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/buy-airtime" class="hover:underline">
                Airtime Top up</RouterLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">
            Company
          </h2>
          <ul class="text-gray-400">
            <li class="mb-4">
              <RouterLink to="/contact-us" class="hover:underline"
                >Become an Agent</RouterLink
              >
            </li>
            <li class="mb-4">
              <RouterLink to="/about-us" class="hover:underline"
                >About Us</RouterLink
              >
            </li>
            <li class="">
              <RouterLink to="/contact-us" class="hover:underline"
                >Contact Us</RouterLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">
            Legal
          </h2>
          <ul class="text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr class="my-6 border-gray-400 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between wrapper">
      <span class="text-sm text-gray-500 sm:text-center mb-4 sm:mb-0"
        >© {{ currentYear }}
        <RouterLink to="/" class="hover:underline">EasyPayBills</RouterLink>.
        All Rights Reserved.
      </span>
      <SocialLinks class="gap-x-6" />
    </div>
  </footer>
</template>

<style scoped>
img {
  filter: grayscale(1) invert(1);
}
</style>
