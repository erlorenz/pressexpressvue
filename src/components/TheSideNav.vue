<template>
  <nav class="side-nav">
    <div class="side-nav__top">
      <span
        class="side-nav__close-icon"
        @click="$emit('closeNav')"><i class="fas fa-times fa-2x"/></span>
    </div>
    <ul class="side-nav__list">
      <li>
        <a
          href="#">Schedule</a>
      </li>
      <li>
        <a href="#">Our Services</a>
      </li>
      <li>
        <a href="#">Why Us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheSideNav',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.side-nav {
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  z-index: 5;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $theme-color-primary;
  font-weight: 500;
}

.side-nav__top {
  height: 3.5rem;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);

  .side-nav__close-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;

    .fa-times {
      color: white;
    }
  }
}

.side-nav__list {
  li {
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    a {
      line-height: 3.5rem;
      padding-left: 2rem;
      color: white;
      display: block;
    }
  }
}
</style>
