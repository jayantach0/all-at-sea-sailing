<template>
  <div>
    <page-banner>
      <h1 class="u-h3 c-heading c-heading--bordered">How it works</h1>
      <p>
        After choosing to spend a week with All At Sea, we provide you with all
        the details of where to go and what to bring for a week onboard one of
        our yachts.
      </p>
      <p>
        On the day of arrival, in your destination of choice, your skipper will
        meet you at one of our set locations in the marina.
        <em>(All details will be clearly provided via email after booking)</em>.
        Then you are all set to spend an amazing week island hopping and
        discovering new bays on your own skippered yacht.
      </p>
      <p>
        Payment - We take a deposit on booking and the remaining amount to be
        paid 10 weeks prior to departure.
      </p>
      <p>
        Please note. Food and Drink is not provided, but cooking equipment is
        onboard in the galley kitchen or experience any of the local restaurants
        on the route.
      </p>
      <p>
        If you have any questions please don’t hesitate to email or call us in
        person.
      </p>
      <p>
        <nuxt-link to="/book" class="c-btn c-btn--large">Book Now</nuxt-link>
      </p>
    </page-banner>
  </div>
</template>
<script>
import PageBanner from '~/components/PageBanner'
export default {
  components: {
    PageBanner
  }
}
</script>
