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
body {
  font-family: 'Nunito', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
