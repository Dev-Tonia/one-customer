<script setup>
const { title } = defineProps(["title"]);
</script>
<template>
  <span class="text-xl mx-4 text-white bg-green-500 px-3 rounded-full">{{
    title
  }}</span>
</template>

<style></style>
