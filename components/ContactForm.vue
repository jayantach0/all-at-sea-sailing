<template>
  <validation-observer v-slot="{ handleSubmit }" slim>
    <form
      name="booking-home"
      method="post"
      novalidate
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit(submit)"
    >
      <input type="hidden" name="form-name" value="booking-home" />
      <div v-show="!formSubmitted">
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="name">Name</label>
            <input
              id="name"
              v-model="contactForm.name"
              name="name"
              class="c-form-control"
              type="text"
              required
            />
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider
          v-slot="{ errors, classes }"
          rules="required|email"
        >
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="email">Email</label>
            <input
              id="email"
              v-model="contactForm.email"
              name="email"
              class="c-form-control"
              type="text"
              required
            />
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="message">Message</label>
            <textarea
              id="message"
              v-model="contactForm.message"
              name="message"
              class="c-form-control"
              type="text"
              required
            >
            </textarea>
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <div class="u-text-center">
          <button class="c-btn" type="submit" value="Get in touch">
            Get in touch
          </button>
        </div>
      </div>
      <div v-show="formSubmitted">
        <h3 class="u-color-primary u-margin-bottom-small">Thanks!</h3>
        <p>
          We'll get back to you as soon as we can, if you have any more
          questions feel free to email us at
          <a href="mailto:info@allatsesailing.com">info@allatsesailing.com</a>
        </p>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      formSubmitted: false,
      formError: false,
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    submit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact-form',
          ...this.contactForm
        })
      })
        .then(() => {
          this.formSubmitted = true
          this.formError = false
        })
        .catch(error => alert(error))
      // } else {
      //   this.formError = true
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-date-picker {
  position: relative;
  &__picker {
    opacity: 0;
  }
  &__value {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
