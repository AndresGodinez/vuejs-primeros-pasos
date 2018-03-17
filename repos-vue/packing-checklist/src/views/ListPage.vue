<template>
  <main class="page-list">
    <checklist :title="packList.title" :sublists="packList.sublists" />
    <checklist :title="todoList.title" :sublists="todoList.sublists" />

    <footer class="page-list__controls">
      <section>
        <label-button :image="icons.print" :on-click="onPrint" compact>
          Print list
        </label-button>
      </section>
    </footer>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Checklist from '@/components/checklists/Checklist.vue'
import LabelButton from '@/components/buttons/LabelButton.vue'

export default {
  name: 'list-page',
  components: {
    Checklist,
    LabelButton
  },
  data () {
    return {
      icons: {
        print: require('@/assets/print.svg')
      }
    }
  },
  computed: {
    ...mapGetters([
      'packList',
      'todoList'
    ])
  },
  methods: {
    onPrint () {
      window.print()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~@/sass/_vars.sass"

.page-list__controls
  display: flex
  flex-direction: row
  justify-content: end

@media print, (min-width: $min-wide)
  .page-list
      display: grid
      grid-template-columns: 1fr 1fr
      grid-template-rows: auto auto
      grid-gap: 2em

  .page-list__controls
      grid-column: span 2

@media print
  .page-list__controls
    display: none
  // firefox fix for printing grid/flow
  @supports (-moz-appearance: button)
    .page-list
      display: block
</style>
