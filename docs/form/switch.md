#### 基础用法

通过`value`属性来控制开关的值，支持与`v-model`双向绑定。


```html
/*vue*/

<template>
  <div>
    <x-switch :value="status" @onchange="change"></x-switch>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               status:false
           }
       },
       methods : {
           change(status){
              // do something
              this.$tips.info({
                  message:`目前状态为:${status}`
              })
           },
       }
   }
</script>
```
<br>

#### 不同尺寸的switch开关

通过`size`属性来指定开关的大小，默认是正常。

```html
 /*vue*/
 <template>
  <div>
    <x-switch :value="status1"></x-switch>
    <x-switch :value="status2" size="large"></x-switch>
    <x-switch :value="status3" size="small"></x-switch>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               status1:false,
               status2:false,
               status3:false
           }
       },
   }
</script>
```
<br>

#### 自定义开关的内容

通过具名插槽来自定义开关中的内容。

```html
 /*vue*/
 <template>
  <div>
          <x-switch :value="status4">
              <div slot="open">开</div>
              <div slot="close">关</div>
           </x-switch>
           
           <x-switch size="large" :value="status5">
              <span slot="open">开启</span>
              <span slot="close">关闭</span>
           </x-switch>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               status4:false,
               status5:false,
           }
       },
   }
</script>
```

<br>

#### 禁用状态下的开关

通过`disabled`属性，可以禁用开关。

```html
 /*vue*/
 <template>
  <div>
      <x-switch :disabled="true" ></x-switch>
  </div>
</template>

<script>
   export default {
       data(){
           return{  }
       },
   }
</script>
```
<br>

#### 自定义背景颜色的开关

通过`open-bg-color`和`close-bg-color`属性，可以自定义开关的背景颜色。前者为打开状态下的背景颜色，后者为关闭状态下的背景颜色。例如：

```html
 /*vue*/
 <template>
  <div>
      <x-switch open-bg-color="red" close-bg-color="yellow" :value="status6"></x-switch>
  </div>
</template>

<script>
   export default {
       data(){
           return{ 
                status6:true
            }
       },
   }
</script>
```
<br>

###### Attributes

<br>

| 属性 | 说明 | 类型 | 可选值 | 默认 |
|--|--|--|--|--|
| value | 当前开关的值，支持v-model双向数据绑定 | Boolean | true/false | false |
| size |  开关的尺寸 | String | large/small | 正常 |
| disabled | 是否禁用开关  | Boolean | true/false | false |
| open-bg-color |  开关打开状态下的背景颜色 | String | - | - |
| close-bg-color |  开关关闭状态下的背景颜色 | String | - | - |


###### Slots

<br>

| 名称 | 说明 |
|--|--|
| close | 关闭状态时文字内容 | 
| open | 打开状态时文字内容 | 

###### Events

<br>

| 事件名 | 说明 | 回调参数 | 
|--|--|--|
| onchange |  状态发生改变时触发 | 改变后的状态值 |