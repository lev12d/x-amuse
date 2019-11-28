<template>
    <div :class="['x-input',disabled?'x-input-disabled':'',{
         'large':size == 'large',
         'small':size == 'small'
    }]" :style="`width:${width}`" @mouseenter="onEnter" @mouseleave="onLeave">
        
             <span class="x-before" ref="slots" > 
                 <slot name="before"></slot>
             </span>
       
         <input 
           ref="input"
           :type="typeChange"
           class="x-input-text" 
           autocomplete="off" 
           :value="v"
           @input="handleInput"
           @change="handleChange"
           @blur="handleBlur"
           @focus="handleFocus"
           :placeholder="placeholder"
           :disabled="disabled"
           :maxlength="maxlength"
         />
         <span class="close" v-if="hover && v && clearable" @click="onClear">
              <i class="x-iconclose"></i>
         </span>
         <span class="visible" v-if="type==='password'&& (!v || !clearable)" @click="onShowPwd">
              <i class="x-icondengluyekejian" v-if="typeChange === 'password'"></i>
               <i class="x-icondengluyebukejian" v-else-if="typeChange === 'text'"></i>
         </span>
         <span class="x-after" >
              <slot name="after"></slot>
         </span>

         <span class="x-word-limit" v-if="wordLimit && (maxlength >= 0)">
                {{inputLength}}/{{maxlength}}
         </span>
    </div>
</template>

<script>
    export default {
        name:'XInput',
        data () {
           return{
               v:'',
               hover:false,
               typeChange:'',
               inputLength:0
           }
        },
         props:{
             type:{
                 type:String,
                 default:'text'
             },
            placeholder :{
                type : [String,Number],
                default:'请输入...'
            },
            value:[String,Number],
            size:String,
            clearable:{
                type : Boolean,
                default: false
            },
            width:String,
            disabled : {
                type : Boolean,
                default : false
            },
            maxlength:[Number,String],
            wordLimit:{
                type : Boolean,
                default: false
            }
        },
        computed:{
            getCurrentValue(){
                return this.value               
            }
        },
        methods: {
            handleInput(event){
                this.$emit('input',event.target.value)
            },
            handleChange(event){
                this.$emit('change',event.target.value)
            },
            handleBlur(event){
                this.$emit('blur',event)
            },
            handleFocus(event){
                this.$emit('focus',event)
            },
            onClear(){
                this.v = '';
                this.$emit('clear')
            },
            onShowPwd(){
               this.typeChange = this.typeChange === 'password'?'text':'password'
            },
            onEnter(){
               this.hover = true
            },
            onLeave(){
                this.hover = false
            }
        },
        created(){
            this.typeChange = this.type
        },
        mounted(){
            let count = this.$refs.slots.childElementCount
            if(count > 0){
                this.$refs.input.style.paddingLeft = '20px'
            }
        },
        watch:{
            value:function(){
                this.v = this.value
                if(this.wordLimit && (this.maxlength >= 0)){
                    this.inputLength = this.$refs.input.value.length
                }
            }
        }
    }
</script>

<style scoped>
    
</style>