<script setup>
import Card from "../components/Card.vue";
import { useProviderTab } from "../composable/getProvidersTab";
import Transaction from "../components/Transaction.vue";
const services = ["All", "Electricity", "Cable", "Airtime", "Data"];
const { selectTab, activeTab } = useProviderTab();
</script>
<template>
  <div class="py-5 wrapper bg-[#F3F5F9]">
    <Card>
      <div class="flex justify-between pt-8 pb-4">
        <h2 class="font-semibold text-xl">All Transactions</h2>
        <div class="dropdown">
          <span class="cursor-pointer">
            <i class="ri-filter-2-line"></i> Filter</span
          >
          <div class="dropdown-content">
            <div
              class="cursor-pointer py-1"
              v-for="(service, index) in services"
              :key="service"
              @click=""
            >
              {{ service }}
            </div>
            <!-- <div class="cursor-pointer py-1">Cable</div>
            <div class="cursor-pointer py-1">Airtime</div>
            <div class="cursor-pointer py-1">Data</div> -->
          </div>
        </div>
      </div>
      <Transaction />
    </Card>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
