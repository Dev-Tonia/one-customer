<script setup>
import CardVue from "./Card.vue";
const { provider, activeTab } = defineProps(["provider", "activeTab"]);
</script>
<template>
  <CardVue
    class="w-40 flex justify-center pt-2 -mr-10 cursor-pointer overflow-clip"
    :class="{
      'border-2 border-green-500 z-30': activeTab === provider.name,
      'border-2': activeTab !== provider.name,
    }"
  >
    <div>
      <div class="h-12 w-16 rounded-md overflow-hidden">
        <img :src="provider.img" alt="" class="w-full bg-cover" />
      </div>
      <p class="text-center text-lg mt-2">{{ provider.name }}</p>
    </div>
  </CardVue>
</template>
<style scoped></style>
