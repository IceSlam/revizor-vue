<template>
  <div id="services" class="is-services" style="padding-top:3rem">
    <div class="container">
      <div class="row is-news__items">
        <newsItemElem
          v-for="newsItem in newsData"
          :key="newsItem.id"
          :newsItemData="newsItem"
          @newsItemClick="newsItemClick"
        />
      </div>
    </div>
  </div>
</template>

<script>

import newsItemElem from '@/components/newsItemElemTpl'

export default {
  name: 'newsPageItems',
  components: {
    newsItemElem
  },
  props: {
    newsData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  }),
  methods: {
    newsItemClick (id) {
      this.$router.push({ name: 'newsItemPage', params: { id } })
    }
  }
}

</script>

<style lang="css">

</style>
