<script setup>
import Breadcrum from "../components/Breadcrum.vue";
// import Layout from "../components/Layout.vue";
import BecomeAgent from "../components/BecomeAgent.vue";

const ourValues = [
  "Passion",
  "Reliability",
  "Integrity",
  "Commitment",
  "Excellence",
  "Dependability",
  "Teamwork",
  "Hard work",
];
</script>
<template>
  <!-- <Layout> -->
  <section class="hero h-[60vh] relative">
    <h1
      class="text-5xl text-white font-bold text-center flex justify-center items-center h-full"
    >
      About Us
    </h1>
  </section>
  <section class="sm:px-20 pb-4 px-6 relative">
    <div class="hero-sec"></div>

    <div class="md:flex items-center">
      <div class="md:w-7/12">
        <h2 class="mb-6 mt-9 text-3xl font-medium">Who We Are</h2>

        <p class="mb-4">
          EasypayBills is your all-in-one utility service provider committed to
          making your life easier. We provide secure and reliable payment
          solutions for Electricity and other utility companies. We are in the
          business of providing you with the best experiences, making bill
          payment a breeze with just a few clicks.
        </p>
        <p>
          EasypayBills currently fully handles cash office management for PHED
          with a customer base numbering over a million across Rivers, Cross
          River, Bayelsa and Akwa Ibom states. We have also established over 600
          agent locations across these four states and through this, customers
          have greater access to convenient payments.
        </p>
      </div>
      <div class="md:flex justify-center items-center hidden md:w-5/12">
        <img src="/Onboarding-bro.png" alt="" class="w-full object-cover" />
      </div>
    </div>
  </section>
  <section class="sm:px-20 pb-4 px-6">
    <h2 class="mb-6 mt-9 text-2xl font-medium">Know More About us</h2>
    <div class="sm:flex gap-4">
      <div class="flex flex-col justify-center items-center px-8 py-3 border-2">
        <div
          class="p-3 rounded-full border border-primary w-12 h-12 flex justify-center items-center"
        >
          <i class="ri-flag-fill text-4xl text-green-500"></i>
        </div>
        <h5 class="font-medium mb-5 mt-3 text-center">MISSION STATEMENT</h5>

        <p class="text-center">
          To establish collections points and employing secure e-channels using
          technology to seamlessly serve a diverse customer mix both offline and
          online 24/7.
        </p>
      </div>
      <div
        class="flex flex-col justify-center items-center px-8 py-3 border mt-5"
      >
        <div
          class="p-3 rounded-full border border-primary w-12 h-12 flex justify-center items-center"
        >
          <i class="ri-eye-fill text-4xl text-green-500"></i>
        </div>
        <h5 class="font-medium mb-5 mt-3 text-center">VISION STATEMENT</h5>
        <p class="text-center">
          To be a first-class utility collections service provider by providing
          trusted channels and payment points at the convenience of our
          customers.
        </p>
      </div>
    </div>
  </section>
  <section class="py-7 bg-primary/[3%]">
    <h3 class="text-center text-2xl font-medium">Our Core Values</h3>
    <div class="relative flex overflow-x-hidden">
      <div class="py-12 animate-marquee whitespace-nowrap">
        <Breadcrum
          v-for="(value, index) in ourValues"
          :key="index"
          :title="value"
        />
      </div>

      <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <Breadcrum
          v-for="(value, index) in ourValues"
          :key="index"
          :title="value"
        />
      </div>
    </div>
  </section>
  <BecomeAgent />
  <!-- </Layout> -->
</template>
<style scoped>
.hero::before {
  content: "";
  background: url("/about.jpg") no-repeat center center/ cover;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -3;
}
.hero::after {
  content: "";
  background: rgba(1, 0, 76, 0.3);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: -2;
}
</style>
