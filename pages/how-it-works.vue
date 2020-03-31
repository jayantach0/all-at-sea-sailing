<template>
  <div>
    <page-banner>
      <h1 class="u-h3 c-heading c-heading--bordered">How it works</h1>
      <p>
        After choosing to spend a week with All At Sea, we provide you with all
        the details of where to go and what to bring for an amazing week onboard
        one of our yachts.
      </p>
      <p>
        On the day of departure, in your destination of choice, your skipper
        will meet you at one of our set locations in the marina. Then it’s time
        to set sail and spend an amazing week island hopping and discovering new
        bays. Please note. Food and Drink is not provided, but cooking equipment
        is onboard in the galley kitchen or experience any of the local
        restaurants on the route. If you have any questions please don’t
        hesitate to email or call us in person.
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
