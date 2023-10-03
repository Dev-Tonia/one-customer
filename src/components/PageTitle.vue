<script setup>
const { title, subtitle } = defineProps(["title", "subtitle"]);
</script>
<template>
  <div class="mb-3 text-center">
    <h1 class="font-semibold text-2xl md:leading-6">{{ title }}</h1>
    <p class="italic text-[10px] text-green-500 font-medium">
      "{{ subtitle }}"
    </p>
  </div>
</template>
