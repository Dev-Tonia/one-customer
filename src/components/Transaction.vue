<script setup>
import { ref } from "vue";
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
</template>

<style lang=""></style>
