<template>
  <div id="news-page" class="is-news container">
    <vue-headful
      title="Новости компании | Ревизор"
    />
    <isBreadCrumbs />
    <newsPageItems
      :newsData="NEWS"
    />
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import isBreadCrumbs from '@/components/system/isBreadCrumbs'
import newsPageItems from '@/components/newsPageItems'

export default {
  name: 'newsPage',
  components: {
    isBreadCrumbs,
    newsPageItems
  },
  computed: {
    ...mapGetters([
      'NEWS'
    ])
  },
  mounted () {
    this.GET_NEWS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_NEWS_FROM_API'
    ])
  }
}
</script>

<style>

</style>
