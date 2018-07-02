<template>

  <section id="schedule">

    <h3>Awesome! Let's choose when you will be ready for
    us to pick up and when we need to return your clothes!</h3>

    <form class="schedule-form">
      <fieldset class="form-group">
        <label>Hotel name</label>
        <select
          v-model="hotel"
          class="form-control">
          <option
            disabled
            value="">Select One</option>
          <option>Aria</option>
          <option>Wynn</option>
          <option>Venetian</option>
          <option>Park MGM</option>
        </select>
      </fieldset>

      <fieldset class="form-group">
        <label>Room number</label>
        <input
          v-model="room"
          type="text"
          class="form-control" >
      </fieldset>

      <fieldset class="form-group">
        <label>Pickup date</label>
        <select
          v-model="pickupDate"
          class="form-control">
          <option>Wednesday, May 23</option>
          <option>Thursday, May 24</option>
          <option>Friday, May 25 </option>
        </select>
      </fieldset>

      <fieldset
        v-if="pickupDate"
        class="form-group">
        <label >Pickup Time</label>
        <select
          v-model="pickupHour"
          class="form-control">
          <option>after 12pm</option>
          <option>after 2pm</option>
          <option>after 4pm</option>
          <option>after 6pm</option>
          <option>after 8pm</option>
        </select>
      </fieldset>

      <fieldset
        v-if="pickupHour"
        class="form-group">
        <label>Return date</label>
        <select
          v-model="returnDate"
          class="form-control">
          <option>Wednesday, May 23</option>
          <option>Thursday, May 24</option>
          <option>Friday, May 25 </option>
        </select>
      </fieldset>

      <fieldset
        v-if="returnDate"
        class="form-group">
        <label>Return time</label>
        <select
          v-model="returnHour"
          class="form-control">
          <option>by 7am</option>
          <option>by 3pm</option>
          <option>by 5pm</option>
          <option>by 7pm</option>
        </select>
      </fieldset>

    </form>
    <forward-back
      :disable="!allFilledOut"
      back-to="home"
      continue-to="choose"/>
  </section>

</template>

<script>
import ForwardBack from '@/components/ForwardBack.vue';

export default {
  name: 'Schedule',

  components: {
    ForwardBack,
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
        this.$store.commit('UPDATE_ROOM', value.trim());
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

};
</script>


<style lang="scss" scoped>
#schedule {
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
}

.schedule-form {
  display: block;
  width: 100%;
  max-width: 400px;
  margin-top: 1.5rem;

  &__location {
    position: relative;
  }
}
</style>

