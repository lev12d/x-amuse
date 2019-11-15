#### 基础用法

<br>

* 直接通过`v-model`双向绑定数据，控制对话框的显示或隐藏。
* 通过`title`属性指定对话框头部标题。

<br>

```html
/*vue*/

<template>
  <div>
    <x-button @click="onClick">弹出一个对话框</x-button>
    <x-popup v-model="popupVal" title="提示">
          <span>这是一个对话框</span>
          <div slot="footer">
                   <x-button @click="popupVal=false">取消</x-button>
                   <x-button type="primary" @click="popupVal=false">确认</x-button>
          </div>
    </x-popup>
  </div>
</template>

<script>
   export default {
       data(){
           return{
              popupVal:false
           }
       },
       methods : {
          onClick(){
              this.popupVal = true
          }
       }
   }
</script>
```