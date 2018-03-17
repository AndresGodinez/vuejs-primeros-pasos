<template>
  <section class="subchecklist">
    <h1 class="subchecklist__title">{{title}}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <checklist-item :title="item.title" :done="item.done" :id="item.id" />
      </li>
    </ul>
  </section>
</template>

<script>
import ChecklistItem from '@/components/checklists/ChecklistItem'

export default {
  name: 'sub-checklist',
  props: ['title', 'items'],
  components: {
    ChecklistItem
  }
}
</script>

<style lang="sass" scoped>
.subchecklist__title
  margin-top: 1em
</style>
