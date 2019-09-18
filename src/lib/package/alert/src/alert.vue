<template>
  <transition name="x-alert-fade" mode="out-in">
    <div  class="x-alert"
     v-show="visible"
     :class="[type?'x-alert-'+type:'',{
         
     }]"
    >
         <div class="x-alert-content">
              <span class="x-alert-text">
                   <i :class="[type?iconClass:'x-iconprompt_fill']" v-if="showIcon"></i>
                   <slot></slot>
              </span>
              <span class="x-alert-close" v-if="closeable && !closeText" >
                   <i class="x-iconclose" @click="close"></i>
              </span>
              <span class="x-alert-custom-text" v-if="closeText">
                     <span class="x-alert-custom-text-inner"  @click="close">{{closeText}}</span>
              </span>
              <div class="x-alert-desc">
                   <slot name="desc"></slot>
              </div>
         </div>
    </div>
  </transition>
</template>

<script>
 const type_icon_class = {
     'success':'x-iconsuccess_fill',
     'warning':'x-iconwarning_fill',
     'error':'x-icondelete_fill'
 }

    export default {
        name:'XAlert',
        props:{
            type:String,  
            closeable:Boolean,
            closeText:String,
            showIcon:Boolean
        },    
        data(){
            return{
                visible:true
            }
        } ,
        computed:{
            iconClass(){
                return type_icon_class[this.type]
            }
        },
        methods:{
           close(){
               this.visible = false;
               this.$emit('onclose')
           }
        } 
    }
</script>

