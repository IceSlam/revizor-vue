<template lang="html">
  <div class="is-services-item__results container">
    <div class="row">
      <h3>
        Для кого это подходит?
      </h3>
      <div class="col-md-12">
        <ul class="is-services-item__results-list">
          <li v-for="item in servicesItemForWho" :key="item">
            {{ item.listItem }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <h3 style="margin-top:2.8125rem">
        Что вы получаете в результате?
      </h3>
      <div class="col-md-12">
        <ul class="is-services-item__results-list">
          <li v-for="item in servicesItemResults" :key="item">
            {{ item.listItem }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesItemResults',
  data () {
    return {
      servicesItemForWho: [
        {
          id: 1,
          listItem: 'Для предпринимателей и организаций на любой системе налогообложения.'
        },
        {
          id: 2,
          listItem: 'Если вы только организуете бизнес, мы поможем его зарегистрировать. Подберем оптимальную систему налогообложения и схему взаимодействия с бухгалтером, расскажем, как сэкономить на налогах.'
        },
        {
          id: 3,
          listItem: 'Если у вас уже действующий бизнес, но вы решили сменить бухгалтера — аккуратно примем дела, при необходимости — исправим ошибки, восстановим учет и организуем текущее ведение учета по удобной для вас схеме взаимодействия с бухгалтером.'
        }
      ],
      servicesItemResults: [
        {
          id: 1,
          listItem: 'Вы существенно снижаете затраты на бухгалтерию, стоимость наших услуг одна из самых низких в России.'
        },
        {
          id: 2,
          listItem: 'Экономию времени на решение проблем с бухгалтерией.'
        },
        {
          id: 3,
          listItem: 'Спокойствие за вовремя сданную отчетность и уплаченные налоги.'
        }
      ]
    }
  }
}
</script>

<style lang="css" >
</style>
