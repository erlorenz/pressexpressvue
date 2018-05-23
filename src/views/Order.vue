<template>
  <div id="order">
    <the-progress-bar />
    <router-view />
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
  background-color: rgba(213, 214, 216, 1);
}
</style>
