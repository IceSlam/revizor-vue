<template>
  <div id="homePage">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <vue-headful
      title="Ревизор - Бухгалтерские и юридические услуги"
      description="Описание"
      url="vk.com"
    />
=======
>>>>>>> parent of 1b5afb8... Added basic files for Services Item page
=======
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
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
