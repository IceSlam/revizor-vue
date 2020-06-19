<template>
  <div id="homePage">
    <vue-headful
      title="Ревизор - Бухгалтерские и юридические услуги"
      description="Бухгалтерские и юридические услуги в Барнауле"
    />
    <homePageSlider />
    <div v-if="isLoader" class="is-loader row">
      <div class="col-md-12">
        <center>
          <div class="spinner-border" role="status">
          </div>
        </center>
      </div>
    </div>
    <homePageServices
      v-else
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
  data () {
    return {
      isLoader: true
    }
  },
  computed: {
    ...mapGetters([
      'SERVICES'
    ])
  },
  mounted () {
    this.GET_SERVICES_FROM_API()
    this.isLoader = false
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
