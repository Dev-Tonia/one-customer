<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Card from "../../components/Card.vue";
import { useOpenNavbarStore } from "../../store/openNavbar";
import PageTitle from "../../components/PageTitle.vue";
import Button from "../../components/Button.vue";
// import Layout from "../../components/Layout.vue";

const openSideBar = useOpenNavbarStore();
const selectOption = ref("");
const meterType = ref(["Prepaid", "Postpaid"]);
const route = useRoute();
const { name } = route.params;
const router = useRouter();

const distributionName = computed(() => {
  let title = name.split(" ");
  let firstCharacter = title[0].charAt(0).toUpperCase();
  return `Buy ${firstCharacter}${title[0].slice(1)} Token`;
});
</script>
<template>
  <div class="py-5 wrapper bg-[#F3F5F9]">
    <Card class="pb-3 pt-8 mb-2">
      <PageTitle
        :title="distributionName"
        subtitle="Hassle-free bill payments at your fingertips!"
      />
    </Card>
    <Card class="py-5">
      <Card
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen,
        }"
      >
        <form action="" method="post">
          <select
            id="account_type"
            name="account_type"
            class="bg-[#F3F5F9] rounded-lg"
            v-model="selectOption"
          >
            <option value="" disabled placeholder=" kkkkk">
              Select Meter Type
            </option>
            <option v-for="meter in meterType" :key="meter" :value="meter">
              {{ meter }}
            </option>
          </select>
          <input type="text" placeholder="Enter meter number " required />

          <input type="text" placeholder="Enter Phone Number" required />
          <input type="text" placeholder="Enter Email Address" />

          <div
            class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center"
          >
            <span>&#8358;</span>
            <input
              required
              type="Number"
              placeholder=" Amount"
              class="w-full bg-transparent pl-1 py-2 border-none outline-none"
            />
          </div>
          <Button @click="router.push('/order-summary')" />
        </form>
      </Card>
    </Card>
  </div>
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
select {
  @apply appearance-none  w-full  py-2 px-3 cursor-pointer outline-none;
}
</style>
