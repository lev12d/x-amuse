<template>
  <span
    class="x-switch"
    :class="[values?'x-switch-open':'x-switch-close',size?'x-switch-'+size:'',{
       'is-disabled':disabled
   }]"
    @click="handleClick"
    ref="switch"
    :style="values?{background:openBgColor}:{background:closeBgColor}"
  >
    <span class="x-switch-custom" v-if="values">
      <slot name="open"></slot>
    </span>
    <span v-else class="x-switch-custom">
      <slot name="close"></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "XSwitch",
  data() {
    return {
      values: this.value
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: String,
    disabled: Boolean,
    openBgColor: String,
    closeBgColor: String
  },

  methods: {
    handleClick() {
      if (!this.disabled) {
        this.values = !this.values;
        this.$emit("onChange", this.values);
      }
    }
  },
 
 
};
</script>

<style scoped>
</style>