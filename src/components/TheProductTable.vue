<template>


  <table class="product-table">
    <tr class="product-table__header">
      <th class="product-table__header-name"/>
      <th class="product-table__header-price"/>
      <th/>
    </tr>
    <tr
      v-for="product in products"
      :key="product.id"
      class="product-table__row">
      <td class="product-table__name">{{ product.name }}</td>
      <td class="product-table__price">${{ product.price /100 }}</td>
      <td class="product-table__add">
        <button
          @click="addToCart(product)">Add</button>
      </td>
    </tr>
  </table>


</template>


<script>

export default {
  name: 'TheProductTable',

  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },

  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', product);
    },
  },
};
</script>


<style lang="scss" scoped>
table,
th,
td {
  border-collapse: collapse;
  background-color: white;
}

td {
  border-top: 1px solid rgba(black, 0.2);
  height: $table-height;
  font-weight: 600;
}

th {
  height: $table-height;
}

.product-table__name {
  text-align: left;
  padding-left: 5%;
  width: 40%;
}

.product-table__price {
  text-align: right;
  width: 25%;
}

.product-table__add {
  padding-right: 3%;
  width: 25%;
  text-align: right;
  button {
    height: 75%;
    width: 80%;
    border: none;
    background-color: $theme-color-primary-light;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
