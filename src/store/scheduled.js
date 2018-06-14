/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  scheduled: {},
};

// Getters

const getters = {
  scheduledData: state => state.scheduled,
};

// actions
const actions = {};

const mutations = {
  ADD_TO_SCHEDULED: (state, form) => {
    state.scheduled = form;
    state.previouslyScheduled = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
