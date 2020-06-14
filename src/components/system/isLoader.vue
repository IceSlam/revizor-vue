<template lang="html">
  <div class="is-loader row">
    <div class="col-md-12">
      <center>
        <div class="spinner-border" role="status">
        </div>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'isLoader'
}
</script>

<style lang="css" scoped>
  .spinner-border {
    border: 1px solid #DE3131;
    border-right-color: transparent;
    width:60px;
    height:60px;
    margin: 0 auto;
    margin-top:3em;
  }
</style>
