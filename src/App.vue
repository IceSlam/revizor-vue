<template>
  <div id="app">
    <headerTpl />
    <router-view/>
    <feedbackTpl />
    <footerTpl />
  </div>
</template>

<script>
import headerTpl from '@/components/headerTpl'
import footerTpl from '@/components/footerTpl'
import feedbackTpl from '@/components/feedbackTpl.vue'

export default {
  name: 'App',
  components: {
    headerTpl,
    footerTpl,
    feedbackTpl
  }
}

</script>

<style lang="css">

@import url("./assets/css/main.css");
@import url("./assets/css/media.css");

</style>
