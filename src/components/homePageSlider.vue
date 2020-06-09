<template>
  <div id="slider" class="is-slider">
    <div class="container">
      <div class="row">
      <div class="col-md-6">
        <div class="is-slider__text">
          <h2>
            Бухгалтерские услуги для Вашего бизнеса
          </h2>
          <p>
            Если Вам нужно решить конкретную проблему, связанную с налогами и бухгалтерией, то стоит обратиться в компанию «Ревизор». Мы можем предоставить весь спектр бухгалтерских и налоговых услуг
          </p>
          <a class="btn is-btn-out" href="#">
            Подробнее об акции
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/img/sliderItem1.png" alt="Бухгалтерские услуги для Вашего бизнеса">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePageSlider'
}

</script>

<style lang="css">

  #slider {
    background: linear-gradient(113.1deg, #BB2B2B 8.15%, #FA5D5D 90.74%);
    font-family: 'Nunito', sans-serif;
    padding: 32px 0;
  }

  .is-slider__text {
    text-align:left;
    padding: 69px 0;
  }

  .is-btn-out {
    box-shadow: none;
    margin: 0;
    color: #fff;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    text-transform: none;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 100%;
    transition: all .625s;
  }

  .is-btn-out:hover {
    box-shadow: none;
    color: #DE3131;
    background: #fff;
    transition: all .625s;
  }

  .is-btn i {
    margin-left: .5em;
  }

  .is-slider__text h2 {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 120%;
    color: #FFFFFF;
  }

  .is-slider__text p {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    margin-top: 2.5em;
    line-height: 140%;
    color: #FFFFFF;
  }

</style>
