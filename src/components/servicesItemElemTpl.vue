<template>
  <div class="col-md-6 col-lg-4">
    <div class="is-services__item card">
      <div class="is-services__item-content">
        <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" :alt="servicesItemData.title.rendered">
        <div>
          <p>
            {{ servicesItemData.title.rendered }}
          </p>
          <p class="is-services__item-chevron">
            <i class="fas fa-chevron-right"></i>
          </p>
          <router-link class="btn is-btn is-router-link-to" :to="'/services/' + servicesItemData.slug">
            Подробнее об услуге
          </router-link>
        </div>
        <p v-html="servicesItemData.excerpt.rendered" class="is-services__item-description">
          {{ servicesItemData.excerpt.rendered }}
        </p>
      </div>
    </div>
    <div class="is-services__item-bg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesItemElem',
  props: {
    servicesItemData: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}

</script>

<style lang="css">

</style>
