<template>
  <div>
    <page-hero>
      <h1 class="u-h3">Our Yachts</h1>
      <p>
        All At Sea provides a comfortable, clean and safe experience on board
        our yachts. We only have premium class boats, all less than 10 years
        old, which means more luxury and performance on board. Your Skipper will
        ensure that your yacht is kept to a high standard of cleanliness and
        safety throughout your trip.
      </p>
    </page-hero>
    <section-block>
      <div class="o-wrapper">
        <div
          v-for="(yacht, index) in yachts"
          :key="`yacht-${index}`"
          class="o-layout u-margin-bottom-huge"
        >
          <div class="o-layout__item u-1/3@tablet">
            <h2 class="u-h3 u-color-primary c-heading c-heading--bordered">
              {{ yacht.name }}
            </h2>
            <p class="u-margin-bottom-small">
              <strong class="u-color-primary">Main Features</strong>
            </p>
            <ul class="c-yacht-features">
              <li
                v-for="(feature, subIndex) in yacht.features"
                :key="`yacht-${index}-feature-${subIndex}`"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="o-layout__item u-2/3@tablet">
            <div class="c-yacht-images">
              <div class="c-yacht-images__main">
                <img :src="yacht.mainImage" />
              </div>
              <div class="c-yacht-images__secondary">
                <img :src="yacht.secondaryImage" />
              </div>
              <div class="c-yacht-images__tertiary">
                <img :src="yacht.tertiaryImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="o-wrapper u-margin-top-large">
        <p class="u-color-branding u-text-default">
          *If the exact boat pictured isn’t available, one of equal size and
          specifications will be provided.
        </p>
      </div>
    </section-block>
    <section-block color="dark">
      <div class="o-wrapper">
        <h3 class="c-heading c-heading--bordered">
          Included in your booking are all the following features, equipment and
          extras on board all our boats:
        </h3>
        <ul class="o-list-bare o-layout u-color-branding">
          <li
            v-for="(included, index) in includedList"
            :key="`included-${index}`"
            class="o-pack o-layout__item u-1/2@tablet u-margin-bottom"
          >
            <div class="o-pack__item u-padding-right-large">
              <icon-checkmark
                class="c-icon c-icon--block c-icon--large c-icon--circled"
              />
            </div>
            <div class="o-pack__item">
              <h4 class="u-margin-bottom-small">{{ included.title }}</h4>
              <ul class="o-list-bare">
                <li
                  v-for="(item, subIndex) in included.items"
                  :key="`item-${subIndex}`"
                  class="o-list-bare__item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section-block>
  </div>
</template>
<script>
import PageHero from '~/components/PageHero'
import SectionBlock from '~/components/Section'
import iconCheckmark from '~/assets/images/icon-checkmark.svg?inline'
export default {
  components: {
    PageHero,
    SectionBlock,
    iconCheckmark
  },
  data() {
    return {
      yachts: [
        {
          name: 'Medium Yacht',
          features: [
            '44 ft length',
            '8 Guests',
            '3 Double cabins',
            '1 Bunk room',
            '2 Bathrooms',
            'Dining area',
            'Sunbathing area',
            'Dinghy + Motor'
          ],
          mainImage: require('~/assets/images/medium-yacht@2x.png'),
          secondaryImage: require('~/assets/images/medium-yacht-secondary@2x.jpg'),
          tertiaryImage: require('~/assets/images/medium-yacht-tertiary@2x.jpg')
        },
        {
          name: 'Large Yacht',
          features: [
            '52 ft length',
            '10 Guests ',
            '4 Double cabins',
            '1 Bunk room',
            '3 Bathrooms',
            'Large dining area',
            'Sunbathing area',
            'Dinghy + Motor'
          ],
          mainImage: require('~/assets/images/large-yacht@2x.png'),
          secondaryImage: require('~/assets/images/large-yacht-secondary@2x.jpg'),
          tertiaryImage: require('~/assets/images/large-yacht-tertiary@2x.jpg')
        },
        {
          name: 'Catamaran',
          features: [
            '40 ft length',
            '8 Guests',
            '4 Double cabins',
            '4 Bathrooms',
            'Large dining area',
            'Sunbathing area',
            'Dinghy + Motor'
          ],
          mainImage: require('~/assets/images/catamaran@2x.png'),
          secondaryImage: require('~/assets/images/catamaran-secondary@2x.jpg'),
          tertiaryImage: require('~/assets/images/catamaran-tertiary@2x.jpg')
        }
      ],
      includedList: [
        {
          title: 'Deck',
          items: [
            'Large bathing platform',
            'Spacious cockpit and Ice cooler',
            'Sun deck',
            'Main sail + Headsail'
          ]
        },
        {
          title: 'Double Cabins',
          items: [
            'Double bed',
            'Electric fans',
            'Bed linen + towel',
            'Storage for 2 persons'
          ]
        },
        {
          title: 'Bunk Cabin',
          items: [
            '2 Single beds',
            'Electric fans',
            'Bed linen + towel',
            'Storage for 2 persons'
          ]
        },
        {
          title: 'Bathroom',
          items: ['Electric pump toilets', 'Stand in hot water showers']
        },
        {
          title: 'Saloon',
          items: [
            'Cooker',
            'Fridge + Coolbox',
            'Open Spacious living area',
            'Charging Ports',
            'Bluetooth connected speakers'
          ]
        },
        {
          title: 'Equipment and other extras',
          items: [
            'All safety equipment needed',
            'Snorkelling gear',
            'Dinghy + Outboard Motor',
            'Fishing gear',
            'Inflatable '
          ]
        }
      ]
    }
  },
  head() {
    return {
      title: 'Yachts'
    }
  }
}
</script>
<style lang="scss" scoped>
.c-yacht-features {
  @include mq($until: tablet) {
    columns: 2;
  }
}

.c-yacht-images {
  border: 1px solid #ccc;
  display: grid;
  grid-template-areas:
    'main secondary'
    'main tertiary';
  &__main {
    overflow: hidden;
    grid-area: main;
    padding: var(--spacing);
  }

  &__secondary {
    grid-area: secondary;
  }

  &__tertiary {
    grid-area: tertiary;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
