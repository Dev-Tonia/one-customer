<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import Button from "../../components/Button.vue";
import { useLayout } from "../../composable/getLayout";
const router = useRouter();

const selectOption = ref("");
const meterType = ref(["Prepaid", "Postpaid"]);
// Getting the layout type from the composable
const { getRoutePathLayout } = useLayout();
</script>
<template>
  <form action="" method="post">
    <select
      id="account_type"
      name="account_type"
      class="bg-[#F3F5F9] rounded-lg"
      v-model="selectOption"
    >
      <option value="" disabled placeholder=" kkkkk">Select Meter Type</option>
      <option v-for="meter in meterType" :key="meter" :value="meter">
        {{ meter }}
      </option>
    </select>
    <input type="text" placeholder="Enter meter number " required />

    <input type="text" placeholder="Enter Phone Number" required />
    <input type="text" placeholder="Enter Email Address" />

    <div class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center">
      <span>&#8358;</span>
      <input
        required
        type="Number"
        placeholder=" Amount"
        class="w-full bg-transparent pl-1 py-2 border-none outline-none"
      />
    </div>
    <Button @click="router.push(getRoutePathLayout)" />
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
select {
  @apply appearance-none  w-full  py-2 px-3 cursor-pointer outline-none;
}
</style>
