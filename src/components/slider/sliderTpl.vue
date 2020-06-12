<template lang="html">
  <div class="is-carousel-wrap">
    <div class="is-carousel" :style=" { 'margin-left': '-' + (100 * currCarouselItemIndex) + '%' } ">
      <isSliderItem
        v-for="carouselItem in carouselData"
        :key="carouselItem.id"
        :carouselItemData="carouselItem"
        :carouselItemMinWidth="carouselItemWidth"
      >
        <div class="is-slider__text">
          <h2>
            {{ carouselItem.title }}
          </h2>
          <p>
            {{ carouselItem.description }}
          </p>
          <a class="btn is-btn-out" target="_blank" :href="carouselItem.link">
            Подробнее об акции
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </isSliderItem>
    </div>
    <button @click="prevCarouselItem" type="button" class="is-slide-prev btn" name="button">
      <i class="fas fa-chevron-left fa-2x"></i>
    </button>
    <button @click="nextCarouselItem" type="button" class="is-slide-next btn" name="button">
      <i class="fas fa-chevron-right fa-2x"></i>
    </button>
  </div>
</template>

<script>
import isSliderItem from './sliderItemTpl'

export default {
  name: 'isSlider',
  components: {
    isSliderItem
  },
  props: {
    carouselData: {
      type: Array,
      default: () => []
    },
    carouselInterval: {
      type: Number,
      default: 0
    },
    carouselItemWidth: {
      type: Number,
      default: 1140
    }
  },
  data () {
    return {
      currCarouselItemIndex: 0
    }
  },
  methods: {
    prevCarouselItem () {
      if (this.currCarouselItemIndex > 0) {
        this.currCarouselItemIndex--
      }
    },
    nextCarouselItem () {
      if (this.currCarouselItemIndex >= this.carouselData.length - 1) {
        this.currCarouselItemIndex = 0
      } else {
        this.currCarouselItemIndex++
      }
    }
  },
  mounted () {
    if (this.carouselInterval > 0) {
      const vm = this
      setInterval(function () {
        vm.nextCarouselItem()
      }, vm.carouselInterval)
    }
  }
}

</script>

<style lang="css" >
</style>
