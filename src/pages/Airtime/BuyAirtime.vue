<script setup>
import { ref } from "vue";
import ProviderCardVue from "../../components/ProviderCard.vue";
import CardVue from "../../components/Card.vue";
import PageTitle from "../../components/PageTitle.vue";
import { useLayout } from "../../composable/getLayout";
// importing the store with list of all networkProviders
import { useNetworkProvider } from "../../store/networkProvider";
import { useOpenNavbarStore } from "../../store/openNavbar";
import AirtimeForm from "./AirtimeForm.vue";

const openSideBar = useOpenNavbarStore();
const providers = useNetworkProvider(); //from the store
const placeholderForNumber = ref("");
const placeholderForVtu = ref("");
const activeTab = ref("");
const { layout } = useLayout();
function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? "" : tab;
  placeholderForNumber.value = ` Enter ${activeTab.value} Phone Number `;
  placeholderForVtu.value = `${activeTab.value} VTU `;
}
</script>
<template>
  <div class="bg-[#F3F5F9] py-5 wrapper">
    <CardVue class="pb-3 pt-8">
      <PageTitle
        title=" Purchase Your Airtime"
        subtitle="Elevate: Instant
      Airtime Reload!"
      />

      <div
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen,
        }"
      >
        <h5 class="text-lg font-medium my-2">Choose your network provider</h5>
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
        <AirtimeForm />
      </CardVue>
      <CardVue v-else class="mx-auto md:w-6/12">
        <AirtimeForm />
      </CardVue>
    </CardVue>
  </div>
</template>
<style scoped></style>
