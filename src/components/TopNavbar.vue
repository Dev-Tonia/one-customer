<script setup>
import { ref } from "vue";
import CustomInput from "./CustomInput.vue";
const value = ref("");
</script>
<template>
  <div class="bg-primary wrapper py-[5px] bg-opacity-90 flex justify-between">
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
</template>
