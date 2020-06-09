<template>
  <div id="homePage">
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
