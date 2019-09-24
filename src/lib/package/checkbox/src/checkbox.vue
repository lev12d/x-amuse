<template>
    <div class="x-checkbox">
         <label >
            <span class="x-checkbox-wrap" :class="checkedValue?'is-checked':''"> <input @change="handleChange" type="checkbox" :checked="checkedValue" class="x-checkbox-input"></span>
            <span class="x-checbox-text" :class="checkedValue?'is-checked':''"> <slot></slot> </span>
         </label>
    </div>
</template>

<script>
    export default {
        name:'XCheckbox',
        data () {
            return{
                checkedValue:null
            }
        },
        props:{
            value:[Boolean,String,Number]
        },
        methods: {
            handleChange(event){
                
                this.$emit('input',event.target.checked)
                this.$emit('change',event)
            }
        },
        created(){
            this.checkedValue = this.value;
        },
        watch:{
           value(){
              this.checkedValue = this.value;
           } 
        }
    }
</script>

