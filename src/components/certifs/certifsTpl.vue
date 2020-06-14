<template lang="html">
  <div class="row">
    <isCertifsItem
      v-for="certifsItem in certifsData"
      :key="certifsItem.id"
      :certifsItemData="certifsData"
    >
      <div class="is-certifs-item-block">
        <img :src="certifsItem.img" alt="" class="img-fluid">
        <div class="is-certifs-hover-bg">
        </div>
        <img class="is-certif-fullscreen-btn" src="../../assets/img/arrows-fullscreen.svg" alt="Во весь экран">
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
  .is-certifs-item-block {
    position: relative;
    cursor:pointer;
  }

  .is-certifs-item-block .is-certif-fullscreen-btn {
    z-index:2001;
    position:absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    display: none;
  }

  .is-certifs-hover-bg {
    display:none;
    width:100% !important;
    height:100% !important;
    background: rgba(222,49,49,.7);
    z-index:2000;
    position: absolute;
    top:9.2%;
    left:13%;
    padding: 2.5rem 2.625rem;
    max-width:74.5%;
    max-height:81.5%;
    transition: all .5s ease-in-out;
  }

  .is-certifs-item-block:hover .is-certifs-hover-bg, .is-certifs-item-block:hover .is-certif-fullscreen-btn  {
    display:block;
    transition: all .5s ease-in-out;
  }
</style>
