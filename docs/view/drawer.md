#### 基础用法

<br>

* 可以通过`value`属性来控制抽屉是否打开,支持与`v-model`双向绑定。
* 添加`title`属性给抽屉添加标题。
* 在抽屉关闭后可调用`close`事件。

<br>

```html
/*vue*/

<template>
  <div>
    <x-button @click="drawer">打开drawer</x-button>

    <x-drawer v-model="value" title="这是头部标题" @close="onClose">
              <p>可林深见鹿容易，海蓝见鲸不难，可梦醒时见你，如同林深见鲸，深海见鹿一般，林深时雾起，</p>
              <p>海蓝时浪涌，梦醒时夜续，不见鹿，不见鲸，也不见你，但终究，鹿踏雾而来，鲸随浪而涌，你没回头，我也没挽留</p>
    </x-drawer>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               value:false,
           }
       },
       methods : {
          drawer(){
              this.value = !this.value
          },
          onClose(){
              //do something
          }
       }
   }
</script>
```
<br>

####  不同方向的抽屉

通过`placement`属性可以控制抽屉的出现位置。目前只支持左右两边。默认是从右边出现。

```html
/*vue*/

<template>
  <div>
    <x-button @click="drawerRight">从右边打开drawer</x-button>
    <x-button @click="drawerLeft">从左边打开drawer</x-button>

    <x-drawer v-model="value1" title="右边头部" >
              <p>可林深见鹿容易，海蓝见鲸不难，可梦醒时见你，如同林深见鲸，深海见鹿一般，林深时雾起，</p>
              <p>海蓝时浪涌，梦醒时夜续，不见鹿，不见鲸，也不见你，但终究，鹿踏雾而来，鲸随浪而涌，你没回头，我也没挽留</p>
    </x-drawer>
    <x-drawer v-model="value2" title="左边头部" placement="left">
              <p>可林深见鹿容易，海蓝见鲸不难，可梦醒时见你，如同林深见鲸，深海见鹿一般，林深时雾起，</p>
              <p>海蓝时浪涌，梦醒时夜续，不见鹿，不见鲸，也不见你，但终究，鹿踏雾而来，鲸随浪而涌，你没回头，我也没挽留</p>
    </x-drawer>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               value1:false,
               value2:false
           }
       },
       methods : {
          drawerRight(){
              this.value1 = !this.value1 
          },
          drawerLeft(){
              this.value2 = !this.value2
          }
       }
   }
</script>
```
<br>

#### 可关闭的抽屉

点击遮罩层可以关闭抽屉，如需添加按钮关闭可以添加`closeable`属性。

```html
/*vue*/

<template>
  <div>
    <x-button @click="drawer">打开drawer</x-button>

    <x-drawer v-model="value" title="这是头部标题" :closeable="true" placement="left">
              <p>可林深见鹿容易，海蓝见鲸不难，可梦醒时见你，如同林深见鲸，深海见鹿一般，林深时雾起，</p>
              <p>海蓝时浪涌，梦醒时夜续，不见鹿，不见鲸，也不见你，但终究，鹿踏雾而来，鲸随浪而涌，你没回头，我也没挽留</p>
    </x-drawer>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               value:false,
           }
       },
       methods : {
          drawer(){
              this.value = !this.value
          },
       }
   }
</script>
```
<br>

#### 改变抽屉默认的宽度

通过`width`属性实现抽屉宽度的改变，该属性接收一个百分比的字符串。例如：`width=50%`

```html
/*vue*/

<template>
  <div>
    <x-button @click="drawer">打开drawer</x-button>
    <x-drawer v-model="value" title="这是头部标题" :closeable="true" placement="left" width="50%">
              <p>可林深见鹿容易，海蓝见鲸不难，可梦醒时见你，如同林深见鲸，深海见鹿一般，林深时雾起，</p>
              <p>海蓝时浪涌，梦醒时夜续，不见鹿，不见鲸，也不见你，但终究，鹿踏雾而来，鲸随浪而涌，你没回头，我也没挽留</p>
    </x-drawer>
  </div>
</template>

<script>
   export default {
       data(){
           return{
               value:false,
           }
       },
       methods : {
          drawer(){
              this.value = !this.value
          },
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
| value | 抽屉的开关值，支持v-model双向数据绑定 | Boolean | true/false | false |
| title |  抽屉头部标题 | String | - | - |
| closeable | 是否启用关闭按钮  | Boolean | true/false | false |
| placement | 抽屉出现的位置 | String | right/left | right |
|  width |  抽屉的宽度 | String | - | 260px |

###### Events

<br>

| 事件名 | 说明 | 回调参数 | 
|--|--|--|
| close |  关闭后触发 | - |