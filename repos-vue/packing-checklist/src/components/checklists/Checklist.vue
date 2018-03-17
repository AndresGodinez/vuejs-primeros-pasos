<template>
  <article class="checklist">
    <h1 class="checklist__title">{{title}}</h1>
    <template v-for="sublist in sublists">
      <sub-checklist :title="sublist.title" :items="sublist.items" :key="sublist.id" />
    </template>
  </article>
</template>

<script>
import SubChecklist from '@/components/checklists/SubChecklist'

export default {
  name: 'checklist',
  props: ['title', 'sublists'],
  components: {
    SubChecklist
  }

}
</script>

<style lang="sass" scoped>
@import "~@/sass/_vars.sass"

.checklist
  margin: 2em 0

.checklist__title
  font-size: 1.2em
  border-bottom: 1px solid $main-color
</style>
