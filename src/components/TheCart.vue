<template>

  <table class="cart">
    <tr>
      <th>Item</th>
      <th>Qty</th>
      <th colspan="2">Total</th>
    </tr>
    <tr
      v-for="(cartItem, index) in cartItems"
      :key="cartItem.id"
      class="item">
      <td class="item-name">{{ cartItem.name }}</td>
      <td class="item-quantity">{{ cartItem.quantity }}</td>
      <td class="item-total">
        ${{ cartItem.price * cartItem.quantity / 100 }}
      </td>
      <td class="item-remove">
        <button @click="REMOVE_FROM_CART(index)">
          <i class="fas fa-times"/>
        </button>
      </td>
    </tr>
    <tr class="promo-code" />
    <tr
      class="total">
      <td colspan="2"/>
    <td colspan="2">Total: ${{ cartTotal /100 }}</td></tr>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TheCart',

  data() {
    return {};
  },

  computed: {
    ...mapGetters([
      'cartItems',
      'cartTotal',
    ]),
  },

  methods: {
    ...mapMutations([
      'REMOVE_FROM_CART',
    ]),
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

.item-name {
  padding-left: 5%;
  text-align: left;
  width: 40%;
}

.item-quantity {
  text-align: right;
  width: 15%;
}

.item-total {
  text-align: right;
  width: 25%;
}

.item-remove {
  text-align: right;
  padding-right: 3%;
  width: 20%;

  i {
    color: $text-color-primary;
  }

  button {
    border: none;
    background-color: white;
    height: 100%;
    width: 2rem;
    color: $text-color-primary;
    cursor: pointer;
  }
}
</style>

