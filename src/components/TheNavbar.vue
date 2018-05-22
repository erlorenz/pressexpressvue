<template>

  <header class="header">
    <transition
      name="fade"
      appear>
      <a
        class="header__brand"
        href="#">
        <img
          src="../assets/img/presslogo.png"
          class="header__brand-logo">
      </a>
    </transition>
    <div
      class="header__nav-menu-button">
      <transition
        name="scale"
        appear>
        <button
          class="header__nav-menu-hamburger"
          @click="$emit('openNav')">
          <i class="fas fa-bars fa-2x"/>
        </button>
      </transition>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <transition-group
          name="fade"
          tag="ul"
          class="header__nav-list"
          appear>
          <li
            key="1"
            class="header__nav-item">
            <a
              class="header__nav-link"
              href="#">Schedule Now
            <span class="header__nav-indicator"/></a>
          </li>
          <li
            key="2"
            class="header__nav-item">
            <a
              class="header__nav-link"
              href="#">Our Services
            <span class="header__nav-indicator"/></a>
          </li>
          <li
            key="3"
            class="header__nav-item">
            <a
              class="header__nav-link"
              href="#">Contact
            <span class="header__nav-indicator"/></a>
          </li>
        </transition-group>
      </ul>
    </nav>
  </header>


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


<style scoped>
.header {
  font-size: 1.3rem;
  background-color: var(--navbar-color);
  display: flex;
  text-align: center;
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: var(--shadow-low);
}

.header__brand {
  margin-right: auto;
  padding: 0 0 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  font-size: 1.5em;
}

.header__brand-logo {
  padding-top: 8px;
  height: 30px;
  width: 218px;
}

.header__nav {
  margin-left: auto;
  display: block;
  padding: 0 5% 0 0;
}

.header__nav-list {
  display: block;
}

.header__nav-item {
  display: inline-block;
  padding: 0 1rem;
  text-align: center;
}

.header__nav-link {
  display: inline-block;
  position: relative;
  line-height: 72px;
  color: var(--primary-text-color);
}

.header__nav-item:hover {
  background-color: rgba(178, 208, 224, 0.247);
}

.header__nav-indicator {
  background: lightskyblue;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  display: none;
}

.header__nav-menu-button {
  padding: 0 0 0 0;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  font-size: 0.5em;
  display: none;
  transition: all 0.4s ease-in;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 0px solid rgb(0, 0, 0, 0.12);
}

.header__nav-menu-hamburger {
  height: 50px;
  width: 50px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: white;
}

.header__nav-menu-hamburger:hover {
  background-color: rgba(178, 208, 224, 0.247);
  outline: none;
}
.header__nav-menu-hamburger:active {
  background-color: rgba(17, 151, 223, 0.247);
  outline: none;
}

.fa-bars {
  color: var(--primary-text-color);
}

@media (max-width: 900px) {
  .header__nav-item {
    font-size: 1rem;
    padding: 0 0 0 1rem;
  }
}
@media (max-width: 767px) {
  .header {
    height: 60px;
    justify-content: center;
  }
  .header__brand {
    height: 48px;
    margin: 0;
    padding: 0;
  }

  .header__brand-logo {
    padding: 18px 0 0 0;
    height: 30px;
    width: 220px;
  }

  .header__nav {
    display: none;
  }

  .header__nav-menu-button {
    display: flex;
  }
}

/*Transitions--------*/

.fade-enter-active {
  transition: opacity 1s;
  transition-delay: 0.3s;
}

.fade-enter {
  opacity: 0;
}

.scale-enter-active {
  transition: transform 0.2s;
  transition-delay: 0.5s;
}

.scale-enter {
  transform: scale(0);
}

.slide-enter-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
