<template>
  <div class="c-page-hero">
    <div class="o-wrapper">
      <div class="o-pack o-pack--center">
        <div class="o-pack__item o-pack__item--shrink o-pack__item--top">
          <img
            class="c-page-hero__logo"
            :src="require('~/assets/images/logo-circle.svg')"
            data-aos="fade"
            data-aos-once="true"
          />
        </div>
        <div
          class="o-pack__item o-pack__item--grow"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="50"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.c-page-hero {
  background-color: var(--color-primary);
  padding-top: var(--spacing-huge);
  padding-bottom: var(--spacing-huge);
  color: #fff;

  &__logo {
    display: none;
    @include mq($from: tablet) {
      display: block;
      width: 150px;
      margin-right: var(--spacing-huge);
    }
  }

  p {
    margin-bottom: 0;
  }
  a {
    color: #fff;
  }
}
</style>
