<template>
  <header class="hero">
    <div class="content-wrap">
      <h1>Lorem, ipsum dolor sit amet testing.</h1>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
      <router-link
        :to="{ name: 'schedule' }"
        class="button button--primary hero__button">
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
  min-height: 95vh;
  background-image: linear-gradient(
      to bottom,
      rgba($theme-color-primary, 0.8),
      rgba($theme-color-primary-dark, 0.8)
    ),
    url('../assets/img/grey.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.content-wrap {
  max-width: 768px;
  text-align: center;
  padding: 0 5%;

  h1 {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 2em;
    font-weight: 600;
    line-height: 1.2;
    color: white;
  }
  h2 {
    font-weight: 400;
    font-size: 1em;
    line-height: 1.2;
    color: white;
    margin: 1.5em 0;
  }
}

.hero__button {
  font-size: 1em;
  padding: 1em 1.5em;
}

@media (min-width: 350px) {
  .content-wrap {
    font-size: 1.1rem;
  }
}

@media (min-width: 768px) {
  .content-wrap {
    h1 {
      font-size: 3em;
    }
  }
}

@media (min-width: 992px) {
  .content-wrap {
    font-size: 1.3rem;
  }
}
</style>
