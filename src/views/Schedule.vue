<template>

  <section id="schedule">

    <h3>Awesome! Let's choose when you will be ready for
    us to pick up and when we need to return your clothes!</h3>
    <form class="schedule-form">
      <div class="schedule-form__location">
        <label class="hotel-label">Hotel Name</label>
        <select
          v-model="form.hotel"
          class="form-control">
          <option >Aria</option>
          <option >MGM Grand</option>
          <option >Venetian</option>
          <option >Wynn Las Vegas</option>
        </select>
        <input
          v-model="form.room"
          type="text"
          class="schedule-form__room form-control" >
      </div>
      <div class="schedule-form__pickup-time">
        <select
          v-model="form.pickupDate"
          class="form-control">
          <option>Wednesday, May 23</option>
          <option>Thursday, May 24</option>
          <option>Friday, May 25 </option>
        </select>
        <select
          v-model="form.pickupHour"
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
          v-model="form.returnDate"
          class="form-control">
          <option>Wednesday, May 23</option>
          <option>Thursday, May 24</option>
          <option>Friday, May 25 </option>
        </select>
        <select
          v-model="form.returnHour"
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
          class="back-button">
          Go back
        </router-link>
        <router-link
          :to="{ name: 'choose' }"
          :class="{disabled: !allFilledOut}">
          <button
            class="forward-button"
            @click="addScheduled()">
            Continue
          </button>

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
      form: {
        hotel: '',
        room: '',
        pickupDate: '',
        pickupHour: '',
        returnDate: '',
        returnHour: '',
      },
    };
  },

  computed: {
    allFilledOut() {
      if (
        this.form.hotel &&
        this.form.room &&
        this.form.pickupDate &&
        this.form.pickupHour &&
        this.form.returnDate &&
        this.form.returnHour
      ) {
        return true;
      }
      return false;
    },

  },

  methods: {
    addScheduled() {
      this.$store.commit('ADD_TO_SCHEDULED', this.form);
    },
  },
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

  .disabled {
    pointer-events: none;
    opacity: 0.6;
  }
}

//Jumping labels
</style>

