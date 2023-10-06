<script setup>
import Button from "../components/Button.vue";
import Layout from "../components/Layout.vue";
</script>
<template>
  <Layout class="">
    <section
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
    </section>
    <section class="services bg-green-100/50 pt-14 pb-5 px-6">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-semibold before:mr-1 after:ml-1">
          Our Services
        </h2>
        <P class="md:w-8/12 mx-auto">
          <span class="text-green-500">Easypaybills</span> Your go-to platform
          for effortless bill payments and top-ups. Simplify your life with easy
          electricity bill payments, TV subscriptions, and airtime/data top-ups
          - all in one place!
        </P>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 service-item">
        <div class="">
          <div
            class="h-40 p-3 bg-white flex justify-center items-center overflow-hidden rounded-md drop-shadow-2xl"
          >
            <img
              src="/electricity-bill.png"
              alt="electricity-bill"
              class="w-full bg-contain h-full"
            />
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">Electricity Bill</h3>
        </div>
        <div>
          <div
            class="h-40 p-3 bg-white flex justify-center items-center overflow-hidden rounded-md drop-shadow-2xl"
          >
            <img
              src="/smartphone_7707715.png"
              alt="electricity-bill"
              class="w-full bg-contain h-full"
            />
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">Airtime Top up</h3>
        </div>
        <div>
          <div
            class="h-40 p-3 bg-white flex justify-center items-center overflow-hidden rounded-md drop-shadow-2xl"
          >
            <img
              src="/data.png"
              alt="electricity-bill"
              class="w-full bg-contain h-full"
            />
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">
            Mobile Data Subscription
          </h3>
        </div>
        <div>
          <div
            class="h-40 p-3 bg-white flex justify-center items-center overflow-hidden rounded-md drop-shadow-2xl"
          >
            <img
              src="/tv.png"
              alt="electricity-bill"
              class="w-full bg-contain h-full"
            />
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">
            Cable Tv subscription
          </h3>
        </div>
      </div>
    </section>
    <section></section>
  </Layout>
</template>
<style scoped>
.services h2::after,
.services h2::before {
  @apply content-[''] w-10 h-[2px] bg-green-500 inline-block mb-2;
}
.services-item {
  box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
