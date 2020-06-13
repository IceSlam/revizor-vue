<template>
  <div id="services-page"  class="is-services">
    <vue-headful
      title="Услуги компании - Ревизор"
      description="Перечень услуг компании Ревизор"
    />
    <div class="container">
      <isBreadCrumbs />
      <homePageServices />
    </div>
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/system/isBreadCrumbs'
import homePageServices from '@/components/homePageServices'

export default {
  name: 'servicesPage',
  components: {
    isBreadCrumbs,
    homePageServices
  }
}
</script>

<style>

</style>
