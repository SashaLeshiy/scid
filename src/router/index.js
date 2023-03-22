import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cases',
    name: 'cases',
    component() {
      return import('../views/CasesView.vue');
    },
  },
  {
    path: '/for-business',
    name: 'for-business',
    component() {
      return import('../views/ForBusiness.vue');
    },
  },
  {
    path: '/services',
    name: 'services',
    component() {
      return import('../views/ServicesView.vue');
    },
  },
  {
    path: '/contacts',
    name: 'contacts',
    component() {
      return import('../views/ContactsView.vue');
    },
  },
  {
    path: '/call',
    name: 'call',
    component() {
      return import('../views/CallView.vue');
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404View',
    component() {
      return import('../views/404View.vue');
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
