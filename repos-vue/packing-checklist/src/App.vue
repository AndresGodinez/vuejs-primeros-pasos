<template>
  <div id="app" class="main-wrapper">
    <header class="main-header">
      <h1 class="main-header__title">The Packing Checklist</h1>
      <nav><ul class="main-header__menu">
        <li class="main-header__menu__item"><router-link to="/">List</router-link></li>
        <li class="main-header__menu__item"><router-link to="/tips">Travel tips</router-link></li>
      </ul></nav>
    </header>

    <router-view/>

    <!-- <pre style="font-family: monospace">
      {{$store.state}}
    </pre> -->

    <footer class="main-footer">
      <p>Crafted with ♥︎ by
        <a href="https://belenalbeza.com" title="Belén Albeza's webiste">ladybenko</a>.</p>
    </footer>
  </div>
</template>

<style lang="sass">
@import "~reset-css/_reset.scss"
@import "~@/sass/_base.sass"
</style>

<style lang="sass" scoped>
@import "~@/sass/_vars.sass"

.main-wrapper
  padding: 2em 1em
  min-height: 100vh
  max-width: 900px
  margin-left: auto
  margin-right: auto
  display: grid
  grid-template-rows: auto 1fr auto

.main-header
  text-align: center
  &__title
    font-size: 7vw
    margin-bottom: 0
  &__menu
    padding: 0
    list-style-type: none
    &__item
      display: inline-block
      margin-left: 1ch
      &:first-child
        margin-left: 0

.main-footer
  margin-top: 2em
  text-align: center

@media (min-width: $min-wide)
  .main-header
    font-size: 1.2em
    &__title
      font-size: 3em

@media print
  .main-header, .main-footer
    display: none

  // firefox fix for printing grid/flow
  @supports (-moz-appearance: button)
    .main-wrapper
      display: block
      // firefox fix to avoid extra blank page
      min-height: auto
</style>
