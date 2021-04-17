import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "./components/Login.vue";
import MyProfile from "./components/MyProfile.vue";
import Home from "./components/Home.vue";
import MyRestaurant from "./components/MyRestaurant.vue";
import EditAccountDetails from "./components/EditAccountDetails.vue";
Vue.use(VueRouter);

const myRoutes: Array<RouteConfig> = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },

  {
    name: "MyProfile",
    path: "/MyProfile",
    component: MyProfile,
  },

  {
    name: "EditAccountDetails",
    path: "/EditAccountDetails",
    component: EditAccountDetails,
  },

  {
    name: "MyRestaurant>",
    path: "/MyRestaurant",
    component: MyRestaurant,
  },

  {
    name: "Home",
    path: "/Home",
    component: Home,
  }
];

export const AppRouter = new VueRouter({ 
  routes: myRoutes, 
  mode: "history" 
});   