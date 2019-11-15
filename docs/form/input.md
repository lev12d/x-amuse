#### 基础用法

<br>

* 通过`v-model`双向绑定数据。输入框的默认宽度是`100%`,如果需指定宽度输入框的宽度可以用一个块级元素包裹，并设置该块级的元素的宽度即可；或者直接使用`width`属性指定输入框的宽度。
* 如果需要自定义输入提示，可通过`placeholder`属性传入一个字符串。

<br>

```html
/*vue*/

<template>
    <div> 
         <div class = "demo1">
         <x-input v-model = "value0" width="300px" @input="onInput"></x-input>
         </div>
         <div class = "demo1">
           <x-input v-model = "value" width="300px" @change="onChange" placeholder="自定义内容">             
           </x-input>
        </div>
    </div>
</template>

<script>
 export default {
    data: ()=> {
     return {
            value0:'',
            value:''
          }
        },
        methods : {
            onInput(val){
               console.log(val)
            },
            onChange(val){
               console.log(val)
            }
        }
    }
</script>
<style scoped>
    .demo1{margin-bottom:10px}
</style>
```
<br>

#### 不同尺寸的输入框

通过`size`属性指定不同尺寸的输入框，默认是中等。`large`为大的输入框,`small`为小的输入框。

```html
/*vue*/

<template>
     <div>
             <div class="demo2">
                  <x-input v-model = "value1" width="300px" size="large" ></x-input>
             </div>
             <div class="demo2">
                  <x-input v-model = "value2" width="300px" ></x-input>
             </div>
             <div class="demo2">
                 <x-input v-model = "value3" width="300px" size="small"></x-input>
             </div>
     </div>
</template>

<script>
export default {
  data: ()=> {
     return {
         value1:'',
         value2:'',
         value3:''
            }
        }
    }
</script>

<style scoped>
    .demo2{margin-bottom:10px}
</style>
```
<br>

#### 可清空的输入框

通过指定`clearable`属性可清空输入框中的内容。

```html
/*vue*/

<template>
    <div>
         <x-input v-model = "value4" width="300px" clearable></x-input>
    </div>
</template>

<script>
  export default {
    data: ()=> {
     return {
                value4:''
            }
        }
    }
</script>
```

<br>

#### 不同类型的输入框

通过指定`type`属性实现不同的输入框,默认为`text`;目前支持的属性有`text`丶`password`。


```html
/*vue*/

<template>
      <div>
          <x-input type="password" v-model="value5" width="300px"></x-input>
     </div>
</template>

<script>
    export default {
        data: ()=> {
            return {
                value5:''
            }
        }
    }
</script>
```
<br>

#### 自定义前后图标

通过`slot`插槽来使用，`before`输入框头部的自定义图标；`after`为输入框尾部自定义的图标。

```html
/*vue*/

<template>
    <div> 
          <div class="demo3">
          <x-input v-model="value6"  width="300px">
                   <span slot="before" > <i class="x-iconmine"  ></i> </span>
          </x-input> 
          </div>

           <div class="demo3">
           <x-input v-model="value7"  >
                   <span slot="after"> <i class="x-iconsearch" ></i> </span>
          </x-input> 
          </div>
    </div>
</template>

<script>
export default {
 data: ()=> {
        return {
          value6:'',
          value7:''
        }
      }
    }
</script>

<style scoped>
    .demo3{margin-bottom:10px}
</style>
```

<br>

#### API

<br>

###### Attributes

<br>

| 属性 | 说明 | 类型 | 可选值 | 默认 |
|--|--|--|--|--|
| value | 输入的值，支持v-model双向数据绑定 | String/Number | - | - |
| type | 输入框的属性  | String | text/password | text |
| size |  输入框的尺寸 | String | large/small | normal |
| clearable | 是否可清空  | Boolean | true/false | false |
| placeholder |  占位提示文本内容 | String | - | 请输入... |


###### Slots

<br>

| 名称 | 说明 |
|--|--|
| before | 输入框头部slot | 
| after | 输入框尾部slot | 


###### Events

<br>

| 事件名 | 说明 | 回调参数 | 
|--|--|--|
| focus |  鼠标聚焦时触发 | - |
| blur |  鼠标失焦时触发 | - |
| click |  点击头尾部图标时触发 | - |
| change |  输入内容改变时触发 | 与原生一致 |
| input |  输入内容时触发 | 与原生一致 |
| clear |  清空输入框内容时触发 | - |