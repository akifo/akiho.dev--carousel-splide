import { createRouter, createWebHashHistory } from "vue-router";
import PageHome from "./components/PageHome.vue";
import PageSplide from "./components/PageSplide.vue";
import PageSwiper from "./components/PageSwiper.vue";
import LayoutDefault from "./components/LayoutDefault.vue";

const routes = [
  {
    path: "/",
    component: LayoutDefault,
    children: [{ path: "", component: PageHome }],
  },
  {
    path: "/splide",
    component: LayoutDefault,
    children: [{ path: "", component: PageSplide }],
  },
  {
    path: "/swiper",
    component: LayoutDefault,
    children: [{ path: "", component: PageSwiper }],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
