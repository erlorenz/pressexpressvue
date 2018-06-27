<template>

  <section id="choose">
    <div class="content-wrap">
      <the-final />
      <the-success v-if="success"/>
      <the-checkout v-else/>
    </div>

  </section>


</template>


<script>
import TheCheckout from '../components/TheCheckout.vue';
import TheFinal from '../components/TheFinal.vue';
import TheSuccess from '../components/TheSuccess.vue';

export default {
  name: 'Finish',
  components: {
    TheCheckout,
    TheFinal,
    TheSuccess,
  },

  data() {
    return {
    };
  },

  computed: {
    success() {
      return this.$store.getters.checkoutStatus === 'success';
    },
  },

};
</script>


<style lang="scss" scoped>
#choose {
  min-height: 100vh;
  text-align: center;
  padding: 100px 5%;
  display: flex;
  justify-content: center;
}

.content-wrap {
  width: 100%;
  max-width: 768px;
}
</style>
