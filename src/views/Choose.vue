<template>
  <section id="choose">

    <h1>Sounds good- we're on it!
      <span class="desktop-directions">Now add your items to the list
      to calculate the total price.</span>
      <span class= "mobile-directions">Now choose the items you'll be giving us.
      You can view and edit your totals by scrolling down or clicking the total items above.</span>
    </h1>

    <div class="content-wrap">
      <the-product-table />
      <the-cart v-if="this.$store.state.cart.added.length > 0"/>
      <div
        v-else
        class="no-items"> You haven't selected any items </div>
    </div>

    <router-link :to="{ name: 'finish' }">
      Go to finish
    </router-link>

  </section>


</template>


<script>
import TheProductTable from '@/components/TheProductTable.vue';
import TheCart from '@/components/TheCart.vue';

export default {
  name: 'Choose',
  components: {
    TheProductTable,
    TheCart,
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
#choose {
  text-align: center;
  padding: 100px 5%;
}

h1 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.desktop-directions {
  display: none;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-table {
  width: 100%;
  max-width: 35rem;
  margin-bottom: 4rem;
  box-shadow: $shadow-high;
  border-radius: 2px;
}

.cart {
  width: 100%;
  max-width: 35rem;
}

@media (min-width: 1024px) {
  .desktop-directions {
    display: inline;
  }

  .mobile-directions {
    display: none;
  }

  .no-items {
    width: 45%;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
