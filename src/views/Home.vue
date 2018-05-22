<template>
  <div>
    <the-side-nav
      v-show="navIsOpen"
      @closeNav="navIsOpen = false"/>
    <the-navbar @openNav="navIsOpen = true"/>
    <the-showcase />
    <section id="scroll">
      fdsfsd
    </section>
  </div>
</template>

<script>
import TheShowcase from '@/components/TheShowcase.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheSideNav from '@/components/TheSideNav.vue';

export default {
  name: 'Home',
  components: {
    TheShowcase,
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
