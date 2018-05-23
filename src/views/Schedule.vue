<template>

  <section id="schedule">
    <div class="content-wrap">
      <h3>Awesome! Let's choose when you will be ready for
      us to pick up and when we need to return your clothes!</h3>
      <div class="schedule-form">
        <input
          type="text"
          placeholder="What hotel are you in?" >
      </div>
      <div class="forward-back">
        <router-link
          :to="{ name: 'home' }"
          class="back-button">
          Go back
        </router-link>
        <router-link
          :to="{ name: 'choose' }"
          class="forward-button">
          Choose Items
        </router-link>
      </div>
    </div>
  </section>

</template>


<script>
export default {
  name: 'Schedule',
  components: {},
};
</script>


<style lang="scss" scoped>
#schedule {
  min-height: 100vh;
  text-align: center;
  padding: 100px 5%;
  display: flex;
  justify-content: center;
}

.content-wrap {
  max-width: 768px;
}

.forward-back {
  width: 100%;
  display: flex;
  justify-content: center;

  .back-button,
  .forward-button {
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }

  .forward-button {
    background-color: $theme-color-secondary;
    color: #eee;
  }
}
</style>

