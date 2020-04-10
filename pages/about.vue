<template>
  <div>
    <page-hero>
      <h1 class="u-h3">About Us</h1>
      <p>
        We are passionate about sailing, spending time with friends/family and
        the enjoyment of life. Initially started by a British sailor and his
        experiences sailing in the Mediterranean islands and wanting to share
        this knowledge with the world.
      </p>
    </page-hero>
    <section-block>
      <div class="o-wrapper o-wrapper--tiny u-text-center">
        <div class="u-text-center u-color-primary">
          <icon-checkmark class="c-icon c-icon--large c-icon--circled" />
        </div>
        <h4 class="u-color-primary">Over 650 happy guests</h4>
        <p>
          We believe that the perfect mix of travel, new adventures, spending
          time with loved ones and enjoying the best Mediterranean cuisine to be
          a winning recipe for the holiday of a lifetime.
        </p>
        <div class="u-text-center u-color-primary u-margin-top-large">
          <icon-checkmark class="c-icon c-icon--large c-icon--circled" />
        </div>
        <h4 class="u-color-primary">Constantly evolving with your help</h4>
        <p>
          The Mediterranean has such a rich tourism history and sailing has been
          enjoyed there for generations. After spending years going back and
          forth between the Islands and developing great relationships with
          bars, restaurants and fellow sailors, we decided it was time to share
          this knowledge.
        </p>
        <div class="u-text-center u-margin-top-large">
          <a
            href="https://trustpilot.com"
            target="_blank"
            class="c-trust-link o-pack o-pack--inline o-pack--center"
          >
            <div class="o-pack__item u-margin-right-small">
              <h4 class="u-color-primary u-margin-bottom-none">
                Check out our
              </h4>
            </div>
            <div class="o-pack__item"><trustpilot class="c-trustpilot" /></div>
          </a>
        </div>
      </div>
    </section-block>
  </div>
</template>
<script>
import PageHero from '~/components/PageHero'
import SectionBlock from '~/components/Section'
import iconCheckmark from '~/assets/images/icon-checkmark.svg?inline'
import trustpilot from '~/assets/images/trustpilot.svg?inline'
export default {
  components: {
    PageHero,
    SectionBlock,
    iconCheckmark,
    trustpilot
  },
  head() {
    return {
      title: 'About'
    }
  }
}
</script>
<style lang="scss" scoped>
.c-trust-link {
  text-decoration: none;
}
.c-trustpilot {
  max-width: 125px;
}
</style>
