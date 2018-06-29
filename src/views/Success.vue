<template>

  <section id="success">
    <div class="content-wrap">
      <h1> SUCCESS! </h1>
      <p v-if="textSent && emailSent">
        We have sent a welcome text to {{ text }} and a receipt email to {{ email }}.
        <br>You will receive SMS updates as well.
        <br>
        If you haven't received an email (check your spam folder) and SMS message
        please email us at {{ officeEmail }}
        or call us at {{ officePhone }} to update your information and resend.
      </p>
      <p
        v-if="textSent && !emailSent">
        We have sent a welcome text to {{ text }} and you will receive SMS updates at that number.
        <br>
        However, we experienced technical difficulties sending your receipt email to {{ email }}.
        <br>
        Please email us at {{ officeEmail }}
        or call us at {{ officePhone }} so we can resend to the correct email address.
      </p>
      <p
        v-if="!textSent && emailSent">
        We have sent a receipt email to {{ email }}.
        If you have not received it please check your spam folder.
        <br>
        However, the text message we sent to {{ text }} returned as an invalid number.
        <br>
        Please email us at {{ officeEmail }}
        or call us at {{ officePhone }} to update your number in order to receive SMS updates.
      </p>
      <p
        v-if="!textSent && !emailSent">
        We were not able to send your receipt email to {{ email }}
        and your phone number {{ text }} has come back invalid.
        <br>
        Please email us at {{ officeEmail }}
        or call us at {{ officePhone }} so we can update your number and email
        in order to receive SMS updates and a receipt.
      </p>
    </div>
  </section>


</template>


<script>

export default {
  name: 'Success',
  components: {
  },

  data() {
    return {
      officeEmail: 'support@pressexpresslv.com',
      officePhone: '(702) 555-5555',
    };
  },

  computed: {
    email() {
      return this.$store.getters.email;
    },
    text() {
      return this.$store.getters.phone;
    },
    textSent() {
      return this.$store.getters.textSent;
    },
    emailSent() {
      return this.$store.getters.emailSent;
    },
  },

  beforeRouteLeave(to, from, next) {
    this.$store.commit('RESET_ALL');
    next();
  },

};
</script>


<style lang="scss" scoped>
#success {
  background-color: $background-color;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 8rem 5%;
}

.content-wrap {
  width: 100%;
  max-width: 768px;
  text-align: center;
}
</style>

