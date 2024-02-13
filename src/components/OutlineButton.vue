<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// const { title } = defineProps(["title"]);
</script>
<template>
  <button
    class="border-2 text-center py-2 px-3 font-bold rounded-lg hover:bg-opacity-70"
  >
    <!-- {{ title }} -->
    <slot>Confirm Payment</slot>
  </button>
</template>
