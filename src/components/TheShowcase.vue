<template>
  <header
    id="showcase"
    class="blend">
    <div class="content-wrap">
      <transition-group
        name="fade"
        appear>
        <h1 key="1">Lorem, ipsum dolor sit amet testing.</h1>
        <p key="2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </transition-group>
      <transition
        name="scale-in"
        appear>
        <router-link
          :to="{ name: 'schedule' }"
          class="showcase__button">
          Let's get started!
        </router-link>
      </transition>
    </div>
  </header>
</template>


<script>
export default {
  name: 'TheShowcase',
};
</script>


<style lang="scss" scoped>
#showcase {
  min-height: 90vh;
  background: url('../assets/img/grey.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
}

.blend {
  background-blend-mode: multiply;
}
.content-wrap {
  font-size: 1.8rem;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  padding: 0 5%;
}

#showcase h1 {
  padding-top: 0;
  padding-bottom: 0;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.2;
  color: white;
}

#showcase p {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  color: white;
  margin: 1em 0;
}

@media (min-width: 768px) {
  .content-wrap {
    font-size: 2.5rem;
    margin-top: 72px;
  }
}
@media (min-width: 992px) {
  #showcase {
    min-height: 80vh;
  }

  .content-wrap {
    margin-top: 72px;
    font-size: 2.8rem;
  }
}

.showcase__button {
  border: none;
  cursor: pointer;
  color: white;
  padding: 15px 40px;
  font-size: 22px;
  box-shadow: var(--shadow-high);
  background: var(--primary-theme-color);
}

/*transitions*/

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

.scale-in-enter-active {
  transition: all 0.2s;
  transition-delay: 0.5s;
}

.scale-in-enter {
  transform: scale(0);
}
</style>
