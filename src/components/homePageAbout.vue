<template>
  <div id="about" class="is-about">
    <isModalLite
      v-if="isModalLiteVisible"
      @closeModalLite="closeModalLite"
    >
      <iframe width="700" height="394" :src="aboutPageInfo.acf.about_video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </isModalLite>
      <div class="row is-about__row" >
        <div class="col-md-9 col-lg-6 is-about__text">
          <h2>
            О компании
          </h2>
          <p v-html="aboutPageInfo.excerpt.rendered" maxlength="50"></p>
          <div class="is-home__about-block">
            <router-link class="btn is-btn-more is-router-link-to" to="/about">
              <div style="margin-right:.5em;" class="">
                <img src="../assets/img/btnMore.svg" alt="">
              </div>
              <div style="white-space: pre-wrap;line-height:1;padding-top:.4em" class="">
                Читать подробнее
  <span>о компании</span>
              </div>
            </router-link>
            <a @click="showModalLite" class="btn is-btn-video">
              <div style="margin-right:.5em;" class="">
                <img src="../assets/img/btnVideo.svg" alt="">
              </div>
              <div style="white-space: pre-wrap;line-height:1;padding-top:.4em" class="">
                Смотреть видео
  <span>о компании</span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-3 col-lg-6 is-about__img" style="background:url(../assets/img/homeAboutImg.jpg)">
        </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
import isModalLite from '@/components/modal/isModalLite'

export default {
  name: 'homePageAbout',
  components: {
    isModalLite
  },
  props: {},
  data () {
    return {
      aboutPageInfo: {},
      isModalLiteVisible: false
    }
  },
  mounted () {
    axios
      .get('http://revisor.iceslam.ru/wp-json/wp/v2/pages/14')
      .then(response => (this.aboutPageInfo = response.data))
  },
  methods: {
    showModalLite () {
      this.isModalLiteVisible = true
    },
    closeModalLite () {
      this.isModalLiteVisible = false
    }
  }
}

</script>

<style lang="css">

</style>
