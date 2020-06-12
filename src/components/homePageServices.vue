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
              <img :src="require('assets/img/' + item.imgLink )" :alt="item.title">
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Помощь в составлении налоговой и бухгалтерской отчетности.',
          descr: 'Описание для ЕНВД, УСН, НДС, Прибыль, Бух.баланс',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Помощь в составлении з/п отчетности.',
          descr: 'Описание для Помощь в составлении з/п отчетности.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'З-НДФЛ.',
          descr: 'Описание для З-НДФЛ.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Консультации по выбору системы налогооблажения.',
          descr: 'Описание для Консультации по выбору системы налогооблажения.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Подготовка ответов на требования ИФНС, ФСС, ПФ, РФ.',
          descr: 'Описание для Подготовка ответов на требования ИФНС, ФСС, ПФ, РФ.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Оформление пакета документов при трудоустройстве сотрудников.',
          descr: 'Описание для Оформление пакета документов при трудоустройстве сотрудников.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Регистрация и ликвидация ИП, ООО.',
          descr: 'Описание для Регистрация и ликвидация ИП, ООО.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Представительство и решение спорных вопросов с ИФНС.',
          descr: 'Описание для Представительство и решение спорных вопросов с ИФНС.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        },
        {
          title: 'Восстановление бухгалтерсокого и налогового учета.',
          descr: 'Описание для Восстановление бухгалтерсокого и налогового учета.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          imgLink: 'servicesIcon1.svg'
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of d75e051... Edited Demo
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
=======
          imgLink: '/img/servicesIcon1.svg'
>>>>>>> parent of df41eac... Edited header component + Added contacts info items
        }
      ]
    }
  }
}

</script>

<style lang="css">

</style>
