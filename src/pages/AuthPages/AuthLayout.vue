<script setup></script>
<template>
  <div class="bg-[#F3F4F6] wrapper md-lg:flex gap-3 py-10">
    <div class="flex flex-col justify-center items-center md-lg:w-1/2">
      <div class="w-40 md-lg:w-60 mb-6">
        <img
          src="../../assets/images/easypay-1-logo.png"
          alt=""
          class="w-full"
        />
      </div>
      <p class="mt-3 hidden md-lg:block">
        Simplify your payments for electricity, TV subscription, airtime, and
        mobile data with our user-friendly and dependable payment solutions.
      </p>
    </div>
    <div class="md-lg:w-1/2">
      <slot>Let Love Lead!!!</slot>
    </div>
  </div>
</template>
<style scoped></style>
