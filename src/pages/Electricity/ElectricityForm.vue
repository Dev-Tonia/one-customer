<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Card from "../../components/Card.vue";
import { useOpenNavbarStore } from "../../store/openNavbar";
import PageTitle from "../../components/PageTitle.vue";
import PayElectricityFrom from "./PayElectricityFrom.vue";
import { useLayout } from "../../composable/getLayout";
const openSideBar = useOpenNavbarStore();
const route = useRoute();
const { name } = route.params;

const { layout } = useLayout();
const distributionName = computed(() => {
  let title = name.split(" ");
  let firstCharacter = title[0].charAt(0).toUpperCase();
  return `Buy ${firstCharacter}${title[0].slice(1)} Token`;
});
</script>
<template>
  <div class="pt-5 pb-10 wrapper bg-[#F3F5F9]">
    <Card class="pb-3 pt-8 mb-2">
      <PageTitle
        :title="distributionName"
        subtitle="Hassle-free bill payments at your fingertips!"
      />
    </Card>
    <Card class="py-5">
      <Card
        v-if="layout === 'DashBoardLayout'"
        class="mx-auto"
        :class="{
          'md:w-10/12': openSideBar.isOpen,
          'md:w-6/12': !openSideBar.isOpen,
        }"
      >
        <PayElectricityFrom :layout="layout" />
      </Card>
      <Card v-else class="mx-auto md:w-6/12">
        <PayElectricityFrom :layout="layout" />
      </Card>
    </Card>
  </div>
</template>
<style scoped>
input[type="text"] {
  @apply block w-full py-2 px-3 bg-[#F3F5F9] rounded-lg my-4 border-none outline-none;
}
input[type="text"]:disabled::placeholder {
  @apply text-black font-bold;
}
input::placeholder {
  @apply text-xs;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
select {
  @apply appearance-none  w-full  py-2 px-3 cursor-pointer outline-none;
}
</style>
