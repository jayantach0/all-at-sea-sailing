<template>
  <div>
    <section-block color="dark">
      <div class="o-wrapper o-wrapper--large">
        <div class="c-destination-description">
          <div class="o-layout o-layout--huge o-layout--top">
            <div
              class="o-layout__item u-1/2@tablet c-destination-description__locations"
            >
              <div class="o-pack o-pack--center u-margin-bottom-large">
                <div class="o-pack__item u-padding-right-small">
                  <img
                    class="c-icon c-icon--large"
                    src="@/assets/images/yacht.svg"
                  />
                </div>
                <div class="o-pack__item">
                  <h2 class="c-heading u-h3 u-margin-bottom-none">
                    Locations
                  </h2>
                </div>
              </div>
              <div class="c-destination-description__map">
                <img class="c-destination-grid__img" :src="map" />
              </div>
            </div>
            <div class="o-layout__item u-1/2@tablet">
              <div class="o-pack o-pack--center u-margin-bottom-large">
                <div class="o-pack__item u-padding-right-small">
                  <img
                    class="c-icon c-icon--large"
                    src="@/assets/images/place-marker.svg"
                  />
                </div>
                <div class="o-pack__item">
                  <h2 class="c-heading u-h3 u-margin-bottom-none">
                    Trip start/finish location
                  </h2>
                </div>
              </div>
              <h4>{{ start.title }}</h4>
              <p>{{ start.description }}</p>
              <div class="u-color-branding u-margin-top-large">
                <p>Possible locations during the week</p>
                <div
                  v-for="(location, index) in locations"
                  :key="`location-${index}`"
                >
                  <h4 class="u-margin-bottom-small">{{ location.title }}</h4>
                  <div v-html="location.description"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="u-margin-top-large u-text-center">
            <nuxt-link class="c-btn c-btn--large" to="/book">
              Book Now
            </nuxt-link>
          </div>
        </div>
      </div>
    </section-block>
    <section-block>
      <div class="o-wrapper o-wrapper--large">
        <h3 class="u-color-primary c-heading c-heading--bordered">
          Highlights
        </h3>
        <div class="o-layout o-layout--huge">
          <div
            v-for="(highlight, index) in highlights"
            :key="`highlight-${index}`"
            class="o-layout__item u-1/2@tablet"
          >
            <div class="o-block u-margin-bottom-huge">
              <picture
                v-if="highlight.image.image"
                v-lazy-container="{ selector: 'img' }"
              >
                <source :srcSet="highlight.image.imageWebp" type="image/webp" />
                <source
                  :srcSet="
                    highlight.image.image +
                      ', ' +
                      highlight.image.image2x +
                      ' 2x'
                  "
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 900px)"
                  :srcSet="highlight.image.image2x"
                />
                <img
                  v-if="highlight.image.image"
                  class="o-block__img"
                  :src="highlight.image.image"
                />
              </picture>
              <h4 class="u-color-branding">{{ highlight.title }}</h4>
              <p>{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section-block>
  </div>
</template>

<script>
import SectionBlock from '~/components/Section'
export default {
  components: {
    SectionBlock
  },
  props: {
    start: {
      type: Object,
      default() {
        return {}
      }
    },
    locations: {
      type: Array,
      default() {
        return []
      }
    },
    map: {
      type: String,
      default: ''
    },
    highlights: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-destination-description {
  &__locations {
  }
  &__map {
    @include mq($from: tablet) {
      flex-grow: 1;
      position: sticky;
      top: var(--spacing);
      img {
        max-height: calc(100vh - var(--spacing) - var(--spacing));
      }
    }
  }
}
</style>
