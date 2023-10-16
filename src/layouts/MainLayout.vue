<script setup>
import Navbar from "../components/Navbar.vue";
import FooterVue from "../components/Footer.vue";
</script>
<template>
  <Navbar />
  <slot></slot>
  <FooterVue />
</template>

<style scoped></style>
