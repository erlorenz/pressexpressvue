import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import cart from './cart';
import scheduled from './scheduled';

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
});

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },

  modules: {
    cart,
    scheduled,
  },

  plugins: [vuexLocal.plugin],

});
