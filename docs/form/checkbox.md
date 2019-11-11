#### 基础用法

<br>

```html
/*vue*/
<desc>
    通过v-model双向绑定。值为boolean类型。选中为true,未选中为false
</desc>

<template>
  <div>
    <x-checkbox v-model="checked" @change="onChange">选项</x-checkbox>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               checked:false
           }
       },
       methods : {
           onChange(){
              // do something
           }
       }
   }
</script>
```