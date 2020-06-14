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
        />
        <div v-for="(item, index) in servicesItems" :key="index" class="col-md-6 col-lg-4">
          <div class="is-services__item card">
            <div class="is-services__item-content">
              <img :src="item.imgLink" :alt="item.title">
              <div>
                <p>
                  {{ item.title }}
                </p>
                <p class="is-services__item-chevron">
                  <i class="fas fa-chevron-right"></i>
                </p>
                <a class="btn is-btn" href="#">
                  Подробнее об услуге
                </a>
              </div>
              <p class="is-services__item-description">
                {{ item.descr }}
              </p>
            </div>
          </div>
          <div class="is-services__item-bg">
          </div>
        </div>
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
  })
}

</script>

<style lang="css">

</style>
