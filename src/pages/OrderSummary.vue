<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import PageTitle from "../components/PageTitle.vue";
import Button from "../components/Button.vue";
const paymentOption = ref("Easy Pay Wallet");
</script>
<template>
  <Card class="pt-8 pb-3 mb-6">
    <PageTitle title="Confirm your Transaction" />
  </Card>
  <div class="flex">
    <Card class="w-7/12">
      <h2 class="my-6 font-medium text-xl">Transaction Details</h2>
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
    <div class="mb-2 w-5/12">
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
      <div class="payment-option py-3 pl-4">
        <input
          v-model="paymentOption"
          type="radio"
          id="PayStack"
          name="Wallet-Options"
          value="PayStack"
        />
          <label for="PayStack">PayStack</label><br />
      </div>
      <div class="payment-option py-3 pl-4">
        <input
          v-model="paymentOption"
          type="radio"
          id="Flutterwave"
          name="Wallet-Options"
          value="Flutterwave"
        />
        <label for="Flutterwave">Flutterwave</label><br />
      </div>
      <div class="mt-2 mx-3">
        <Button />
      </div>
    </div>
  </div>
  <div class="orderSummary"></div>
</template>
<style scoped>
input {
  @apply relative float-left  mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100  checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s];
}
.payment-option:focus-within {
  @apply bg-white drop-shadow-lg;
}
.payment-option:hover {
  @apply bg-white drop-shadow-lg;
}
</style>
