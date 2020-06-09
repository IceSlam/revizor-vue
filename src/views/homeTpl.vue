<template>
  <div id="homePage">
    <homePageSlider />
    <homePageServices />
  </div>
</template>

<script>

import homePageSlider from '@/components/homePageSlider'
import homePageServices from '@/components/homePageServices'

export default {
  name: 'homePage',
  components: {
    homePageSlider,
    homePageServices
  }
}
</script>

<style>

</style>
