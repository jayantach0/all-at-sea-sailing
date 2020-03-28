<template>
  <div
    class="c-destination-grid"
    :class="{ 'c-destination-grid--large': titlePage }"
  >
    <div v-if="titlePage" class="c-destination-grid__item">Destinations</div>
    <nuxt-link
      v-for="(destination, index) in destinations"
      :key="destination.title"
      :to="destination.link"
      data-aos="fade-left"
      data-aos-once="true"
      :data-aos-delay="(index + 1) * 100"
      data-aos-anchor=".c-destination-grid"
      class="c-destination-grid__item"
    >
      <img class="c-destination-grid__img" :src="destination.image" />
      <div class="c-destination-grid__btn">{{ destination.title }}</div>
    </nuxt-link>
  </div>
</template>

<script>
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
          image: require('~/assets/images/croatia.jpg')
        },
        {
          title: 'Croatia',
          link: '/destinations/croatia',
          image: require('~/assets/images/croatia.jpg')
        },
        {
          title: 'Turkey',
          link: '/destinations/turkey',
          image: require('~/assets/images/croatia.jpg')
        },
        {
          title: 'Montenegro',
          link: '/destinations/montenegro',
          image: require('~/assets/images/croatia.jpg')
        },
        {
          title: 'Italy',
          link: '/destinations/italy',
          image: require('~/assets/images/croatia.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-destination-grid {
  background-color: var(--color-primary);
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
  }
}
</style>
