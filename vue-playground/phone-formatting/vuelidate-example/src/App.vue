<template>
  <div>
    <h1>Test phone input</h1>
    <p>Info: You can type numbers and the special characters '+' or '-' or spaces.</p>

    <h2>Vuelidate phone regex</h2>
    <input type="text" v-model="phoneValue"/>
    <p v-if="!$v.phoneValue.required">The phone field is required!</p>
    <p v-if="!$v.phoneValue.phone">The input must be a proper phone!</p>
    <p v-if="$v.phoneValue.phone">Phone number: {{ phoneValue }}</p>

    <h2>Vuelidate phone regex convert number</h2>
    <input type="text" v-model="phoneNumber" />
    <p v-if="!$v.phoneNumber.required">The phone field is required!</p>
    <p v-if="!$v.phoneNumber.phone">The input must be a proper phone!</p>
    <p v-if="$v.phoneNumber.phone">Phone number: {{ phoneNumberFiltered }}</p>
  </div>
</template>


<script>
import { required } from 'vuelidate/lib/validators'

export const phone = (value) => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /^[0-9+-\\(\\) ]+$/.test(value)
}

export default {
  data () {
    return {
      phoneValue: '',
      phoneNumber: ''
    }
  },

  computed: {
    phoneNumberFiltered () {
      return this.phoneNumber.replace(/[^0-9]/g, '')
    }
  },

  validations: {
    phoneValue: {
      required,
      phone
    },
    phoneNumber: {
      required,
      phone
    }
  }
}
</script>
