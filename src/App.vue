<script setup>
import { RouterView } from "vue-router";
import SideBarVue from "./components/SideBar.vue";
import { useOpenNavbarStore } from "./store/openNavbar";
import MobileSideBarVue from "./components/MobileSideBar.vue";
import Layout from "./components/Layout.vue";
const openSideBar = useOpenNavbarStore();
</script>
<template>
  <div class="" v-if="openSideBar.isOpen">
    <SideBarVue class="hidden md:block w-[23%]" />
    <MobileSideBarVue class="md:hidden" />
  </div>
  <Layout>
    <RouterView />
  </Layout>
</template>
