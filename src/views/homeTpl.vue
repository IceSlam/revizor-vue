<template>
  <div id="homePage">
    <vue-headful
      title="Ревизор - Бухгалтерские и юридические услуги"
      description="Бухгалтерские и юридические услуги в Барнауле"
    />
    <homePageSlider />
    <homePageServices />
    <homePageAbout />
    <homePageCertifs />
  </div>
</template>

<script>

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
  }
}
</script>

<style>

</style>
