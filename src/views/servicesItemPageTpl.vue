<template>
  <div v-if="servicesItemP.acf.service_longtitle.length" id="services-item" class="is-services-item">
    <vue-headful
      :title="servicesItemP.title.rendered + ' / Услуги компании | Ревизор'"
    />
    <div class="container">
      <h2>
      {{ servicesItemP.acf.service_longtitle }}
      </h2>
    </div>
    <div class="row is-services-item-advantage">
      <div class="col-md-6 is-services-item-advantage__descr">
        <h3>
          {{ servicesItemP.acf.advantages_title }}
        </h3>
        <ul class="is-services-item-advantage__list">
          <li v-for="advantage in servicesItemP.acf.advantages_list" :key="advantage.id">
            {{ advantage.advantages_list_item }}
          </li>
        </ul>
      </div>
      <div class="col-md-6 is-services-item-advantage__img">
      </div>
    </div>
    <div class="is-services-item__results container">
      <div class="row">
        <h3>
          {{ servicesItemP.acf.forwho_title }}
        </h3>
        <div class="col-md-12">
          <ul class="is-services-item__results-list">
            <li v-for="forwho in servicesItemP.acf.forwho_list" :key="forwho.id">
              {{ forwho.forwho_list_item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <h3 style="margin-top:2.8125rem">
          {{ servicesItemP.acf.results_title }}
        </h3>
        <div class="col-md-12">
          <ul class="is-services-item__results-list">
            <li v-for="result in servicesItemP.acf.results_list" :key="result.id">
              {{ result.results_list_item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row is-services-item-sphere">
      <div class="col-md-6 is-services-item-sphere__img">
      </div>
      <div class="col-md-6 is-services-item-sphere__descr">
        <h3>
          {{ servicesItemP.acf.sphere_title }}
        </h3>
        <ul class="is-services-item-sphere__list">
          <li v-for="sphere in servicesItemP.acf.sphere_list" :key="sphere.id">
            {{ sphere.sphere_list_item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="container text-center mt-5 mb-5">
    <h2>
      Данные отсутствуют
    </h2>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'servicesItemPage',
  components: {
  },
  computed: {
    ...mapGetters([
      'SERVICES'
    ]),
    servicesItemP () {
      let itemContent = {}
      const vm = this
      this.SERVICES.map(function (item) {
        if (item.slug === vm.$route.params.id) {
          itemContent = item
        }
      })
      return itemContent
    }
  }
}
</script>

<style>

</style>
