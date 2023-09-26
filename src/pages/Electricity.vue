<script setup>
import { ref } from "vue";
import LayoutVue from "../components/Layout.vue";
import ProviderCardVue from "../components/ProviderCard.vue";
import CardVue from "../components/Card.vue";
// importing the store with list of all networkProviders
import { useNetworkProvider } from "../store/networkProvider";
const providers = useNetworkProvider();
const placeholderForNumber = ref("");
const placeholderForVtu = ref("");

const activeTab = ref("none");
function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? null : tab;
  placeholderForNumber.value = ` Enter ${activeTab.value} Phone Number `;
  placeholderForVtu.value = `${activeTab.value} VTU `;
}
</script>
<template>
  <LayoutVue>
    <CardVue class="pt-3">
      <div class="mb-2 text-center">
        <h1 class="font-semibold text-2xl">Purchase Your Airtime</h1>
        <p class="italic text-xs">
          ...Get instant Airtime Top up. Never be out of airtime again..
        </p>
      </div>

      <h5 class="text-lg font-medium">Choose your network provider</h5>
      <div class="flex pt-0">
        <ProviderCardVue
          class=""
          v-for="provider in providers.providers"
          :provider="provider"
          :key="provider.name"
          @click="selectTab(provider.name)"
          :activeTab="activeTab"
        />
      </div>
    </CardVue>
    <CardVue class="py-5">
      <h2 class="italic text-xl font-semibold">
        Pay for Your Airtime VTU Securely
      </h2>
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
        <div class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center">
          <span>&#8358;</span>
          <input
            type="Number"
            placeholder=" Amount"
            class="w-full bg-transparent pl-1 py-2 border-none outline-none"
          />
        </div>
        <button
          class="bg-green-500 text-primary text-center py-2 px-3 font-bold rounded-lg hover:bg-opacity-70"
        >
          Confirm Payment
        </button>
      </form>
    </CardVue>
  </LayoutVue>
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
