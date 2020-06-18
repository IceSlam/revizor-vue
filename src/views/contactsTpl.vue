<template>
  <div id="contactsPage" class="is-contacts">
    <div class="container">
      <vue-headful
        title="Контактная информация | Ревизор"
      />
        <isBreadCrumbs />
      <div class="row is-contacts__info">
        <div class="col-md-12">
          <h2>
            Контактная информация
          </h2>
        </div>
        <div class="col-md-6 is-contacts__info-details">
          <h3>
            Компания «Ревизор»
          </h3>
          <p>
            Адрес: Россия, Алтайский край, Барнаул г., Пролетарская улица, 92/46
          </p>
          <p>
            Телефон: +7-800-000-25-25
          </p>
          <p>
            Email: info@info.ru
          </p>
        </div>
        <div class="col-md-6 is-contacts__info-map">
          <img class="img-fluid" src="../assets/img/map.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/system/isBreadCrumbs'

export default {
  name: 'contactsPage',
  components: {
    isBreadCrumbs
  }
}
</script>

<style>

</style>
