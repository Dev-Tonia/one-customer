<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="w-64 bg-primary text-white fixed h-screen">
    <h1 class="text-lg py-[1.15rem] px-6 font-semibold">Easy Pay</h1>
    <ul>
      <p class="pt-6 px-6 pb-1 text-xs text-gray-200">Bill Payments</p>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <RouterLink
          to="/"
          active-class=" text-white "
          class="flex items-center gap-3"
        >
          <i
            class="ri-dashboard-line text-xl text-gray-400 hover:text-white"
          ></i>
          <span class="text-sm hover:text-gray-400">Dashborad</span>
        </RouterLink>
      </li>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <RouterLink to="/electricity" class="flex items-center gap-3">
          <i class="ri-battery-charge-line text-xl text-gray-400"></i>
          <span class="text-sm">Electricity Bill</span></RouterLink
        >
      </li>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <RouterLink to="/buy-airtime" class="flex items-center gap-3">
          <i class="ri-phone-line text-xl text-gray-400"></i>
          <span class="text-sm">Buy Airtime</span>
        </RouterLink>
      </li>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <RouterLink to="/buy-data" class="flex items-center gap-3">
          <i class="ri-global-line text-gray-400 text-xl"></i>
          <span class="text-sm">Buy Mobile Data</span>
        </RouterLink>
      </li>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <RouterLink to="/buy-tv-sub" class="flex items-center gap-3">
          <i class="ri-tv-line text-gray-400 text-xl"></i>
          <span class="text-sm">Buy TV Subscription</span>
        </RouterLink>
      </li>
      <p class="pt-6 pb-1 px-6 text-xs text-gray-200">Page</p>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <a href="#" class="flex items-center gap-3">
          <i class="ri-user-3-line text-gray-400 text-xl"></i>
          <span class="text-sm">View Profile</span>
        </a>
      </li>
      <li class="py-2 px-[26px] hover:bg-sideHover">
        <a href="#" class="flex items-center gap-3">
          <i class="ri-share-line text-gray-400 text-xl"></i>

          <span class="text-sm">Share</span>
        </a>
      </li>
    </ul>
    <form action="" method="post" class="py-2 px-[26px] hover:bg-sideHover">
      <button
        type="submit"
        class="py-2 px-6 bg-[#142340] shadow shadow-white flex items-center gap-3"
      >
        <i class="ri-login-box-line text-xl text-gray-400"></i>
        <span class="text-sm">Logout</span>
      </button>
    </form>
  </nav>
</template>
<style scoped>
li:hover i {
  @apply text-white;
}
li:hover span {
  @apply text-gray-400;
}
</style>
