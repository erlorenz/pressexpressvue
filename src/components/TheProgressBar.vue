<template>

  <header class="progress">
    <a
      class="progress__brand"
      href="#">
      <img src="../assets/img/presslogo.png">
    </a>

    <ul class="progress__steps-list">
      <li :class="{ 'active': $route.path == '/order/schedule' }">
        <i class="far fa-clock fa-lg"/>
        Schedule
        <i class="fas fa-chevron-right"/>
      </li>
      <li :class="{ 'active': $route.path == '/order/choose' }">
        <i class="fas fa-tshirt fa-lg"/>
        Choose
        <i class="fas fa-chevron-right"/>
      </li>
      <li :class="{ 'active': $route.path == '/order/finish' }">
        <i class="far fa-credit-card fa-lg"/>
        Finish
      </li>
    </ul>
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
  color: $text-color-light;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: $shadow-low;
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

  img {
    padding-top: 8px;
    height: 30px;
    width: 218px;
  }
}

.progress__steps-list {
  align-self: center;
  display: inline-block;

  li {
    display: inline-flex;
    line-height: 72px;
    align-items: center;
    text-align: center;

    &.active {
      color: $theme-color-primary;
      transition: 0.5s;
    }
  }
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
  color: $text-color-light;
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
</style>
