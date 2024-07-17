<script setup>
import { ref, computed } from "vue";
import ProviderCardVue from "../components/ProviderCard.vue";
import CardVue from "../components/Card.vue";
import Button from "../components/Button.vue";
import PageTitle from "../components/PageTitle.vue";
import CustomInput from "../components/CustomInput.vue";

// importing the store with list of all networkProviders
import { useOpenNavbarStore } from "../store/openNavbar";
import { useRouter } from "vue-router";

const router = useRouter();
const openSideBar = useOpenNavbarStore();
const activeTab = ref("");
const eduProviders = [
  {
    name: "Portharcourt Polytechnic",
    img: "https://res.cloudinary.com/tonia/image/upload/v1721218803/poly_t7jwii.jpg",
  },
];
function selectTab(tab) {
  activeTab.value = activeTab.value === tab ? "" : tab;
}

// form data
const formData = ref({
  name: "",
  id: "",
  session: "",
  level: "",
  amount: "",
});
</script>
<template>
  <div class="py-5 wrapper bg-[#F3F5F9]">
    <CardVue class="pb-3 pt-8">
      <PageTitle
        title="Pay your school fees with easy"
        subtitle="Transform your future, one payment at a time: Dive into a sea of knowledge and endless possibilities."
      />
      <div
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen,
        }"
      >
        <h5 class="text-lg font-medium mb-2 mt-6">Choose your School</h5>
        <div class="grid grid-cols-2 min-[420px]:flex pt-0">
          <ProviderCardVue
            class=""
            v-for="provider in eduProviders"
            :provider="provider"
            :key="provider.name"
            @click="selectTab(provider.name)"
            :activeTab="activeTab"
          >
            <div
              class="h-20 w-20 rounded-md overflow-hidden flex items-center justify-center"
            >
              <img :src="provider.img" alt="" class="w-full bg-cover" />
            </div>
            <p class="text-center text-sm md:text-base mt-2">
              {{ provider.name }}
            </p>
          </ProviderCardVue>
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
        <h2 class="italic text-lg md:text-xl font-semibold text-center">
          Pay your school fees
        </h2>
        <form action="" method="post">
          <CustomInput placeholder="Student name" v-model="formData.name" />
          <CustomInput placeholder="Student Id" v-model="formData.id" />
          <CustomInput placeholder="Session" v-model="formData.session" />
          <CustomInput placeholder="Level" v-model="formData.level" />
          <div
            class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center"
          >
            <span>&#8358;</span>
            <input
              required
              type="Number"
              placeholder=" Amount"
              v-model="formData.amount"
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
