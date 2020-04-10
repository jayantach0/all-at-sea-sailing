<template>
  <div>
    <navbar />
    <nuxt />
    <site-footer />
  </div>
</template>
<script>
import navbar from '~/components/Navbar'
import SiteFooter from '~/components/Footer'
export default {
  components: {
    navbar,
    SiteFooter
  },
  head() {
    return {
      title: 'Chartering a yacht has never been so easy!',
      titleTemplate: '%s | All At Sea Sailing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `
            Chartering a yacht has never been so easy! Stress free, every step of
            the way. Charter a yacht from Greece, Croatia, Italy, Turkey or Montenegro.
          `
        }
      ]
    }
  }
}
</script>
<style>
body {
  overflow-x: hidden;
  background-color: var(--color-primary);
}

a {
  color: var(--color-primary);
}
</style>
