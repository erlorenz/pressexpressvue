import axios from 'axios';
import { createToken } from 'vue-stripe-elements-plus';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {};

// Getters

const getters = {};

// Actions

const actions = {
  checkout: async ({ commit }, payload) => {
    const allCheckoutData = payload;
    try {
      const data = await createToken();
      console.log(data.token);
      allCheckoutData.stripeToken = data.token.id;
      const response = await axios.post('http://localhost:3001/checkout', allCheckoutData);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  },
};

// Mutations

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
