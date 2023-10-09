import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Electricity from "../pages/Electricity/Electricity.vue";
import ElectricityForm from "../pages/Electricity/ElectricityForm.vue";
import BuyAirtime from "../pages/BuyAirtime.vue";
import BuyData from "../pages/BuyData.vue";
import BuyTvSub from "../pages/BuyTvSub.vue";
import OrderSummary from "../pages/OrderSummary.vue";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/electricity",
      component: Electricity,
    },
    {
      path: "/electricity/:name",
      component: ElectricityForm,
    },
    {
      path: "/buy-airtime",
      component: BuyAirtime,
    },
    {
      path: "/buy-data",
      component: BuyData,
    },
    {
      path: "/buy-tv-sub",
      component: BuyTvSub,
    },
    {
      path: "/order-summary",
      component: OrderSummary,
    },
  ],
});

export default router;
