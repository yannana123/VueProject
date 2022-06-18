import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 此为首页预加载，其余路由懒加载
    path: "/",
    redirect: "/home/index",
  },

  {
    path: "/home",
    name: "HomeView",
    component: HomeView,
    children: [
      {
        meta: {
          keepAlive: true, // 指明当前路由需要保活
        },
        path: "index",
        name: "index",
        component: () => import("../views/IndexView.vue"),
      },
      {
        path: "near",
        name: "near",
        component: () => import("../views/NearView.vue"),
      },
      {
        path: "sport",
        name: "sport",
        component: () => import("../views/SportsView.vue"),
      },
      {
        path: "friends",
        name: "Friends",
        component: () => import("../views/FriendsView.vue"),
      },
      {
        path: "user",
        name: "User",
        component: () => import("../views/UserCenter.vue"),
        // children: [
        //   {
        //     path: "myfriends",
        //     name: "myfriends",
        //     component: () => import("../views/MyFriends.vue"),
        //   },
        // ],
      },
    ],
  },
  {
    path: "/startsports",
    name: "startsports",
    component: () => import("../views/StartSports.vue"),
    meta: {
      title: "运动",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../views/View.vue"),
  },
  {
    path: "/registerWeight",
    name: "registerWeight",
    component: () => import("../views/RegisterWeight.vue"),
  },
  {
    path: "/RegisterHeight",
    name: "RegisterHeight",
    component: () => import("../views/RegisterHeight.vue"),
  },
  {
    path: "/registerAge",
    name: "registerAge",
    component: () => import("../views/RegisterAge.vue"),
  },
  {
    path: "/registerSex",
    name: "registerSex",
    component: () => import("../views/RegisterSex.vue"),
  },
  {
    path: "/friendcreate",
    name: "Friendscreate",
    component: () => import("../views/FriendsCreate.vue"),
  },
  {
    path: "/SetCenterUs",
    name: "SetCenterUs",
    component: () => import("../views/SetCenterUs.vue"),
  },
  {
    path: "/SetCenterPrivacy",
    name: "SetCenterPrivacy",
    component: () => import("../views/SetCenterPrivacy.vue"),
  },
  {
    path: "/SetCenterHealth",
    name: "SetCenterHealth",
    component: () => import("../views/SetCenterHealth.vue"),
  },
  {
    path: "/SetCenterAgreement",
    name: "SetCenterAgreement",
    component: () => import("../views/SetCenterAgreement.vue"),
  },
  {
    path: "/setcenter",
    name: "setcenter",
    component: () => import("../views/SetCenter.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
