<template>
  <div id="policyPage">
    <vue-headful
      title="Политика конфиденциальности | Ревизор"
    />
    <isBreadCrumbs />
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>
      Политика конфиденциальности
    </h2>
  </div>
</template>

<script>

import isBreadCrumbs from '@/components/system/isBreadCrumbs'

export default {
  name: 'policyPage',
  components: {
    isBreadCrumbs
  }
}
</script>

<style>

</style>
