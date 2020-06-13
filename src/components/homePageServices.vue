<template>
  <div id="services" class="is-services">
    <div class="container">
      <div class="row">
        <h2>
          Услуги компании
        </h2>
      </div>
      <div class="row is-services__items">
        <div v-for="(item, index) in servicesItems" :key="index" class="col-md-4">
          <div class="is-services__item card">
            <div class="is-services__item-content">
              <img :src="item.imgLink" :alt="item.title">
              <div>
                <p>
                  {{ item.title }}
                </p>
                <p class="is-services__item-chevron">
                  <i class="fas fa-chevron-right"></i>
                </p>
                <a class="btn is-btn" href="#">
                  Подробнее об услуге
                </a>
              </div>
              <p class="is-services__item-description">
                {{ item.descr }}
              </p>
            </div>
          </div>
          <div class="is-services__item-bg">
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
      servicesItems: [
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        },
        {
          title: 'Бухгалтерский и налоговый учет.',
          descr: 'Описание для Бухгалтерский и налоговый учет.',
          imgLink: '/assets/img/servicesIcon1.svg'
        }
      ]
    }
  }
}

</script>

<style lang="css">

</style>
