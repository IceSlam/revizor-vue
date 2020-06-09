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
      <div class="collapse navbar-collapse is-navbar__collapse" id="navbarSupportedContent-333">
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
  </nav>
  </header>
</template>

<script>
export default {
  name: 'headerTpl'
}

</script>

<style lang="css">

  #header {
    font-family: 'Nunito', sans-serif;
  }

  .nav-link.router-link-active {
      color: #DE3131 !important;
      transition: all .625s !important;
  }

  .router-link-active::after {
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(222, 49, 49, 0.1) 100%);
    margin-top: 0px;
    border-bottom: 4px solid rgba(222,49,49,.6);
    margin-left: auto;
    margin-right: auto;
    transition: all .625s !important;
}

  .is-navbar {
    box-shadow: none;
    padding: 0 1rem;
  }

  .is-navbar__brand {
    margin: 30px auto;
  }

  .is-navbar__collapse {
    margin-left: 87px !important;
    margin-bottom: -70px;
  }

  .nav-link {
    font-weight: bold;
    transition: all .625s !important;
  }

  .nav-link:hover {
    color: #DE3131 !important;
    transition: all .625s !important;
  }

  .nav-link:hover::after {
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(222, 49, 49, 0.1) 100%);
    margin-top: 0px;
    border-bottom: 4px solid rgba(222,49,49,.6);
    margin-left: auto;
    margin-right: auto;
    transition: all .625s !important;
  }

</style>
