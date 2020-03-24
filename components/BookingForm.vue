<template>
  <validation-observer v-slot="{ handleSubmit }" slim>
    <form
      tag="form"
      name="book"
      action="/thanks"
      method="post"
      novalidate
      netlify
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit(submit)"
    >
      <div v-if="!formSubmitted">
        <input type="hidden" name="booking-form" value="book" />
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="name">Name</label>
            <input
              id="name"
              v-model="bookingForm.name"
              v-validate="'email'"
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
              v-model="bookingForm.email"
              class="c-form-control"
              type="text"
              required
            />
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="destination">Destination</label>
            <select
              id="destination"
              v-model="bookingForm.destination"
              class="c-form-control"
            >
              <option selected value="Greece">Greece</option>
              <option value="Croatia">Croatia</option>
              <option value="Turkey">Turkey</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Italy">Italy</option>
            </select>
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="yacht">Yacht</label>
            <select
              id="yacht"
              v-model="bookingForm.yacht"
              class="c-form-control"
            >
              <option selected value="Medium">Medium (Max 8 crew)</option>
              <option value="Large">Large (Max 10 crew)</option>
              <option value="Catamaran">Medium (Max 8 crew)</option>
            </select>
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="date">Date</label>
            <input
              id="date"
              v-model="bookingForm.date"
              class="c-form-control"
              type="date"
              required
            />
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <div class="u-text-center">
          <button class="c-btn" type="submit" value="Get a quote">
            Get a quote
          </button>
        </div>
      </div>
      <div v-else>
        Thanks!
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
      bookingForm: {
        name: '',
        email: '',
        destination: '',
        yacht: '',
        date: ''
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
          'form-name': 'book',
          ...this.bookingForm
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
