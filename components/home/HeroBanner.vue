<template>
  <div class="c-home-hero">
    <transition name="fade">
      <div v-show="trailerPlaying" class="c-trailer">
        <div class="c-trailer__backdrop" @click="closeTrailer()"></div>
        <div class="c-trailer__modal">
          <div class="c-trailer__close" @click="closeTrailer()">
            &times;
          </div>
          <video ref="trailer" class="c-trailer__video" controls>
            <source src="/all-at-sea-sailing-intro-sm.webm" type="video/webm" />
            <source src="/all-at-sea-sailing-intro-sm.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </transition>
    <div class="c-home-hero__body">
      <div class="c-home-hero__body-inner">
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
            <button class="c-btn" @click="playTrailer()">
              Watch Trailer
            </button>
          </p>
        </div>
      </div>
    </div>
    <div class="c-home-hero__banner"></div>
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
    }
  },
  data() {
    return {
      trailerPlaying: false
    }
  },
  mounted() {
    AOS.init()
  },
  methods: {
    playTrailer() {
      this.trailerPlaying = true
      this.$refs.trailer.load()
      this.$refs.trailer.play()
    },
    closeTrailer() {
      this.$refs.trailer.pause()
      this.trailerPlaying = false
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

.c-trailer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: grid;
  place-items: center;

  &__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
  }

  &__modal {
    max-width: 1200px;
    width: 90vw;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 2;
  }

  &__close {
    position: absolute;
    top: var(--spacing-small);
    right: var(--spacing-small);
    font-size: var(--text-large);
    z-index: 2;
    line-height: 0.5;
    padding: var(--spacing-small);
    transition: 0.2s ease;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  &__video {
    width: 100%;
    height: auto;
    display: block;
    outline: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.25s;
}
.fade-enter,
.fade-leave-to {
  transform: scale(1.25);
  opacity: 0;
}
</style>
