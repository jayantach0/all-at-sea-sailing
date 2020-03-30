<template>
  <div>
    <destination-header :title="title" :img="banner">
      <div v-html="headerContent"></div>
    </destination-header>
    <destination-description
      :start="start"
      :locations="locations"
      :map="map"
      :highlights="highlights"
    />
  </div>
</template>
<script>
import DestinationHeader from '~/components/destinations/DestinationHeader'
import DestinationDescription from '~/components/destinations/DestinationDescription'
export default {
  components: {
    DestinationHeader,
    DestinationDescription
  },
  data() {
    return {
      title: 'Greece',
      headerContent: `<p>Discover one of the worlds top sailing destinations with over 6000 islands, captivating history, immersive culture, crystal blue waters and breathtaking sunsets.</p>
        <p>Spend your time island hopping, tasting the local cuisine, swimming in secret coves and exploring seaside villages.</p>`,
      banner: {
        loading: require('~/assets/images/greece-banner-lqip.jpg'),
        image: require('~/assets/images/greece-banner.jpg'),
        image2x: require('~/assets/images/greece-banner@2x.jpg'),
        imageWebp: require('~/assets/images/greece-banner@2x.webp')
      },
      start: {
        title: 'Athens',
        description: `The bustling Ancient Greek capital. Explore this beautiful city which is still dominated by 5th Century landmarks, such as the Acropolis and the Parthenon Temple.`
      },
      map: require('~/assets/images/croatia-map.svg'),
      locations: [
        {
          title: 'Epidavros',
          description:
            '<p>Steeped in history, spend the night in the beautiful harbour village of old Epidavros, with its dramatic mountainous coastline. An option to visit the ancient amphitheatre, go hiking or visit any of the delicious local fish tavernas all await you here.</p>'
        },
        {
          title: 'Ermioni',
          description:
            '<p>Experience a beautiful sail to Ermioni, cruising down the Saronic gulf into the rustic town of Ermioni. Sunset cocktails bars and restaurants line the sea shore with breathtaking views over the islands. Go slightly inland to see wonderful Greek vineyards and farms. </p>'
        },
        {
          title: 'Hydra',
          description: `<p>The beautiful ancient island of Hydra has no cars on the island. You can dine in one of the many traditional restaurants, hike to an ancient monastery or take a donkey ride through the town, but be sure not to miss the famous Hydra sunset. Hydra is the jewel in the crown, of the Greek Saronic islands.</p>`
        },
        {
          title: 'Poros',
          description: `<p>Poros has been the bohemian home to writers and poets over the years and it’s not hard to see why. Drop anchor in one of the many secluded bays or head over to the watersports centre south of the island for wakeboarding, parasailing and tubing or choose to shop around the town and relax on one the many beaches. </p>`
        },
        {
          title: 'Spetses',
          description: `<p>Step back in time on the Island of Spetses, catch a horse drawn cart into town or walk the cobbled streets and browse the fashion shops. For the more adventurous, hire quads or scooters and navigate your way round the picturesque landscape of the island, with its stunning bays and underwater caves.</p>`
        }
      ],
      highlights: [
        {
          title: 'Ancient Athens Centre',
          description:
            'Visit the cultural UNESCO World Heritage site in Athens, built in the 5th century including the renowned Parthenon.',
          image: {
            loading: require('~/assets/images/greece-athens-lqip.jpg'),
            image: require('~/assets/images/greece-athens.jpg'),
            image2x: require('~/assets/images/greece-athens@2x.jpg'),
            imageWebp: require('~/assets/images/greece-athens@2x.webp')
          }
        },
        {
          title: 'Hydra Island',
          description:
            'One of the most picturesque spots of the Aegean sea islands, explore the town that artists like Leonard Cohen and Sophia Loren lived.',
          image: {
            loading: require('~/assets/images/greece-hydra-lqip.jpg'),
            image: require('~/assets/images/greece-hydra.jpg'),
            image2x: require('~/assets/images/greece-hydra@2x.jpg'),
            imageWebp: require('~/assets/images/greece-hydra@2x.webp')
          }
        },
        {
          title: 'Epidavros Amphitheater',
          description:
            'Visit one of the most popular archaeological sites in Greece, the Ancient well-preserved ampitheatre was constructed in the late 4th century and provides impressive views of the valley below.',
          image: {
            loading: require('~/assets/images/greece-epidavros-lqip.jpg'),
            image: require('~/assets/images/greece-epidavros.jpg'),
            image2x: require('~/assets/images/greece-epidavros@2x.jpg'),
            imageWebp: require('~/assets/images/greece-epidavros@2x.webp')
          }
        },
        {
          title: 'Spetses',
          description:
            'Enjoy this picturesque town famous for its secluded bays, elegant atmosphere and Venetian architecture.',
          image: {
            loading: require('~/assets/images/greece-spetses-lqip.jpg'),
            image: require('~/assets/images/greece-spetses.jpg'),
            image2x: require('~/assets/images/greece-spetses@2x.jpg'),
            imageWebp: require('~/assets/images/greece-spetses@2x.webp')
          }
        }
      ]
    }
  }
}
</script>
