<script setup>
const services = [
  {
    name: "Electricity Bill",
    icon: "ri-battery-charge-line",
  },
  {
    name: "Airtime Top up",
    icon: "ri-phone-line ",
  },
  {
    name: "Mobile Data",
    icon: "ri-global-line ",
  },
  {
    name: "Cable Tv",
    icon: "ri-tv-line ",
  },
  {
    name: "Edu Collect",
    icon: "ri-graduation-cap-fill",
  },
];
</script>
<template>
  <!-- <i class="text-xl text-gray-400" :class="item.icon"></i> -->

  <section
    class="services bg-green-500/[5%] wrapper py-20 flex flex-col items-center"
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

    <div class="max-w-5xl mx-auto p-4">
      <div class="flex flex-wrap items-center justify-center -mx-2">
        <div
          class="w-full sm:w-1/2 lg:w-1/3 p-2"
          v-for="service in services"
          :key="service.name"
        >
          <div
            class="bg-gray-100 p-4 shadow-md transform duration-[2000ms] flex justify-center items-center flex-col rounded-md ease-in-out hover:bg-primary/10 hover:border-green-500 transition-transform hover:shadow-lg hover:scale-105"
          >
            <div
              class="icon-card h-12 w-12 rounded-full border-2 flex justify-center items-center"
            >
              <i class="text-4xl" :class="service.icon"></i>
            </div>
            <h3 class="mt-3 text-base min-[450px]:text-lg font-semibold">
              {{ service.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="grid grid-cols-2 md:min-w-[300px] gap-5 md:gap-10 service-item justify-center"
    >
      <div class="flex justify-center">
        <div
          class="px-3 py-10 md:min-w-[300px] w-full bg-white 
          border-2 flex justify-center items-center flex-col rounded-md 
          drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="icon-card h-12 w-12 rounded-full border-2 flex justify-center items-center"
          >
            <i class="ri-battery-charge-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-base min-[450px]:text-lg font-semibold">
            Electricity Bill
          </h3>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="px-3 py-10 bg-white md:min-w-[300px] w-full border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-phone-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-base min-[450px]:text-lg font-semibold">
            Airtime Top up
          </h3>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="px-3 py-10 md:min-w-[300px] w-full bg-white border-2 flex justify-center items-center flex-col rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-global-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-base min-[450px]:text-lg font-semibold">
            Mobile Data
          </h3>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="px-3 py-10 md:min-w-[300px] w-full bg-white flex justify-center items-center flex-col border-2 rounded-md drop-shadow-2xl transition duration-[2000ms] ease-in-out hover:bg-primary hover:text-white hover:border-green-500"
        >
          <div
            class="h-12 w-12 rounded-full border flex justify-center items-center"
          >
            <i class="ri-tv-line text-4xl"></i>
          </div>
          <h3 class="mt-3 text-base min-[450px]:text-lg font-semibold">
            Cable Tv
          </h3>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style scoped></style>
