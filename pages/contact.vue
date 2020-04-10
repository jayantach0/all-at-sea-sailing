<template>
  <div>
    <page-hero>
      <h1 class="u-h3">Contact Us</h1>
      <div class="o-pack o-pack--wrap">
        <div class="o-pack__item u-margin-top-tiny u-margin-right-large">
          <div>Email us at:</div>
          <a class="u-text-default" href="mailto:info@allatsesailing.com">
            info@allatsesailing.com
          </a>
        </div>
        <div class="o-pack__item u-margin-top-tiny">
          <div>Call us on:</div>
          <a class="u-text-default" href="tel:+447542937259">+44 75429 37259</a>
        </div>
      </div>
    </page-hero>
    <section-block>
      <div class="o-wrapper o-wrapper--tiny">
        <h3 class="c-heading c-heading--bordered u-text-center u-color-primary">
          Send us a message
        </h3>
      </div>
      <div class="o-wrapper o-wrapper--tiny">
        <contact-form />
      </div>
    </section-block>
  </div>
</template>
<script>
import PageHero from '~/components/PageHero'
import SectionBlock from '~/components/Section'
import ContactForm from '~/components/ContactForm'
export default {
  components: {
    PageHero,
    SectionBlock,
    ContactForm
  },
  head() {
    return {
      title: 'Contact | Destinations'
    }
  }
}
</script>
