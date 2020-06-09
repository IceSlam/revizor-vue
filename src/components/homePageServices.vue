<template>
  <div id="services" class="is-services">
    <div class="container">
      <div class="row">
        <h2>
          Услуги компании
        </h2>
      </div>
      <div class="row is-services__items">
        <div class="col-sm-3 col-md-4">
          <div class="is-services__item">
            <div class="is-services__item-content">
              <img src="../assets/img/servicesIcon1.svg" alt="Бухгалтерский и налоговый учет">
              <div>
                <p>
                  Бухгалтерский и налоговый учет.
                </p>
                <p class="is-services__item-chevron">
                  <i class="fas fa-chevron-right"></i>
                </p>
                <a class="btn is-btn" href="#">
                  Подробнее об услуге
                </a>
              </div>
              <p class="is-services__item-description">
                ЕНВД, УСН, НДС, Прибыль, Бух.баланс
              </p>
            </div>
          </div>
          <div class="is-services__item-bg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePageServices'
}

</script>

<style lang="css">

  .is-btn {
    background: linear-gradient(180deg, #F86A6A 0%, #DE3131 100%);
    box-shadow: 0px 3px 0px #AF1A1A;
    border-radius: 5px;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 100%;
    color: #FFFFFF;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: none;
    transition: all 1s;
    width:240px;
    text-align:center;
  }

  .is-btn:hover {
    background: linear-gradient(0deg, #F86A6A 0%, #DE3131 100%);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 3px 0px #AF1A1A;
    color: #fff;
    transition: all 1s;
  }

  #services {
    padding: 5.625em 0;
    position: relative;
    background: #F8F8F8;
    min-height: 500px;
  }

  .is-services h2 {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: #3F3E3E;
    padding-left: 1rem;
  }

  .is-services__items {
    margin-top: 3.125em;
    position: relative;
  }

  .is-services__item {
    position: absolute;
    z-index: 20;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    height: 110px;
    transition: all 1s;
    padding: .5em;
  }
  .is-services__item-content {
    border: 2px solid #F1F1F1;
    border-radius: 6px;
    height: 100%;
    display: flex;
  }

  .is-services__item-content img {
    margin-left: 1.75em;
    top: 30px;
    position: absolute;
  }

  .is-services__item-content div {
    position: absolute;
    right: 30px;
    top: 36px;
    text-align:left;
  }

  .is-services__item-content div p {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 120%;
    display: inline-flex;
    align-items: center;
    color: #3F3E3E;
  }

  .is-services__item-content div p:first-child {
    vertical-align: middle;
    transition: all 1s;
    max-width: 214px;
  }

  .is-services__item-content .is-services__item-chevron {
    color: #DE3131;
    vertical-align: middle;
    transition: all 1s;
    margin-left: 1em;
  }

  .is-services__item-content .is-btn {
    display: none;
    position: absolute;
  }

  .is-services__item-bg {
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    margin-left:2%;
    height: 110px;
    max-width:96%;
    width: 100%;
    z-index: 10;
    margin-top: .375em;
  }
  .is-services__item-description {
    position: absolute;
    bottom: 0;
    padding-bottom: 10px;
    left: 0;
    padding-left: 36px;
    padding-top: 20px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 120%;
    display: none;
    align-items: center;
    color: #898989;
    text-align:left;
  }

  .is-services__item:hover {
    z-index:21 !important;
    height: 146px;
    transition: all 1s;
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
  }

  .is-services__item:hover .is-services__item-content img {
    position:absolute;
    top: 30px;
    transition: all 1s;
  }

  .is-services__item:hover .is-services__item-content div p:first-child, .is-services__item:hover .is-services__item-chevron {
    display: none;
    transition: all 1s;
  }

  .is-services__item:hover .is-btn {
    display: inline-flex;
    position: absolute;
    right: -.7em;
    top: -.6em;
  }

  .is-services__item:hover .is-services__item-description {
    display: inline-flex;
  }

</style>
