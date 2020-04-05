<template>
  <div class="c-destination-header">
    <div class="c-destination-header__body">
      <div class="c-destination-header__body-inner">
        <h1 class="c-heading c-heading--bordered u-h2">
          {{ title }}
        </h1>
        <slot />
      </div>
    </div>
    <div
      class="c-destination-header__banner"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1250"
    >
      <picture v-lazy-container="{ selector: 'img' }">
        <source :srcSet="img.imageWebp" type="image/webp" />
        <source
          :srcSet="img.image + ', ' + img.image2x + ' 2x'"
          type="image/jpeg"
        />
        <source media="(min-width: 900px)" :srcSet="img.image2x" />
        <img class="c-destination-grid__img" :src="img.image" />
      </picture>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    img: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    AOS.refresh()
  }
}
</script>

<style lang="scss" scoped>
.c-destination-header {
  background-color: var(--color-primary);
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  @include mq($from: tablet) {
    flex-direction: row;
    min-height: 70vh;
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
        width: 100%;
        max-width: 420px;
        padding-right: var(--spacing);
        margin-left: auto;
      }
    }
  }

  &__banner {
    min-height: 400px;
    position: relative;
    @include mq($from: tablet) {
      flex-basis: 60%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
