<template>
  <div class="col-md-6">
    <div class="is-news__item card">
      <div class="is-news__item-content">
        <img src="https://a.al-dev.ru/assets/img/servicesIcon1.svg" :alt="newsItemData.title.rendered">
        <div>
          <p>
          {{ newsItemData.title.rendered }}
          </p>
          <p class="is-news__item-chevron">
            <i class="fas fa-chevron-right"></i>
          </p>
          <a @click.prevent="newsItemClick" class="btn is-btn is-router-link-to" >
            Подробнее
          </a>
        </div>
        <p v-html="newsItemData.excerpt.rendered" class="is-news__item-description">
          {{ newsItemData.excerpt.rendered }}
        </p>
      </div>
    </div>
    <div class="is-news__item-bg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsItemElem',
  props: {
    newsItemData: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    newsItemClick () {
      this.$emit('newsItemClick', this.newsItemData.slug)
    }
  }
}

</script>

<style lang="css">

</style>
