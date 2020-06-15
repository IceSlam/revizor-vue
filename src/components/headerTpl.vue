<template>
  <header id="header" class="">
    <isModal
      v-if="isModalFormVisible"
      @closeModal="closeModalForm"
      titleModal="Обратный звонок"
    >
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Имя">
        </div>
        <div class="col">
          <input type="tel" class="form-control" placeholder="Телефон">
        </div>
      </div>
      <div class="row" style="margin-top:2em;">
        <div class="col">
          <textarea class="form-control" placeholder="Ваш вопрос"></textarea>
        </div>
      </div>
      <div class="row" style="margin-top:2em;">
        <div class="col" style="position: relative;align-items: center;display: flex;">
          <input class="btn is-btn-feedback" type="submit" name="formSubmit" value="Отправить">
        </div>
        <div class="col-6 d-flex" style="align-items:center;">
          <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
              <label class="custom-control-label" for="defaultUnchecked"><router-link to="/policy">С политикой конфидициальных данных ознакомлен</router-link></label>
          </div>
        </div>
      </div>
    </form>
    </isModal>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light is-navbar">
      <div class="container">
        <a class="navbar-brand is-navbar__brand" href="/">
          <img class="is-navbar__brand-logo" src="../assets/img/revisor_logo.svg" alt="Ревизор - бухгалтерские и юридические услуги">
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
          <div class="col-md-4 is-header__phone-block">
          <div class="row" style="margin-top:-45px;">
            <div class="col-md-12 is-header__phone-item-block">
              <a class="is-header__phone" href="tel:8-800-000-25-25">
                8-800-000-25-25
              </a>
            </div>
            <div class="col-md-12 is-header__callback-block">
              <a
                class="is-header__callback"
                href="#"
                @click="showModalForm"
              >
                <img src="../assets/img/headerCallIco.svg" alt="Заказть звонок">
                <span>Заказать звонок</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>

import isModal from '@/components/modal/isModal'

export default {
  name: 'headerTpl',
  components: {
    isModal
  },
  data () {
    return {
      showHeaderMenuClass: { show: false },
      isModalFormVisible: false
    }
  },
  methods: {
    showHeaderMenu () {
      this.showHeaderMenuClass.show = !this.showHeaderMenuClass.show
    },
    showModalForm () {
      this.isModalFormVisible = true
    },
    closeModalForm () {
      this.isModalFormVisible = false
    }
  }
}

</script>

<style lang="css">

</style>
