import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';

const Order = () => import(/* webpackChunkName: "group-order" */ '@/views/Order.vue');
const Schedule = () => import(/* webpackChunkName: "group-order" */ '@/views/Schedule.vue');
const Choose = () => import(/* webpackChunkName: "group-order" */ '@/views/Choose.vue');
const Finish = () => import(/* webpackChunkName: "group-order" */ '@/views/Finish.vue');
const Success = () => import(/* webpackChunkName: "group-order" */ '@/views/Success.vue');

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
