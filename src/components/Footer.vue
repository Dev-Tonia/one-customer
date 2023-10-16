<script setup>
import { ref } from "vue";
const date = ref(new Date());
const currentYear = date.value.getYear();
</script>

<template>
  <div>
    <h1>Footer Goes Here</h1>
    <p>{{ currentYear }}</p>
  </div>
</template>

<style></style>
