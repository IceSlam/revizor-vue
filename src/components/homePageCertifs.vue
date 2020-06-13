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
          <div class="row">
            <div v-for="certifItem in certifsItems" :key="certifItem" class="col-md-6 is-certifs-item">
              <div class="is-certifs-item-block">
                <img :src="certifItem.img" alt="" class="img-fluid">
              </div>
              <p class="is-certifs-item-text">
                {{ certifItem.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePageCertifs',
  props: {},
  data () {
    return {
      certifsItems: [
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
