import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Order from '@/views/Order.vue';
import Schedule from '@/views/Schedule.vue';
import Choose from '@/views/Choose.vue';
import Finish from '@/views/Finish.vue';
import Success from '@/views/Success.vue';
import store from '@/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'schedule',
          name: 'schedule',
          component: Schedule,
        },
        {
          path: 'choose',
          name: 'choose',
          component: Choose,
          beforeEnter(to, from, next) {
            if (store.getters.isScheduled) {
              next();
            } else {
              next('/order/schedule');
            }
          },
        },
        {
          path: 'finish',
          name: 'finish',
          component: Finish,
          beforeEnter(to, from, next) {
            if (store.getters.isScheduled && store.getters.cartItems.length > 0) {
              next();
            } else {
              next('/order/choose');
            }
          },
        },
      ],
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
      beforeEnter(to, from, next) {
        if (store.getters.checkedOut) {
          next();
        } else {
          next('/order/finish');
        }
      },
    },
  ],
});
