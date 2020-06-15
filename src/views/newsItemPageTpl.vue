<template>
  <div id="services-item" class="is-services-item">
    <vue-headful
      title="Бухгалтерский и налоговый учет - Услуги компании - Ревизор"
    />
    <div class="container">
      <isBreadCrumbs />
      <h2>
        Ведение бухгалтерского и налогового учета
      </h2>
    </div>
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/system/isBreadCrumbs'

export default {
  name: 'newsItemPage',
  components: {
    isBreadCrumbs
  }
}
</script>

<style>

</style>
