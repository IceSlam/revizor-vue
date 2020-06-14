<template>
  <div id="homePage">
    <vue-headful
      title="Ревизор - Бухгалтерские и юридические услуги"
      description="Бухгалтерские и юридические услуги в Барнауле"
    />
    <homePageSlider />
    <homePageServices
      :servicesData="SERVICES"
    />
    <homePageAbout />
    <homePageCertifs />
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import homePageSlider from '@/components/homePageSlider'
import homePageServices from '@/components/homePageServices'
import homePageAbout from '@/components/homePageAbout'
import homePageCertifs from '@/components/homePageCertifs'

export default {
  name: 'homePage',
  components: {
    homePageSlider,
    homePageServices,
    homePageAbout,
    homePageCertifs
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
