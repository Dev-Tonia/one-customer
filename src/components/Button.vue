<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const { color } = defineProps({
  color: {
    type: String,
    default: "bg-green-500 text-white",
  },
});
// const { title } = defineProps(["title"]);
</script>
<template>
  <button :class="[' text-center py-2 px-3 font-bold rounded-lg', color]">
    <!-- {{ title }} -->
    <slot>Confirm Payment</slot>
  </button>
</template>
