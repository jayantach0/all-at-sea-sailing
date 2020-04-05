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
      title: 'Croatia',
      headerContent: `<p>Immerse yourself in fresh local dishes, historical towns, picturesque beaches and coves as well as some of the best nightlife on offer. Sail through the Adriatic sea soaking up the sun, taking in the breathtaking landscapes while deciding which of the many UNESCO World Heritage Sites to visit each day.</p>`,
      banner: {
        image: require('~/assets/images/croatia-banner.jpg'),
        image2x: require('~/assets/images/croatia-banner@2x.jpg'),
        imageWebp: require('~/assets/images/croatia-banner@2x.webp')
      },
      start: {
        title: 'Split',
        description: `Enjoy the Diocletian’s Palace or experience some of 
          Split’s many bars and clubs. Split has a great mix of nightlife and 
          beauty. Your trip starts at the nearby Trogir Marina.`
      },
      map: require('~/assets/images/croatia-map.svg'),
      locations: [
        {
          title: 'Milna, Brac Island',
          description:
            '<p>Milna, on the charming island of Brac, is well known for it’s fresh fish, olive oil and amazing homemade wines. The welcoming port of Milna has been a favourite of sailors for years, and along with it’s many bars and restaurants it provides a great first night stop.</p>'
        },
        {
          title: 'Vborska',
          description: `<p>Vborska is known as the Croatian Venice. Sailing through the small channel is a lovely experience.</p> 
            <p>Options to visit wineries, olive oil or fruit farms are all here, or just relax and take in the beauty of Vborska.</p>`
        },
        {
          title: 'Hvar Town',
          description: `<p>Party like a local in Hvar town, or visit the 13th Century forts and gothic palaces. Hvar town with it’s lively bars and clubs is Croatia’s premier party destination. It’s not all party though, take a long walk along the marble streets or get lost along the many back street shops.</p>`
        },
        {
          title: 'Solta',
          description: `<p>Solta has some stunning beaches and coves to explore. The olive oil produced on Solta is famed worldwide. Enjoy a meal with a glass of homemade wine and slow the pace down on this scenic island paradise, before heading back to Split the following day.</p>`
        },
        {
          title: 'Vis',
          description: `<p>Vis is known as the pearl of the Adriatic Islands. Rich in history, you can take a military tour here or visit one of it’s picturesque beaches. The island is perfectly located to provide fishermen with easy access to the Adriatic, resulting in the local restaurants serving up the freshest fish in the area. Vis truly has something for everyone.</p>`
        }
      ],
      highlights: [
        {
          title: 'Hvar Old Town',
          description:
            'A bustling town steeped in history and the best nightlife in Croatia.',
          image: {
            image: require('~/assets/images/croatia-hvar.jpg'),
            image2x: require('~/assets/images/croatia-hvar@2x.jpg'),
            imageWebp: require('~/assets/images/croatia-hvar@2x.webp')
          }
        },
        {
          title: 'Stari Grad Plain',
          description:
            'A UNESCO World Heritage Site, sample the finest wine and olives at this organic farm in the Croatian countryside.',
          image: {
            image: require('~/assets/images/croatia-stari-grad-plain.jpg'),
            image2x: require('~/assets/images/croatia-stari-grad-plain@2x.jpg'),
            imageWebp: require('~/assets/images/croatia-stari-grad-plain@2x.webp')
          }
        },
        {
          title: 'Vis Island',
          description:
            'A Croatian dream, explore this unspoiled island and its choice of idyllic beaches, mesmirising caves and captivating history.',
          image: {
            image: require('~/assets/images/croatia-vis.jpg'),
            image2x: require('~/assets/images/croatia-vis@2x.jpg'),
            imageWebp: require('~/assets/images/croatia-vis@2x.webp')
          }
        },
        {
          title: 'Golden Horn Beach on Brac',
          description:
            'Possibly the worlds nicest beach, it extends 500 metres out to crystal clear sea’s and interestingly changes direction at its tip due to changing currents.',
          image: {
            image: require('~/assets/images/croatia-golden-horn.jpg'),
            image2x: require('~/assets/images/croatia-golden-horn@2x.jpg'),
            imageWebp: require('~/assets/images/croatia-golden-horn@2x.webp')
          }
        }
      ]
    }
  }
}
</script>
