<template lang="html">
  <div class="col-md-6 is-certifs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'isCertifsItem',
  props: {
    certifsItemData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="css" scoped>
</style>
