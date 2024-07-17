import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import DashBoardLayout from "../layouts/DashBoardLayout.vue";

const ElectricityForm = () =>
  import("../pages/electricity/ElectricityForm.vue");
const BuyAirtime = () => import("../pages/airtime/BuyAirtime.vue");
const BuyData = () => import("../pages/mobileData/BuyData.vue");
const BuyCable = () => import("../pages/BuyTvSub.vue");
const OrderSummary = () => import("../pages/OrderSummary.vue");
const EduCollect = () => import("../pages/EduCollect.vue");

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
      component: ElectricityForm,
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/edu-collect",
      component: EduCollect,
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
      component: BuyCable,
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
      path: "/profile",
      component: () => import("../pages/ProfilePage.vue"),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/user.electricity",
      component: ElectricityDiscos,
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
      component: BuyCable,
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
    {
      path: "/user.order-summary",
      component: OrderSummary,
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
