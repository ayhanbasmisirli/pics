import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CompanyDetail from "../components/CompanyDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/companies",
    name: "Companies",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Companies.vue")
  },
  {
    path: "/companies/:id",
    name: "Company",
    component: CompanyDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
