<template>
  <div id="news-page" class="is-news container">
    <vue-headful
      title="Новости компании - Ревизор"
      description="Новости компании Ревизор"
    />
    <isBreadCrumbs />
    <newsPageItems />
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/system/isBreadCrumbs'
import newsPageItems from '@/components/newsPageItems'

export default {
  name: 'newsPage',
  components: {
    isBreadCrumbs,
    newsPageItems
  }
}
</script>

<style>

</style>
