<template>
  <button class="btn-label" @click="onClick">
    <img :src="image" alt="Icon" height="14" />
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'label-button',
  props: {
    image: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/sass/_vars.sass'
@import '~@/sass/_buttons.sass'

.btn-label
  @extend %button-base
  border: 1px solid $main-color
  padding: 1em
</style>
