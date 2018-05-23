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
    state.added.map(({ id, quantity }) => {
      const product = state.all.find(p => p.id === id);
      return {
        name: product.name,
        price: product.price,
        quantity,
      };
    }),
};

// actions
const actions = {
  addToCart: ({ commit }, product) => {
    commit('ADD_TO_CART', {
      id: product.id,
    });
  },
};

const mutations = {
  ADD_TO_CART: (state, { id }) => {
    const record = state.added.find(p => p.id === id);

    if (!record) {
      state.added.push({
        id,
        quantity: 1,
      });
    } else {
      record.quantity += 1;
    }
  },

  REMOVE_FROM_CART: (state, { id }) => {
    const itemIndex = state.added.indexOf(id);
    state.added.splice(itemIndex, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
