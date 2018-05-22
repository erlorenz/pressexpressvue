<template>

  <section id="choose">
    <div class="content-wrap">
      <h3>This is the choose page where the dynamic cart is at
      </h3>
    </div>
    <router-link :to="{ name: 'success' }">
      Go to success
    </router-link>
  </section>


</template>


<script>
export default {
  name: 'Finish',
  components: {},
};
</script>


<style lang="scss" scoped>
#choose {
  background-color: var(--main-theme-color);
  min-height: 100vh;
  text-align: center;
  padding: 100px 5%;
  display: flex;
  justify-content: center;
}

.content-wrap {
  max-width: 768px;
}
</style>
