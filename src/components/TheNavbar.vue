<template>

  <nav class="navbar">

    <a
      class="navbar__brand"
      href="#">
      <img src="../assets/img/presslogo.png">
    </a>

    <div
      class="navbar__menu-button">
      <button
        @click="$emit('openNav')">
        <i
          id="hamburger"
          class="fas fa-bars fa-2x"/>
      </button>
    </div>

    <ul class="navbar__list">
      <li>
        <a
          href="#"
          class="navbar__schedule-link">Schedule Now</a>
      </li>
      <li>
        <a href="#">Our Services</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>

  </nav>


</template>

<script>
export default {
  name: 'TheNavbar',
  components: {},
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.navbar {
  font-size: 1.2rem;
  background-color: $navbar-color;
  display: flex;
  align-items: center;
  text-align: center;

  height: 3.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: $shadow-low;
  z-index: 1;
}

.navbar__brand {
  display: inline-block;
  margin-right: auto;
  padding-left: 3%;
  padding-top: 0.6rem;
  height: 100%;
}

.navbar__list {
  display: none;
}

.navbar__menu-button {
  button {
    border: none;
    background: white;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    color: $text-color-primary;

    &:active {
      background-color: #eee;
    }

    &:focus {
      outline: none;
    }
  }
}

@media (min-width: 992px) {
  .navbar {
    height: 4.5rem;
    background-color: white;
    box-shadow: $shadow-low;
  }
  .navbar__menu-button {
    display: none;
  }

  .navbar__brand {
    padding-left: 8%;
    padding-top: 1rem;
  }

  .navbar__list {
    display: inline-flex;
    padding-right: 5%;

    li {
      display: inline-flex;
      align-items: center;

      a {
        color: $text-color-primary;

        line-height: 4.5rem;
        padding: 0 2rem;

        &.navbar__schedule-link {
          color: $theme-color-secondary;
          font-weight: 600;
        }

        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
