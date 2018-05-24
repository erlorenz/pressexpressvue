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

  cartProducts: state =>
    state.added.map(({
      id,
      quantity,
    }) => {
      const product = state.all.find(p => p.id === id);
      return {
        name: product.name,
        price: product.price,
        quantity,
        id: product.id,
      };
    }),
};

// actions
const actions = {

};

const mutations = {
  ADD_TO_CART: (state, {
    id,
  }) => {
    const record = state.added.find(p => p.id === id);
    console.log(record);

    if (!record) {
      state.added.push({
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
    console.log(itemIndex);
    state.added.splice(itemIndex, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
