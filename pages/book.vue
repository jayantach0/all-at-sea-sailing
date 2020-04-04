<template>
  <div>
    <page-hero>
      <h1 class="u-h3">Book Now</h1>
    </page-hero>
    <section-block>
      <div class="o-wrapper o-wrapper--x-tiny">
        <booking-form />
      </div>
      <div class="o-wrapper o-wrapper--tiny">
        <div class="u-text-center">
          <div
            class="o-pack u-text-left o-pack--inline o-pack--wrap u-margin-top-large"
          >
            <div class="o-pack__item u-margin-top-tiny u-margin-right-large">
              <div>Email us at:</div>
              <a class="u-text-default" href="mailto:info@allatsesailing.com">
                info@allatsesailing.com
              </a>
            </div>
            <div class="o-pack__item u-margin-top-tiny">
              <div>Call us on:</div>
              <a class="u-text-default" href="tel:+447542937259"
                >+44 75429 37259</a
              >
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
import BookingForm from '~/components/BookingForm'
export default {
  components: {
    PageHero,
    SectionBlock,
    BookingForm
  }
}
</script>
