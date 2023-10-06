<script setup>
import Button from "../components/Button.vue";
import Layout from "../components/Layout.vue";
</script>
<template>
  <Layout class="">
    <div
      class="hero bg-[url('../../public/bg-background.jpg')] bg-no-repeat bg-right bg-cover h-[80vh] relative"
    >
      <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-500/50">
        <div
          class="text-white py-5 px-6 sm:w-2/4 h-full flex flex-col justify-center"
        >
          <div class="mb-8">
            <h1 class="text-3xl md:text-6xl font-bold mb-2">
              Welcome To <span class="text-primary">EasyPay</span
              ><span class="text-green-500">Bills</span>
            </h1>
            <p>
              Pay bills with ease! Just a few clicks We handle the rest for
              YOU...
            </p>
            <p>
              Streamline Your Bill Payments with Our Convenient and Reliable
              Payment Solutions
            </p>
          </div>
          <Button class="w-1/2"> Get Started</Button>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
/* @media (min-width: 900px) {
  .hero {
    background-position: top center;
    background-size: 100% 80vh;
  }
} */
</style>
