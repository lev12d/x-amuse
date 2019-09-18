<template>
  
         <button
          ref="btn"
          class="x-button"
          :class="[type?'x-button-'+type:'', size?'x-button-'+size:'',{
              'is-disabled':btnDisabled,
              'is-round':round,
              'is-circle':circle,
              'is-long':long,
              'is-loading':loading
          }]"
          :disabled="btnDisabled"
          @click="handleClick"
         > 
           <i class="x-iconjiazaizhong" v-if="loading"></i>
           <i :class="icon" v-if="icon && !loading"></i>
           <slot></slot>
         </button>
</template>

<script>
    export default {
        name:'XButton',
        props:{
             type:{
                 type:String,
                 default:'default'
             },
             icon:{
                 type:String,
                 default:''
             },
             styles:{
                 type:Object,
                 default:function(){
                     return {}
                 }
             },
             size:String,
             disabled:Boolean,
             round:Boolean,
             circle:Boolean,
             loading:Boolean,
             long:Boolean
        },
        computed:{
            btnDisabled(){
                return this.disabled
            }
        },
        methods :{
            handleClick(event){
                this.$emit('click',event)
            },
            setStyle(){
                if(JSON.stringify(this.styles) === "{}"){
                      return;
                }
                let style = this.styles
                for(let key in style){
                  this.$refs.btn.style[key] = style[key]
                }
            }
        },
        created(){
            this.$nextTick(()=>{
                this.setStyle()
            })
        }
    }
</script>

