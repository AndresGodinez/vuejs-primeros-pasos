<template>
  <div :class="['checklist-item', done ? 'checklist-item--done' : '']">
    <input class="checklist-item__checkbox" type="checkbox"
      :checked="done"
      @change="onChangeDone">
    <label class="checklist-item__title">{{title}}</label>
  </div>
</template>

<script>
import {UPDATE_ITEM} from '@/store'

export default {
  name: 'checklist-item',
  props: ['title', 'done', 'id'],
  methods: {
    onChangeDone (evt) {
      let payload = { id: this.id, done: evt.target.checked }
      this.$store.commit(UPDATE_ITEM, payload)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@/sass/_vars.sass'

.checklist-item
  $checkbox-size: 1.25em

  display: grid
  grid-template-columns: auto 1fr
  grid-gap: 0.5em
  align-items: center
  &--done
    text-decoration: line-through
  &__checkbox
    -moz-appearance: button
    -webkit-appearance: button
    appearance: button

    width: $checkbox-size
    height: $checkbox-size
    border: 1px solid $main-color
    &:checked
      background: url('~@/assets/check.svg')
      background-size: cover
      border: none

  &__title
    line-height: $checkbox-size

@media print
  .checklist-item
    page-break-inside: avoid
    &__checkbox
      -webkit-print-color-adjust: exact
      color-adjust: exact
</style>
