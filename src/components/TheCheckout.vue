<template>
  <div class="topInfo">

    <form
      class="checkout-form"
      @submit.prevent="pay">
      <input
        v-model="name"
        class="form-control"
        type="text"
        placeholder="Name">
      <input
        v-model="email"
        class="form-control"
        type="email"
        placeholder="Email">
      <input
        v-model="phone"
        type="tel"
        maxlength="10"
        class="form-control"
        placeholder="Phone Number">
      <!--STRIPE CARD-->
      <card
        :class="{ complete }"
        :options="stripeOptions"
        class="stripe-card form-control"
        stripe="pk_test_P7koy0LWfaLHUtJaCPnU73bl"
        @change="complete = $event.complete"
      />
      <button
        :class="{disabled: !complete}"
        :disabled="!complete"
        class="button button--primary"
        type="submit">Pay ${{ totalPrice / 100 }}</button>
    </form>
    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>

import { Card } from 'vue-stripe-elements-plus';

export default {
  name: 'TheCheckout',

  components: { Card },

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      complete: false,
      stripeOptions: {
        // enter options here
      },
    };
  },

  computed: {
    scheduled() {
      return this.$store.getters.scheduledData;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    cartItems() {
      return this.$store.getters.cartItems;
    },

    starch() {
      return this.$store.getters.starch;
    },

    errorMessage() {
      return this.$store.getters.errorMessage;
    },

  },

  methods: {
    pay() {
      const payload = {
        scheduled: this.scheduled,
        totalPrice: this.totalPrice,
        cartItems: this.cartItems,
        starch: this.starch,
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      this.$store.dispatch('checkout', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stripe-card {
  background-color: white;
  width: 300px;
}
.stripe-card.complete {
  border-color: green;
}

</style>
