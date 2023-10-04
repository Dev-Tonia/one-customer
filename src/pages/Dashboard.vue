<script setup>
import Card from "../components/Card.vue";
</script>
<template>
  <Card class="py-5 mb-6">
    <h1 class="text-xl font-semibold mt-1 mb-4">
      Fund Wallet with VFD Account Number: 1029105595
    </h1>
  </Card>
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <Card class="py-5">
      <div class="flex items-start justify-between">
        <h5 class="font-semibold text-gray-400 mb-2">Transactions</h5>
        <div
          class="bg-sky-100 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i class="ri-truck-line text-blue-700 text-lg"></i>
        </div>
      </div>
      <div class="mt-1 mb-4">
        <h1 class="text-3xl">0</h1>
      </div>
    </Card>
    <Card class="py-5">
      <div class="flex items-start justify-between">
        <h5 class="font-semibold text-gray-400 mb-2">Withdrawals</h5>
        <div
          class="bg-sky-100 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i class="bi bi-people text-blue-700 text-lg"></i>
        </div>
      </div>
      <div class="mt-1 mb-4">
        <h1 class="text-3xl">0</h1>
      </div>
    </Card>
    <Card class="py-5">
      <div class="flex items-start justify-between">
        <h5 class="font-semibold text-gray-400 mb-2">Total Deposit</h5>
        <div
          class="bg-sky-100 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i class="ri-briefcase-3-line text-blue-700 text-lg"></i>
        </div>
      </div>
      <div class="mt-1 mb-4">
        <h1 class="text-3xl">0</h1>
      </div>
    </Card>
    <Card class="py-5">
      <div class="flex items-start justify-between">
        <h5 class="font-semibold text-gray-400 mb-2">Balance</h5>
        <div
          class="bg-sky-100 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i class="ri-briefcase-3-line text-blue-700 text-lg"></i>
        </div>
      </div>
      <div class="mt-1 mb-4">
        <h1 class="text-3xl">0</h1>
      </div>
    </Card>
  </div>
  <Card class="py-5 mt-6">
    <div class="py-4">
      <h5 class="font-semibold text-gray-400 mb-2">Latest Transactions</h5>
    </div>
    <div class="mt-1 mb-4 flex">
      <h5 class="font-semibold text-gray-500 mb-2 w-1/4">Reference</h5>
      <h5 class="font-semibold text-gray-500 mb-2 w-1/4">Type</h5>
      <h5 class="font-semibold text-gray-500 mb-2 w-1/4">Amount</h5>
      <h5 class="font-semibold text-gray-500 mb-2 w-1/4">Description</h5>
    </div>
    <hr />
  </Card>
</template>
