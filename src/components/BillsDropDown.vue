<template>
  <!-- <div class="menu-item" @click="isOpen = !isOpen">

    <a href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <router-link to="/services/web">Web</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/services/design">Design</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/services/videos">Videos</router-link>
        </div>
      </div>
    </transition>
  </div> -->
  <div class="">
    <button @click="toggleShow" class="anchor">Pay Bills</button>
    <div v-if="showMenu" class="menu">
      <div
        class="menu-item left-0 right-0"
        v-for="bill in bills"
        :key="bill.routeTo"
      >
        <router-link :to="bill.routeTo" @click="toggleShow">
          {{ bill.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const showMenu = ref(false);

const bills = [
  { title: "Electricity", routeTo: "/electricity" },
  { title: "Cable Subscription", routeTo: "/buy-tv-sub" },
  { title: "Data Subscription", routeTo: "/buy-data" },
  { title: "Airtime Top up", routeTo: "/buy-airtime" },
];
function toggleShow() {
  showMenu.value = !showMenu.value;
}

// close link page after each link click
// const router = useRouter();

// router.afterEach(() => {
//   toggleShow();
// });
</script>

<style scoped>
.anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #27ae60;
  border-color: #27ae60;
}

.anchor::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.5em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.28em solid transparent;
  border-bottom: 0;
  border-left: 0.28em solid transparent;
}

.anchor:hover {
  color: #fff;
  background-color: #229954;
  border-color: #229954;
  cursor: pointer;
}

.menu {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  list-style: none;
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  position: absolute;
  text-align: left;
}

.menu-item {
  color: #212529;
  padding: 0.25rem 1.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.menu-item:hover {
  background-color: #f4f6f6;
  cursor: pointer;
}

span {
  font-weight: bold;
  color: #229954;
  font-size: 1.25rem;
}
</style>
