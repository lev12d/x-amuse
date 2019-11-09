#### 基础用法
<br>

通过type属性来指定按钮类型  

```html
/*vue*/

<template>
  <div>
    <x-button  >默认按钮</x-button>
    <x-button  type="primary">普通按钮</x-button>
    <x-button  type="warning">警告按钮</x-button>
    <x-button  type="error">危险按钮</x-button>
  </div>
</template>

<script>
   export default {}
</script>
```

通过指定 round(圆角按钮),circle(圆形按钮),long(长的按钮)属性控制按钮的样式。也可以加上icon属性指向一个图标的类名，这样可以给按钮加上图标。

```html
/*vue*/
<template>
  <div>
    <x-button  type="primary" :round="true">普通按钮</x-button>
    <x-button  type="primary" :circle="true" icon="x-iconaddition"></x-button>
    <div class="long"><x-button type="error" :long="true">长的按钮</x-button> </div>
  </div>
</template>

<script>
   export default {}
</script>

<style scoped>
   .long{ margin:10px }
</style>
```  
<br>

#### 禁用状态的按钮  
<br>

```html
/*vue*/

<template>
  <div>
    <x-button  disabled="disabled">默认按钮</x-button>
    <x-button  type="primary" :disabled="true">普通按钮</x-button>
    <x-button  type="warning" :disabled="true">警告按钮</x-button>
    <x-button  type="error" :disabled="true">危险按钮</x-button>
  </div>
</template>

<script>
   export default {}
</script>
```

当然你也可以自定义按钮的样式,通过styles属性传入一个对象用于定义样式。
例如：

```html
/*vue*/

<template>
  <div>
    <x-button  :styles="{width:'130px',height:'60px',background:'red',color:'white'}">自定义样式</x-button> 
  </div>
</template>

<script>
   export default { }
</script>
```
<br>

#### 加载中的按钮

<br>

```html
/*vue*/

<template>
  <div>
    <x-button  :loading="true" type="primary">加载中</x-button> 
  </div>
</template>

<script>
   export default { }
</script>
```
<br>

#### 不同尺寸的按钮

<br>

```html
/*vue*/

<template>
  <div>
          <x-button>默认</x-button>
          <x-button size="large">大按钮</x-button>
          <x-button size="small">小按钮</x-button>
  </div>
</template>

<script>
   export default { }
</script>
```
<br>

#### API

<br>

| 属性 | 说明 | 类型 | 可选值 | 默认 |
|--|--|--|--|--|
| size |  按钮的尺寸 | String | large/small | normal |
| type | 按钮的类型 | String | default/primary/success/<br>/warning/error | default |
| long |  长按钮 | Boolean | true/false | false |
| round | 圆角按钮  | Boolean | true/false | false |
| circle |  圆形按钮 | Boolean | true/false | false |
| disabled |  是否禁用按钮 | Boolean | true/false | false |
| styles |  自定义按钮样式 | Object |  | 无 |
