<script setup>
import { RouterView } from "vue-router";
// import SideBarVue from "./components/SideBar.vue";
// import { useOpenNavbarStore } from "./store/openNavbar";
// import MobileSideBarVue from "./components/MobileSideBar.vue";
// import Layout from "./components/Layout.vue";
// const openSideBar = useOpenNavbarStore();
</script>
<template>
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>
