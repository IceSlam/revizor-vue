<template>
  <div id="services-item" class="is-services-item">
    <vue-headful
      v-if="newsItemP.title"
      :title="newsItemP.title.rendered + ' / Новости компании | Ревизор'"
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
                <router-link :to="{ name: 'newsPage' }" exact>
                  Новости компании
                </router-link>
              </li>
              <li v-if="newsItemP.title" class="breadcrumb-item active">
                {{ newsItemP.title.rendered }}
              </li>
            </ol>
          </nav>
        </div>
      <h2 v-if="newsItemP.title" v-html="newsItemP.title.rendered"></h2>
      <p class="is-news__page-date">Опубликовано: <span style="font-weight:200">{{ localeDate }}</span></p>
      <div class="is-news__page-content">
        <div v-if="newsItemP.content" v-html="newsItemP.content.rendered"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'newsItemPage',
  components: {
  },
  computed: {
    ...mapGetters([
      'NEWS'
    ]),
    newsItemP () {
      let itemContent = {}
      const vm = this
      this.NEWS.map(function (item) {
        if (item.slug === vm.$route.params.id) {
          itemContent = item
        }
      })
      return itemContent
    },
    localeDate () {
      return (new Date(this.newsItemP.date)).toLocaleDateString()
    }
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
