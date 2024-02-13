<script setup>
import Airtime from "./AirtimeTab.vue";
import Data from "./DataTab.vue";
import Cable from "./CableTab.vue";
import Electricity from "./ElectricityTab.vue";

import { ref } from "vue";

const currentTab = ref("Electricity");

const tabs = {
  Electricity,
  Airtime,
  Data,
  Cable,
};
</script>

<template>
  <div class="wrapper select-none pt-10 pb-20 bg-green-500/[3%]">
    <h1 class="mb-5 text-xl md:text-3xl">
      Select the utility you want to pay for today!!!
    </h1>
    <div class="bg-primary/5">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<style scoped>
.tab-button {
  @apply py-3 px-8 cursor-pointer font-medium;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button.active {
  /* background: #e0e0e0; */
  @apply border-b-2 border-b-green-500;
}
</style>
