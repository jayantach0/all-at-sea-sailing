<template>
  <div>
    <destinations-grid title-page />
  </div>
</template>
<script>
import DestinationsGrid from '~/components/DestinationsGrid'
export default {
  components: {
    DestinationsGrid
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Yacht Charter Destinations',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Explore the range of options All At Sea Sailing offers to meet your Yacht Charter needsand discover over 7 European sailing destinations.'
        }
      ]
    }
  }
}
</script>
