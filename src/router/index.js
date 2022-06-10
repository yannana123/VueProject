import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/friendcreate',
    name: 'Friendscreate',
    component: () => import('../views/FriendsCreate.vue'),
  },
  {
    path: '/friendsview',
    name: 'Friendsview',
    component: () => import('../views/FriendsView.vue'),
  },
  {
    // 此为首页预加载，其余路由懒加载
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
