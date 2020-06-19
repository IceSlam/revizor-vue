<template>
  <div v-if="isLoader" class="is-loader row">
    <div class="col-md-12">
      <center>
        <div class="spinner-border" role="status">
        </div>
      </center>
    </div>
  </div>
  <div v-else id="services-item" class="is-services-item">
    <vue-headful
      :title="servicesItemP.title.rendered + ' / Услуги компании | Ревизор'"
    />
    <div class="container">
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'homePage' }" exact>
                Главная
              </router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'servicesPage' }" exact>
                Услуги компании
              </router-link>
            </li>
            <li class="breadcrumb-item active">
              {{ servicesItemP.title.rendered }}
            </li>
          </ol>
        </nav>
      </div>
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
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'servicesItemPage',
  components: {
  },
  data () {
    return {
      isLoader: true
    }
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
  },
  mounted () {
    this.GET_SERVICES_FROM_API()
    this.isLoader = false
  },
  methods: {
    ...mapActions([
      'GET_SERVICES_FROM_API'
    ])
  }
}
</script>

<style>

</style>
