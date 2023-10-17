<script setup>
import { RouterLink } from "vue-router";
import Button from "../components/Button.vue";
import BillsDropDown from "./BillsDropDown.vue";

const NavItems = [
  { title: "Home", routeTo: "/" },
  {
    title: "About Us ",
    routeTo: "/about-us",
  },
  {
    title: "Contact Us",
    routeTo: "/contact-us",
  },
];
</script>
<template>
  <nav
    class="fixed top-0 right-0 left-0 bg-white py-4 sm:px-20 px-6 bg-opacity-90 z-20"
  >
    <div class="flex items-center justify-between">
      <div class="brand-logo h-14 w-28 flex justify-center">
        <RouterLink to="/">
          <img
            src="../../public/easy-pay-logo.png"
            alt=""
            class="bg-contain w-full"
          />
        </RouterLink>
      </div>
      <ul class="navLinks flex space-x-3">
        <li class="" v-for="item in NavItems" :key="item.title">
          <RouterLink
            :to="item.routeTo"
            class="flex items-center gap-3"
            active-class
          >
            <span class="text-xl font-semibold hover:text-green-500">{{
              item.title
            }}</span>
          </RouterLink>
        </li>
        <li>
          <!-- <DropDown /> -->
          <BillsDropDown />
        </li>
      </ul>
      <div class="flex space-x-4">
        <div>
          <Button class=""> Sign In</Button>
        </div>
        <div>
          <router-link to="/dashboard">
            <Button> Log In</Button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-class {
  @apply text-green-500;
}
</style>
