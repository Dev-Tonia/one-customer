<script setup>
import Button from "./Button.vue";
</script>

<template>
  <section class="bg-black/90 sm:px-20 pb-4 px-6">
    <div class="bg-primary/[5%]">
      <div class="text-white sm:flex gap-2 items-center py-9 px-4">
        <div class="sm:w-10/12">
          <h5 class="text-xl">
            Building a startup or fintech, You can consume our end points
          </h5>
          <!-- <p class="title-2 font-bold text-2xl text-center">OR</p> -->
          <h5 class="text-xl mt-8">
            You are an entrepreneur aiming to launch or expand your business,
            Join us as one of our agents across the country and enjoy attractive
            incentives.
          </h5>
        </div>
        <div class="flex w-full justify-center">
          <div class="">
            <p class="text-2xl font-bold text-center mb-5 mt-6 sm:mb-0">
              Are you All In?
            </p>
            <RouterLink to="/contact-us">
              <Button> Reach out to us.</Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style></style>
