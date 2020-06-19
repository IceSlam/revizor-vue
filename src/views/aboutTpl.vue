<template>
  <div v-if="isLoader" class="is-loader row">
    <div class="col-md-12">
      <center>
        <div class="spinner-border" role="status">
        </div>
      </center>
    </div>
  </div>
  <div v-else id="aboutPage" class="is-about container" style="background:none;">
    <vue-headful
      v-if="aboutPageInfo.title"
      :title="aboutPageInfo.title.rendered + ' | Ревизор'"
      :description="aboutPageInfo.content.rendered"
    />
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'homePage' }" exact>
                Главная
              </router-link>
            </li>
            <li v-if="aboutPageInfo.title" class="breadcrumb-item active">
              {{ aboutPageInfo.title.rendered }}
            </li>
          </ol>
        </nav>
      </div>
    <div class="row is-contacts__info">
      <div class="col-md-12">
        <h2  v-if="aboutPageInfo.title" >
          {{ aboutPageInfo.title.rendered }}
        </h2>
      </div>
      <div  v-if="aboutPageInfo.content"  v-html="aboutPageInfo.content.rendered" class="col-md-12 is-contacts__info-details">
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'aboutPage',
  components: {
  },
  data () {
    return {
      aboutPageInfo: {},
      isLoader: true
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/14')
      .then(response => (this.aboutPageInfo = response.data))
    this.isLoader = false
  }
}
</script>

<style>
.is-loader {
  margin-top:3rem;
  margin-bottom:6rem;
}
.spinner-border {
  border: 1px solid #DE3131;
  border-right-color: transparent;
  width:60px;
  height:60px;
  margin: 0 auto;
  margin-top:3em;
}
</style>
