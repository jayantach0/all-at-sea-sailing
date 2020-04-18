<template>
  <footer class="c-footer">
    <div class="o-wrapper o-wrapper--large">
      <div class="c-footer__body">
        <div class="c-footer__info">
          <ul class="o-list-inline c-footer__links">
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/destinations">Destinations</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/yachts">Our yachts</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/how-it-works">How it works</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/faqs">FAQs</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/about">About us</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
            <li class="o-list-inline__item c-footer__link">
              <nuxt-link to="/terms">Terms &amp; Conditions</nuxt-link>
            </li>
          </ul>
          <a
            href="https://www.trustpilot.com/review/allatseasailing.com"
            target="_blank"
          >
            <trustpilot class="c-trustpilot" />
          </a>
        </div>
        <div class="c-footer__branding">
          <logo color="brand" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import logo from '~/components/Logo.vue'
import trustpilot from '~/assets/images/trustpilot-white.svg?inline'
export default {
  components: {
    logo,
    trustpilot
  }
}
</script>
<style lang="scss" scoped>
.c-footer {
  width: 100%;
  background-color: var(--color-primary);
  padding: var(--spacing-huge) var(--spacing);
  color: var(--color-branding);
  &__branding {
    max-width: 150px;
  }
  &__body {
    margin-bottom: var(--spacing);
    @include mq($from: tablet) {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  &__info {
    margin-bottom: var(--spacing);
    @include mq($from: tablet) {
      flex-grow: 1;
      text-align: right;
    }
  }
  &__links {
    margin-bottom: 0;
    font-size: 0.825rem;
  }
  &__link {
    margin-right: var(--spacing-small);
    @include mq($from: tablet) {
      margin-left: var(--spacing-small);
    }
    &:last-child {
      margin-right: 0;
    }
  }
  a {
    color: var(--color-branding);
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
}
.c-trustpilot {
  margin-top: var(--spacing-small);
  max-width: 100px;
  height: auto;
}
</style>
