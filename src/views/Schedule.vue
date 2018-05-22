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
      <router-link :to="{ name: 'choose' }">
        Go to choose
      </router-link>
    </div>
  </section>

</template>


<script>
export default {
  name: 'Schedule',
  components: {},
};
</script>


<style scoped>
#schedule {
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

