<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Button from "../components/Button.vue";
import MenuItem from "./MenuItem.vue";
import CustomInput from "./CustomInput.vue";
const value = ref("");
const toggleMenu = ref(false);
</script>
<template>
  <header class="">
    <nav class="fixed top-0 right-0 left-0 z-20">
      <div
        class="bg-primary wrapper py-[5px] bg-opacity-90 flex justify-between"
      >
        <div class="flex gap-2 items-center">
          <h4 class="font-semibold text-lg text-white">No Token?</h4>
          <div class="flex bg-[#F3F5F9] rounded-lg items-center">
            <CustomInput
              v-model="value"
              type="text"
              placeholder="Retrieve Token"
              class="w-full bg-transparent border-none outline-none"
            />
            <i
              class="ri-search-eye-fill text-green-500 text-4xl cursor-pointer"
            ></i>
          </div>
        </div>

        <a
          href="#"
          class="rounded-md font-bold text-white inline-block pt-1 px-1 hover:bg-green-500"
        >
          Become An Agent
        </a>
      </div>
      <div class="bg-white py-2 wrapper bg-opacity-[95%] md-lg:bg-opacity-90">
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
          <div class="md-lg:hidden">
            <i class="ri-menu-2-line text-primary text-3xl"></i>
          </div>
          <div class="hidden md-lg:block">
            <MenuItem />
          </div>
          <div class="md-lg:flex space-x-4 hidden">
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
        <div class="md-lg:hidden">
          <MenuItem />
        </div>
      </div>
    </nav>
  </header>

  <div class="bg-transparent md-lg:bg-white mt-[136px]"></div>
</template>

<style scoped>
.active {
  @apply text-primary;
}
</style>
