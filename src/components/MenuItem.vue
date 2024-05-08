<script setup>
import { RouterLink } from "vue-router";
import BillsDropDown from "./BillsDropDown.vue";
import Button from "./Button.vue";
const { toggleMenu } = defineProps(["toggleMenu"]);
const NavItems = [
  { title: "Home", routeTo: "/" },
  {
    title: "About us ",
    routeTo: "/about-us",
  },
  {
    title: "Contact us",
    routeTo: "/contact-us",
  },
];
</script>
<template>
  <div class="py-7 md-lg:py-0">
    <ul class="navLinks md-lg:space-x-3 md-lg:flex items-center justify-center">
      <li class="mb-3 md-lg:mb-0" v-for="item in NavItems" :key="item.title">
        <RouterLink
          :to="item.routeTo"
          class="flex items-center gap-3"
          active-class=" active"
          @click="toggleMenu"
        >
          <span class="text-xl font-semibold hover:text-primary">{{
            item.title
          }}</span>
        </RouterLink>
      </li>
      <li class="mb-4 md-lg:mb-0">
        <!-- <DropDown /> -->
        <BillsDropDown class="w-full md-lg:w-fit" />
      </li>
    </ul>
    <div
      class="md-lg:hidden min-[360px]:space-x-4 space-y-4 min-[360px]:space-y-0 min-[360px]:flex"
    >
      <div class="min-[360px]:w-4/12">
        <RouterLink to="/sign-up">
          <Button class="w-full md-lg:w-fit"> Sign In</Button>
        </RouterLink>
      </div>
      <div class="min-[360px]:w-4/12">
        <router-link to="/dashboard">
          <Button class="w-full md-lg:w-fit">Dashboard</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.active {
  @apply text-primary;
}
</style>
