<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import PageTitle from "../components/PageTitle.vue";
import Button from "../components/Button.vue";
const paymentOption = ref("Easy Pay Wallet");
</script>
<template>
  <div class="py-5 wrapper bg-[#F3F5F9]">
    <Card class="pt-8 pb-3 mb-6">
      <PageTitle title="Confirm your Transaction" />
    </Card>
    <div class="md:flex">
      <Card class="md:w-7/12">
        <h2 class="py-6 font-medium text-xl">Transaction Details</h2>
        <div class="flex my-3">
          <p class="w-8/12">Provider</p>
          <p class="w-4/12">MTN</p>
        </div>
        <div class="flex my-3">
          <p class="w-8/12">Mobile</p>
          <p class="w-4/12">08132094661</p>
        </div>
        <div class="flex my-3">
          <p class="w-8/12">Amount</p>
          <p class="w-4/12">300</p>
        </div>
        <hr />
        <div class="flex my-3">
          <p class="w-8/12 font-semibold">Total</p>
          <p class="w-4/12 font-medium">300</p>
        </div>
      </Card>
      <div class="mb-2 md:w-5/12">
        <h2 class="my-5 font-medium text-lg px-3">Select Payment Option</h2>
        <div
          class="payment-option py-3 pl-4"
          :class="{
            'focus-within:bg-white drop-shadow-lg': paymentOption,
            'focus-within:bg-none drop-shadow-none': !paymentOption,
          }"
        >
          <input
            v-model="paymentOption"
            type="radio"
            id="easypay"
            name="Wallet-Options"
            value="Easy Pay Wallet"
          />
            <label for="easypay">Easy pay wallet</label><br />
        </div>
        <div
          class="payment-option py-3 pl-4"
          :class="{
            'focus-within:bg-white drop-shadow-lg': paymentOption,
            'focus-within:bg-none drop-shadow-none': !paymentOption,
          }"
        >
          <input
            v-model="paymentOption"
            type="radio"
            id="PayStack"
            name="Wallet-Options"
            value="PayStack"
          />
            <label for="PayStack">PayStack</label><br />
        </div>
        <div
          class="payment-option py-3 pl-4"
          :class="{
            'focus-within:bg-white drop-shadow-lg': paymentOption,
            'focus-within:bg-none drop-shadow-none': !paymentOption,
          }"
        >
          <input
            v-model="paymentOption"
            type="radio"
            id="flutterWave"
            name="Wallet-Options"
            value="PayStack"
          />
          <label for="flutterWave">FlutterWave</label><br />
        </div>
        <div class="mt-2 mx-3">
          <Button />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.payment-option:focus-within {
  @apply bg-white drop-shadow-lg;
}
.payment-option:hover {
  @apply bg-white drop-shadow-lg;
}
</style>
08032347088
