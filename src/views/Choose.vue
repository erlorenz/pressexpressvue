<template>
  <section id="choose">
    <transition name="mini-cart-slide"/>

    <h1>Sounds good- we're on it!
      <span class="desktop-directions">Now add your items to the list
      to calculate the total price.</span>
      <span class= "mobile-directions">Now choose the items you'll be giving us.
      You can view and edit your totals by scrolling down or clicking the total items above.</span>
    </h1>
    <div class="content-wrap">
      <the-product-list />
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
import TheProductList from '@/components/TheProductList.vue';
import TheCart from '@/components/TheCart.vue';

export default {
  name: 'Choose',
  components: {
    TheProductList,
    TheCart,
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
#choose {
  background-color: blue;

  min-height: 100vh;
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

.product-list {
  display: block;
  width: 100%;
  max-width: 40rem;
  box-shadow: none;
  margin-bottom: 3rem;
}

.product-list:last-child {
  border-bottom: none;
}

.cart {
  display: block;
  width: 100%;
  max-width: 40rem;
  box-shadow: none;
}

@media (min-width: 1024px) {
  .desktop-directions {
    display: inline;
  }

  .mobile-directions {
    display: none;
  }
  .content-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .product-list {
    margin: 0;
    width: 45%;
  }

  .cart {
    width: 45%;
    margin: 0;
    background: white;
  }

  .no-items {
    width: 45%;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
