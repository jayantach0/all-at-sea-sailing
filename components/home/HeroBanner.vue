<template>
  <div class="c-home-hero">
    <div class="c-home-hero__body">
      <div
        class="c-home-hero__body-inner"
        data-aos="fade"
        data-aos-once="true"
        data-aos-delay="150"
      >
        <img
          class="c-home-hero__logo"
          :src="require('~/assets/images/logo-circle.svg')"
        />
        <div>
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
    </div>
    <div
      class="c-home-hero__banner"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1250"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.c-home-hero {
  background-color: var(--color-primary);
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  @include mq($from: tablet) {
    flex-direction: row;
  }
  &__body {
    color: #fff;
    padding: var(--spacing) var(--spacing) var(--spacing-large);
    @include mq($from: tablet) {
      flex-basis: 40%;
      display: flex;
      align-items: center;
      min-height: 100%;
    }
    @include mq($until: tablet) {
      order: 2;
    }
    &-inner {
      @include mq($from: tablet) {
        max-width: 450px;
        margin-left: auto;
      }
      @include mq($until: tablet) {
        display: flex;
        align-items: flex-start;
        div {
          margin-left: var(--spacing);
        }
      }
    }
  }

  &__banner {
    background-image: url('~assets/images/hero-banner.jpg');
    background-size: cover;
    background-position: 50% 50%;
    min-height: 400px;
    @include mq($from: tablet) {
      flex-basis: 60%;
    }
  }

  &__logo {
    max-width: 125px;
    @include mq($from: tablet) {
      max-width: 150px;
    }
    margin-bottom: var(--spacing);
  }

  &__title {
    font-size: 1.5rem;
  }
}
</style>
