<template lang="html">
      <div class="is-carousel-item" :style="{'min-width': carouselItemMinWidth + 'px'}">
        <div class="row" style="margin-left:0;margin-right:0;">
          <div class="col-md-6">
            <div class="is-carousel-item__content">
              <slot ></slot>
            </div>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" :src="require('../../assets/img/' + carouselItemData.img )" :alt="carouselItemData.title">
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
