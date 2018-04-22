import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home/home.vue';
import Studio from '@/pages/studio';
import Cart from '@/pages/cart';
import Legal from '@/pages/legal';
import Help from '@/pages/help';
import Listen from '@/pages/listen';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/studio',
      name: 'Step into the Studio',
      component: Studio,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/listen',
      name: 'Listen Live',
      component: Listen,
    },
    {
      path: '/help',
      name: 'Customer Service',
      component: Help,
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal,
    },
  ],
});
