<template>
  <div id="services-page"  class="is-services">
    <vue-headful
      title="Услуги компании | Ревизор"
    />
    <div class="container">
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'homePage' }" exact>
                Главная
              </router-link>
            </li>
            <li class="breadcrumb-item active">
              Услуги компании
            </li>
          </ol>
        </nav>
      </div>
      <homePageServices
        :servicesData="SERVICES"
      />
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import homePageServices from '@/components/homePageServices'

export default {
  name: 'servicesPage',
  components: {
    homePageServices
  },
  computed: {
    ...mapGetters([
      'SERVICES'
    ])
  },
  mounted () {
    this.GET_SERVICES_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_SERVICES_FROM_API'
    ])
  }
}
</script>

<style>

</style>
