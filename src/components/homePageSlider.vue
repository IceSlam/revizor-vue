<template>
  <div id="slider" class="is-slider">
    <div class="container">
      <div class="row">
        <isSlider
          :carouselData="sliderItems"
          :carouselInterval="5000"
          :carouselItemWidth="1140"
        />
      </div>
    </div>
  </div>
</template>

<script>
import isSlider from '@/components/slider/sliderTpl'

export default {
  name: 'homePageSlider',
  components: {
    isSlider
  },
  data () {
    return {
      sliderItems: [
        {
          id: 1,
          title: 'Бухгалтерские услуги для вашего бизнеса',
          description: 'Если Вам нужно решить конкретную проблему, связанную с налогами и бухгалтерией, то стоит обратиться в компанию «Ревизор». Мы можем предоставить весь спектр бухгалтерских и налоговых услуг.',
          img: 'sliderItem1.png',
          link: 'https://vk.com/iceslam'
        },
        {
          id: 2,
          title: 'Lorem Ipsum Dolor Akismet Lorem Ipsum',
          description: 'Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet',
          img: 'sliderItem2.png',
          link: 'https://iceslam.ru/'
        },
        {
          id: 3,
          title: 'Lorem Ipsum Dolor Akismet Lorem Ipsum',
          description: 'Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet Lorem Ipsum Dolor Akismet',
          img: 'sliderItem3.png',
          link: 'https://iceslam.ru/'
        }
      ]
    }
  },
  methods: {
  }
}

</script>

<style lang="css">

</style>
