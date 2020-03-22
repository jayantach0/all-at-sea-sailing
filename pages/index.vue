<template>
  <div class="c-home-hero">
    <div class="c-home-hero__body">
      <div class="c-home-hero__body-inner">
        <img
          class="c-home-hero__logo"
          :src="require('~/assets/images/logo-circle.svg')"
        />
        <h1 class="c-home-hero__title">
          Charter your own yacht in some of the Mediterraneans most beautiful
          locations.
        </h1>
        <p>
          We provide the skipper, so you can sit back and relax or learn to
          sail, it’s up you! Either way you’ll fully enjoy a holiday of a
          lifetime.
        </p>
        <p>
          <nuxt-link to="/" class="c-btn">
            Watch Trailer
          </nuxt-link>
        </p>
      </div>
    </div>
    <div class="c-home-hero__banner"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.c-home-hero {
  display: flex;
  background-color: var(--color-primary);
  min-height: 80vh;
  &__body {
    color: #fff;
    flex-basis: 40%;
    display: flex;
    align-items: center;
    min-height: 100%;
    padding: var(--spacing);
    &-inner {
      max-width: 450px;
      margin-left: auto;
    }
  }
  &__banner {
    background-image: url('~assets/images/hero-banner.jpg');
    background-size: cover;
    background-position: 50% 50%;
    flex-basis: 60%;
  }

  &__logo {
    max-width: 150px;
    margin-bottom: var(--spacing);
  }

  &__title {
    font-size: 1.5rem;
  }
}
</style>
