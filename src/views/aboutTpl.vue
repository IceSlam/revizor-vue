<template>
  <div id="aboutPage" class="is-about container" style="background:none;">
    <vue-headful
      :title="aboutPageInfo.title.rendered + ' | Ревизор'"
      :description="aboutPageInfo.content"
    />
      <isBreadCrumbs />
    <div class="row is-contacts__info">
      <div class="col-md-12">
        <h2>
          {{ aboutPageInfo.title.rendered }}
        </h2>
      </div>
      <div v-html="aboutPageInfo.content.rendered" class="col-md-12 is-contacts__info-details">
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import isBreadCrumbs from '@/components/system/isBreadCrumbs'

export default {
  name: 'aboutPage',
  components: {
    isBreadCrumbs
  },
  data () {
    return {
      aboutPageInfo: {}
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/14')
      .then(response => (this.aboutPageInfo = response.data))
  }
}
</script>

<style>

</style>
