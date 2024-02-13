<script setup>
import NetworkCard from "../../components/NetworkCard.vue";
import CardVue from "../../components/Card.vue";
import { useOpenNavbarStore } from "../../store/openNavbar";
import PageTitle from "../../components/PageTitle.vue";
import { useLayout } from "../../composable/getLayout";
import { ElectricityProvider } from "../../utils/electricityProvider.js";

const openSideBar = useOpenNavbarStore();
console.log(openSideBar.isOpen);
const { layout } = useLayout();
</script>
<template>
  <div class="pt-5 pb-10 wrapper bg-[#F3F5F9]">
    <CardVue class="pb-5 pt-8 mb-6">
      <PageTitle
        title="Select Your Distribution Company"
        subtitle="Experience seamless power with us – where reliability
      meets innovation. Pay for prepaid and postpaid bill with us today! ⚡✨ "
      />
    </CardVue>
    <div
      v-if="layout === 'DashBoardLayout'"
      class="grid gap-4"
      :class="{
        'md:grid-cols-2': openSideBar.isOpen,
        'md:grid-cols-3': !openSideBar.isOpen,
      }"
    >
      <div class="" v-for="provider in ElectricityProvider">
        <RouterLink :to="`/user.electricity/${provider.name}`">
          <NetworkCard
            :provider="provider"
            :key="provider.name"
            class="transform transition duration-500 hover:scale-[1.05]"
          />
        </RouterLink>
      </div>
    </div>
    <div v-else class="grid gap-4 md:grid-cols-3">
      <div class="" v-for="provider in ElectricityProvider">
        <RouterLink :to="`/electricity/${provider.name}`">
          <NetworkCard
            :provider="provider"
            :key="provider.name"
            class="transform transition duration-500 hover:scale-[1.05]"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style></style>
