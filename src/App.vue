<template>
  <div id="app">
<!--
    <div id="nav">
      <a class="btn btn-success" href="#"> BTN</a>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О компании</router-link> |
      <router-link to="/services">Услуги</router-link> |
      <router-link to="/news">Новости</router-link> |
      <router-link to="/contacts">Контакты</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import headerTpl from '@/components/headerTpl'

</script>

<style lang="scss">
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
