<template>
  <div>
    <page-hero>
      <h1 class="u-h3">Our Skippers</h1>
      <p>
        Here at All At Sea, our skippers are trained to a minimum standard of
        RYA Yachtmaster Offshore. We believe, to ensure the holiday of a
        lifetime, you need to be in safe hands, without compromising the sailing
        experience or customer service. That’s why our team consists of highly
        experienced and knowledgeable skippers that will provide you with an
        unforgettable week.
      </p>
    </page-hero>
    <section-block>
      <div class="o-wrapper">
        <div class="o-layout">
          <div
            v-for="skipper in crew"
            :key="skipper.name"
            class="o-layout__item u-1/2@desktop u-margin-bottom-large"
          >
            <div class="o-pack o-pack--center team-member">
              <div
                class="o-pack__item o-pack__item--top o-pack__item--shrink u-margin-right"
              >
                <div class="team-member__avatar">
                  <img
                    :src="skipper.image"
                    class="team-member__image"
                    :alt="skipper.name"
                  />
                  <img
                    :src="
                      `https://www.countryflags.io/${skipper.country}/flat/64.png`
                    "
                    class="team-member__country"
                  />
                </div>
              </div>
              <div class="o-pack__item">
                <h4 class="u-margin-bottom-tiny u-color-primary">
                  {{ skipper.name }}
                </h4>
                <p class="u-margin-bottom-none">{{ skipper.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section-block>
  </div>
</template>
<script>
import PageHero from '~/components/PageHero'
import SectionBlock from '~/components/Section'
export default {
  components: {
    PageHero,
    SectionBlock
  },
  data() {
    return {
      crew: [
        {
          name: 'Tommy',
          country: 'gb',
          image: require('~/assets/images/skipper-tommy.jpg'),
          bio:
            'Tommy is from the South West of England and teaches sailing when he’s not in the Mediterranean with All At Sea. His experience, sailing ability and brilliant personality make for winning combination as a skipper on our team.'
        },
        {
          name: 'Mati',
          country: 'fr',
          image: require('~/assets/images/skipper-mati.jpg'),
          bio:
            'Mati is a true global sailor, when he’s not working with All At Sea, he’s either crossing the Atlantic Ocean or delivering yachts back and forth to his home island of Corsica. Mati’s charm and pure drive for sailng makes him a joy to be around.'
        },
        {
          name: 'James',
          country: 'gb',
          image: require('~/assets/images/skipper-james.jpg'),
          bio:
            'James is from London, England, and like all great sailors his passion shines through every time he’s on the water. James has the amazing ability to make everyone smile, along with his sailing experience he’s a real asset to the team.'
        },
        {
          name: 'Nick',
          country: 'gb',
          image: require('~/assets/images/skipper-nick.jpg'),
          bio:
            'Being from Portsmouth, England, Nick has grown up around the water, and feels most comfortable with a fresh breeze in his sails. After sailing around the Mediterranean for many years Nick has a wealth of experience to draw upon.'
        },
        {
          name: 'Marco',
          country: 'it',
          image: require('~/assets/images/skipper-marco.jpg'),
          bio:
            'Marco is a passionate sailor. He learnt to sail in the small Italian fishing village of his childhood. A real pirate, Marco has sailed all around the world. His professionalism and easy going charm make him an ideal skipper.'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Our Skippers | Skippered Yacht Charter',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Our team consists of highly experienced and knowledgeable skippers that will provideyou with an unforgettable sailing holiday'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.team-member {
  &__avatar {
    position: relative;
  }
  &__image {
    border-radius: 50%;
    width: 85px;
    height: 85px;
    @include mq($from: tablet) {
      width: 120px;
      height: 120px;
    }
  }
  &__country {
    position: absolute;
    top: -2.5%;
    right: -5%;
    width: 28px;
    @include mq($from: tablet) {
      width: 40px;
    }
  }
}
</style>
