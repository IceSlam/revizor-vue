<template>
  <div id="services-item" class="is-services-item">
    <vue-headful
      title="Бухгалтерский и налоговый учет - Услуги компании - Ревизор"
    />
    <div class="container">
      <isBreadCrumbs />
      <h2 v-html="newsItemP.title.rendered"></h2>
      <p class="is-news__page-date">Опубликовано: <span style="font-weight:200">{{ localeDate }}</span></p>
      <div class="is-news__page-content">
        <div v-html="newsItemP.content.rendered"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import isBreadCrumbs from '@/components/system/isBreadCrumbs'

export default {
  name: 'newsItemPage',
  components: {
    isBreadCrumbs
  },
  computed: {
    ...mapGetters([
      'NEWS'
    ]),
    newsItemP () {
      let itemContent = {}
      const vm = this
      this.NEWS.map(function (item) {
        if (item.slug === vm.$route.query.el) {
          itemContent = item
        }
      })
      return itemContent
    },
    localeDate () {
      return (new Date(this.newsItemP.date)).toLocaleDateString()
    }
  }
}
</script>

<style>

</style>
