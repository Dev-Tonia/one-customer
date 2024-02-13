<script setup>
// Importing Components
import ProviderCardVue from "../../components/ProviderCard.vue";
import CardVue from "../../components/Card.vue";
import PageTitle from "../../components/PageTitle.vue";
import MobileForm from "./MobileForm.vue";

// importing the stores
import { useNetworkProvider } from "../../store/networkProvider";
import { useOpenNavbarStore } from "../../store/openNavbar";
import { useProviderTab } from "../../composable/getProvidersTab";
import { useLayout } from "../../composable/getLayout";
// declaring all the state
const providers = useNetworkProvider(); //from the store
const openSideBar = useOpenNavbarStore();
const { layout } = useLayout();

const { selectTab, activeTab } = useProviderTab();
</script>
<template>
  <div class="py-5 wrapper bg-[#F3F5F9]">
    <CardVue class="pb-3 pt-8">
      <PageTitle
        title="Purchase Your Data"
        subtitle="Uninterrupted: Instant Data Boost!"
      />
      <div
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen || layout === 'MainLayout',
        }"
      >
        <h5 class="text-lg font-medium mb-2 mt-6">
          Choose your network provider
        </h5>
        <div class="grid grid-cols-2 min-[420px]:flex pt-0">
          <ProviderCardVue
            class=""
            v-for="provider in providers.providers"
            :provider="provider"
            :key="provider.name"
            @click="selectTab(provider.name)"
            :activeTab="activeTab"
          />
        </div>
      </div>
    </CardVue>
    <CardVue class="py-5">
      <CardVue
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen || layout === 'MainLayout',
        }"
      >
        <MobileForm :activeTab="activeTab" />
      </CardVue>
    </CardVue>
  </div>
</template>
<style scoped></style>
