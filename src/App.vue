<template>
  <div id="app">
    <headerTpl />
    <router-view/>
    <feedbackTpl />
    <footerTpl />
    <!--
      ////////////////////////////////////////////////////
      Project: Ревизор
      Version: 1.0
      Web-site: https://site.ru
      Project web-site: https://iceslam.ru/dev/revisor
      GitHub: https://github.com/IceSlam/revisor-msp
      Platform: WordPress REST API + VueJS
      Used Modules: Vue-CLI, Vue Router, AXIOS, Vuex, PWA
      ///////////////////////////////////////////////////
      Author: IceSlam
      Web-site: https://iceslam.ru/
      GitHub: https://github.com/IceSlam
      VK: https://vk.com/iceslam
      Instagram: https://instagram.com/iceslamru
      Telegram: https://t.me/IceSlam
      ///////////////////////////////////////////////////
    -->
  </div>
</template>

<script>
import headerTpl from '@/components/headerTpl'
import footerTpl from '@/components/footerTpl'
import feedbackTpl from '@/components/feedbackTpl'

export default {
  name: 'App',
  components: {
    headerTpl,
    footerTpl,
    feedbackTpl
  }
}

</script>

<style lang="css">

@import url("./assets/css/main.css");
@import url("./assets/css/media.css");

</style>
