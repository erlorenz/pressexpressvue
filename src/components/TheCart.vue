<template>

  <table class="cart">
    <tr>
      <th>Item</th>
      <th>Qty</th>
      <th colspan="2">Total</th>
    </tr>
    <tr
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      class="item">
      <td class="item-name">{{ cartItem.name }}</td>
      <td class="item-quantity">{{ cartItem.quantity }}</td>
      <td class="item-total">
        ${{ cartItem.price * cartItem.quantity / 100 }}
      </td>
      <td class="item-remove">
        <button >
          <i class="fas fa-times"/>
        </button>
      </td>
    </tr>
    <tr class="promo-code" />
    <tr
      class="total">
      <td colspan="2"/>
    <td colspan="2">Total: ${{ total /100 }}</td></tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheCart',

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      cartItems: 'cartProducts',
    }),
    total() {
      return this.cartItems.reduce(
        // eslint-disable-next-line
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0,
      );
    },
  },

  methods: {},
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
}

th {
  height: $table-height;
}

.item-name {
  padding-left: 5%;
  text-align: left;
}

.item-total,
.item-quantity {
  text-align: right;
}

.item-remove {
  text-align: right;
  padding-right: 3%;

  button {
    border: none;
    background-color: $theme-color-accent;
    height: 75%;
    width: 2rem;
    color: #eee;
  }
}
</style>

