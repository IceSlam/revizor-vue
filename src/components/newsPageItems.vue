<template>
  <div id="services" class="is-services">
    <div class="container">
      <div class="row">
        <h2>
          Новости компании
        </h2>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="row is-news__items">
        <div v-for="(item, index) in newsItems" :key="index" class="col-md-6">
          <div class="is-news__item card">
            <div class="is-news__item-content">
              <img :src="item.imgLink" :alt="item.title">
              <div>
                <p>
                  {{ item.title }}
                </p>
                <p class="is-news__item-chevron">
                  <i class="fas fa-chevron-right"></i>
                </p>
                <a class="btn is-btn" href="#">
                  Подробнее об услуге
                </a>
              </div>
              <p class="is-news__item-description">
                {{ item.descr }}
              </p>
            </div>
          </div>
          <div class="is-news__item-bg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePageServices',
  props: {},
  data () {
    return {
      newsItems: [
        {
          title: 'Новость номер 1.',
          descr: 'Описание для новости номер 1',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 2',
          descr: 'Описание для новости номер 2',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 3',
          descr: 'Описание для новости номер 3',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 4',
          descr: 'Описание для новости номер 4',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 5',
          descr: 'Описание для новости номер 5',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 6',
          descr: 'Описание для новости номер 6',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 7',
          descr: 'Описание для новости номер 7',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 8',
          descr: 'Описание для новости номер 8',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 9',
          descr: 'Описание для новости номер 9',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Новость номер 10',
          descr: 'Описание для новости номер 10',
          imgLink: '/assets/img/servicesIcon1.svg'
        }
      ]
    }
  }
}

</script>

<style lang="css">

</style>
