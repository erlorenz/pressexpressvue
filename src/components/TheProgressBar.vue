<template>

  <header class="progress">
    <a
      class="progress__brand"
      href="#">
      <img
        src="../assets/img/presslogo.png"
        class="progress__brand-logo">
    </a>
    <div class="progress__steps">
      <transition-group
        name="steps-in"
        tag="ul"
        class="progress__steps-list"
        appear>
        <li
          key="step-1"
          :class="{ 'active': $route.path == '/order/schedule' }"
          class="progress__steps-item">
          <i class="far fa-clock fa-lg"/>
          Schedule
          <i class="fas fa-chevron-right"/>
        </li>
        <li
          key="step-2"
          :class="{ 'active': $route.path == '/order/choose' }"
          class="progress__steps-item">
          <i class="fas fa-tshirt fa-lg"/>
          Choose
          <i class="fas fa-chevron-right"/>
        </li>
        <li
          key="step-3"
          :class="{ 'active': $route.path == '/order/finish' }"
          class="progress__steps-item">
          <i class="far fa-credit-card fa-lg"/>
          Finish
        </li>
      </transition-group>
    </div>
  </header>


</template>

<script>
export default {
  name: 'TheProgressBar',
  components: {},
};
</script>


<style lang="scss" scoped>
.progress {
  font-size: 1.1rem;
  font-weight: 600;
  background-color: white;
  color: var(--light-text-color);
  display: flex;
  justify-content: center;
  text-align: center;
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: var(--shadow-low);
  z-index: 5;
}

.progress__brand {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 0 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
}

.progress__brand-logo {
  padding-top: 8px;
  height: 30px;
  width: 218px;
}

.progress__steps {
  align-self: center;
  display: block;
  padding: 0 0 0 0;
}

.progress__steps-list {
  display: block;
}

.progress__steps-item {
  display: inline-flex;
  line-height: 72px;
  align-items: center;
  text-align: center;
  color: var(--light-text-color);
}

.active {
  color: var(--primary-theme-color);
  transition: 0.5s;
}

.fa-clock {
  margin-right: 0.5rem;
}

.fa-tshirt {
  margin-right: 0.5rem;
}

.fa-credit-card {
  margin-right: 0.5rem;
}

.fa-chevron-right {
  margin: 0 1em;
  opacity: 0.5;
  color: var(--light-text-color);
}

@media (max-width: 990px) {
  .progress__brand {
    padding-left: 1rem;
  }

  .progress__brand-logo {
    display: none;
  }
}

@media (max-width: 760px) {
  .progress {
    height: 60px;
    font-size: 1rem;
  }
}
@media (max-width: 560px) {
  .progress {
    font-size: 0.9rem;
  }
}

@media (max-width: 330px) {
  .progress {
    font-size: 0.8rem;
  }
}
/*Transitions--------*/

.steps-in-enter-active,
.scale-leave-active {
  transition: all 0.4s;
  transition-delay: 0.4s;
}

.steps-in-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
