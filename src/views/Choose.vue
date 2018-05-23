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

    <div class="forward-back">
      <router-link
        :to="{ name: 'schedule' }"
        class="back-button">
        Go back
      </router-link>
      <router-link
        :to="{ name: 'finish' }"
        class="forward-button">
        Go to finish
      </router-link>
    </div>
</section></template>


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
  padding: 100px 5% 5% 5%;
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
  margin-bottom: 2rem;
  box-shadow: $shadow-high;
}

.cart {
  width: 100%;
  max-width: 35rem;
  margin-bottom: 2rem;
  box-shadow: $shadow-high;
}

.no-items {
  margin-bottom: 2rem;
}

.forward-back {
  width: 100%;
  display: flex;
  justify-content: center;

  .back-button,
  .forward-button {
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }

  .forward-button {
    background-color: $theme-color-secondary;
    color: #eee;
  }
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
    max-width: 35rem;
    margin-top: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .content-wrap {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .cart,
  .product-table {
    width: 45%;
  }
}
</style>
