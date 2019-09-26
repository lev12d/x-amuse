<template>
    <transition name="x-tips-fade" mode="out-in">
        <div class="x-tips-message" v-show="visible" :style="getTop" @mouseenter="endTimer" @mouseleave="startTimer">
         <span class="x-tips-message-text">
          <i :class="setIconClass"></i>
        <span class="x-tips-message-msg"> {{message}}</span>
    </span>
  </div>
    </transition>
</template>

<script>
export default {
  name: "XTipsMessage",
  data() {
    return {
      message: "",
      visible: false,
      duration: 3000,
      type: "",
      top:25,
      closed:false,
      timer:null
    };
  },

  computed: {
    setIconClass() {
      switch (this.type) {
        case "info":
          return "x-iconprompt_fill";
          break;
        case "success":
          return "x-iconsuccess_fill";
          break;
        case "warning":
          return "x-iconwarning_fill";
          break;
        case "error":
          return "x-icondelete_fill";
          break;
        default:
          break;
      }
    },

    getTop(){
      return {
         top: `${ this.top }px`
      }
    }
  },
  
  methods:{
    close() {
        this.closed = true;
        // if (typeof this.onClose === 'function') {
        //   this.onClose(this);
        // }

     },
    startTimer(){
       if(this.duration>0){
          this.timer = setTimeout(()=>{
             if(!this.closed){
               this.close()
             }
          },this.duration)
       }
    },
    endTimer(){
      clearTimeout(this.timer);
    }
  },
  watch :{
     closed(newVal){
        if(newVal){
         this.visible = false
        }
     } 
  },
  mounted(){
    this.startTimer()
  }
};
</script>

