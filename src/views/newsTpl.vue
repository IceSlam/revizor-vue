<template>
  <div id="news-page" class="is-news container">
    <vue-headful
      :title="newsCategoryInfo.name +' | Ревизор'"
    />
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'homePage' }" exact>
                Главная
              </router-link>
            </li>
            <li class="breadcrumb-item active">
              {{ newsCategoryInfo.name }}
            </li>
          </ol>
        </nav>
      </div>
    <div class="row">
      <h2 style="margin-top:3rem;margin-bottom:3rem;font-family: Nunito;font-style: normal;font-weight: bold;font-size: 40px;line-height: 120%;color: #3F3E3E;padding-left: 1rem;">
        {{ newsCategoryInfo.name }}
      </h2>
    </div>
    <div class="row">
      <div v-html="newsCategoryInfo.description" class="col-md-12">
      </div>
    </div>
    <newsPageItems
      :newsData="NEWS"
    />
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import newsPageItems from '@/components/newsPageItems'

export default {
  name: 'newsPage',
  components: {
    newsPageItems
  },
  data: () => ({
    newsCategoryInfo: []
  }),
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/categories/2')
      .then(response => (this.newsCategoryInfo = response.data))
    this.GET_NEWS_FROM_API()
  },
  computed: {
    ...mapGetters([
      'NEWS'
    ])
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
