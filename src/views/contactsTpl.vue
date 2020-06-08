<template>
  <div id="contactsPage">
    <headerTpl />
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>
      Контакты
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src
import headerTpl from '@/components/headerTpl'

export default {
  name: 'contactsPage',
  components: {
    headerTpl
  }
}
</script>

<style>

</style>
