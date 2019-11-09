<template>
  <div>
    <transition name="x-popup-fade">
      <div class="x-popup" v-show="close">
        <div class="x-popup-header">
          <div class="x-popup-header-inner">
             <slot name="header">{{title}}</slot>
             <i class="x-iconclose" @click="handleClick"></i>
          </div>
        </div>
        <div class="x-popup-body">
          <div class="x-popup-body-inner">
               <slot></slot>
          </div>
        </div>
        <div class="x-popup-footer">
          <div class="x-popup-footer-inner">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>

    <transition>
      <div class="x-popup-mask" v-show="close" ></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "XPopup",
  data() {
    return {
      close:false
    };
  },
  props: {
    value: Boolean,
    title:{
       type:[String,Number],
       default:'信息'
    }
  },
  methods: {
    handleClick(){
       this.close = false
    }
  },
  created(){
    this.close = this.value
  },
  updated() {
    this.$emit("input", this.close);
  },
  watch: {
    value(newVal) {
      this.close = this.value
       if(newVal){       
        let top = document.scrollingElement.scrollTop
         document.onscroll = function(){
            document.scrollingElement.scrollTop = top
         }
          return
       }
         document.onscroll = null
    }
  }
};
</script>

