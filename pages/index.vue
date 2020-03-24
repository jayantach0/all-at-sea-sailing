<template>
  <div>
    <hero-banner :title="heroTitle" :body="heroBody" />
    <section-block>
      <div class="o-wrapper o-wrapper--tiny u-text-center">
        <h2
          class="u-h4 u-color-primary"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Chartering a yacht has never been so easy! Stress free, every step of
          the way.
        </h2>
        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
          Simply answer these 3 questions and get a quote...
        </p>
      </div>
      <div
        class="o-wrapper o-wrapper--x-tiny"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="100"
      >
        <booking-form />
      </div>
    </section-block>
    <section-block color="dark">
      <div class="o-wrapper o-wrapper--small">
        <h3 class="c-heading c-heading--bordered u-text-center">
          What’s included in the price
        </h3>
        <ul class="o-list-bare o-layout u-color-branding">
          <li
            v-for="item in includedList"
            :key="item"
            class="o-pack o-pack--center o-layout__item u-1/2@tablet u-margin-bottom"
          >
            <span class="o-pack__item u-padding-right-small">
              <svg-icon
                name="checkmark"
                class="c-icon--block c-icon--large c-icon--circled"
              />
            </span>
            <span class="o-pack__item">{{ item }}</span>
          </li>
        </ul>
      </div>
    </section-block>
  </div>
</template>
<script>
import HeroBanner from '~/components/home/HeroBanner'
import SectionBlock from '~/components/Section'
import BookingForm from '~/components/BookingForm'
export default {
  components: {
    HeroBanner,
    SectionBlock,
    BookingForm
  },
  data() {
    return {
      heroTitle:
        'Charter your own yacht in some of the Mediterraneans most beautiful locations.',
      heroBody:
        'We provide the skipper, so you can sit back and relax or learn to sail, it’s up you! Either way you’ll fully enjoy a holiday of a lifetime.',
      includedList: [
        'Qualified and Experienced Skipper',
        'Linen, towels and fuel costs included',
        'No hidden extra costs after quote',
        'All snorkelling equipment included',
        'Tax’s and Ports fees all covered',
        'Pay deposit and full amount later'
      ]
    }
  }
}
</script>
