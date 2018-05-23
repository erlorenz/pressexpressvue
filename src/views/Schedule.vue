<template>

  <section id="schedule">
    <div class="content-wrap">
      <h3>Awesome! Let's choose when you will be ready for
      us to pick up and when we need to return your clothes!</h3>
      <the-schedule-form/>
    </div>
  </section>

</template>


<script>
import TheScheduleForm from '@/components/TheScheduleForm.vue';

export default {
  name: 'Schedule',
  components: {
    TheScheduleForm,
  },
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

.schedule-form {
  margin: 2rem 0;
}

.content-wrap {
  max-width: 768px;
}
</style>

