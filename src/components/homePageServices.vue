<template>
  <div id="services" class="is-services">
    <div class="container">
      <div class="row">
        <h2>
          Услуги компании
        </h2>
      </div>
      <div class="row is-services__items">
        <servicesItemElem
          v-for="servicesItem in servicesData"
          :key="servicesItem.id"
          :servicesItemData="servicesItem"
          @servicesItemClick="servicesItemClick"
        />
      </div>
    </div>
  </div>
</template>

<script>

import servicesItemElem from '@/components/servicesItemElemTpl'

export default {
  name: 'homePageServices',
  components: {
    servicesItemElem
  },
  props: {
    servicesData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  }),
  methods: {
    servicesItemClick (el) {
      this.$router.push({ name: 'servicesItemPage', query: { el } })
    }
  }
}

</script>

<style lang="css">

</style>
