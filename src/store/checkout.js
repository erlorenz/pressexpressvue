import axios from 'axios';
import { createToken } from 'vue-stripe-elements-plus';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  status: null,
};

// Getters

const getters = {};

// Actions

const actions = {
  checkout: async ({ commit }, payload) => {
    const allCheckoutData = payload;

    commit('CHECKOUT_PENDING');

    try {
      const data = await createToken();
      console.log(data.token);
      allCheckoutData.stripeToken = data.token.id;
      const response = await axios.post('http://localhost:3001/checkout', allCheckoutData);
      console.log(response.data);
      commit('CHECKOUT_SUCCESS');
    } catch (e) {
      console.log(e.message);
      commit('CHECKOUT_ERROR');
    }
  },
};

// Mutations

const mutations = {
  CHECKOUT_SUCCESS: (state) => {
    state.status = 'success';
  },

  CHECKOUT_ERROR: (state) => {
    state.status = 'error';
  },

  CHECKOUT_PENDING: (state) => {
    state.status = 'pending';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
