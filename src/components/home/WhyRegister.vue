<template>
  <section class="wrapper py-20">
    <div
      class="card py-20 rounded-xl px-5 text-white flex items-center justify-center flex-col"
    >
      <h6 class="text-2xl w-7/12 mx-auto text-center font-semibold">
        Sign Up to be able to track all your transaction and reference them when
      </h6>
      <Button class="my-5" color="bg-white text-black" />
    </div>
  </section>
</template>

<script setup>
import Button from "../Button.vue";
</script>

<style scoped>
.card {
  background: linear-gradient(
      100deg,
      rgba(1, 0, 76, 0.8),
      rgba(34, 197, 94, 0.8) 99.02%
    ),
    url("/about.jpg") no-repeat center center/ cover;
}
</style>
