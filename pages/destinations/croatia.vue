<template>
  <div>
    <destination-header :title="title" :img="banner">
      <div v-html="headerContent"></div>
    </destination-header>
  </div>
</template>
<script>
import DestinationHeader from '~/components/destinations/DestinationHeader'
export default {
  components: {
    DestinationHeader
  },
  data() {
    return {
      title: 'Croatia',
      headerContent: `<p>Discover one of the worlds top sailing destinations with over 6000 islands, captivating history, immersive culture, crystal blue waters and breathtaking sunsets.</p>
        <p>Spend your time island hopping, tasting the local cuisine, swimming in secret coves and exploring seaside villages.</p>`,
      banner: {
        loading: require('~/assets/images/greece-lqip.jpg'),
        image: require('~/assets/images/greece.jpg'),
        image2x: require('~/assets/images/greece@2x.jpg'),
        imageWebp: require('~/assets/images/greece@2x.webp')
      }
    }
  }
}
</script>
