/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  scheduled: {
    hotel: '',
    room: '',
    pickupDate: '',
    pickupHour: '',
    returnDate: '',
    returnHour: '',
  },
};

// Getters

const getters = {
  scheduledData: state => state.scheduled,
  isScheduled(state) {
    const {
      hotel, room, pickupDate, pickupHour, returnDate, returnHour,
    } = state.scheduled;

    if (room && hotel && pickupDate && pickupHour && returnDate && returnHour) {
      return true;
    }
    return false;
  },
};

// actions
const actions = {};

const mutations = {
  ADD_TO_SCHEDULED(state, form) {
    state.scheduled = form;
    state.previouslyScheduled = true;
  },

  CLEAR_SCHEDULED(state) {
    state.scheduled = {};
  },

  UPDATE_HOTEL(state, payload) {
    state.scheduled.hotel = payload;
  },

  UPDATE_ROOM(state, payload) {
    state.scheduled.room = payload;
  },

  UPDATE_PICKUPDATE(state, payload) {
    state.scheduled.pickupDate = payload;
  },

  UPDATE_PICKUPHOUR(state, payload) {
    state.scheduled.pickupHour = payload;
  },

  UPDATE_RETURNDATE(state, payload) {
    state.scheduled.returnDate = payload;
  },

  UPDATE_RETURNHOUR(state, payload) {
    state.scheduled.returnHour = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
