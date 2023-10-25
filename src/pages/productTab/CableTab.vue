<script setup>
import NetworkCard from "../../components/NetworkCard.vue";
import { useTvProviders } from "../../store/tvSub";
const CableProviders = useTvProviders();
</script>
<template>
  <h1 class="font-medium text-2xl my-8">Cable Payment</h1>

  <div class="grid gap-4 md:grid-cols-3">
    <div class="" v-for="provider in CableProviders.providers">
      <RouterLink :to="'/buy-tv-sub'">
        <NetworkCard
          :provider="provider"
          :key="provider.name"
          class="transform transition duration-500 hover:scale-[1.05]"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
