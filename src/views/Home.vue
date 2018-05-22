<template>
  <div>
    <transition name="slide-side-nav">
      <the-side-nav
        v-show="navIsOpen"
        @closeNav="navIsOpen = false"/>
    </transition>
    <transition
      name="slide-down-navbar"
      appear>
      <the-navbar @openNav="navIsOpen = true"/>
    </transition>
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


<style scoped>
#scroll {
  height: 1000px;
}

.slide-down-navbar-enter-active,
.slide-down-leave-active {
  transition: all 0.4s;
}

.slide-down-navbar-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-side-nav-enter-active,
.slide-side-nav-leave-active {
  transition: all 0.2s;
}

.slide-side-nav-enter,
.slide-side-nav-leave-to {
  transform: translateX(-100%);
}
</style>
