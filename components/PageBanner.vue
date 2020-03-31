<template>
  <div class="c-page-banner">
    <div class="c-page-banner__body">
      <div class="c-page-banner__body-inner">
        <div>
          <slot />
        </div>
      </div>
    </div>
    <div
      class="c-page-banner__image"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1250"
    ></div>
  </div>
</template>

<style lang="scss">
.c-page-banner {
  background-color: var(--color-primary);
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  @include mq($from: tablet) {
    flex-direction: row;
  }
  &__body {
    color: #fff;
    padding: var(--spacing-huge) var(--spacing);
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
      padding-right: var(--spacing-large);
      @include mq($from: tablet) {
        max-width: 420px;
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

  &__image {
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
