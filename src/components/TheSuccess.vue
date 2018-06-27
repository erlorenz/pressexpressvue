<template>


  <div>
    <h1> SUCCESS PAGE </h1>
    <p> You should receive a welcome text at {{ text }} and your receipt email at {{ email }}.
    If one or both does not reach you please email us at support@pressexpresslv.com
    or call us at 702-000-0000.
    </p>
  </div>


</template>


<script>

export default {
  name: 'Success',
  components: {
  },

  data() {
    return {
    };
  },

  computed: {
    email() {
      return this.$store.getters.email;
    },
    text() {
      return this.$store.getters.phone;
    },
  },

};
</script>


<style lang="scss" scoped>
</style>
