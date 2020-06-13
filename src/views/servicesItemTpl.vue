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
    <servicesItemAdvantages />
    <servicesItemResults />
    <servicesItemSpheres />
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/system/isBreadCrumbs'
import servicesItemAdvantages from '@/components/itemBlocks/servBlock1'
import servicesItemResults from '@/components/itemBlocks/servBlock2'
import servicesItemSpheres from '@/components/itemBlocks/servBlock3'

export default {
  name: 'servicesItemPage',
  components: {
    isBreadCrumbs,
    servicesItemAdvantages,
    servicesItemResults,
    servicesItemSpheres
  }
}
</script>

<style>

</style>
