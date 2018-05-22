<template>
  <div class="cart">
    <ul class="cart-list">
      <li
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        class="cart-list__item">
        <span class="cart-list__item-name">{{ cartItem.name }}</span>
        <span class="cart-list__item-quantity">{{ cartItem.quantity }}</span>
        <span class="cart-list__item-subtotal">
          ${{ cartItem.price * cartItem.quantity / 100 }}
        </span>
        <button class="cart-list__item-remove-button">
          <i class="fas fa-times"/>
        </button>
      </li>
    </ul>
    <li
      class="cart__total">Total: ${{ total }}</li>
  </div>
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
};
</script>

<style lang="scss" scoped>
.cart-list__item {
  background: white;
  font-weight: 600;
  height: var(--product-list-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.cart-list__item-name {
  display: inline-block;
  width: 35%;
  text-align: left;
  background: white;
}

.cart-list__item-quantity {
  display: inline-block;
  width: 20%;
  text-align: right;
  background: white;
}

.cart-list__item-subtotal {
  display: inline-block;
  width: 20%;
  text-align: right;
  background: white;
}

.cart-list__remove-button {
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

.cart-list__remove-button:active {
  background: rgb(86, 92, 121);
}

.cart-list__remove-button:focus {
  outline: none;
}

.cart__total {
  background: white;
  font-weight: 500;
  line-height: 60px;
  text-align: right;
  padding: 0 5%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
