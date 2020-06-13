<template>
  <div class="servicesItemPage">
    <vue-headful
      title="Бухгалтерский и налоговый учет - Услуги компании - Ревизор"
    />
    <div class="container">
      <isBreadCrumbs />
      <h2>
        Ведение бухгалтерского и налогового учета
      </h2>
    </div>
    <serviceItemBlock1 />
    <serviceItemBlock2 />
    <serviceItemBlock3 />
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/isBreadCrumbs'
import serviceItemBlock1 from '@/components/itemBlocks/servBlock1'
import serviceItemBlock2 from '@/components/itemBlocks/servBlock2'
import serviceItemBlock3 from '@/components/itemBlocks/servBlock3'

export default {
  name: 'servicesItemPage',
  components: {
    isBreadCrumbs,
    serviceItemBlock1,
    serviceItemBlock2,
    serviceItemBlock3
  }
}
</script>

<style>

</style>
