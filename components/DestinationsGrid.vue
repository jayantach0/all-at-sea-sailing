<template>
  <div
    class="c-destination-grid"
    :class="{ 'c-destination-grid--large': titlePage }"
  >
    <div
      v-if="titlePage"
      :data-aos="titlePage ? 'fade' : 'fade-left'"
      data-aos-once="true"
      data-aos-anchor=".c-destination-grid"
      class="c-destination-grid__item c-destination-grid__item--title"
    >
      Destinations
    </div>
    <nuxt-link
      v-for="(destination, index) in destinations"
      :key="destination.title"
      :to="destination.link"
      :data-aos="titlePage ? 'fade' : 'fade-left'"
      data-aos-once="true"
      :data-aos-delay="(index + 1) * 100"
      data-aos-anchor=".c-destination-grid"
      class="c-destination-grid__item"
    >
      <picture>
        <source :srcSet="destination.imageWebp" type="image/webp" />
        <source
          :srcSet="destination.image + ', ' + destination.image2x + ' 2x'"
          type="image/jpeg"
        />
        <source media="(min-width: 900px)" :srcSet="destination.image2x" />
        <img class="c-destination-grid__img" :src="destination.image" />
      </picture>
      <div class="c-destination-grid__btn">{{ destination.title }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  props: {
    titlePage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      destinations: [
        {
          title: 'Greece',
          link: '/destinations/greece',
          image: require('~/assets/images/greece.jpg'),
          image2x: require('~/assets/images/greece@2x.jpg'),
          imageWebp: require('~/assets/images/greece@2x.webp')
        },
        {
          title: 'Croatia',
          link: '/destinations/croatia',
          image: require('~/assets/images/croatia.jpg'),
          image2x: require('~/assets/images/croatia@2x.jpg'),
          imageWebp: require('~/assets/images/croatia@2x.webp')
        },
        {
          title: 'Turkey',
          link: '/destinations/turkey',
          image: require('~/assets/images/turkey.jpg'),
          image2x: require('~/assets/images/turkey@2x.jpg'),
          imageWebp: require('~/assets/images/turkey@2x.webp')
        },
        {
          title: 'Montenegro',
          link: '/destinations/montenegro',
          image: require('~/assets/images/montenegro.jpg'),
          image2x: require('~/assets/images/montenegro@2x.jpg'),
          imageWebp: require('~/assets/images/montenegro@2x.webp')
        },
        {
          title: 'Italy',
          link: '/destinations/italy',
          image: require('~/assets/images/italy.jpg'),
          image2x: require('~/assets/images/italy@2x.jpg'),
          imageWebp: require('~/assets/images/italy@2x.webp')
        }
      ]
    }
  },
  mounted() {
    AOS.refresh()
  }
}
</script>

<style lang="scss" scoped>
.c-destination-grid {
  $self: &;
  background-color: var(--color-primary);
  overflow: hidden;
  @include mq($from: smallTablet) {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 250px;
    color: #fff;
    text-decoration: none;
    font-size: var(--text-default);
    position: relative;
    overflow: hidden;

    &--title {
      padding: var(--spacing);
      @include mq($until: smallTablet) {
        min-height: 0;
      }
      @include mq($from: tablet) {
        font-size: 2em;
      }
    }

    #{$self}--large & {
      min-width: 50%;
      @include mq($from: smallTablet) {
        min-height: 33vh;
      }
      @include mq($from: tablet) {
        min-height: 40vh;
      }
      @include mq($from: extraWide) {
        min-height: 45vh;
        min-width: 33.33%;
      }
    }
  }

  &__img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
    transition: opacity 0.2s ease-out, transform 3s ease;
  }

  &__item:hover &__img {
    opacity: 1;
    transform: scale(1.25);
    transition: opacity 0.2s ease-out, transform 10s ease;
  }

  &__btn {
    font-family: var(--font-family-secondary);
    position: relative;
    z-index: 1;
    max-width: 200px;
    border: 2px solid;
    border-radius: var(--border-radius);
    padding: var(--spacing-small) var(--spacing);
    text-align: center;
    @include mq($from: smallTablet) {
      min-width: 60%;
    }
    #{$self}--large & {
      min-width: 200px;
    }
  }
}
</style>
