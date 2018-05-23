<template>
  <div>

    <table class="product-table">
      <tr class="product-table__header">
        <th class="product-table__header-name">Item</th>
        <th class="product-table__header-price">Price</th>
        <th/>
      </tr>
      <tr
        v-for="product in products"
        :key="product.id">
        <td class="product-table__name">{{ product.name }}</td>
        <td class="product-table__price">${{ product.price /100 }}</td>
        <td class="product-table__add">
          <button
            class="product-list__add-button"
            @click="addToCart(product)">Add</button>
        </td>
      </tr>
    </table>


    <li
      v-for="product in products"
      :key="product.id"
      class="product-list__list-item">
      <span class="product-list__item-name">{{ product.name }}</span>
      <span class="product-list__item-price"> ${{ product.price /100 }}</span>
      <button
        class="product-list__add-button"
        @click="addToCart(product)">Add</button>
    </li>

  </div>

</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TheProductList',

  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts',
  }),

  methods: mapActions(['addToCart']),
};
</script>


<style lang="scss" scoped>
.product-list__list-item {
  background: white;
  font-weight: 600;
  box-sizing: border-box;
  height: var(--product-list-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.product-list__item-name {
  display: inline-block;
  width: 35%;
  text-align: left;
  background: white;
}

.product-list__item-price {
  display: inline-block;
  width: 20%;
  text-align: right;
  background: white;
}

.product-list__add-button {
  background: rgb(57, 66, 90);
  border: none;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 2px;
  cursor: pointer;
  padding: 5px;
  width: 23%;
}

.product-list__add-button:active {
  background: rgb(86, 92, 121);
}

.product-list__add-button:focus {
  outline: none;
}
</style>
