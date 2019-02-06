import Vue from "vue";
import VueRouter from "vue-router";
import Cats from "./components/Cats";
import Homes from "./components/Homes";
import Dashboard from "./components/Dashboard";
import HelloWorld from "./components/HelloWorld";
import Settings from "./components/Settings";

Vue.use(VueRouter);

const routes = [
  { path: "/homes", component: Homes },
  { path: "/cats", component: Cats },
  { path: "/dashboard", component: Dashboard },
  { path: "/settings", component: Settings },
  { path: "/hello-world", component: HelloWorld },
  { path: "*", redirect: "/hello-world" }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
