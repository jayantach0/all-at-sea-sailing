<template>
  <div>
    <page-hero>
      <h1 class="u-h3">Privacy policy</h1>
      <p>Last updated April 2020</p>
    </page-hero>
    <section-block>
      <div class="o-wrapper o-wrapper--tiny">
        <p>
          All At Sea Sailing LTD (“All At Sea Sailing”, “we”, “Us”, “our”) has
          created this privacy policy (“Policy”) to explain our privacy
          practices. The policy outlines when and how personal information is
          collected, used, disclosed and protected with respect to our services
          (“Service”) and website (“AllAtSeaSailing.com”).
        </p>
        <p>
          [By using the Service, you consent to the privacy practices described
          below.] We reserve the right to change this Policy at any time. if we
          make any changes to our policy, we will post a new Policy on
          AllAtSeaSailing.com and update the “last updated” date at the top of
          this page. Therefore, we encourage you to check our Policy whenever
          you use the Service. We will use information in accordance with the
          most up to date privacy policy.
        </p>
        <p>
          If you have any questions or comments about our Policy, our privacy
          practise or anything else please contact us via
          <a href="mailto:info@allatseasailing.com">info@allatseasailing.com</a
          >.
        </p>

        <h4 class="u-color-primary">Your Information</h4>

        <p>
          We collect personal and aggregate data from you while processing your
          booking. Your personal data (name, age, address, email etc.) is used
          to book your holiday and send you any information running up to your
          time with us. We keep all this information secure and do not give any
          personal data to third-parties. Everything but your email address is
          deleted from our systems and records prior to our feedback email or 2
          weeks after the end of your time with us. Your email address is kept
          only for promotional emails that we send you. (If you would like these
          emails to stop, please email ‘stop’ to
          <a href="mailto:info@allatseasailing.com">info@allatseasailing.com</a
          >)
        </p>
        <p>
          We also collect data which we have collected from other sources to
          find out more about you. This is used to match you up with your crew
          for the week. We look for information such as Age, Gender,
          Nationality. This information is not used for anything else and is not
          given to third-parties. This data is removed from our systems and
          records as of the end of your holiday with us.
        </p>

        <h4 class="u-color-primary">
          Access and control of Personal information
        </h4>

        <p>
          If at any time you would like to see the personal data we have of you,
          you can log into your booking account at AllAtSeaSailing.com or email
          at
          <a href="mailto:info@allatseasailing.com">info@allatseasailing.com</a
          >. You may request for your personal information to be completely
          removed from our systems and records at any stage.
        </p>

        <p>
          Thank you for taking the time to read this and hope to see you soon!
        </p>
      </div>
    </section-block>
  </div>
</template>
<script>
import PageHero from '~/components/PageHero'
import SectionBlock from '~/components/Section'
export default {
  components: {
    PageHero,
    SectionBlock
  },
  head() {
    return {
      title: 'Privacy'
    }
  }
}
</script>
