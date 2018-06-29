import axios from 'axios';
import { createToken } from 'vue-stripe-elements-plus';
import router from '../../router';
import validation from './validation';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  checkedOut: false,
  requestPending: false,
  errorMessage: '',
  email: '',
  phone: '',
  textSent: null,
  emailSent: null,
};

// --------------------------------------Getters

const getters = {
  checkedOut: state => state.checkedOut,
  errorMessage: state => state.errorMessage,
  email: state => state.email,
  phone: state => state.phone,
  requestPending: state => state.requestPending,
  textSent: state => state.textSent,
  emailSent: state => state.emailSent,
};

// --------------------------------------Actions

const actions = {
  checkout: async ({ commit, dispatch }, payload) => {
    const allCheckoutData = payload;

    // Start the spinner
    commit('CHECKOUT_PENDING');

    try {
      // Final validation
      validation(allCheckoutData);

      // Get stripe token
      const data = await createToken();
      console.log(data.token.id);
      allCheckoutData.stripeToken = data.token.id;

      // Send data to  server
      const response = await axios.post(
        'https://press-express-staging.herokuapp.com/checkout',
        allCheckoutData,
      );
      console.log(response.data);

      // Check if email, text worked
      if (response.data.twilio === 'error') {
        allCheckoutData.twilioSent = false;
      } else {
        allCheckoutData.twilioSent = true;
      }

      if (response.data.mailjet === 'error') {
        allCheckoutData.mailjetSent = false;
      } else {
        allCheckoutData.mailjetSent = true;
      }

      // Update state
      commit('CHECKOUT_SUCCESS', allCheckoutData);
      commit('CLEAR_CART');
      commit('CLEAR_SCHEDULED');

      // Remove from localstorage
      localStorage.removeItem('vuex');

      // Go to success page
      router.push({ name: 'success' });

      // Catch the error
    } catch (e) {
      let errorMessage;

      // Error response from server
      if (e.response) {
        errorMessage = e.response.data.message;

        // No response from server
      } else if (e.request) {
        errorMessage = 'We are currently experiencing technical issues. Please try again later.';

        // Misc exception
      } else {
        errorMessage = e.message;
      }
      dispatch('checkoutError', errorMessage);
    }
  },

  checkoutError: async ({ commit }, errorMessage) => {
    commit('CHECKOUT_SHOW_ERROR', errorMessage);

    await setTimeout(() => commit('CHECKOUT_HIDE_ERROR'), 5000);
  },
};

// ---------------------------------------------------Mutations

const mutations = {
  CHECKOUT_SUCCESS: (state, {
    phone, email, twilioSent, mailjetSent,
  }) => {
    state.checkedOut = true;
    state.phone = phone;
    state.email = email;
    state.textSent = twilioSent;
    state.emailSent = mailjetSent;
    state.requestPending = false;
    console.log('mailjet:', mailjetSent);
  },

  CHECKOUT_SHOW_ERROR: (state, errorMessage) => {
    state.errorMessage = errorMessage;
    state.requestPending = false;
  },

  CHECKOUT_HIDE_ERROR: (state) => {
    state.errorMessage = '';
  },

  CHECKOUT_PENDING: (state) => {
    state.requestPending = true;
  },

  RESET_ALL: (state) => {
    state.emailSent = null;
    state.textSent = null;
    state.email = '';
    state.phone = '';
    state.checkedOut = false;
    localStorage.removeItem('vuex');
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
