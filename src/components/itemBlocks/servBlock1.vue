<template lang="html">
  <div class="row is-services-item-advantage">
    <div class="col-md-6 is-services-item-advantage__descr">
      <h3>
        Ведение бухгалтерского и налогового учета с «Ревизор» — это комплексная услуга
      </h3>
      <ul class="is-services-item-advantage__list">
        <li v-for="itemAdvantage in itemAdvantagesData" :key="itemAdvantage" class="">
          {{ itemAdvantage.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6 is-services-item-advantage__img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesItemAdvantages',
  data () {
    return {
      itemAdvantagesData: [
        {
          id: 1,
          name: 'Мы грамотно оформим все необходимые документы и отразим их в учете.'
        },
        {
          id: 2,
          name: 'Трудоустроим сотрудников и начислим им зарплату.'
        },
        {
          id: 3,
          name: 'Подготовим и сдадим всю необходимую отчетность.'
        },
        {
          id: 4,
          name: 'Начислим и заплатим налоги.'
        },
        {
          id: 5,
          name: 'Подберем оптимальный вариант уменьшения налоговой нагрузки.'
        },
        {
          id: 6,
          name: 'По любой сделке проконсультируем на предмет налоговых последствий.'
        }
      ]
    }
  }
}
</script>

<style lang="css" >
</style>
