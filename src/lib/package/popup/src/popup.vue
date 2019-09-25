<template>
  <div>
    <transition name="x-popup-fade">
      <div class="x-popup" v-show="value">
        <div class="x-popup-header">
          <div class="x-popup-header-inner">信息</div>
        </div>
        <div class="x-popup-body">
          <div class="x-popup-body-inner">这是一个弹出层</div>
        </div>
        <div class="x-popup-footer">
          <div class="x-popup-footer-inner">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>

    <transition>
      <div class="mask" v-show="value"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "XPopup",
  data() {
    return {};
  },
  props: {
    value: Boolean
  },
  updated() {
    this.$emit("input", this.value);
  },
  watch: {
    value(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        return
      }
       document.body.style.overflow ='auto'
    }
  }
};
</script>

<style scoped>
</style>