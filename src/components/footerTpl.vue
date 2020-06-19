<template>
  <footer id="footer" class="">
    <nav class="navbar navbar-expand-lg navbar-light is-navbar">
    <div class="container">
      <a class="navbar-brand is-navbar__brand" href="/">
        <img class="is-navbar__brand-logo" src="../assets/img/revisor_logo.svg" alt="Ревизор - бухгалтерские и юридические услуги">
      </a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse container is-footer__collapse">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-12">
              <a :href="contactsItemsInfo.acf.sys_address_link" target="_blank">
                <i class="fas fa-map-marker-alt"></i>
                {{ contactsItemsInfo.acf.sys_address }}
              </a>
              <a :href="contactsItemsInfo.acf.sys_email" target="_blank">
                <i class="fas fa-envelope"></i>
                {{ contactsItemsInfo.acf.sys_email }}
              </a>
            </div>
            <div class="col-md-12">
              <div style="margin-bottom:.5em">
                <a class="btn" :href="contactsItemsInfo.acf.sys_social_vk" target="_blank">
                  <i class="fab fa-vk"></i>
                </a>
                <a class="btn" :href="contactsItemsInfo.acf.sys_social_fb" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn" :href="contactsItemsInfo.acf.sys_social_ok" target="_blank">
                  <i class="fab fa-odnoklassniki"></i>
                </a>
                <a class="btn" :href="contactsItemsInfo.acf.sys_social_mailru" target="_blank">
                  <i class="fas fa-at"></i>
                </a>
                <a class="btn" :href="contactsItemsInfo.acf.sys_social_twitter" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn" :href="contactsItemsInfo.acf.sys_social_inst" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12" style="margin-top:.5em">
                  <a class="is-footer__phone" :href="'tel:'+ contactsItemsInfo.acf.sys_phone">
                    {{ contactsItemsInfo.acf.sys_phone }}
                  </a>
                </div>
                <div class="col-md-12"  style="margin-top:.5em">
                  <a class="is-footer__dev-link" href="https://alianscompany.ru">
                    Разработка сайта <img class="is-footer__dev-img" src="/assets/img/alians_logo.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</footer>
</template>

<script>

import axios from 'axios'

export default {
  name: 'footerTpl',
  data () {
    return {
      contactsItemsInfo: {},
      socialItems: [
        {
          iconFa: 'fab fa-vk',
          link: 'https://vk.com'
        },
        {
          iconFa: 'fab fa-facebook-f',
          link: 'https://fb.com'
        },
        {
          iconFa: 'fab fa-odnoklassniki',
          link: 'https://ok.ru'
        },
        {
          iconFa: 'fas fa-at',
          link: 'https://mail.ru'
        },
        {
          iconFa: 'fab fa-twitter',
          link: 'https://twitter.com'
        },
        {
          iconFa: 'fab fa-instagram',
          link: 'https://instagram.com'
        }
      ],
      contactsItems: [
        {
          name: 'г. Барнаул, ул. Пролетарская, 92',
          iconFa: 'fas fa-map-marker-alt',
          link: 'https://yandex.ru/maps/-/CCQdf8aIWB'
        },
        {
          name: 'info@info.ru',
          iconFa: 'fas fa-envelope',
          link: 'mailto:info@info.ru'
        }
      ]
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/5')
      .then(response => (this.contactsItemsInfo = response.data))
  }
}
</script>

<style lang="css">

</style>
