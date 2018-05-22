<template>
  <nav class="side-nav">
    <div class="side-nav__top">
      <span
        class="side-nav__close-icon"
        @click="$emit('closeNav')"><i class="fas fa-times fa-2x"/></span>
    </div>
    <ul class="side-nav__list">
      <li class="side-nav__list-item">
        <a
          href="#"
          class="side-nav__list-link">Schedule</a>
      </li>
      <li class="side-nav__list-item">
        <a
          href="#"
          class="side-nav__list-link">Our Services</a>
      </li>
      <li class="side-nav__list-item">
        <a
          href="#"
          class="side-nav__list-link">Why Us</a>
      </li>
      <li class="side-nav__list-item close">
        <a
          href="#"
          class="side-nav__list-link">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheSideNav',
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style scoped>
.side-nav {
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  z-index: 5;
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-theme-color);
  font-weight: 500;
}

.side-nav__top {
  height: 60px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
.side-nav__close-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
}

.fa-times {
  color: white;
}

.side-nav__list-item {
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.side-nav__list-link {
  line-height: 60px;
  padding-left: 30px;
  color: white;
  display: block;
}
</style>
