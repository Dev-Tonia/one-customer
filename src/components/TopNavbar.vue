<script setup>
import { ref } from "vue";
import CustomInput from "./CustomInput.vue";
import CustomModal from "../components/CustomModal.vue";
import SocialLinks from "./SocialLinks.vue";
import Button from "./Button.vue";
const showOverlay = ref(false);

// close link page after each link click
function closeOverLay() {
  showOverlay.value = !showOverlay.value;
}

const value = ref("");
</script>
<template>
  <div class="bg-primary wrapper py-[5px] bg-opacity-90 flex justify-between">
    <div class="flex gap-2 items-center">
      <div
        class="font-semibold text-lg text-white cursor-pointer"
        @click="closeOverLay"
      >
        No Token?
      </div>
    </div>

    <div class="flex items-center gap-2">
      <div class="">
        <a
          href="tel:+2349087610511"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white"
        >
          <i class="ri-phone-line"></i>
          <span>09087610511</span>
        </a>
      </div>
      <div class="hidden min-[580px]:block">
        <a
          href="https://api.whatsapp.com/send?phone=2349087610379"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white"
        >
          <i class="ri-whatsapp-line"></i>
          <span>09087610379</span>
        </a>
      </div>
      <SocialLinks class="gap-x-1 hidden md:flex" />
    </div>
  </div>

  <CustomModal v-if="showOverlay" :closeOverLay="closeOverLay">
    <h1 class="text-center mb-2 text-2xl font-medium">RETRIEVE TOKEN</h1>
    <p class="mb-6">Enter your transaction Id and your phone number below</p>
    <div class="mb-3">
      <CustomInput
        v-model="value"
        type="text"
        placeholder="Enter Transaction Id"
        class="w-full bg-transparent border-none outline-none"
      />
    </div>
    <div class="mb-3">
      <CustomInput
        v-model="value"
        type="text"
        placeholder="Enter Phone Number"
        class="w-full bg-transparent border-none outline-none"
      />
    </div>
    <Button class="w-full">Retrieve</Button>
  </CustomModal>
</template>
