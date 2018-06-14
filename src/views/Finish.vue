<template>

  <section id="choose">
    <div class="content-wrap">
      <the-final />
      <the-checkout/>

    </div>

  </section>


</template>


<script>
import TheCheckout from '../components/TheCheckout.vue';
import TheFinal from '../components/TheFinal.vue';

export default {
  name: 'Finish',
  components: {
    TheCheckout,
    TheFinal,
  },

  data() {
    return {
      success: false,
    };
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
  max-width: 768px;
}
</style>
