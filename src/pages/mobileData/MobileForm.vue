<script setup>
import { computed } from "vue";

import CustomSelectVue from "../../components/CustomSelect.vue";
import Button from "../../components/Button.vue";
import { useRouter } from "vue-router";
import { useBuyData } from "../../store/buyData";
const dataOption = useBuyData();
const router = useRouter();

const { activeTab } = defineProps(["activeTab"]);
console.log(activeTab);

const mtnValues = [
  {
    title: "100 DataPlan 100MB Daily Daily",
    value: "100 daily",
    amount: 100,
  },
  {
    title: "200 Data Plan 200MB 3-Day Plan Daily",
    value: "200 daily",
    amount: 200,
  },
];
const gloValues = [
  {
    title: "G 100 DataPlan 100MB Daily Daily",
    value: "100 daily",
    amount: 100,
  },
  {
    title: "G 200 Data Plan 200MB 3-Day Plan Daily",
    value: "200 daily",
    amount: 200,
  },
  {
    title: "G 350 1GB Daily Plan + 3mins Daily",
    value: "350 daily",
    amount: 350,
  },
];
const estisalateValue = [
  {
    title: " 9 350 1GB Daily Plan + 3mins Daily",
    value: "350 daily",
    amount: 350,
  },
  {
    title: " 9 600 2.5GB 2-Day Plan Daily",
    value: "600 daily",
    amount: 600,
  },
  {
    title: " 9  800 3GB 2-Days Bundle Daily",
    value: "800 daily",
    amount: 800,
  },
];
const airtelValue = [
  {
    title: "A 350 1GB Daily Plan + 3mins Daily",
    value: "350 daily",
    amount: 350,
  },
  {
    title: "A 600 2.5GB 2-Day Plan Daily",
    value: "600 daily",
    amount: 600,
  },
  {
    title: "A 800 3GB 2-Days Bundle Daily",
    value: "800 daily",
    amount: 800,
  },
];
const networkProvider = computed(() => {
  let returnValue;
  switch (activeTab) {
    case "MTN":
      dataOption.selectOption = {};
      returnValue = mtnValues;
      break;
    case "GLO":
      dataOption.selectOption = {};
      returnValue = gloValues;
      break;
    case "AIRTEL":
      dataOption.selectOption = {};
      returnValue = airtelValue;
      break;
    case "9MOBILE":
      dataOption.selectOption = {};
      returnValue = estisalateValue;
      break;
    default:
      dataOption.selectOption = {};
      returnValue = activeTab.value;
      break;
  }
  return returnValue;
});
</script>
<template>
  <form action="" method="post">
    <input
      required
      type="text"
      :placeholder="` Enter ${activeTab} Phone Number `"
    />
    <input required type="text" disabled :placeholder="`${activeTab} VTU`" />
    <div class="">
      <p v-if="networkProvider === ''" class="text-red-500 italic text-sm">
        Please choose your network provider
      </p>
      <CustomSelectVue :networkProvider="networkProvider" />
    </div>
    <div class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center">
      <span>&#8358;</span>
      <input
        required
        v-model="dataOption.selectOption.amount"
        disabled
        type="Number"
        placeholder=" Amount"
        class="w-full bg-transparent pl-1 py-2 border-none outline-none cursor-not-allowed"
      />
    </div>
    <Button @click="router.push('/order-summary')" />
  </form>
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

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
