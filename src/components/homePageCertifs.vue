<template>
  <div id="certifs" class="is-certifs">
    <div class="container">
      <div class="row" style="background: rgba(0, 0, 0, 0) url(/assets/img/homeCertifsImg.png);background-position:-30% 30%;background-repeat:no-repeat;">
        <div class="col-md-4">
        </div>
        <div class="col-md-8">
          <h2 class="is-certifs-title">
            Дипломы и сертификаты
          </h2>
          <isCertifs
            :certifsData="certifsDataItems"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isCertifs from '@/components/certifs/certifsTpl'

export default {
  name: 'homePageCertifs',
  components: {
    isCertifs
  },
  props: {},
  data () {
    return {
      certifsDataItems: [
        {
          id: 1,
          name: 'Квалификационный аттестат профессионального бухгалтера коммерческой организации',
          img: '/assets/img/certif1.jpg'
        },
        {
          id: 2,
          name: 'Квалификационный аттестат профессионального бухгалтера коммерческой организации',
          img: '/assets/img/certif2.jpg'
        }
      ]
    }
  }
}

</script>

<style lang="css">

</style>
