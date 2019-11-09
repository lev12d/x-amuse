<template>
  <div class="x-tooltip">
    <div
      class="x-target-el"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
     <span :class="placement" v-show="!showTip">{{ content }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XTooltip",
  data() {
    return {
      showTip: true
    };
  },
  props: {
    content: [String, Number],
    trigger: String,
    disabled: Boolean,
    placement: {
      type: String,
      default: "top"
    }
  },
  computed: {
    show: {
      get() {
        return this.showTip;
      },
      set(status) {
        this.showTip = status;
      }
    }
  },
  methods: {
    handleMouseEnter() {
      if (this.trigger === "hover") {
        if (!this.disabled) {
          this.showTip = false;
        }
      }
    },
    handleMouseLeave() {
      if (this.trigger === "hover") {
        if (!this.disabled) {
          this.showTip = true;
        }
      }
    },
    handleClick() {
      if (this.trigger === "click") {
        if (!this.disabled) {
          this.showTip = !this.showTip;
        }
      }
    }
  }
};
</script>

