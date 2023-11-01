<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
const transactions = ref([
  {
    reference: "TXN001",
    type: "Sale",
    amount: "$100.00",
    description: "Product purchase",
    date: "2023-10-05",
  },
  {
    reference: "TXN002",
    type: "Refund",
    amount: "$20.00",
    description: "Refund for canceled order",
    date: "2023-11-15",
  },
]);
</script>
<template>
  <div class="py-5 wrapper bg-[#F3F5F9]">
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
      <div class="mt-1 mb-4 overflow-x-auto">
        <table class="w-full">
          <thead class="text-gray-500 uppercase font-semibold text-left">
            <tr class="mb-5">
              <th class="px-6 py-3">Reference</th>
              <th class="px-6 py-3">Type</th>
              <th class="px-6 py-3">Amount</th>
              <th class="px-6 py-3">Description</th>
              <th class="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <!-- Show a message if there are no transactions, or display transaction data -->
            <tr v-if="transactions.length === 0">
              <td colspan="4" class="text-gray-500 w-full text-center h-32">
                No transactions available.
              </td>
            </tr>
            <tr
              v-else
              v-for="(transaction, index) in transactions"
              :key="index"
              class="mb-5"
            >
              <td class="text-xs py-2 px-6 font-medium">
                {{ transaction.reference }}
              </td>
              <td class="text-xs py-2 px-6 font-medium">
                {{ transaction.type }}
              </td>
              <td class="text-xs py-2 px-6 font-medium">
                {{ transaction.amount }}
              </td>
              <td class="text-xs py-2 px-6 font-medium">
                {{ transaction.description }}
              </td>
              <td class="text-xs py-2 px-6 font-medium">
                {{ transaction.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
    </Card>
  </div>
</template>
