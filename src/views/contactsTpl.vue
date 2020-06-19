<template>
  <div v-if="isLoader" class="is-loader row">
    <div class="col-md-12">
      <center>
        <div class="spinner-border" role="status">
        </div>
      </center>
    </div>
  </div>
  <div v-else id="contactsPage" class="is-contacts">
    <div class="container">
      <vue-headful
        v-if="contactsPageInfo.title"
        :title="contactsPageInfo.title.rendered + ' | Ревизор'"
      />
        <div class="is-breadcrumb-list">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'homePage' }" exact>
                  Главная
                </router-link>
              </li>
              <li v-if="contactsPageInfo.title" class="breadcrumb-item active">
                {{ contactsPageInfo.title.rendered }}
              </li>
            </ol>
          </nav>
        </div>
      <div class="row is-contacts__info">
        <div class="col-md-12">
          <h2 v-if="contactsPageInfo.title">
            {{ contactsPageInfo.title.rendered }}
          </h2>
        </div>
        <div v-if="contactsPageInfo.content" v-html="contactsPageInfo.content.rendered" class="col-md-6 is-contacts__info-details">
        </div>
        <div class="col-md-6 is-contacts__info-map">
          <img v-if="contactsPageInfo.acf" class="img-fluid" :src="contactsPageInfo.acf.contacts_map" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'contactsPage',
  components: {
  },
  data () {
    return {
      contactsPageInfo: {},
      isLoader: true
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/16')
      .then(response => (this.contactsPageInfo = response.data))
    this.isLoader = false
  }
}
</script>

<style>

</style>
