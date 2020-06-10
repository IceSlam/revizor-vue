<template>
  <div id="feedback" class="is-feedback" style="background:url(/assets/img/feedbackBg.jpg)">
      <div class="container">
        <h2>
          Остались вопросы?
          <span>
            Мы поможем Вам!
          </span>
        </h2>
        <div class="row">
          <div class="col-md-6">
            <form @submit.prevent="submit">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Имя">
                </div>
                <div class="col">
                  <input type="phone" class="form-control" placeholder="Телефон">
                </div>
              </div>
              <div class="row" style="margin-top:2em;">
                <div class="col">
                  <textarea class="form-control" placeholder="Ваш вопрос"></textarea>
                </div>
              </div>
              <div class="row" style="margin-top:2em;">
                <div class="col" style="position: relative;align-items: center;display: flex;">
                  <input class="btn is-btn-feedback" type="submit" name="formSubmit" value="Отправить">
                </div>
                <div class="col-6 d-flex" style="align-items:center;">
                  <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                      <label class="custom-control-label" for="defaultUnchecked"><router-link to="/policy">С политикой конфидициальных данных ознакомлен</router-link></label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6">

          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'feedbackTpl',
  props: {},
  data () {
    return {
    }
  }
}

</script>

<style lang="css">

</style>
