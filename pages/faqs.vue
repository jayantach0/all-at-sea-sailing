<template>
  <div>
    <page-hero>
      <h1 class="u-h3">FAQs</h1>
      <p>
        The answers to all of your questions.
        <br />
        Put your mind at ease before you book with us!
      </p>
    </page-hero>
    <section-block>
      <div class="o-wrapper o-wrapper--small">
        <div
          v-for="(faq, index) in faqs"
          :key="`faq-${index}`"
          class="u-margin-bottom-huge"
        >
          <h2 class="u-h3 u-color-primary c-heading c-heading--bordered">
            {{ faq.title }}
          </h2>
          <ul class="o-list-bare">
            <li
              v-for="(item, subIndex) in faq.items"
              :key="`faq-${index}-question-${subIndex}`"
              class="o-list-bare__item u-margin-bottom c-faq"
            >
              <button
                class="c-faq__question"
                :class="{ 'is-active': item.active }"
                @click="item.active = !item.active"
              >
                <div class="o-pack o-pack--center">
                  <div class="o-pack__item o-pack__item--grow">
                    {{ item.question }}
                  </div>
                  <div class="o-pack__item o-pack__item--shrink">
                    <icon-chevron-down
                      class="c-faq__indicator c-icon c-icon--block c-icon--standard"
                    />
                  </div>
                </div>
              </button>
              <div class="u-margin-top-tiny"></div>
              <slide-toggle :active="item.active" :duration="150">
                <div class="c-faq__answer">{{ item.answer }}</div>
              </slide-toggle>
            </li>
          </ul>
        </div>
      </div>
    </section-block>
  </div>
</template>
<script>
import SlideToggle from 'vue-slide-up-down'
import PageHero from '~/components/PageHero'
import SectionBlock from '~/components/Section'
import iconChevronDown from '~/assets/images/icon-chevron-down.svg?inline'
export default {
  components: {
    PageHero,
    SectionBlock,
    SlideToggle,
    iconChevronDown
  },
  data() {
    return {
      active: false,
      faqs: [
        {
          title: 'The Holiday',
          items: [
            {
              active: false,
              question: 'Do we need to bring our own food and drink?',
              answer:
                'Food and Drink is not provided, but cooking equipment is onboard in the galley kitchen or experience any of the local restaurants on the route. If you have any questions please don’t hesitate to email or call us in person.'
            },
            {
              active: false,
              question: 'Do I have to know how to sail?',
              answer:
                'Not at all, All At Sea Sailing was designed to cover all levels of sailing ability, it’s absolutely fine if you’ve never stepped foot onto a boat before.'
            },
            {
              active: false,
              question: 'What time and day does the holiday start and finish?',
              answer:
                'Check in will be 5pm on Saturday and check out will be 9am the following Saturday.'
            }
          ]
        },
        {
          title: 'What to bring',
          items: [
            {
              active: false,
              question: 'How much should I budget for spending money?',
              answer:
                'A good guideline is around 30-40 euros per day for evening meals and drinks. We have great relationships with the restaurants we visit on our route and most have discounted prices for All At Sea Sailing customers.'
            },
            {
              active: false,
              question: 'What should I pack?',
              answer:
                'We suggest packing a soft-skin bag as hard-cased suitcases are hard to store on a boat. Summer clothes, flip-flops and plenty of swimwear, packing light is always helpful, as the less you pack, the more room you will have in your cabin. We will send you a good packing guide in your pre-arrival email.'
            },
            {
              active: false,
              question: 'Do I need to buy travel insurance?',
              answer:
                'We strongly advise you to purchase travel insurance, covering lost or damaged items and injury. Our ships don’t go further than 12 miles from land, so most policies should be covered, but always check with your provider.'
            }
          ]
        },
        {
          title: 'About the boats',
          items: [
            {
              active: false,
              question:
                'Is there power onboard for charging phones, cameras etc?',
              answer:
                'There is 12v Sockets that are sufficient for charging batteries, but unfortunately they are not strong enough for hairdryers etc.'
            }
          ]
        },
        {
          title: 'Booking Information',
          items: [
            {
              active: false,
              question: 'Are there any hidden costs after booking?',
              answer: 'No. All costs are included in the quote.'
            }
          ]
        },
        {
          title: 'General advice',
          items: [
            {
              active: false,
              question:
                'I can’t swim, can I still sail with All At Sea Sailing?',
              answer:
                'Certainly, just let your skipper know, all boats come fully equipped with lifejackets and you’re welcome to bring floaty toys onboard or just chill on deck.'
            },
            {
              active: false,
              question: 'Will I get seasick?',
              answer:
                'The sea’s are pretty calm most weeks, but if you are prone to motion sickness, we suggest bringing some anti-motion sickness medication.'
            },
            {
              active: false,
              question:
                'Do I need a visa coming from UK / Australia / New Zealand / Canada?',
              answer:
                'No. Please see a full list of countries exempt from visas for Greece www.visahq.co.uk. You must make sure your passport has at least six months before its expiry date.'
            }
            // {
            //   active: false,
            //   question: 'It is easy to get from Athens to the marina?',
            //   answer:
            //     'Yes, very easy. A full description of how to get to the marina on the day of departure will be provided.'
            // }
          ]
        }
      ]
    }
  },
  head() {
    return {
      title: 'FAQs'
    }
  }
}
</script>

<style lang="scss" scoped>
.c-faq {
  $self: &;
  &__question {
    background-color: #fff;
    border: 2px solid var(--color-tertiary);
    border-radius: var(--border-radius);
    padding: var(--spacing);
    color: var(--color-primary);
    display: block;
    width: 100%;
    text-align: left;
    font-size: 115%;
    font-weight: bold;
    outline: 0;
    transition: 0.2s ease;
    &:active,
    &:hover,
    &.is-active {
      background-color: var(--color-tertiary);
      color: #fff;
    }

    &:hover {
      #{$self}__indicator {
        color: #fff;
      }
    }
  }

  &__indicator {
    color: var(--color-tertiary);
    transition: transform 0.2s ease;
    .is-active & {
      color: currentColor;
      transform: rotate(180deg);
    }
  }

  &__answer {
    border-radius: var(--border-radius);
    padding: var(--spacing);
    border: 2px solid var(--color-tertiary);
  }
}
</style>
