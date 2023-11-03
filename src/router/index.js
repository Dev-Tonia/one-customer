import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Electricity from "../pages/electricity/Electricity.vue";
import ElectricityForm from "../pages/electricity/ElectricityForm.vue";
import BuyAirtime from "../pages/airtime/BuyAirtime.vue";
import BuyData from "../pages/mobileData/BuyData.vue";
import BuyTvSub from "../pages/BuyTvSub.vue";
import OrderSummary from "../pages/OrderSummary.vue";
import HomePage from "../pages/HomePage.vue";
import ContactUs from "../pages/ContactUs.vue";
import AboutUs from "../pages/AboutUs.vue";
import MainLayout from "../layouts/MainLayout.vue";
import DashBoardLayout from "../layouts/DashBoardLayout.vue";
import SignUp from "../pages/AuthPages/SignUp.vue";
import Login from "../pages/AuthPages/Login.vue";
import RetrievePassword from "../pages/AuthPages/RetrievePassword.vue";
import ChangePassword from "../pages/AuthPages/ChangePassword.vue";
import AllProduct from "../pages/productTab/AllProducts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/HomePage.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/contact-us",
      component: () => import("../pages/ContactUs.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/about-us",
      component: () => import("../pages/AboutUs.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/electricity",
      component: () => import("../pages/electricity/Electricity.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/electricity/:name",
      component: () => import("../pages/electricity/ElectricityForm.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/buy-airtime",
      component: () => import("../pages/airtime/BuyAirtime.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/buy-data",
      component: () => import("../pages/mobileData/BuyData.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/buy-tv-sub",
      component: () => import("../pages/BuyTvSub.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/order-summary",
      component: () => import("../pages/OrderSummary.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/transactions",
      component: () => import("../pages/TransactionPage.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/all-product",
      component: () => import("../pages/productTab/AllProducts.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/sign-up",
      component: () => import("../pages/AuthPages/SignUp.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/login",
      component: () => import("../pages/AuthPages/Login.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/retrieve-password",
      component: () => import("../pages/AuthPages/RetrievePassword.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/change-password",
      component: () => import("../pages/AuthPages/ChangePassword.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/dashboard",
      component: () => import("../pages/Dashboard.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.electricity",
      component: () => import("../pages/electricity/Electricity.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.electricity/:name",
      component: () => import("../pages/electricity/ElectricityForm.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.buy-airtime",
      component: () => import("../pages/airtime/BuyAirtime.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.buy-data",
      component: () => import("../pages/mobileData/BuyData.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.buy-tv-sub",
      component: () => import("../pages/BuyTvSub.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.order-summary",
      component: () => import("../pages/OrderSummary.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
