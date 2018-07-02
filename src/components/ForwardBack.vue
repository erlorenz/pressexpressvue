
<template>

  <div class="forward-back">
    <router-link
      :to="{ name: backTo }"
      tag="button"
      type="button"
      class="button button--outline">
      Go back
    </router-link>
    <router-link
      :class="{disabled: disable}"
      :disabled="disable"
      :to="{ name: continueTo }"
      tag="button"
      class="button button--primary">
      Continue
    </router-link>
  </div>

</template>


<script>

export default {

  name: 'ForwardBack',

  props: {
    disable: {
      type: Boolean,
      required: true,
    },
    backTo: {
      type: String,
      required: true,
    },
    continueTo: {
      type: String,
      required: true,
    },
  },


};
</script>

<style lang="scss" scoped>
.button {
  margin: 1rem 0;
}
</style>
