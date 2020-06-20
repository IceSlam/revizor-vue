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
              <a v-if="contactsItemsInfo.acf" :href="contactsItemsInfo.acf.sys_address_link" target="_blank">
                <i class="fas fa-map-marker-alt "></i>
                {{ contactsItemsInfo.acf.sys_address }}
              </a>
              <a v-if="contactsItemsInfo.acf" :href="'mailto:' + contactsItemsInfo.acf.sys_email">
                <i class="fas fa-envelope"></i>
                {{ contactsItemsInfo.acf.sys_email }}
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
                    <router-link class="dropdown-item" href="#" to="/services/buhgalterskij-i-nalogovyj-uchet">
                      Бухгалтерский и налоговый учет
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/pomoshh-v-sostavlenii-buhgalterskoj-i-nalogovoj-otchetnosti">
                      Помощь в составлении налоговой и бухгалтерской отчетности
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/pomoshh-v-sostavlenii-z-p-otchetnosti">
                      Помощь в составлении з/п отчетности
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/3-ndfl">
                      З-НДФЛ
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/konsultatsii-po-vyboru-sistemy-nalogooblazheniya">
                      Консультации по выбору системы налогооблажения
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/podgotovka-otvetov-na-trebovaniya-ifns-fss-pf-rf">
                      Подготовка ответов на требования ИФНС, ФСС, ПФ, РФ
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/oformlenie-paketa-dokumentov-pri-trudoustrojstve-sotrudnikov">
                      Оформление пакета документов при трудоустройстве сотрудников
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/registratsiya-i-likvidatsiya-ip-ooo">
                      Регистрация и ликвидация ИП, ООО
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/vosstanovlenie-buhgalterskogo-i-nalogovogo-ucheta">
                      Восстановление бухгалтерского и налогового учета
                    </router-link>
                    <router-link class="dropdown-item" href="#" to="/services/predstavitelstvo-i-reshenie-spornyh-voprosov-s-ifns">
                      Представительство и решение спорных вопросов с ИФНС
                    </router-link>
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
              <a v-if="contactsItemsInfo.acf" class="is-header__phone" :href="'tel:'+ contactsItemsInfo.acf.sys_phone">
                {{ contactsItemsInfo.acf.sys_phone }}
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

import axios from 'axios'
import isModal from '@/components/modal/isModal'

export default {
  name: 'headerTpl',
  components: {
    isModal
  },
  data () {
    return {
      contactsItemsInfo: {},
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
    },
    servicesItemNavClick () {
      this.$emit('servicesItemNavClick', this.servicesItemData.slug)
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/5')
      .then(response => (this.contactsItemsInfo = response.data))
  }
}

</script>

<style lang="css" scoped>
  .is-dd-menu .router-link-active::after {
    display: none;
  }

</style>
