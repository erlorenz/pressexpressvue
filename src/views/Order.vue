<template>
  <div id="order">
    <transition
      name="slide-down"
      appear>
      <the-progress-bar />
    </transition>
    <transition
      name="fade-page"
      mode="out-in"
      appear>
      <router-view />
    </transition>
  </div>

</template>


<script>
import TheProgressBar from '@/components/TheProgressBar.vue';

export default {
  name: 'Order',
  components: {
    TheProgressBar,
  },
};
</script>


<style lang="scss" scoped>
#order {
  background-color: var(--primary-theme-background-color);
}
</style>
