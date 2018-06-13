<template>

  <header class="progress">
    <a
      class="progress__brand"
      href="#">
      <img src="../assets/img/presslogo.png">
    </a>

    <ul class="progress__steps-list">
      <li :class="{ 'active': $route.path == '/order/schedule' }">
        <i class="fas fa-clock fa-lg"/>Schedule<i class="fas fa-chevron-right"/>
      </li>
      <li :class="{ 'active': $route.path == '/order/choose' }">
        <i class="fas fa-tshirt fa-lg"/>Choose<i class="fas fa-chevron-right"/>
      </li>
      <li :class="{ 'active': $route.path == '/order/finish' }">
        <i class="far fa-credit-card fa-lg"/>Finish
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
  font-size: 0.9rem;
  font-weight: 600;
  background-color: white;
  color: $text-color-light;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 3.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: $shadow-low;
  z-index: 5;
}
.progress__brand {
  display: none;
}

.progress__steps-list {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  li {
    display: inline-block;

    .fa-chevron-right {
      color: $text-color-light;
    }

    &.active {
      color: $theme-color-primary;
    }
  }
}

.fa-clock,
.fa-tshirt,
.fa-credit-card {
  margin-right: 0.5rem;
}

.fa-chevron-right {
  margin: 0 0.5rem;
  opacity: 0.5;
}

@media (min-width: 350px) {
  .progress {
    .fa-chevron-right {
      margin-right: 0.8rem;
    }
  }
}

@media (min-width: 768px) {
  .progress {
    font-size: 1rem;
    height: 4rem;
  }
  .fa-clock,
  .fa-tshirt,
  .fa-credit-card {
    margin-right: 1rem;
  }

  .fa-chevron-right {
    margin: 1rem;
  }
}

@media (min-width: 992px) {
  .progress {
    font-size: 1rem;
    height: 4.5rem;
  }

  .fa-clock,
  .fa-tshirt,
  .fa-credit-card {
    margin-right: 1.2rem;
    margin-left: 1rem;
  }

  .fa-chevron-right {
    margin: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .progress__brand {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 1rem;
    padding-left: 8%;
  }
}
</style>
