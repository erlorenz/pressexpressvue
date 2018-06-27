import products from '@/store/products';

/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

const state = {
  added: [],
  all: products,
};

// Getters

const getters = {
  allProducts: state => state.all,

  cartItems: state => state.added,

  cartTotal: state =>
    state.added.reduce((acc, cartItem) => {
      const totalPrice = cartItem.price * cartItem.quantity;
      return acc + totalPrice;
    }, 0),

  totalPrice: (state, getters) => {
    if (getters.cartTotal < 3000) {
      return 3000;
    }
    return getters.cartTotal;
  },
};

// actions
const actions = {};

const mutations = {
  ADD_TO_CART: (state, {
    price,
    id,
    name
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

  REMOVE_FROM_CART: (state, index) => {
    state.added.splice(index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};