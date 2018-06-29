<template>

  <section id="schedule">

    <h3>Awesome! Let's choose when you will be ready for
    us to pick up and when we need to return your clothes!</h3>
    <form class="schedule-form">
      <div class="schedule-form__location">
        <label class="hotel-label">Hotel Name</label>
        <select
          v-model="hotel"
          class="form-control">
          <option >Aria</option>
          <option >MGM Grand</option>
          <option >Venetian</option>
          <option >Wynn Las Vegas</option>
        </select>
        <input
          v-model="room"
          type="text"
          class="schedule-form__room form-control" >
      </div>
      <div class="schedule-form__pickup-time">
        <select
          v-model="pickupDate"
          class="form-control">
          <option>Wednesday, May 23</option>
          <option>Thursday, May 24</option>
          <option>Friday, May 25 </option>
        </select>
        <select
          v-model="pickupHour"
          class="form-control">
          <option>after 12pm</option>
          <option>after 2pm</option>
          <option>after 4pm</option>
          <option>after 6pm</option>
          <option>after 8pm</option>
        </select>
      </div>
      <div class="schedule-form__return-time">
        <select
          v-model="returnDate"
          class="form-control">
          <option>Wednesday, May 23</option>
          <option>Thursday, May 24</option>
          <option>Friday, May 25 </option>
        </select>
        <select
          v-model="returnHour"
          class="form-control">
          <option>by 7am</option>
          <option>by 3pm</option>
          <option>by 5pm</option>
          <option>by 7pm</option>
        </select>
      </div>

      <div class="forward-back">
        <router-link
          :to="{ name: 'home' }"
          tag="button"
          type="button"
          class="button button--outline">
          Go back
        </router-link>
        <router-link
          :to="{ name: 'choose' }"
          :class="{disabled: !allFilledOut}"
          tag="button"
          class="button button--primary">
          Continue
        </router-link>

      </div>

    </form>

  </section>

</template>

<script>

export default {
  name: 'Schedule',

  data() {
    return {

    };
  },

  computed: {

    allFilledOut() {
      return this.$store.getters.isScheduled;
    },

    hotel: {
      get() {
        return this.$store.getters.scheduledData.hotel;
      },
      set(value) {
        this.$store.commit('UPDATE_HOTEL', value);
      },
    },

    room: {
      get() {
        return this.$store.getters.scheduledData.room;
      },
      set(value) {
        this.$store.commit('UPDATE_ROOM', value);
      },
    },

    pickupDate: {
      get() {
        return this.$store.getters.scheduledData.pickupDate;
      },
      set(value) {
        this.$store.commit('UPDATE_PICKUPDATE', value);
      },
    },

    pickupHour: {
      get() {
        return this.$store.getters.scheduledData.pickupHour;
      },
      set(value) {
        this.$store.commit('UPDATE_PICKUPHOUR', value);
      },
    },

    returnDate: {
      get() {
        return this.$store.getters.scheduledData.returnDate;
      },
      set(value) {
        this.$store.commit('UPDATE_RETURNDATE', value);
      },
    },

    returnHour: {
      get() {
        return this.$store.getters.scheduledData.returnHour;
      },
      set(value) {
        this.$store.commit('UPDATE_RETURNHOUR', value);
      },
    },


  },

  // methods: {
  //   addScheduled() {
  //     this.$store.commit('ADD_TO_SCHEDULED', this.form);
  //   },
  // },
};
</script>


<style lang="scss" scoped>
#schedule {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8rem 5%;
  max-width: 768px;
}

.schedule-form {
  margin: 2rem 0;
  display: block;

  &__location {
    position: relative;
  }
}

</style>

