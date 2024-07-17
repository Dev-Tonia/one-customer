<script setup>
import HeroSection from "../components/home/HeroSection.vue";
import OfferSection from "../components/home/OfferSection.vue";
import MobileDownload from "../components/home/MobileDownload.vue";
import SupportSection from "../components/home/SupportSection.vue";
import WhyRegister from "../components/home/WhyRegister.vue";

// import PageTitle from "../components/PageTitle.vue";
</script>
<template>
  <HeroSection />
  <OfferSection />
  <MobileDownload />
  <SupportSection />
  <WhyRegister />
</template>

<style scoped>
.services h2::after,
.services h2::before {
  @apply content-[''] w-10 h-[2px] bg-green-500 inline-block mb-2;
}
</style>
