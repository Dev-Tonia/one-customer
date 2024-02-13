<script setup>
const { closeOverLay } = defineProps({
  closeOverLay: {
    type: Function,
  },
});
</script>
<template>
  <Teleport to="body">
    <div class="overlay flex items-center justify-center">
      <div class="bg-white mx-8 md:mx-0 px-8 py-10 rounded-lg md:w-7/12">
        <div class="flex justify-end mb-5">
          <i
            class="ri-close-circle-line text-4xl text-red-500 cursor-pointer"
            @click="closeOverLay"
          ></i>
        </div>
        <slot>Custom Modal!!</slot>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
.overlay {
  @apply fixed top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-90;
}
</style>
<!-- 

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

router.afterEach(() => {
  closeOverLay();
});
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

 -->
