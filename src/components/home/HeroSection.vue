<script setup>
import Button from "../Button.vue";
import OutlineButton from "../OutlineButton.vue";
</script>

<template>
  <div class="hero-sec"></div>
  <section class="">
    <!-- <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-500/50"> -->
    <div class="mt-10 wrapper pt-6 pb-10 sm:flex flex-row-reverse items-center">
      <div class="sm:w-6/12 overflow-hidden h-[450px]">
        <img src="/hero-bg.png" class="w-full object-contain h-full" alt="" />
      </div>
      <div class="mb-8 mt-6 sm:w-6/12">
        <h1 class="text-3xl md:text-5xl font-bold mb-2">
          The <span class="title-1"> easiest</span> way to pay your
          <span class="title-2">utility bills</span> online.
        </h1>
        <p class="">
          Streamline Your electricity bill, tv subscription, airtime to up and
          mobile data payments with Our Convenient and Reliable Payment
          Solutions
        </p>
        <div class="mt-4 flex gap-5">
          <RouterLink to="/sign-up">
            <Button class=" "> Get Started</Button>
          </RouterLink>
          <RouterLink to="/all-product">
            <OutlineButton
              class="text-primary border-green-500 hover:text-white hover:bg-green-500 hover:bg-opacity-50 hover:border-0"
              >Pay Bills</OutlineButton
            >
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<style scoped>
.title-1 {
  background: linear-gradient(30deg, #01004c, rgb(34 197 94), #01004c) 0 0 /400%
    100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 15s linear infinite;
}
.title-2 {
  background: linear-gradient(30deg, rgb(34 197 94), #01004c, rgb(34 197 94)) 0
    0 /400% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 15s linear infinite;
}
@keyframes move-bg {
  100% {
    background-position: 400% 0;
  }
}
</style>
