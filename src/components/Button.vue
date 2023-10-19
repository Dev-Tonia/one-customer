<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// const { title } = defineProps(["title"]);
</script>
<template>
  <button
    class="bg-green-500 text-white text-center py-2 px-3 font-bold rounded-lg hover:bg-opacity-70"
  >
    <!-- {{ title }} -->
    <slot>Confirm Payment</slot>
  </button>
</template>
