<template>
  <div id="newsPage">
    <headerTpl />
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>
      Новости
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import headerTpl from '@/components/headerTpl'

export default {
  name: 'newsPage',
  components: {
    headerTpl
  }
}
</script>

<style>

</style>
