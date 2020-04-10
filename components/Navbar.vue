<template>
  <div class="c-navbar">
    <div class="c-navbar__inner">
      <nuxt-link to="/"><logo class="c-navbar__branding"/></nuxt-link>
      <nav class="c-navbar__nav">
        <ul class="o-list-inline">
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="/destinations"
              >Destinations</nuxt-link
            >
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="/yachts"
              >Our Yachts</nuxt-link
            >
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="/how-it-works"
              >How it works</nuxt-link
            >
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="/faqs">FAQs</nuxt-link>
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="/contact"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <div class="c-navbar__cta">
        <nuxt-link class="c-btn" to="/book">Book Now</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import logo from '~/components/Logo.vue'
export default {
  components: {
    logo
  }
}
</script>
<style lang="scss">
.c-navbar {
  width: 100%;
  background-color: #fff;
  padding-top: var(--spacing);
  padding-bottom: var(--spacing);
  @include mq($from: tablet) {
    padding-left: var(--spacing);
    padding-right: var(--spacing);
  }
  &__inner {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include mq($until: tablet) {
      flex-wrap: wrap;
    }
  }
  //branding
  &__branding {
    height: auto;
    max-width: 130px;
    margin-left: var(--spacing);
    @include mq($from: smallDesktop) {
      margin-left: 0;
      max-width: 180px;
    }
  }

  // Navigation
  &__nav {
    font-size: 0.825rem;
    text-transform: uppercase;
    font-size: 70%;
    @include mq($from: smallTablet) {
      font-size: 85%;
    }
    @include mq($from: smallDesktop) {
      font-size: 100%;
    }
    @include mq($until: tablet) {
      padding-left: var(--spacing-small);
      padding-right: var(--spacing-small);
      margin-bottom: calc(var(--spacing) * -1);
      margin-left: 0;
      margin-right: 0;
      flex-grow: 1;
      width: 100%;
      order: 3;
    }
    ul {
      margin-bottom: 0;
      text-align: center;
      display: flex;
      @include mq($until: tablet) {
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
    &-item {
      @include mq($from: tablet) {
        margin-left: var(--spacing-tiny);
        margin-right: var(--spacing-tiny);
      }
      @include mq($from: smallDesktop) {
        margin-left: var(--spacing-small);
        margin-right: var(--spacing-small);
      }
    }
    &-link {
      display: inline-block;
      color: var(--color-primary);
      padding: var(--spacing) 0;
      text-decoration: none;
      @include mq($from: tablet) {
        padding: var(--spacing-tiny);
      }
      &:focus,
      &:hover,
      &.is-active {
        color: var(--color-primary-light);
        text-decoration: underline;
      }
      &.is-active {
        font-weight: bold;
      }
    }
  }

  &__cta {
    @include mq($until: tablet) {
      margin-right: var(--spacing);
    }
  }
}
</style>
