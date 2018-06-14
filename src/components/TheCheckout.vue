<template>
  <div class="topInfo">

    <form action="">
      <input
        v-model="name"
        class="form-control"
        type="text">
      <input
        v-model="email"
        class="form-control"
        type="email">
      <input
        type="tel"
        maxlength="10"
        class="form-control">
    </form>
  </div>
</template>

<script>
export default {
  name: 'TheCheckout',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
