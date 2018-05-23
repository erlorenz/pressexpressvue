<template>
  <header class="hero">
    <div class="content-wrap">
      <h1>Lorem, ipsum dolor sit amet testing.</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <router-link
        :to="{ name: 'schedule' }"
        class="hero__button">
        Let's get started!
      </router-link>
    </div>
  </header>
</template>


<script>
export default {
  name: 'TheHero',
};
</script>


<style lang="scss" scoped>
.hero {
  min-height: 90vh;
  background-image: linear-gradient(
      to bottom,
      rgba($theme-color-primary, 0.8),
      rgba($theme-color-primary, 0.8)
    ),
    url('../assets/img/grey.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

.content-wrap {
  font-size: 1.8rem;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  padding: 0 5%;

  h1 {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.2;
    color: white;
  }
  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.2;
    color: white;
    margin: 1em 0;
  }
}

.hero__button {
  border: none;
  cursor: pointer;
  color: white;
  padding: 15px 40px;
  font-size: 22px;
  box-shadow: $shadow-high;
  background: $button-color;

  &:hover {
    background-color: $button-color-hover;
  }

  &:active {
    background-color: $button-color-active;
  }
}

@media (min-width: 768px) {
  .content-wrap {
    font-size: 2.5rem;
    margin-top: 72px;
  }
}
@media (min-width: 992px) {
  .hero {
    min-height: 80vh;
  }

  .content-wrap {
    margin-top: 72px;
    font-size: 2.8rem;
  }
}
</style>
