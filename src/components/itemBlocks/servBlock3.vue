<template lang="html">
  <div class="row is-services-item-sphere">
    <div class="col-md-6 is-services-item-sphere__img">

    </div>
    <div class="col-md-6 is-services-item-sphere__descr">
      <h3>
        В каких сферах мы оказываем услуги?
      </h3>
      <ul class="is-services-item-sphere__list">
        <li v-for="itemSphere in itemSphereData" :key="itemSphere" class="">
          {{ itemSphere.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesItemSpheres',
  data () {
    return {
      itemSphereData: [
        {
          id: 1,
          name: 'Оптовая и розничная торговля'
        },
        {
          id: 2,
          name: 'Общественное питание'
        },
        {
          id: 3,
          name: 'Услуги'
        },
        {
          id: 4,
          name: 'Производство'
        },
        {
          id: 5,
          name: 'Строительство'
        },
        {
          id: 6,
          name: 'и другие'
        }
      ]
    }
  }
}
</script>

<style lang="css" >
</style>
