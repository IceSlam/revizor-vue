<template lang="html">
  <transition name="fade">
    <div class="is-modal-lite-wrapper" ref="is-modal-lite-wrapper">
      <div class="is-modal-lite">
        <div class="is-modal-lite__header">
          <span class="is-modal-lite__header-title">
          </span>
          <span class="is-modal-lite__header-close">
            <i
              style="color:#DE3131;cursor:pointer;position:fixed;right:1em;top:1em"
              class="fas fa-times"
              @click="closeModalLite"
            ></i>
          </span>
        </div>
        <div class="is-modal-lite__content">
          <slot></slot>
        </div>
        <div class="is-modal-lite__footer d-none">
          <button
            class="btn btn-sm btn-danger"
            type="button"
            name="button"
            @click="closeModalLite"
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
  name: 'isModalLite',
  props: {
    isModalLiteTitle: {
      type: String,
      default: 'Modal Lite Title'
    }
  },
  data () {
    return {}
  },
  methods: {
    closeModalLite () {
      this.$emit('closeModalLite')
    }
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['is-modal-lite-wrapper']) {
        vm.closeModalLite()
      }
    })
  }
}
</script>

<style lang="css" scoped>
  .is-modal-lite-wrapper {
    background: rgba(0,0,0,.75);
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    right:0;
    left:0;
    top:0;
    bottom:0;
    z-index:1199;
  }
  .is-modal-lite {
    position:fixed;
    top:50px;
    width:400px;
    z-index:1200;
    align-items:center;
  }
  .is-modal-lite__header, .is-modal-lite__footer {
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .is-modal-lite__content {
    display:flex;
    justify-content:center;
    align-items:center;
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
