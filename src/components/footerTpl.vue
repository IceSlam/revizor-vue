<template>
  <footer id="footer" class="">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light is-navbar">
    <div class="container">
      <a class="navbar-brand is-navbar__brand" href="/">
        <img class="is-navbar__brand-logo" src="../assets/img/revisorLogo.png" alt="Ревизор - бухгалтерские и юридические услуги">
      </a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse container is-footer__collapse">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-12">
              <a v-for="item in contactsItems" :key="item" :href="item.link" target="_blank">
                <i :class="item.iconFa"></i>
                {{ item.name }}
              </a>
            </div>
            <div class="col-md-12">
              <div style="margin-bottom:.5em">
                <a v-for="(item, index) in socialItems" :key="index" class="btn" :href="item.link" target="_blank">
                  <i :class="item.iconFa"></i>
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
                  <a class="is-footer__phone" href="tel:8-800-000-25-25">
                    8-800-000-25-25
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
export default {
  name: 'footerTpl',
  data () {
    return {
      footerPhone: [
        {
          tel: '8-800-000-25-25'
        }
      ],
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
  }
}
</script>

<style lang="css">

</style>
