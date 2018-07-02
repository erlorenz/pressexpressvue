<template>
  <div>

    <form
      class="checkout-form"
      @submit.prevent="onSubmit">

      <fieldset class="form-group">
        <label for="name">Full name</label>
        <input
          id="name"
          v-model.trim="name"
          :class="{ 'form-control--invalid': nameInvalid}"
          class="form-control"
          type="text"
          @blur="$v.name.$touch">
        <div
          v-if="nameInvalid"
          class="invalid-text">Please enter a valid name</div>
      </fieldset>

      <fieldset class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model.trim="email"
          :class="{ 'form-control--invalid': emailInvalid}"
          class="form-control"
          type="text"
          @blur="$v.email.$touch">
        <div
          v-if="emailInvalid"
          class="invalid-text">Please enter a valid email</div>
      </fieldset>

      <fieldset class="form-group">
        <label for="phone">Mobile Number</label>
        <input
          id="phone"
          v-model.trim="phone"
          :class="{ 'form-control--invalid': phoneInvalid}"
          class="form-control"
          type="tel"
          maxlength="10"
          @blur="$v.phone.$touch">
        <div
          v-if="phoneInvalid"
          class="invalid-text">Please enter a 10 digit phone number</div>
      </fieldset>

      <!--STRIPE CARD-->
      <fieldset class="form-group">
        <label >Credit Card Details</label>
        <card
          :class="{ valid: stripeComplete }"
          :options="stripeOptions"
          stripe="pk_test_P7koy0LWfaLHUtJaCPnU73bl"
          @change="stripeComplete = $event.complete"
        />
      </fieldset>

      <button
        :class="{disabled: !complete}"
        :disabled="!complete"
        class="button button--primary"
        type="submit">Pay ${{ totalPrice / 100 }}</button>
    </form>
    <div v-if="otherError">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { required, email, numeric, minLength, maxLength } from 'vuelidate/lib/validators';
import { Card } from 'vue-stripe-elements-plus';

const nameHasSpace = value => value.split(' ').length > 1;


export default {
  name: 'TheCheckout',

  components: { Card },

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      stripeComplete: false,
      stripeOptions: {
        classes: {
          base: 'form-control',
          focus: 'form-control--focus',
          invalid: 'form-control--invalid',
        },
        style: {
          invalid: { color: 'rgb(65,7,7' },
        },
      },
    };
  },

  computed: {

    totalPrice() { return this.$store.getters.totalPrice; },

    errorMessage() { return this.$store.getters.errorMessage; },

    emailInvalid() { return this.$v.email.$error || this.errorMessage === 'BAD EMAIL'; },

    nameInvalid() { return this.$v.name.$error || this.errorMessage === 'BAD NAME'; },

    phoneInvalid() { return this.$v.phone.$error || this.errorMessage === 'BAD PHONE'; },

    otherError() {
      if (this.errorMessage && !this.emailInvalid && !this.nameInvalid
       && !this.phoneInvalid && !this.hotelInvalid) { return true; }
      return false;
    },

    complete() {
      return !this.$v.$invalid && this.stripeComplete;
    },

  },

  validations: {
    email: { email, required },
    name: { nameHasSpace, required },
    phone: {
      numeric, required, minLength: minLength(10), maxLength: maxLength(10),
    },


  },

  methods: {
    onSubmit() {
      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      this.$v.$touch();
      if (this.$v.$invalid) { console.log('Invalid'); } else { this.$store.dispatch('checkout', payload); }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 1rem;
}
</style>
