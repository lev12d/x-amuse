#### 基础用法  

通过`type`属性指定弹出提示的类型。

```html
/*vue*/

<template>
  <div>
          <x-alert>这是一个弹出框</x-alert> 
          <x-alert type="success">成功的弹出框</x-alert> 
          <x-alert type="warning">警告的弹出框</x-alert> 
          <x-alert type="error">错误的弹出框</x-alert>
  </div>
</template>

<script>
   export default { }
</script>

```
<br>

#### 可关闭的弹出提示
通过指定`closeable`属性为`true`,可以实现弹出提示的关闭。
<br>

 ```html
/*vue*/

<template>
  <div>
         <x-alert :closeable="true">这是一个弹出框</x-alert> 
         <x-alert type="success" :closeable="true">成功的弹出框</x-alert> 
         <x-alert type="warning" :closeable="true">警告的弹出框</x-alert> 
         <x-alert type="error" :closeable="true">错误的弹出框</x-alert>
  </div>
</template>

<script>
   export default { }
</script>

<style scoped>
    .x-alert{margin:8px 0}
</style>
```
<br>

#### 自定义关闭提示

通过`closeText`属性传入一个字符串,该字符串为自定义的信息。

 ```html
/*vue*/

<template>
  <div>
         
         <x-alert close-text="知道了">这是一个弹出框</x-alert> 
         <x-alert type="success" close-text="退出">成功的弹出框</x-alert> 
         <x-alert type="warning" close-text="确定">警告的弹出框</x-alert> 
         <x-alert type="error" close-text="不再提示">错误的弹出框</x-alert>
  </div>
</template>

<script>
   export default { }
</script>
```
<br>

#### 带有图标的弹出提示

通过提供一个名为`showIcon`属性来显示图标，该属性的类型为`Boolean`值。

 ```html
/*vue*/

<template>
  <div>
         
          <x-alert :closeable="true" :show-icon="true">这是一个弹出框</x-alert> 
          <x-alert type="success" :closeable="true" :show-icon="true">成功的弹出框</x-alert> 
          <x-alert type="warning" :closeable="true" :show-icon="true">警告的弹出框</x-alert> 
          <x-alert type="error" closeable  :show-icon="true" >错误的弹出框</x-alert>
  </div>
</template>

<script>
   export default { }
</script>
```
<br>

#### 有辅助性介绍的弹框

使用具名插槽指定`slot='desc'`来传入描述性的内容。

```html
/*vue*/

<template>
  <div>
         
        <x-alert :closeable="true" show-icon type="success">这是一个弹出框 
             <div slot="desc">这是一个弹出框这是一个弹出框这是一个弹出框这是一个弹出框</div>
         </x-alert> 
  </div>
</template>

<script>
   export default { }
</script>
```

#### API

<br>

###### Attributes

<br>

| 属性 | 说明 | 类型 | 可选值 | 默认 |
|--|--|--|--|--|
| type | 弹出提示的类型 | String | primary/success/<br>/warning/error | primary |
| closeable |  能否关闭 | Boolean/String | true/false | false |
| close-text | 自定义关闭的信息  | String | 无 | 无 |
| show-icon |  是否显示图标 | Boolean/String | true/false | false |


###### Events

<br>

| 事件名 | 说明 | 回调参数 | 
|--|--|--|
| onClose |  关闭后触发 | 无 |