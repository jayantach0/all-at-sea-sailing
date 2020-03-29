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
  }
}
</script>
<style>
body {
  overflow-x: hidden;
  background-color: var(--color-primary);
}
</style>
