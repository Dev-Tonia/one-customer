<script setup>
import Button from "../components/Button.vue";
// import Layout from "../components/Layout.vue";
import BecomeAgent from "../components/BecomeAgent.vue";

// import PageTitle from "../components/PageTitle.vue";
</script>
<template>
  <!-- <Layout class="bg-opacity-80 text-[#161617]"> -->
  <div class="hero-sec"></div>
  <section class="">
    <!-- <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-500/50"> -->
    <div class="mt-10 wrapper py-20 pb-6 sm:flex flex-row-reverse items-center">
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
        <div class="mt-4">
          <RouterLink to="/about-us">
            <Button class="w-1/2"> Get Started</Button>
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
  <section
    class="services bg-green-500/[3%] wrapper py-20 flex flex-col items-center"
  >
    <div class="text-center mb-8">
      <h2 class="text-3xl font-semibold before:mr-1 after:ml-1">
        What We Offer
      </h2>
      <P class="md:w-8/12 mx-auto">
        <span class="title-1">Easypaybills</span> Your go-to platform for
        effortless bill payments and top-ups. Simplify your life with easy
        electricity bill payments, TV subscriptions, and airtime/data top-ups -
        all in one place!
      </P>
    </div>

    <div
      class="grid grid-cols-2 max-w-[650px] gap-10 service-item justify-center"
    >
      <div class="flex justify-center">
        <div
          class="service-card px-3 py-10 min-w-[300px] w-full bg-white border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="icon-card h-12 w-12 rounded-full border-2 flex justify-center items-center"
          >
            <i class="ri-battery-charge-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold">Electricity Bill</h3>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="px-3 py-10 bg-white max-w-[300px] w-full border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-phone-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold">Airtime Top up</h3>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="px-3 py-10 max-w-[300px] w-full bg-white border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-global-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold">Mobile Data</h3>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="px-3 py-10 max-w-[300px] w-full bg-white flex justify-center items-center flex-col border-2 rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-tv-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold">Cable Tv</h3>
        </div>
      </div>
    </div>
  </section>
  <section class="wrapper py-20">
    <div class="sm:flex flex-row-reverse items-center justify-center">
      <div class="mb-6 sm:mb-0">
        <img src="/mobile-phone.avif" alt="" />
      </div>
      <div class="mb-8">
        <!-- <PageTitle
            subtitle=" Get more Done using your mobile device"
          /> -->
        <h3 class="font-semibold text-2xl">
          EasyPayBills Is Available On Mobile
        </h3>
        <p class="my-8 text-xl">
          Get started by downloading the EasyPayBills App on Google Play
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.easypay.onecustomer&pcampaignid=web_share"
          target="_blank"
          class=""
        >
          <div class="overflow-hidden">
            <img src="/Googleapp.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  </section>
  <section class="wrapper py-20 bg-primary/[3%]">
    <h2 class="text-3xl font-semibold text-center md:hidden">Why Us</h2>
    <div class="sm:flex flex-row-reverse items-center justify-center">
      <div class="mb-6 sm:mb-0">
        <img src="/support-img-preview.png" alt="" class="w-full" />
      </div>
      <div class="mb-8 sm:w-1/2">
        <h2 class="text-3xl font-semibold hidden md:block mb-5">Why Us</h2>

        <div class="mb-6 flex gap-1">
          <i class="ri-customer-service-2-fill text-2xl text-green-500"></i>
          <div>
            <h3 class="text-xl font-medium">Professional Support!</h3>
            <p>
              You Are Why We Are Here...Thats Why3We Are Bent On Giving YOU The
              Best Of Experiences. Our Support System Is Available 24/7 To
              Assist YOU With Anything. Just Reach out..
            </p>
          </div>
        </div>
        <div class="mb-6 flex gap-1">
          <i class="ri-radio-button-line text-3xl text-green-500"></i>
          <div>
            <h3 class="text-xl font-medium">Convince is an art</h3>
            <p>
              Simplify your bill payments effortlessly! With just a few clicks,
              you initiate the process, and we take care of the rest for you,
              ensuring a hassle-free experience.
            </p>
          </div>
        </div>
        <div class="mb-6 flex gap-1">
          <i class="ri-file-shield-2-fill text-3xl text-green-500"></i>
          <div>
            <h3 class="text-xl font-medium">
              Payment is protected and secure.
            </h3>
            <p>
              Enjoy fast and utterly secure transactions on EasyPayBills.
              Experience seamless payments without any interruptions, whether
              you prefer using your wallet, bank transfer, or card.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BecomeAgent />
  <!-- </Layout> -->
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
.services h2::after,
.services h2::before {
  @apply content-[''] w-10 h-[2px] bg-green-500 inline-block mb-2;
}
.services-item {
  box-shadow: 0px 7px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
