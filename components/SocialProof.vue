<template>
  <div class="c-social-proof">
    <div>
      <vue-tiny-slider
        v-bind="tinySliderOptions"
        class="c-social-proof__slideshow"
      >
        <div v-for="quote in quotes" :key="quote.author">
          <div class="o-wrapper">
            <div class="c-quote">
              <div class="c-quote__stars">
                <star />
                <star />
                <star />
                <star />
                <star />
              </div>
              <div class="c-quote__text">“{{ quote.text }}”</div>
              <div class="c-quote__author">— {{ quote.author }}</div>
            </div>
          </div>
        </div>
      </vue-tiny-slider>
    </div>
    <div>
      <div class="o-wrapper u-margin-top">
        <a
          href="https://www.trustpilot.com/review/allatseasailing.com"
          target="_blank"
          class="c-trustpilot-link"
        >
          Read all reviews on
          <img
            src="~/assets/images/trustpilot.svg"
            width="100"
            class="u-margin-left-tiny"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import star from '~/assets/images/star.svg?inline'
export default {
  components: {
    star
  },
  data() {
    return {
      quotes: [
        {
          text:
            'We had the best week with All At Sea. Every destination was gorgeous and had loads to see and do. Would definitely go back again.',
          author: 'Tom'
        },
        {
          text:
            'Picture perfect! By far the highlight of last year was sailing the Mediterranean with this team! Dreaming of going back and waking up on the boat to crystal clear water.',
          author: 'Vicky J'
        },
        {
          text:
            'Best week ever! We were met with enthusiasm and superb local knowledge that helped us have the best week ever. Would highly recommend.',
          author: 'Jonny'
        },
        {
          text:
            'An off the beaten track adventure, which provides a much more authentic and enjoyable travel experience. Top team, top trip. Top tip: get yourself onboard.',
          author: 'Rob'
        }
      ],
      tinySliderOptions: {
        autoplay: true,
        autoplayTimeout: 7000,
        speed: 750,
        controls: false,
        autoplayButtonOutput: false,
        navPosition: 'bottom'
      }
    }
  }
}
</script>

<style lang="scss">
@import 'tiny-slider/src/tiny-slider';
.tns-nav {
  margin-top: 0.5em;
  margin-bottom: var(--spacing-tiny);
  display: flex;
  justify-content: center;
  button {
    -webkit-appearance: none;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 0;
    margin-right: var(--spacing-tiny);
    margin-left: var(--spacing-tiny);
    outline: none;
    background-color: var(--color-primary);
    opacity: 0.15;
    overflow: hidden;
    transition: 0.2s ease;
    &:hover {
      opacity: 0.5;
    }
    &.tns-nav-active {
      opacity: 1;
    }
  }
}
.c-social-proof {
  text-align: center;

  &__slideshow {
    display: block;
  }
}

.c-quote {
  &__text {
    font-size: var(--text-default);
    color: var(--color-primary);
  }

  &__stars {
    color: #21b684;
    svg {
      width: 32px;
    }
  }

  &__author {
    margin-top: var(--spacing-small);
    font-weight: bold;
    color: var(--color-primary);
  }
}

.c-trustpilot-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  img {
    display: block;
    margin-bottom: 0.3em;
  }
}
</style>
