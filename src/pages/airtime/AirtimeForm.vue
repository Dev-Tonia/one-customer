<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import Button from "../../components/Button.vue";
const { activeTab } = defineProps(["activeTab"]);
console.log(activeTab);
</script>
<template>
  <form action="" method="post">
    <input type="text" :placeholder="` Enter ${activeTab} Phone Number `" />
    <input type="text" disabled :placeholder="` ${activeTab} VTU`" />
    <div class="flex w-full px-3 bg-[#F3F5F9] rounded-lg my-4 items-center">
      <span>&#8358;</span>
      <input
        type="Number"
        placeholder=" Amount"
        class="w-full bg-transparent pl-1 py-2 border-none outline-none"
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
