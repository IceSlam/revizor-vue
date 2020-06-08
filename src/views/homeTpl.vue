<template>
  <div id="homePage">
    <headerTpl />
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>
      Главная
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import headerTpl from '@/components/headerTpl'

export default {
  name: 'homePage',
  components: {
    headerTpl
  },
  meta: { title: 'Главная' }
}
</script>

<style>

</style>
