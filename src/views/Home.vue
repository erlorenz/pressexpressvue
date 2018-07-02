<template>
  <div>
    <the-side-nav
      :class="{ 'side-nav--open' : navIsOpen }"
      @closeNav="navIsOpen = false"/>
    <the-navbar @openNav="navIsOpen = true"/>
    <the-hero />
    <section id="scroll">
      fdsfsd
    </section>
  </div>
</template>

<script>
import TheHero from '@/components/TheHero.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheSideNav from '@/components/TheSideNav.vue';

export default {
  name: 'Home',
  components: {
    TheHero,
    TheNavbar,
    TheSideNav,
  },
  data() {
    return {
      navIsOpen: false,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
