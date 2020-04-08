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
      title: 'Montenegro',
      headerContent: `<p>Find yourself sailing the beautiful Adriatic coastline, explore charming coastal towns, snorkel in crystal clear bays and unwind while watching the sun set over the waves. Experience sandy beaches, hidden gems, dramatic scenery and the contrast of greens from the looming mountains over the intense blues of the reflecting waters.</p>`,
      banner: {
        image: require('~/assets/images/montenegro-banner.jpg'),
        image2x: require('~/assets/images/montenegro-banner@2x.jpg'),
        imageWebp: require('~/assets/images/montenegro-banner@2x.webp')
      },
      start: {
        title: 'Kotor',
        description: `Located on a beautiful bay surrounded by limestone cliffs, this UNESCO World Heritage Site is not to be missed. Steeped in history, tradition, scenic views, monuments and medieval architecture it makes for a perfect starting point. `
      },
      map: require('~/assets/images/montenegro-map.svg'),
      locations: [
        {
          title: 'Tivat',
          description:
            '<p>Famously one of the sunniest spots in the bay, find yourself strolling along the promenade, lounging in the sun or paddleboarding during the day. With a choice of restarants for every mood and open sea bars with live music, Tivat makes for a perfect stopping point.</p>'
        },
        {
          title: 'Perast',
          description: `<p>Known as the Venice of Montenegro, this tiny idyllic village on the bay of Kotor has a rich history, ancient architecture, stunning views and romantic waterfront restaurants.</p>`
        },
        {
          title: 'Morinj',
          description: `<p>A quaint seaside fishing village, perfect for those who wish to spend their time immersed in the local culture, history and untouched nature. Take in the surroundings of lush green mountanous slopes, crystal clear springs and old watermills.</p>
            <p>Get stuck into Mediterranean favourites as well as exceptional seafood dishes in many of the family run restaurants on offer.</p>`
        },
        {
          title: 'Budva',
          description: `<p>A bustling medieval town with some of the finest sun soaked beaches. Its cobbled streets host an array of cafes and boutiques to keep you entertained along with a lively nightlife.</p>`
        },
        {
          title: 'Petrovac',
          description: `<p>Stroll along the treelined promenade leading to an abundance of bars and superb restaurants after a day at the 600m long red sand beach. Try visiting some of the many historical sites, such as the remains of a sixteenth-century Venitian fortress which shelters a tiny harbour.</p>`
        }
      ],
      highlights: [
        {
          title: 'Kotor',
          description:
            'Explore this UNESCO World Heritage site steeped in medieval architecture and history.',
          image: {
            image: require('~/assets/images/montenegro-kotor.jpg'),
            image2x: require('~/assets/images/montenegro-kotor@2x.jpg'),
            imageWebp: require('~/assets/images/montenegro-kotor@2x.webp')
          }
        },
        {
          title: 'Budva',
          description:
            'A medieval old town with cobbled streets, cafes and boutiques. Known for its choice of beaches, lively nightlife and historical sites.',
          image: {
            image: require('~/assets/images/montenegro-budva.jpg'),
            image2x: require('~/assets/images/montenegro-budva@2x.jpg'),
            imageWebp: require('~/assets/images/montenegro-budva@2x.webp')
          }
        },
        {
          title: 'Montenegro Mountains',
          description:
            'Explore the breathtaking landscape of Montenegro, with a choice of many hikes and trails, enjoy spectacular views of the Adriatic coastline.',
          image: {
            image: require('~/assets/images/montenegro-mountains.jpg'),
            image2x: require('~/assets/images/montenegro-mountains@2x.jpg'),
            imageWebp: require('~/assets/images/montenegro-mountains@2x.webp')
          }
        },
        {
          title: 'Herceg Novi',
          description:
            'Snorkel with the famous abandoned fishing shipwreck as well as swimming in some of the best secluded bays.',
          image: {
            image: require('~/assets/images/montenegro-herceg.jpg'),
            image2x: require('~/assets/images/montenegro-herceg@2x.jpg'),
            imageWebp: require('~/assets/images/montenegro-herceg@2x.webp')
          }
        }
      ]
    }
  }
}
</script>
