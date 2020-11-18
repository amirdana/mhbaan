import Vue from "vue";
import VueRouter from "vue-router";

const Hello = () => import("./views/helloWorld.vue");

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
  ],
});

export default router;
