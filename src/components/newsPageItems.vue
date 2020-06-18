<template>
  <div id="services" class="is-services">
    <div class="container">
      <div class="row">
        <h2>
          Новости компании
        </h2>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
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
    newsItemClick (el) {
      this.$router.push({ name: 'newsItemPage', query: { el } })
    }
  }
}

</script>

<style lang="css">

</style>
