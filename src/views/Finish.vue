<template>

  <section id="choose">
    <div class="content-wrap">
      <the-checkout/>

    </div>

  </section>


</template>


<script>
import TheCheckout from '@/components/TheCheckout.vue';

export default {
  name: 'Finish',
  components: {
    TheCheckout,
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
