<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Button from "./Button.vue";
const NavItems = ref([
  { title: "Dashboard", icon: "ri-dashboard-line", routeTo: "/dashboard" },
  {
    title: "Electricity Bill",
    icon: "ri-battery-charge-line",
    routeTo: "/user.electricity",
  },
  {
    title: "Buy Airtime",
    icon: "ri-phone-line text-xl",
    routeTo: "/user.buy-airtime",
  },
  {
    title: "Buy Mobile Data",
    icon: "ri-global-line",
    routeTo: "/user.buy-data",
  },
  {
    title: "Buy TV Subscription",
    icon: "ri-tv-line",
    routeTo: "/user.buy-tv-sub",
  },
  {
    title: "Edu Collect",
    icon: "ri-graduation-cap-fill",
    routeTo: "/edu-collect",
  },
]);
</script>
<template>
  <div class="fixed h-full">
    <nav class="bg-gray-50 h-full text-gray-900 overflow-y-auto">
      <div class="py-[1.15rem] px-6 flex items-center justify-between">
        <RouterLink to="/">
          <!-- <h1 class="text-lg  font-semibold">Easy Pay</h1> -->
          <div class="h-12 flex justify-center p-1">
            <img
              src="../assets/images/easypay-1-logo.png"
              alt=""
              class="bg-contain w-full"
            />
          </div>
        </RouterLink>
        <div
          class="md:hidden w-7 h-7 flex items-center justify-center rounded-full transition ease-in-out delay-150 hover:bg-green-500 hover:transition ease-in-out"
        >
          <i class="ri-close-fill text-4xl p-2"></i>
        </div>
      </div>

      <ul class="">
        <p class="pt-6 px-6 pb-1 text-xs text-gray-800">Bill Payments</p>
        <li
          class="py-2 px-[26px] hover:bg-sideHover"
          v-for="item in NavItems"
          :key="item.icon"
        >
          <RouterLink
            :to="item.routeTo"
            class="flex items-center gap-3"
            active-class="active"
          >
            <i class="text-xl text-gray-400" :class="item.icon"></i>
            <span class="text-sm hover:text-gray-400">{{ item.title }}</span>
          </RouterLink>
        </li>

        <p class="pt-6 pb-1 px-6 text-xs text-gray-800">Page</p>
        <li class="py-2 px-[26px] hover:bg-sideHover">
          <RouterLink
            to="profile"
            active-class="active"
            class="flex items-center gap-3"
          >
            <i class="ri-exchange-funds-line text-gray-400 text-xl"></i>
            <span class="text-sm">Profile</span>
          </RouterLink>
        </li>
        <li class="py-2 px-[26px] hover:bg-sideHover">
          <RouterLink
            to="transactions"
            active-class="active"
            class="flex items-center gap-3"
          >
            <i class="ri-exchange-funds-line text-gray-400 text-xl"></i>
            <span class="text-sm">Transactions</span>
          </RouterLink>
        </li>
        <li class="py-2 px-[26px] hover:bg-sideHover">
          <a href="#" class="flex items-center gap-3">
            <i class="ri-share-line text-gray-400 text-xl"></i>

            <span class="text-sm">Share</span>
          </a>
        </li>
      </ul>
      <form action="" method="post" class="py-2 px-[26px] hover:bg-sideHover">
        <Button
          type="submit"
          class="py-2 px-6 shadow shadow-primary flex items-center gap-3"
        >
          <i class="ri-login-box-line text-xl"></i>
          <span class="text-sm">Logout</span>
        </Button>
      </form>
    </nav>
  </div>
</template>
<style scoped>
li:hover i {
  @apply text-green-500;
}
li:hover span {
  @apply text-gray-400;
}
.active {
  @apply text-primary font-bold;
}
.active i {
  @apply text-green-500;
}

/* img {
  filter: grayscale(1) invert(1);
} */
</style>
