<template lang="html">
      <div class="is-carousel-item" :style="{'min-width': carouselItemMinWidth + 'px !important'}">
        <div class="row" style="margin-left:0;margin-right:0;">
          <div class="col-md-6">
            <div class="is-carousel-item__content">
              <slot ></slot>
            </div>
          </div>
          <div class="col-md-6">
<<<<<<< HEAD
            <img class="img-fluid" :src="require('../../assets/img/' + carouselItemData.img )" :alt="carouselItemData.title">
=======
            <img :src=" require('../../assets/img/' + carouselItemData.img )" :alt="carouselItemData.title">
>>>>>>> parent of 1b5afb8... Added basic files for Services Item page
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'isSliderItem',
  props: {
    carouselItemData: {
      type: Object,
      default: () => {}
    },
    carouselItemMinWidth: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="css" >
</style>
