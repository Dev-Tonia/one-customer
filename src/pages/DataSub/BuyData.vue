<script setup>
import { ref, computed } from "vue";

// Importing Components
import ProviderCardVue from "../../components/ProviderCard.vue";
import CardVue from "../../components/Card.vue";
import PageTitle from "../../components/PageTitle.vue";

// importing the stores
import { useNetworkProvider } from "../../store/networkProvider";
import { useOpenNavbarStore } from "../../store/openNavbar";
import DataForm from "./DataForm.vue";

// declaring all the state
const providers = useNetworkProvider(); //from the store
const openSideBar = useOpenNavbarStore();

const placeholderForNumber = ref("");
const placeholderForVtu = ref("");
const activeTab = ref("");

function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? "" : tab;
  placeholderForNumber.value = ` Enter ${activeTab.value} Phone Number `;
  placeholderForVtu.value = `${activeTab.value} VTU `;
}
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
          'md:w-6/12': !openSideBar.isOpen,
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
        v-if="layout === 'DashboardLayout'"
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen,
        }"
      >
        <DataForm />
      </CardVue>
      <CardVue v-else class="mx-auto md:w-6/12">
        <DataForm />
      </CardVue>
    </CardVue>
  </div>
</template>
