<template>
  <div class="c-navbar">
    <div class="c-navbar__inner">
      <nuxt-link to="/"><logo class="c-navbar__branding"/></nuxt-link>
      <nav class="c-navbar__nav">
        <ul class="o-list-inline">
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="">Destinations</nuxt-link>
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="">Our Yachts</nuxt-link>
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="">How it works</nuxt-link>
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="">FAQs</nuxt-link>
          </li>
          <li class="o-list-inline__item c-navbar__nav-item">
            <nuxt-link class="c-navbar__nav-link" to="">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="c-navbar__cta">
        <nuxt-link class="c-btn" to="">Book Now</nuxt-link>
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
  padding: var(--spacing) var(--spacing);
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
    max-width: 150px;
    @include mq($from: tablet) {
      max-width: 200px;
    }
  }

  // Navigation
  &__nav {
    font-size: 0.825rem;
    text-transform: uppercase;
    @include mq($until: tablet) {
      padding-top: var(--spacing-small);
      padding-bottom: var(--spacing-small);
      margin-bottom: calc(var(--spacing) * -1);
      margin-left: calc(var(--spacing) * -1);
      margin-right: calc(var(--spacing) * -1);
      flex-grow: 1;
      order: 3;
    }
    ul {
      margin-bottom: 0;
      text-align: center;
    }
    &-item {
      margin-left: var(--spacing-tiny);
      margin-right: var(--spacing-tiny);
    }
    &-link {
      display: inline-block;
      color: var(--color-primary);
      padding: var(--spacing-tiny);
      text-decoration: none;
      &:focus,
      &:hover {
        color: var(--color-primary-light);
        text-decoration: underline;
      }
    }
  }

  &__cta {
  }
}
</style>
