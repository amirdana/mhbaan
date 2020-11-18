import Vue from "vue";
import VueRouter from "vue-router";

const Hello = () => import("./views/helloWorld.vue");
const Hi = () => import("./views/hi.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Hello,
    },
    {
      path: "/hi",
      name: "hi",
      component: Hi,
    },
  ],
});

export default router;
