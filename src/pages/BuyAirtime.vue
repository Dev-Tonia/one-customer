<script setup>
import { ref } from "vue";
import ProviderCardVue from "../components/ProviderCard.vue";
import CardVue from "../components/Card.vue";
import PageTitle from "../components/PageTitle.vue";
import Button from "../components/Button.vue";

// importing the store with list of all networkProviders
import { useNetworkProvider } from "../store/networkProvider";
import { useOpenNavbarStore } from "../store/openNavbar";
import { useRouter } from "vue-router";
const router = useRouter();
const openSideBar = useOpenNavbarStore();
const providers = useNetworkProvider(); //from the store
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
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen,
        }"
      >
        <form action="" method="post">
          <input
            type="text"
            :placeholder="placeholderForNumber || 'Enter Phone Number'"
          />
          <input
            type="text"
            disabled
            :placeholder="placeholderForVtu || ' VTU'"
          />
          <div
            class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center"
          >
            <span>&#8358;</span>
            <input
              type="Number"
              placeholder=" Amount"
              class="w-full bg-transparent pl-1 py-2 border-none outline-none"
            />
          </div>
          <Button @click="router.push('/order-summary')" />
        </form>
      </CardVue>
    </CardVue>
  </div>
</template>
<style scoped>
input[type="text"] {
  @apply block w-full py-2 px-3 bg-[#F3F5F9] rounded-lg my-4 border-none outline-none;
}
input[type="text"]:disabled::placeholder {
  @apply text-black font-bold;
}
input::placeholder {
  @apply text-xs;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
