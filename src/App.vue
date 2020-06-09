<template>
  <div id="app">
    <headerTpl />
    <router-view/>
    <footerTpl />
  </div>
</template>

<script>
import headerTpl from '@/components/headerTpl'
import footerTpl from '@/components/footerTpl'

export default {
  name: 'App',
  components: {
    headerTpl,
    footerTpl
  }
}

</script>

<style lang="css">

</style>
