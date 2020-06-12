<template>
  <header id="header" class="">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light is-navbar">
    <div class="container">
      <a class="navbar-brand is-navbar__brand" href="/">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <img class="is-navbar__brand-logo" src="../assets/img/revisor_logo.svg" alt="Ревизор - бухгалтерские и юридические услуги">
=======
        <img class="is-navbar__brand-logo" src="/assets/img/revisor_logo.svg" alt="Ревизор - бухгалтерские и юридические услуги">
>>>>>>> parent of 6269d02... Edited Demo
=======
        <img class="is-navbar__brand-logo" src="assets/img/revisor_logo.svg" alt="Ревизор - бухгалтерские и юридические услуги">
>>>>>>> parent of d75e051... Edited Demo
=======
        <img class="is-navbar__brand-logo" src="../assets/img/revisorLogo.png" alt="Ревизор - бухгалтерские и юридические услуги">
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
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
<<<<<<< HEAD
                <router-link class="nav-link is-dd-toggle" to="/services" >Услуги</router-link>
                <ul class="is-dd-menu">
                  <a class="dropdown-item" href="#">Бухгалтерский и налоговый учет</a>
                  <a class="dropdown-item" href="#">Помощь в составлении налоговой и бухгалтерской отчетности</a>
                  <a class="dropdown-item" href="#">Помощь в составлении з/п отчетности</a>
                  <a class="dropdown-item" href="#">З-НДФЛ</a>
                  <a class="dropdown-item" href="#">Консультации по выбору системы налогооблажения</a>
                  <a class="dropdown-item" href="#">Подготовка ответов на требования ИФНС, ФСС, ПФ, РФ</a>
                  <a class="dropdown-item" href="#">Оформление пакета документов при трудоустройстве сотрудников</a>
                  <a class="dropdown-item" href="#">Регистрация и ликвидация ИП, ООО</a>
                  <a class="dropdown-item" href="#">Представительство и решение спорных вопросов с ИФНС</a>
                </ul>
=======
                <router-link class="nav-link" to="/services">Услуги</router-link>
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
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
<<<<<<< HEAD
        <div class="col-md-4 is-header__phone-block">
          <div class="row" style="margin-top:-45px;">
            <div class="col-md-12 is-header__phone-phone-block">
              <a class="is-header__phone" href="tel:8-800-000-25-25">
                8-800-000-25-25
              </a>
            </div>
            <div class="col-md-12"  style="margin-top:0em;bottom:10px;justify-content:center;display:flex;">
              <a class="is-header__callback" href="#feedback">
                <img src="../assets/img/headerCallIco.svg" alt="Заказть звонок">
                <span>Заказать звонок</span>
              </a>
            </div>
          </div>
=======
        <div class="">
          3
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
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
