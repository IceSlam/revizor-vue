<template>
  <header id="header" class="">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light is-navbar">
    <div class="container">
      <a class="navbar-brand is-navbar__brand" href="/">
        <img class="is-navbar__brand-logo" src="../assets/img/revisorLogo.png" alt="Ревизор - бухгалтерские и юридические услуги">
      </a>
      <button class="navbar-toggler" @click="showHeaderMenu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse is-navbar__collapse" :class="showHeaderMenuClass" id="navbarSupportedContent-333">
        <div class="row">
          <div class="col-md-12">
            <a href="#">
              <i class="fas fa-map-marker-alt "></i>
              г. Барнаул, ул. Пролетарская, 92
            </a>
            <a href="#">
              <i class="fas fa-envelope"></i>
              info@info.ru
            </a>
          </div>
          <div class="col-md-12">
            <ul class="navbar-nav mr-auto justify-center text-center">
              <li class="nav-item">
                <router-link class="nav-link" to="/" exact>Главная</router-link>
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
        <div class="">
          3
        </div>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  name: 'headerTpl',
  data () {
    return {
      showHeaderMenuClass: { show: false }
    }
  },
  methods: {
    showHeaderMenu () {
      this.showHeaderMenuClass.show = !this.showHeaderMenuClass.show
    }
  }
}

</script>

<style lang="css">

</style>
