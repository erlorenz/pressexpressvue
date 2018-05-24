/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  scheduled: {},
};

// Getters

const getters = {

};

// actions
const actions = {

};

const mutations = {
  ADD_TO_SCHEDULED: (state, scheduleForm) => {
    state.scheduled = scheduleForm;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
