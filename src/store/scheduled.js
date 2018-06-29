/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  scheduled: null,
};

// Getters

const getters = {
  scheduledData: state => state.scheduled,
  isScheduled: (state) => {
    if (state.scheduled) {
      return true;
    }
    return false;
  },
};

// actions
const actions = {};

const mutations = {
  ADD_TO_SCHEDULED: (state, form) => {
    state.scheduled = form;
    state.previouslyScheduled = true;
  },

  CLEAR_SCHEDULED: (state) => {
    state.scheduled = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
