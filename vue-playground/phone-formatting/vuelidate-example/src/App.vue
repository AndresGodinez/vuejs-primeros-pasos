<template>
  <div>
    <h1>Vuelidate phone regex</h1>
    <input type="text" v-model="phoneValue"/>
    <p v-if="!$v.phoneValue.required">The phone field is required!</p>
    <p v-if="!$v.phoneValue.phone">The input must be a proper phone!</p>
  </div>
</template>


<script>
import { required } from 'vuelidate/lib/validators'

export const phone = (value) => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /^[\d\+\-\.\(\)\/\s]*$/.test(value)
}

export default {
  data () {
    return {
      phoneValue: ''
    }
  },

  validations: {
    phoneValue: {
      required,
      phone
    }
  }
}
</script>
