<script setup>
import Button from "../components/Button.vue";
import Layout from "../components/Layout.vue";
import PageTitle from "../components/PageTitle.vue";
</script>
<template>
  <Layout class="bg-opacity-80 text-[#161617]">
    <div class="hero-sec"></div>
    <section class="">
      <!-- <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-500/50"> -->
      <div
        class="mb-28 mt-32 px-6 sm:w-10/12 mx-auto text-center h-full flex flex-col justify-center"
      >
        <div class="mb-8">
          <!-- <h1 class="text-3xl md:text-5xl font-bold mb-2">
            Welcome To <span class="title-1">EasyPay</span
            ><span class="title-2">Bills</span>
          </h1> -->
          <h1 class="text-3xl md:text-5xl font-bold mb-2">
            The <span class="title-1"> easiest</span> way to pay for your
            <span class="title-2">utility bills</span> online.
          </h1>
          <p class="md:mx-12">
            Pay bills with ease! Just a few clicks We handle the rest for YOU...
            Streamline Your Bill Payments with Our Convenient and Reliable
            Payment Solutions
          </p>
        </div>

        <div class="flex justify-center">
          <Button class="w-1/2"> Get Started</Button>
        </div>
      </div>
      <!-- </div> -->
    </section>
    <section class="services bg-green-500/[3%] px-6 pb-28 pt-32">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-semibold before:mr-1 after:ml-1">
          What We Offer
        </h2>
        <P class="md:w-8/12 mx-auto">
          <span class="title-1">Easypaybills</span> Your go-to platform for
          effortless bill payments and top-ups. Simplify your life with easy
          electricity bill payments, TV subscriptions, and airtime/data top-ups
          - all in one place!
        </P>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 service-item">
        <div
          class="service-card px-3 py-10 bg-white border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="icon-card h-12 w-12 rounded-full border-2 flex justify-center items-center"
          >
            <i class="ri-battery-charge-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">Electricity Bill</h3>
        </div>

        <div
          class="px-3 py-10 bg-white border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-phone-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">Airtime Top up</h3>
        </div>

        <div
          class="px-3 py-10 bg-white border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-global-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">Mobile Data</h3>
        </div>
        <div
          class="px-3 py-10 bg-white flex justify-center items-center flex-col border-2 rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-tv-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-lg font-semibold italic">Cable Tv</h3>
        </div>
      </div>
    </section>
    <section class="px-6 py-28">
      <div class="sm:flex flex-row-reverse items-center justify-center">
        <div class="mb-6 sm:mb-0">
          <img src="/mobile-phone.avif" alt="" />
        </div>
        <div class="mb-8">
          <PageTitle
            title="EasyPayBills Is Available On Mobile "
            subtitle=" Get more Done using your mobile device"
          />
          <p class="my-8 text-xl">
            Get started by downloading the EasyPayBills App on Google Play
          </p>
          <a href="https://play.google.com/" target="_blank" class="">
            <div class="overflow-hidden">
              <img src="/Googleapp.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="px-6 py-28 bg-primary/[3%]">
      <h2 class="text-3xl font-semibold before:mr-1 after:ml-1">Why Us</h2>
      <div class="sm:flex flex-row-reverse items-center justify-center">
        <div class="mb-6 sm:mb-0">
          <img src="/support-img-preview.png" alt="" class="w-full" />
        </div>
        <div class="mb-8 sm:w-1/2">
          <div class="mb-6 flex gap-1">
            <i class="ri-customer-service-2-fill text-2xl text-green-500"></i>
            <div>
              <h3 class="text-xl font-medium">Professional Support!</h3>
              <p>
                You Are Why We Are Here...Thats Why3We Are Bent On Giving YOU
                The Best Of Experiences. Our Support System Is Available 24/7 To
                Assist YOU With Anything. Just Reach out..
              </p>
            </div>
          </div>
          <div class="mb-6 flex gap-1">
            <i class="ri-radio-button-line text-3xl text-green-500"></i>
            <div>
              <h3 class="text-xl font-medium">Convince is an art</h3>
              <p>
                Simplify your bill payments effortlessly! With just a few
                clicks, you initiate the process, and we take care of the rest
                for you, ensuring a hassle-free experience.
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
    <section class="bg-black/90 px-6 py-10">
      <div
        class="bg-primary text-white -mt-16 sm:flex gap-2 items-center py-9 px-4"
      >
        <div class="sm:w-10/12">
          <h5 class="text-2xl">
            Building a startup or fintech, You can consume our end points
          </h5>
          <p class="title-2 font-bold text-2xl text-center">OR</p>
          <p>
            You are an entrepreneur aiming to launch or expand your business,
            Join us as one of our agents across the country and enjoy attractive
            incentives.
          </p>
        </div>
        <div class="flex w-full justify-center">
          <div class="">
            <p class="text-2xl font-bold text-center mb-5 mt-6 sm:mb-0">
              Are you All In?
            </p>
            <Button> Reach out to us.</Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.hero-sec {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: radial-gradient(
      circle at 85% 33%,
      rgba(0, 255, 235, 0.085),
      hsla(0, 0%, 100%, 0) 25%
    ),
    radial-gradient(
      circle at 12% 55%,
      rgba(108, 99, 255, 0.1),
      hsla(0, 0%, 100%, 0) 25%
    );
}
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
