import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Order from '@/views/Order.vue';
import Schedule from '@/views/Schedule.vue';
import Choose from '@/views/Choose.vue';
import Finish from '@/views/Finish.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [{
      path: 'schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      path: 'choose',
      name: 'choose',
      component: Choose,
    },
    {
      path: 'finish',
      name: 'finish',
      component: Finish,
    },
    ],
  },
  ],
});
