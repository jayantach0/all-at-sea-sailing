import { extend, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: 'is-dirty'
  }
})

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('email', {
  ...email,
  message: 'Please use a valid email address'
})
