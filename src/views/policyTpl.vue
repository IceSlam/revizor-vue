<template>
  <div id="policyPage" class="container">
    <vue-headful
      title="Политика конфиденциальности | Ревизор"
    />
      <div class="is-breadcrumb-list">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'homePage' }" exact>
                Главная
              </router-link>
            </li>
            <li class="breadcrumb-item active">
              Политика конфиденциальности
            </li>
          </ol>
        </nav>
      </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>
      Политика конфиденциальности
    </h2>
  </div>
</template>

<script>

export default {
  name: 'policyPage',
  components: {
  }
}
</script>

<style>

</style>
