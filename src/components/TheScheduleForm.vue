<template>

  <form class="schedule-form">
    <div class="schedule-form__location">
      <select
        v-model="scheduled.hotel"
        class="schedule-form__hotel">
        <option >Aria</option>
        <option >MGM Grand</option>
        <option >Venetian</option>
        <option >Wynn Las Vegas</option>
      </select>
      <input
        v-model="scheduled.room"
        type="text"
        class="schedule-form__room"
        placeholder = "choose room" >
    </div>
    <div class="schedule-form__pickup-time">
      <select
        v-model="scheduled.pickupDay"
        class="schedule-form__pickup-day">
        <option>Wednesday, May 23</option>
        <option>Thursday, May 24</option>
        <option>Friday, May 25 </option>
      </select>
      <select
        v-model="scheduled.pickupHour"
        class="schedule-form__pickup-hour">
        <option>after 12pm</option>
        <option>after 2pm</option>
        <option>after 4pm</option>
        <option>after 6pm</option>
        <option>after 8pm</option>
      </select>
    </div>
    <div class="schedule-form__return-time">
      <select
        v-model="scheduled.returnDay"
        class="schedule-form__return-day">
        <option>Wednesday, May 23</option>
        <option>Thursday, May 24</option>
        <option>Friday, May 25 </option>
      </select>
      <select
        v-model="scheduled.returnHour"
        class="schedule-form__return-hour">
        <option>by 7am</option>
        <option>by 3pm</option>
        <option>by 5pm</option>
        <option>by 7pm</option>
      </select>
    </div>
    <div class="test">
      {{ scheduled.hotel }} <br>
      {{ scheduled.room }} <br>
      {{ scheduled.pickupDay }} <br>
      {{ scheduled.pickupHour }} <br>
      {{ scheduled.returnDay }} <br>
      {{ scheduled.returnHour }} <br>

    </div>
    <div class="forward-back">
      <router-link
        :to="{ name: 'home' }"
        tag="button"
        class="back-button">
        Go back
      </router-link>
      <router-link
        :to="{ name: 'choose' }"
        tag="button"
        class="forward-button">
        Choose Items
      </router-link>
    </div>

  </form>


</template>

<script>
export default {
  name: 'TheScheduleForm',

  data() {
    return {
      scheduleForm: {
        hotel: '',
        room: '',
        pickupDay: '',
        pickupHour: '',
        returnDay: '',
        returnHour: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.forward-back {
  width: 100%;
  display: flex;
  justify-content: center;

  .back-button,
  .forward-button {
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    border: none;
  }

  .back-button {
    background-color: transparent;
  }
  .forward-button {
    background-color: $theme-color-secondary;
    color: #eee;
  }
}
</style>
