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
        <a href="#">Schedule Now</a>
      </li>
      <li>
        <a href="#">Our Services</a>
      </li>
      <li>
        <a href="#">Contact</a>
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
  font-size: 1.3rem;
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
  padding-top: 0.5rem;

  img {
    height: 2rem;
    width: 12rem;
  }
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
  }
  .navbar__menu-button {
    display: none;
  }

  .navbar__brand {
    padding-left: 8%;
    padding-top: 0.8rem;

    img {
      height: 2.5rem;
      width: 15rem;
    }
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

        &:hover {
          background-color: #eee;
        }
      }
    }
  }
}
</style>
