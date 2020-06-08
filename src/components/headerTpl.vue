<template>
  <header id="header" class="">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light is-navbar">
    <div class="container">
      <a class="navbar-brand is-navbar__brand" href="/">
        <img class="is-navbar__brand-logo" src="../assets/img/revisorLogo.png" alt="Ревизор - бухгалтерские и юридические услуги">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul class="navbar-nav mr-auto is_main-navbar-menu justify-center text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">О компании</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Услуги</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news">Новости</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  name: 'headerTpl'
}
</script>

<style lang="css">
  .router-link-active {
    color: red !important;
  }

  .is-navbar {
    box-shadow: none;
  }

  .is-navbar__brand {
    margin: 30px auto;
  }

</style>
