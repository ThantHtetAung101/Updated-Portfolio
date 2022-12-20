import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import ErrorFoF from "./components/ErrorFoF.vue";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LandingPage,
    },
    {
      path: "/404",
      component: ErrorFoF,
    },
  ],
});
