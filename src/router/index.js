import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import DashBoardLayout from "../layouts/DashBoardLayout.vue";

const ElectricityDiscos = () =>
  import(
    /* webpackChunkName: "electricity" */ "../pages/electricity/Electricity.vue"
  );
const ElectricityForm = () =>
  import(
    /* webpackChunkName: "electricity-form" */ "../pages/electricity/ElectricityForm.vue"
  );
const BuyAirtime = () =>
  import(
    /* webpackChunkName: "buy-airtime" */ "../pages/airtime/BuyAirtime.vue"
  );
const BuyData = () =>
  import(/* webpackChunkName: "buy-data" */ "../pages/mobileData/BuyData.vue");
const BuyCable = () =>
  import(/* webpackChunkName: "buy-cable" */ "../pages/BuyTvSub.vue");
const OrderSummary = () =>
  import(/* webpackChunkName: "order-summary" */ "../pages/OrderSummary.vue");
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "home-page" */ "../pages/HomePage.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/contact-us",
      component: () =>
        import(/* webpackChunkName: "contact-us" */ "../pages/ContactUs.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/about-us",
      component: () =>
        import(/* webpackChunkName: "about-us" */ "../pages/AboutUs.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/electricity",
      component: ElectricityDiscos,
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
      component: () =>
        import(
          /* webpackChunkName: "transactions" */ "../pages/TransactionPage.vue"
        ),
      meta: {
        layout: DashBoardLayout,
      },
    },
    {
      path: "/all-product",
      component: () =>
        import(
          /* webpackChunkName: "all-product" */ "../pages/productTab/AllProducts.vue"
        ),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/sign-up",
      component: () =>
        import(
          /* webpackChunkName: "sign-up" */ "../pages/AuthPages/SignUp.vue"
        ),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../pages/AuthPages/Login.vue"),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/retrieve-password",
      component: () =>
        import(
          /* webpackChunkName: "retrieve-password" */ "../pages/AuthPages/RetrievePassword.vue"
        ),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/change-password",
      component: () =>
        import(
          /* webpackChunkName: "change-password" */ "../pages/AuthPages/ChangePassword.vue"
        ),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: "/dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "../pages/Dashboard.vue"),
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
  ],
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
