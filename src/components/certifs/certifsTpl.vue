<template lang="html">
  <div class="row">
    <isCertifsItem
      v-for="certifsItem in certifsData"
      :key="certifsItem.id"
      :certifsItemData="certifsData"
    >
      <div class="is-certifs-item-block">
        <img :src="certifsItem.img" alt="" class="img-fluid">
      </div>
      <p class="is-certifs-item-text">
        {{ certifsItem.name }}
      </p>
    </isCertifsItem>
  </div>
</template>

<script>
import isCertifsItem from '@/components/certifs/certifsItemTpl'

export default {
  name: 'isCertifs',
  components: {
    isCertifsItem
  },
  props: {
    certifsData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css" scoped>
</style>
