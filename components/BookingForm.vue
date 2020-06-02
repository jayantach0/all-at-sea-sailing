<template>
  <validation-observer v-slot="{ handleSubmit }" slim>
    <form
      name="booking"
      method="post"
      novalidate
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit(submit)"
    >
      <input type="hidden" name="form-name" value="booking" />
      <div v-show="!formSubmitted">
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="name">Name</label>
            <input
              id="name"
              v-model="bookingForm.name"
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
              v-model="bookingForm.email"
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
            <label class="c-form-label" for="destination">Destination</label>
            <select
              id="destination"
              v-model="bookingForm.destination"
              name="destination"
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
              name="yacht"
              class="c-form-control"
            >
              <option selected value="Medium">Medium (6 crew)</option>
              <option value="Large">Large (8 crew)</option>
              <option value="Catamaran">Catamaran (8 crew)</option>
            </select>
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <validation-provider v-slot="{ errors, classes }" rules="required">
          <div class="c-form-group" :class="classes">
            <label class="c-form-label" for="date">Date</label>
            <div class="c-date-picker">
              <flat-pickr
                ref="picker"
                v-model="date"
                class="c-date-picker__picker c-form-control"
                :config="dateConfig"
                placeholder="Select date"
                @on-change="onDateChange"
              >
              </flat-pickr>
              <div
                class="c-date-picker__value c-form-control c-form-control--fake"
              >
                {{ selectedDatesReadable }}
              </div>
            </div>
            <span class="c-form-error">{{ errors[0] }}</span>
          </div>
        </validation-provider>
        <!-- Need to set the hidden input of date to the readable so netlify gets 
        told what value we want to see -->
        <input
          v-model="bookingForm.date"
          type="text"
          class="c-form-control c-form-control--hidden"
          name="date"
        />
        <div class="u-text-center">
          <button class="c-btn" type="submit" value="Get a quote">
            Get a quote
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
import weekSelect from 'flatpickr/dist/plugins/weekSelect/weekSelect'
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      formSubmitted: false,
      formError: false,
      date: '',
      bookingForm: {
        name: '',
        email: '',
        destination: '',
        yacht: '',
        date: ''
      },
      selectedDates: {
        weekStart: '',
        weekEnd: ''
      },
      dateConfig: {
        dateFormat: 'd-m-y',
        disableMobile: true,
        minDate: 'today',
        locale: {
          firstDayOfWeek: 6
        },
        plugins: [new weekSelect({})], //eslint-disable-line
        // onChange: [
        //   function(thing) {
        //     // console.log(this.weekStartDay, this.weekEndDay)
        //     // console.log(start, end)
        //   }
        // ]
      }
    }
  },
  computed: {
    selectedDatesReadable() {
      const dateFormat = 'ddd D MMM YYYY'
      if (this.selectedDates.weekStart) {
        return (
          this.$dayjs(this.selectedDates.weekStart).format(dateFormat) +
          ' - ' +
          this.$dayjs(this.selectedDates.weekEnd)
            .add(1, 'day')
            .format(dateFormat)
        )
      }
      return ''
    }
  },
  mounted() {
    // const days = 7
    // const date = new Date()
    // const min = date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    // this.$set(this.dateConfig, 'minDate', min)
  },
  methods: {
    onDateChange() {
      const fp = this.$refs.picker.fp
      this.selectedDates.weekStart = fp.weekStartDay
      this.selectedDates.weekEnd = fp.weekEndDay

      this.bookingForm.date = this.selectedDatesReadable
    },
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
          'form-name': 'booking',
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
