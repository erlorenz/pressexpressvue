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
        <i class="fas fa-bars fa-2x"/>
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
  height: 4rem;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: $shadow-low;
}

.navbar__brand {
  display: inline-block;
  margin-right: auto;
  padding-left: 3%;

  img {
    height: 2rem;
    width: 12rem;
    padding-top: 0.5rem;
  }
}

.navbar__list {
  display: none;

  li {
  }
}

.navbar__menu-button {
  button {
    border: none;
    background: white;
    height: 4rem;
    width: 4rem;
  }
}
</style>
