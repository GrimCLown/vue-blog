import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HeroView from "../views/HeroView.vue";
import ContentView from "../views/ContentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hero", // The URL path
      name: "HeroView",
      component: HeroView, // The component to render when navigating to this path
    },
    {
      path: "/contentview", // The URL path
      name: "ContentView",
      component: ContentView, // The component to render when navigating to this path
    },
  ],
});

export default router;
