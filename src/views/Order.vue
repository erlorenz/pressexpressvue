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


<style scoped>
.fade-page-enter-active {
  transition: opacity 1s;
}

.fade-page-enter {
  opacity: 0;
}

.slide-down-enter-active {
  transition: transform 0.3s;
}

.slide-down-enter {
  transform: translateY(-100%);
}

#order {
  background-color: var(--primary-theme-background-color);
}
</style>
