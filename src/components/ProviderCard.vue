<script setup>
import CardVue from "./Card.vue";
const { provider, activeTab } = defineProps(["provider", "activeTab"]);
const img = "../assets/images/poly.jpg";
</script>
<template>
  <CardVue
    class="min-[420px]:w-40 mb-0 flex justify-center pt-2 min-[420px]:-mr-1 sm:-mr-5 cursor-pointer overflow-clip"
    :class="{
      'border-2 border-green-500 z-30 grayscale-0 ':
        activeTab === provider.name,
      'border-2 grayscale': activeTab !== provider.name,
    }"
  >
    <div class="flex items-center justify-center flex-col">
      <slot>
        <div class="h-12 w-16 rounded-md overflow-hidden flex justify-center">
          <img :src="provider.img" alt="" class="w-full bg-contain" />
        </div>
        <p class="text-center text-sm md:text-lg mt-2">{{ provider.name }}</p>
      </slot>
    </div>
  </CardVue>
</template>
<style scoped></style>
