<script setup>
import CardVue from "./Card.vue";
const { provider } = defineProps(["provider"]);
</script>
<template>
  <div>
    <CardVue class="">
      <a href="">
        <div class="flex justify-center h-60 rounded-md overflow-hidden">
          <img :src="provider.img" alt="" class="w-full bg-contain" />
        </div>
        <p class="text-center text-2xl mt-3 font-semibold">
          {{ provider.name }}
        </p>
      </a>
    </CardVue>
  </div>
</template>
<style scoped></style>
