import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/module/vuexpersist",
      name: "vuexpersist",
      component: () => import("@/views/pages/VuexPersistTest.vue"),
    },
    {
      path: "/module/vuexvmodel",
      name: "vuexvmodel",
      component: () => import("@/views/pages/VuexVModelTest.vue"),
    },
  ],
});
