<template>
  <div id="about" class="is-about">
      <div class="row is-about__row" >
        <div class="col-md-9 col-lg-6 is-about__text">
          <h2>
            О компании
          </h2>
          <p>
            Компания «Ревизор» работает с 2011 года. Мы оказываем бухгалтерские и юридические услуги для малого бизнеса и являемся одной из ведущих компаний Алтайского края в этой сфере.
          </p>
          <p>
            Сейчас у нас на постоянном обслуживании находится примерно 150 компаний с самыми разными видами деятельности в сфере производства, торговли и услуг.
          </p>
          <p>
            Очень многие наши клиенты сотрудничают с нами с года основания или с момента создания своего бизнеса, и для нас это очень ценно: мы помогаем развиваться нашим клиентам и развиваемся сами.
          </p>
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
            <a class="btn is-btn-video" href="#">
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
export default {
  name: 'homePageAbout',
  props: {},
  data () {
    return {
    }
  }
}

</script>

<style lang="css">

</style>
