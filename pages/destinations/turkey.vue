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
      title: 'Turkey',
      headerContent: `<p>Set sail for Turkey, where the east meets the west, and discover blue skies, turquoise waters, charming culture and beautiful coastlines. Soak up the delightful cuisine and warmth of Turkish hospitality while stopping to snorkel in azure bays with turtles and magical sunsets.</p>`,
      banner: {
        image: require('~/assets/images/turkey-banner.jpg'),
        image2x: require('~/assets/images/turkey-banner@2x.jpg'),
        imageWebp: require('~/assets/images/turkey-banner@2x.webp')
      },
      start: {
        title: 'Göcek',
        description: `Your trip starts at the Göcek marina, spend some time exploring the beautiful bay here and taking in the crystal blue Mediterranean water and nearby beaches. The small town has many great restaurants where you can dig into the local cuisine before setting sail.`
      },
      map: require('~/assets/images/turkey-map.svg'),
      locations: [
        {
          title: 'Karacaoren',
          description:
            '<p>Swim, snorkel and soak up the sun in the stunning Karacaoren bay. A beautiful bay to relax and unwind. Enjoy the friendly restaurants and bars or sleep under the stars.</p>'
        },
        {
          title: 'Cold Water Bay',
          description:
            '<p>Named because of the numerous cold-water springs that flow from the Taurus Mountains, cool down on a hot day by jumping in from the rocks above. Explore the abandoned Greek village of Kakakoy, last inhabited in the 1920s and enjoy panaramic views of the coastline on a gentle hike.</p>'
        },
        {
          title: 'Tomb Bay',
          description: `<p>Relax on board with a drink in hand admiring the ancient Lycian rock tombs above. Take a dip in the crystal clear water to cool down, another great addition to the turquoise coastline.</p>`
        },
        {
          title: 'Fethiye',
          description: `<p>Enjoy paragliding over the turquoise waters and white sand beaches of Ölüdeniz, or simply relax and swim in the breathtaking blue lagoon. Take a visit to butterfly Valley or Gemile Island if you wish to visit several of the ruins accompanied by spectacular views from the top. Feel free to take a stroll through the ancient town stopping in shops and local restaurants if this takes your fancy.</p>`
        },
        {
          title: 'Kalkan',
          description: `<p>Plenty to choose from in this bustling fishing town, with the perfect mix of relaxation and activity. Stroll along untouched sandy beaches such as Patara and Kaputaş followed by sunset cocktails and a choice of friendly family run restaurants for sampling local favourites. Try your luck at turtle spotting, visit some of the world-famous UNESCO world heritage sites and ruins or spend the day kayaking on the Dalyan River.</p>`
        }
      ],
      highlights: [
        {
          title: 'Kayaköy',
          description:
            'Explore this beautiful abandoned ghost town a short distance from the bustling Fethiye.',
          image: {
            image: require('~/assets/images/turkey-kayakoy.jpg'),
            image2x: require('~/assets/images/turkey-kayakoy@2x.jpg'),
            imageWebp: require('~/assets/images/turkey-kayakoy@2x.webp')
          }
        },
        {
          title: 'Oludeniz Beach',
          description:
            'One of the most photographed beaches in the world, with varying shades of turquoise water, soft sand and surrounded by mountains, it is a true Turkish gem.',
          image: {
            image: require('~/assets/images/turkey-oludeniz.jpg'),
            image2x: require('~/assets/images/turkey-oludeniz@2x.jpg'),
            imageWebp: require('~/assets/images/turkey-oludeniz@2x.webp')
          }
        },
        {
          title: 'Saklikent Gorge',
          description:
            'Saklikent, meaning “hidden city” in Turkish, is the second largest gorge in Europe and one of the deepest in the world. ',
          image: {
            image: require('~/assets/images/turkey-saklikent.jpg'),
            image2x: require('~/assets/images/turkey-saklikent@2x.jpg'),
            imageWebp: require('~/assets/images/turkey-saklikent@2x.webp')
          }
        },
        {
          title: 'Blue Cave',
          description:
            'A famous Turkish natural wonder, named after its blue dazzling water, enjoy launching yourself in to cool off or simply swim and marvel at the sunlight bouncing from the sea.',
          image: {
            image: require('~/assets/images/turkey-blue.jpg'),
            image2x: require('~/assets/images/turkey-blue@2x.jpg'),
            imageWebp: require('~/assets/images/turkey-blue@2x.webp')
          }
        }
      ]
    }
  },
  head() {
    return {
      title: 'Yacht Charter Turkey | Turkey Sailing Holidays',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Explore one of the world’s most attractive sailing destinations Turkey, using our luxuryyacht charter for a dream sailing holidays.'
        }
      ]
    }
  }
}
</script>
