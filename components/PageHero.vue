<template>
  <div class="c-page-hero">
    <div class="o-wrapper">
      <div class="o-pack o-pack--center">
        <div class="o-pack__item o-pack__item--top">
          <img
            class="c-page-hero__logo"
            :src="require('~/assets/images/logo-circle.svg')"
            data-aos="fade"
            data-aos-once="true"
          />
        </div>
        <div
          class="o-pack__item"
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
    width: 100px;
    margin-right: var(--spacing-large);
    @include mq($from: tablet) {
      width: 150px;
      margin-right: var(--spacing-huge);
    }
  }

  p {
    margin-bottom: 0;
  }
}
</style>
