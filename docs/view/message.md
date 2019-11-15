#### 基础用法

 在`$tips`方法中直接传入一段需要显示的字符串，这是最基础的用法。

```html
/*vue*/

<template>
    <div>
         <x-button type="primary" @click="onClick">打开信息提示</x-button>
    </div>
</template>

<script>
  export default {
      data:() => {
          return {}
      },
      methods : {
          onClick(){
               this.$tips('这是一段信息提示。')
          }
      }
  }
</script>
```
或者使用对象的写法,这种可以指定消息类型。
```html
  /*vue*/
  
  <template>
    <div>
         <x-button type="primary" @click="onClick">打开信息提示</x-button>
    </div>
</template>

<script>
  export default {
      data:() => {
          return {}
      },
      methods : {
          onClick(){
               this.$tips({
                   message:'这是一段普通的信息提示。',
                   type: 'info'
               })
          }
      }
  }
</script>

```
<br>

#### 不同状态下的提示

`$tips`方法中接受一个类型为`Object`的`options`,指定`message`属性为信息提示的内容,`type`属性为信息类型

```html
/*vue*/

<template>
    <div>
         <x-button  @click="onClickSuccess">打开成功时的提示</x-button>
         <x-button  @click="onClickWarning">打开警告时的提示</x-button>
         <x-button  @click="onClickError">打开错误时的提示</x-button>
    </div>
</template>

<script>
  export default {
      data:() => {
          return {}
      },
      methods : {
          onClickSuccess(){
               this.$tips({
                   message:'这是一段成功的信息提示。',
                   type:'success',
               })
          },
           onClickWarning(){
               this.$tips({
                   message:'这是一段警告的信息提示。',
                   type:'warning'
               })
          },
           onClickError(){
               this.$tips({
                   message:'这是一段错误的信息提示。',
                   type:'error'
               })
          }
      }
  }
</script>
```
或者也可以这样写:

```js
 <script>
   export default {
     data:() => {
          return {}
      },
      methods : {
          onClickSuccess(){
               this.$tips.success({
                   message:'这是一段成功的信息提示。'
               })
          },
           onClickWarning(){
               this.$tips.warning({
                   message:'这是一段警告的信息提示。'
               })
          },
           onClickError(){
               this.$tips.error({
                   message:'这是一段错误的信息提示。'
               })
          }
      }
  }
</script>
```
#### 可延时关闭

`$tips`方法中的`duration`属性可以指定该提示多久后自动关闭,单位为`ms`。默认是`2500ms`。

```html
/*vue*/

<template>
    <div>
         <x-button  @click="onClick">显示一个存在5s的提示</x-button>
    </div>
</template>

<script>
  export default {
      data:() => {
          return {}
      },
      methods : {
          onClick(){
               this.$tips({
                   message:'我将会在5s后关闭。',
                   type: 'info',
                   duration: 5000
               })
          }
      }
  }
</script>
```
<br>

#### API

<br>

###### Attributes

<br>

| 属性 | 说明 | 类型 | 可选值 | 默认 |
|--|--|--|--|--|
| type | popup提示信息的类型 | String | info/success/<br>/warning/error | - |
| message | 提示信息 | String | - | - |
| duration | 自动关闭的延时,单位为毫秒  | Number | - | 2500 |

###### Methods

也可以指定方法类型实现，例如：
* `this.$tips.info(options)`
* `this.$tips.success(options)`
* `this.$tips.warning(options)`
* `this.$tips.error(options)`

<br>

###### Events