import products from '@/store/products';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  added: [],
  all: products,
};

// Getters

const getters = {
  allProducts: state => state.all,

  cartItems: state =>
    state.added,

  cartTotal: state => state.added.reduce((total, cartItem) =>
    total + (cartItem.price * cartItem.quantity), 0),
};

// actions
const actions = {

};

const mutations = {
  ADD_TO_CART: (state, {
    price,
    id,
    name,
  }) => {
    const record = state.added.find(p => p.id === id);


    if (!record) {
      state.added.push({
        name,
        price,
        id,
        quantity: 1,
      });
    } else {
      record.quantity += 1;
    }
  },

  REMOVE_FROM_CART: (state, {
    id,
  }) => {
    const itemIndex = state.added.findIndex(p => p.id === id);
    state.added.splice(itemIndex, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
