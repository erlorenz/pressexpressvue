import axios from 'axios';
import { createToken } from 'vue-stripe-elements-plus';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  status: 'notCheckedOut',
  errorMessage: '',
  email: '',
  phone: '',
};

// Getters

const getters = {
  checkoutStatus: state => state.status,
  errorMessage: state => state.errorMessage,
  email: state => state.email,
  phone: state => state.phone,
};

// Actions

const actions = {
  checkout: async ({ commit }, payload) => {
    const allCheckoutData = payload;

    commit('CHECKOUT_PENDING');

    try {
      const data = await createToken();
      console.log(data.token);
      allCheckoutData.stripeToken = data.token.id;
      const response = await axios.post(
        'http://press-express-server.herokuapp.com/checkout',
        allCheckoutData,
      );
      console.log(response.data);
      commit('CHECKOUT_SUCCESS', allCheckoutData);
    } catch (e) {
      let errorMessage;
      if (e.response) {
        errorMessage = e.response.data.message;
        console.log(e.response);
      } else if (e.request) {
        errorMessage = 'We are currently experiencing technical issues. Please try again later.';
      } else {
        errorMessage = e.message;
      }
      console.log(errorMessage);
      commit('CHECKOUT_ERROR', errorMessage);
    }
  },
};

// Mutations

const mutations = {
  CHECKOUT_SUCCESS: (state, allCheckoutData) => {
    state.status = 'success';
    state.phone = allCheckoutData.phone;
    state.email = allCheckoutData.email;
  },

  CHECKOUT_ERROR: (state, errorMessage) => {
    state.status = 'error';
    state.errorMessage = errorMessage;
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
