<script setup>
import { RouterView } from "vue-router";
import SideBarVue from "./components/SideBar.vue";

import { useOpenNavbarStore } from "./store/openNavbar";
const openSideBar = useOpenNavbarStore();
</script>
<template>
  <div class="" v-if="openSideBar.isOpen">
    <SideBarVue />
  </div>
  <RouterView />
</template>
