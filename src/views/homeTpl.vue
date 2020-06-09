<template>
  <div id="homePage">
    <homePageSlider />
    <homePageServices />
    <homePageAbout />
  </div>
</template>

<script>

import homePageSlider from '@/components/homePageSlider'
import homePageServices from '@/components/homePageServices'
import homePageAbout from '@/components/homePageAbout'

export default {
  name: 'homePage',
  components: {
    homePageSlider,
    homePageServices,
    homePageAbout
  }
}
</script>

<style>

</style>
