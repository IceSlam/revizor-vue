<template lang="html">
  <div class="is-breadcrumb-list">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{ name: 'homePage', params: {} }" exact>Главная</router-link></li>
        <li class="breadcrumb-item"><router-link :to="{ name: 'servicesPage', params: {} }" exact>Услуги</router-link></li>
        <li class="breadcrumb-item active">Бухгалтерский и налоговый учет</li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'isBreadCrumbs'
}
</script>

<style lang="css" scoped>
</style>
