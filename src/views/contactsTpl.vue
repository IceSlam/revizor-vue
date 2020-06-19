<template>
  <div id="contactsPage" class="is-contacts">
    <div class="container">
      <vue-headful
        :title="contactsPageInfo.title.rendered + ' | Ревизор'"
      />
        <isBreadCrumbs />
      <div class="row is-contacts__info">
        <div class="col-md-12">
          <h2>
            {{ contactsPageInfo.title.rendered }}
          </h2>
        </div>
        <div v-html="contactsPageInfo.content.rendered" class="col-md-6 is-contacts__info-details">
        </div>
        <div class="col-md-6 is-contacts__info-map">
          <img class="img-fluid" :src="contactsPageInfo.acf.contacts_map" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import isBreadCrumbs from '@/components/system/isBreadCrumbs'

export default {
  name: 'contactsPage',
  components: {
    isBreadCrumbs
  },
  data () {
    return {
      contactsPageInfo: {}
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/16')
      .then(response => (this.contactsPageInfo = response.data))
  }
}
</script>

<style>

</style>
