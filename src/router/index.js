import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/bloglist",
      name: "BlogListing",
      component: () => import("@/views/BlogListing.vue"),
    },
    {
      path: "/singlepost",
      name: "SinglePost",
      component: () => import("@/views/SinglePost.vue"),
    },
  ],
});

export default router;
