<script setup>
import { ref } from "vue";
import SideBarVue from "./SideBar.vue";
import { useRouter } from "vue-router";

const showOverlay = ref(true);

// close link page after each link click
const router = useRouter();
function closeOverLay() {
  if (showOverlay.value) {
    showOverlay.value = !showOverlay.value;
  }
}

// router.afterEach(() => {
//   closeOverLay();
// });
</script>
<template>
  <div class="overlay" v-if="showOverlay" @click="closeOverLay">
    <SideBarVue class="w-3/4 min-[450px]:w-2/4" />
  </div>
</template>
<style scoped>
.overlay {
  @apply fixed top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-70;
}
</style>
