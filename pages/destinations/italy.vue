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
      title: 'Italy',
      headerContent: `<p>Explore the volcanic Aeolian coast, a seven island paradise rising out of the azure sea. With a choice of coves, black sand beaches, watersports and fresh local cuisine to keep you entertained.</p>`,
      banner: {
        image: require('~/assets/images/italy-banner.jpg'),
        image2x: require('~/assets/images/italy-banner@2x.jpg'),
        imageWebp: require('~/assets/images/italy-banner@2x.webp')
      },
      start: {
        title: 'Portarosa',
        description: `The start of your trip, close enough to explore mainland Sicily, Palermo and Mt Etna. Visit in peak summer and you will find luxury yachts, day trippers and a bustling nightlife.`
      },
      map: require('~/assets/images/italy-map.svg'),
      locations: [
        {
          title: 'Vulcano',
          description: `<p>Known as the Venice of Montenegro, this tiny idyllic village on the bay of Kotor has a rich history, ancient architecture, stunning views and romantic waterfront restaurants.</p>`
        },
        {
          title: 'Isola Filicudi',
          description: `<p>With only a few villages and an extinct volcano, the island entices many visitors due to its natural untouched beauty, crystal clear waters and sea grottos.</p>`
        },
        {
          title: 'Panarea',
          description: `<p>White washed houses greet you from the small harbour, with a choice of boutique shops, delicious seafood and bars to party the night away. This tiny car-less island is considered the most beautiful of the Aeolians and has a choice of beaches, hidden coves and even hot springs.</p>`
        },
        {
          title: 'Lipari',
          description: `<p>Explore the busiest island of the UNESCO Heritage listed archipelago by scooter, with white washed villages, breathtaking views and coastal walks.</p>`
        },
        {
          title: 'Salina',
          description: `<p>Boasting a lush verdant landscape, freshwater springs and coastal cliffs, Salina is a contrast to the other Aeolian islands. Wind your way around the captivating landscape by scooter, sampling locally grown vintage wine and other Italian treats.</p>`
        }
      ],
      highlights: [
        {
          title: 'Salina',
          description:
            'Sample the sweet wine of Salina while taking in the lush green surroundings. Home to the yachting elite, beautiful buildings and luxurious restaurants.',
          image: {
            image: require('~/assets/images/italy-salina.jpg'),
            image2x: require('~/assets/images/italy-salina@2x.jpg'),
            imageWebp: require('~/assets/images/italy-salina@2x.webp')
          }
        },
        {
          title: 'Panarea',
          description:
            'Stroll the stylish Panarea promenade, soak up the sun while sipping cocktails or simply lounge on one of the beaches on offer.',
          image: {
            image: require('~/assets/images/italy-panarea.jpg'),
            image2x: require('~/assets/images/italy-panarea@2x.jpg'),
            imageWebp: require('~/assets/images/italy-panarea@2x.webp')
          }
        },
        {
          title: 'Stromboli',
          description:
            'Sail around this rare natural wonder and witness the most active volcano in Europe. Stromboli. Nicknamed the lighthouse of the Mediterranean, famous for its incandescent nighttime explosions, enjoy hiking to the top, or spend the day snorkelling the crystal clear waters surrounding.',
          image: {
            image: require('~/assets/images/italy-stromboli.jpg'),
            image2x: require('~/assets/images/italy-stromboli@2x.jpg'),
            imageWebp: require('~/assets/images/italy-stromboli@2x.webp')
          }
        },
        {
          title: 'Grotta del Bue Marino',
          description:
            'The largest cave of the Aeolian, located on Isola Filicudi. Admire the sunlight bouncing off the crystal blue water while taking in the surroundings.',
          image: {
            image: require('~/assets/images/italy-grotta.jpg'),
            image2x: require('~/assets/images/italy-grotta@2x.jpg'),
            imageWebp: require('~/assets/images/italy-grotta@2x.webp')
          }
        }
      ]
    }
  }
}
</script>
