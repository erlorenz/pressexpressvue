<template>

  <section id="choose">

    <half-circle-spinner
      v-if="requestPending"
      :animation-duration="1000"
      :size="200"
      :color="'$theme-color-secondary'"
      class="spinner"/>
    <div
      v-show="!requestPending"
      class="content-wrap">

      <the-final />
      <the-checkout class="checkout"/>

    </div>

  </section>


</template>


<script>
import { HalfCircleSpinner } from 'epic-spinners';
import TheCheckout from '../components/TheCheckout.vue';
import TheFinal from '../components/TheFinal.vue';


export default {
  name: 'Finish',
  components: {
    TheCheckout,
    TheFinal,
    HalfCircleSpinner,
  },

  data() {
    return {
    };
  },

  computed: {
    requestPending() {
      return this.$store.getters.requestPending;
    },
  },

};
</script>


<style lang="scss" scoped>
#choose {
  display: flex;
  justify-content: center;
}

.spinner {
  align-self: center;
}
.content-wrap {
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkout {
  width: 100%;
  max-width: 400px;
}
</style>
