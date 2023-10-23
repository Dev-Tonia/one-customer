import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Electricity from "../pages/Electricity/Electricity.vue";
import ElectricityForm from "../pages/Electricity/ElectricityForm.vue";
import BuyAirtime from "../pages/Airtime/BuyAirtime.vue";
import BuyData from "../pages/DataSub/BuyData.vue";
import BuyTvSub from "../pages/BuyTvSub.vue";
import OrderSummary from "../pages/OrderSummary.vue";
import HomePage from "../pages/HomePage.vue";
import ContactUs from "../pages/ContactUs.vue";
import AboutUs from "../pages/AboutUs.vue";
import MainLayout from "../layouts/MainLayout.vue";
import DashBoardLayout from "../layouts/DashBoardLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/contact-us",
      component: ContactUs,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/about-us",
      component: AboutUs,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/electricity",
      component: Electricity,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/electricity/:name",
      component: ElectricityForm,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/buy-airtime",
      component: BuyAirtime,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/buy-data",
      component: BuyData,
      meta: {
        layout: MainLayout,
      },
    },

    {
      path: "/buy-tv-sub",
      component: BuyTvSub,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/order-summary",
      component: OrderSummary,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/dashboard",
      component: Dashboard,
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.electricity",
      component: Electricity,
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.electricity/:name",
      component: ElectricityForm,
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.buy-airtime",
      component: BuyAirtime,
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.buy-data",
      component: BuyData,
      meta: {
        layout: DashBoardLayout,
      },
    },

    {
      path: "/user.buy-tv-sub",
      component: BuyTvSub,
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.order-summary",
      component: OrderSummary,
      meta: {
        layout: DashBoardLayout,
      },
    },
  ],
});

export default router;
