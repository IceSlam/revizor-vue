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
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Помощь в составлении налоговой и бухгалтерской отчетности.',
          descr: 'Описание для ЕНВД, УСН, НДС, Прибыль, Бух.баланс',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Помощь в составлении з/п отчетности.',
          descr: 'Описание для Помощь в составлении з/п отчетности.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'З-НДФЛ.',
          descr: 'Описание для З-НДФЛ.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Консультации по выбору системы налогооблажения.',
          descr: 'Описание для Консультации по выбору системы налогооблажения.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Подготовка ответов на требования ИФНС, ФСС, ПФ, РФ.',
          descr: 'Описание для Подготовка ответов на требования ИФНС, ФСС, ПФ, РФ.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Оформление пакета документов при трудоустройстве сотрудников.',
          descr: 'Описание для Оформление пакета документов при трудоустройстве сотрудников.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Регистрация и ликвидация ИП, ООО.',
          descr: 'Описание для Регистрация и ликвидация ИП, ООО.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Представительство и решение спорных вопросов с ИФНС.',
          descr: 'Описание для Представительство и решение спорных вопросов с ИФНС.',
          imgLink: '../img/servicesIcon1.svg'
        },
        {
          title: 'Восстановление бухгалтерсокого и налогового учета.',
          descr: 'Описание для Восстановление бухгалтерсокого и налогового учета.',
          imgLink: '../img/servicesIcon1.svg'
        }
      ]
    }
  }
}

</script>

<style lang="css">

</style>
