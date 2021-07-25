import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Area from "../views/Area.vue";
import Club from "../views/Club.vue";
import Player from "../views/Player.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/area",
    name: "Area",
    component: Area,
  },
  {
    path: "/club",
    name: "Club",
    component: Club,
  },
  {
    path: "/player",
    name: "Player",
    component: Player,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
