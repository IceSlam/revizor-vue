<template>
  <div id="services-page"  class="is-services">
    <vue-headful
      title="Услуги компании - Ревизор"
      description="Перечень услуг компании Ревизор"
    />
    <div class="container">
      <isBreadCrumbs />
      <homePageServices
        :servicesData="SERVICES"
      />
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import isBreadCrumbs from '@/components/system/isBreadCrumbs'
import homePageServices from '@/components/homePageServices'

export default {
  name: 'servicesPage',
  components: {
    isBreadCrumbs,
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
