<script setup>
import LayoutVue from "../../components/Layout.vue";
import NetworkCard from "../../components/NetworkCard.vue";
import CardVue from "../../components/Card.vue";
import { useOpenNavbarStore } from "../../store/openNavbar";
import PageTitle from "../../components/PageTitle.vue";
const openSideBar = useOpenNavbarStore();
let providers = [
  {
    name: "Port-Harcourt Electricity Distribution ",
    img: "https://res.cloudinary.com/tonia/image/upload/v1695978855/eledis/Port_bbbyo1.jpg",
  },
  {
    name: "Abuja electricity distribution company",
    img: "https://res.cloudinary.com/tonia/image/upload/v1695978572/eledis/Abuja_gaslmf.jpg",
  },
  {
    name: "Enugu electricity distribution company ",
    img: "https://res.cloudinary.com/tonia/image/upload/v1695978777/eledis/Enugu_mckr7r.jpg",
  },
  {
    name: "Eko electricity distribution company",
    img: "https://res.cloudinary.com/tonia/image/upload/v1695978592/eledis/Eko_bul3cu.jpg",
  },
  {
    name: "Ibadan Electricity Distribution Company",
    img: "https://res.cloudinary.com/tonia/image/upload/v1695978854/eledis/IBEDC_mgttik.jpg",
  },
  {
    name: "ikeja electricity distribution company",
    img: "https://res.cloudinary.com/tonia/image/upload/v1695978854/eledis/Ikeja_j9zlhz.jpg",
  },
];
</script>
<template>
  <LayoutVue>
    <CardVue class="pb-5 pt-8 mb-6">
      <PageTitle
        title="Select Your Distribution Company"
        subtitle="Experience seamless power with us – where reliability
      meets innovation. Pay for prepaid and postpaid bill with us today! ⚡✨ "
      />
    </CardVue>
    <div
      class="grid gap-4"
      :class="{
        'md:grid-cols-2': openSideBar.isOpen,
        'md:grid-cols-3': !openSideBar.isOpen,
      }"
    >
      <div class="" v-for="provider in providers">
        <RouterLink :to="`/electricity/${provider.name}`">
          <NetworkCard
            :provider="provider"
            :key="provider.name"
            class="transform transition duration-500 hover:scale-[1.05]"
          />
        </RouterLink>
      </div>
    </div>
  </LayoutVue>
</template>
<style></style>
