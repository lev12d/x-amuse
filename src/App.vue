<template>
  <div id="app">
      <x-button>Default</x-button> 
      <x-button type="primary" disabled>Primary</x-button> 
      <x-button type="info" >Info</x-button> 
      <x-button type="success" >Success</x-button> 
       <x-button type="success" icon="x-iconaddition_fill">Success</x-button> 
      <x-button type="warning" >Warning</x-button> 
      <x-button type="error">Error</x-button> 
      <x-button type="error" round>Error</x-button> 
      <x-button type="primary" circle icon="x-iconaddition"></x-button> 
      <x-button type="error" long>长的按钮</x-button> 
      <x-button type="warning"  :styles="{width:'200px',height:'100px',background:'red'}">自定义样式</x-button> 
         
          <h3>不同尺寸的按钮</h3>
          <x-button>默认</x-button>
          <x-button size="large">大按钮</x-button>
          <x-button size="small">小按钮</x-button>
 
          <h3>按钮组</h3>
          <x-button-group>
               <x-button type="primary">按钮1</x-button>
               <x-button type="primary">按钮2</x-button>
               <x-button type="primary">按钮3</x-button>
          </x-button-group>

         <x-icon name="x-iconaddpeople"></x-icon>
         <x-button  loading type="primary"></x-button>
     
         <h3>弹出提示</h3>
          <x-alert>这是一个弹出框</x-alert> <br>
          <x-alert type="success">成功的弹出框</x-alert> <br>
          <x-alert type="warning">警告的弹出框</x-alert> <br>
          <x-alert type="error">错误的弹出框</x-alert>
      
         <h3>带关闭按钮的弹出提示</h3>  
          <x-alert :closeable="true">这是一个弹出框</x-alert> <br>
          <x-alert type="success" :closeable="true">成功的弹出框</x-alert> <br>
          <x-alert type="warning" :closeable="true">警告的弹出框</x-alert> <br>
           <h5>自定义关闭</h5>
          <x-alert type="error"  close-text="知道了" >错误的弹出框</x-alert>
          
          <h3>带图标的弹框</h3>
           <x-alert :closeable="true" show-icon>这是一个弹出框</x-alert> <br>
          <x-alert type="success" :closeable="true" show-icon>成功的弹出框</x-alert> <br>
          <x-alert type="warning" :closeable="true" show-icon>警告的弹出框</x-alert> <br>
          <x-alert type="error" closeable  show-icon >错误的弹出框</x-alert>
          <h3>带有辅助性介绍的弹框</h3>
           <x-alert :closeable="true" show-icon type="success">这是一个弹出框 
             <div slot="desc">这是一个弹出框这是一个弹出框这是一个弹出框这是一个弹出框</div>
           </x-alert> <br>
          <!-- <x-alert type="success" :closeable="true" show-icon>成功的弹出框</x-alert> <br>
          <x-alert type="warning" :closeable="true" show-icon>警告的弹出框</x-alert> <br>
          <x-alert type="error" closeable  show-icon >错误的弹出框</x-alert> -->

          <h3>提示信息弹出层</h3>
          <x-button type="warning" @click="clk">点击弹出</x-button>

          <h3>抽屉Drawer</h3>
           <x-button @click="drawer">从右边打开drawer</x-button>
           <x-button @click="drawer2">从左边打开drawer</x-button>

           <x-drawer v-model="flag" title="右边头部" closeable>
              <p>可林深见鹿容易，海蓝见鲸不难，可梦醒时见你，如同林深见鲸，深海见鹿一般，林深时雾起，</p>
              <p>海蓝时浪涌，梦醒时夜续，不见鹿，不见鲸，也不见你，但终究，鹿踏雾而来，鲸随浪而涌，你没回头，我也没挽留</p>
           </x-drawer>
           <x-drawer v-model="flag2" placement="left" :title="str" closeable width="50%"></x-drawer>

           <h3>switch开关</h3>
           <x-switch v-model="switchFlag" @onChange="handleChange"></x-switch>
           <h4>不同尺寸的开关switch</h4>
           <x-switch size="large"></x-switch>
           <x-switch size="small"></x-switch>
           <h4>自定义内容的switch开关</h4>
            <x-switch>
              <div slot="open">开</div>
              <div slot="close">关</div>
           </x-switch>
           
           <x-switch size="large">
              <span slot="open">开启</span>
              <span slot="close">关闭</span>
           </x-switch>
           <h4>被禁用的switch开关</h4>
            <x-switch disabled></x-switch>
           <h4>自定义背景颜色的switch开关</h4>
            <x-switch open-bg-color="red" close-bg-color="yellow"></x-switch>

            <h3>checkbox多选框</h3>
            <x-checkbox v-model="checked" @change="aaa">选项</x-checkbox>

            <h3>popup弹出层</h3>
            <x-popup v-model="popupVal">
               <div slot="footer">
                   <x-button @click="popupVal=false">取消</x-button>
                   <x-button type="primary" @click="popupVal=false">确认</x-button>
               </div>
            </x-popup>
            <x-button @click="handleCk">弹出层</x-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      flag:false,
      flag2:false,
      str:'左边头部',
      switchFlag:false,
      checked:false,
      popupVal:false
    }
  },
  methods:{
    clk(){
       this.$tips({
         message:'这是一段警告信息',
         type:'warning',
      
       })
    },
    aa(){
      alert('closeds')
    },
    drawer(){
      this.flag = !this.flag
    },
    drawer2(){
      this.flag2 = !this.flag2
    },
    handleChange(status){
      this.$tips({
        message:'现在的状态为：'+status,
        type:'error'
      })
    },
    aaa(evt){
      // console.log(evt)
       console.log(this.checked)
    },
    handleCk(){
      this.popupVal = true
    },

  },
  watch:{
    popupVal(){
      console.log(this.popupVal)
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
