<template lang="html">
  <transition name="fade">
    <div class="is-modal-wrapper" ref="modal-wrapper">
      <div class="is-modal">
        <div class="is-modal__header">
          <span>
            {{titleModal}}
          </span>
          <span>
            <i
              class="fas fa-times"
              @click="closeModal"
            >
            </i>
          </span>
        </div>
        <div class="is-modal__content">
          <slot></slot>
        </div>
        <div class="is-modal__footer">
          <button
            class="btn btn-danger btn-sm"
            type="button"
            name="button"
            @click="closeModal"
            >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'isModal',
  props: {
    titleModal: {
      type: String,
      default: 'Modal name'
    }
  },
  data () {
    return {}
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['modal-wrapper']) {
        vm.closeModal()
      }
    })
  }
}
</script>

<style lang="css">
  .is-modal-wrapper {
    background: rgba(222,49,49,.5);
    width: 100vw;
    height: 100vh;
    z-index:999;
    position:fixed;
  }
  .is-modal {
    padding: 1rem;
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background: #FFF;
    border-radius: 5px;
    -webkit-box-shadow: 0px 20px 30px 13px rgba(50, 50, 50, 0.47);
    -moz-box-shadow:    0px 20px 30px 13px rgba(50, 50, 50, 0.47);
    box-shadow:         0px 20px 30px 13px rgba(50, 50, 50, 0.47);
  }
  .is-modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DE3131;
    padding-bottom: 1rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    color: #DE3131;
  }
  .is-modal__header i {
    margin-left: 1rem;
    cursor:pointer;
  }
  .is-modal__content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem 1rem;
  }
  .is-modal__footer {
    display:none;
  }
  .fade-enter {
    opacity: 0;
    transition: opacity 1s;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transition: opacity 1s;
  }
</style>
