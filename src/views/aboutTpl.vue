<template>
  <div class="aboutPage">
    <headerTpl />
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>
      О компании
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import headerTpl from '@/components/headerTpl'

export default {
  name: 'aboutPage',
  components: {
    headerTpl
  }
}
</script>

<style>

</style>
