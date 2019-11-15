#### 基础用法

通过`name`属性传入图标的类名。例如：

```html
 /*vue*/

 <template>
     <div class="icon">
          <x-icon name="x-iconaddpeople" class="icon-demo"></x-icon>
          <x-icon name="x-iconaccessory" class="icon-demo"></x-icon>
          <x-icon name="x-iconactivity" class="icon-demo"></x-icon>
          <x-button type="primary" icon="x-iconsearch" >搜索</x-button>
     </div>
 </template>

 <script>
    export default {
        data:() => {
            return {}
        }
    }
 </script>

 <style scoped>
  .icon{width:50%;display:flex;justify-content:space-around;align-items:center}
  .icon .icon-demo{font-size:26px}
 </style>
```
<br>

#### 内置图标集合

内置的一套图标，也可以使用自己的图标库。
> 注意：在使用前需要在类名前加上`x-icon`前缀。例如要使用`accessory`这个图标，应该写成这样：`x-iconaccessory`

```html
/*vue*/

<template>
     <div>
          <ul  class="list">
               <li v-for="item in icons" :key="item" >
                   <x-icon :name="'x-icon'+item" class="icon-list"></x-icon>
                    <p> {{  item }}</p>
               </li>
          </ul>
     </div>
 </template>

 <script>
    export default {
        data:() => {
            return {
                icons:["accessory", "activity", "activity_fill", "add", "addition_fill", "addition", "addpeople_fill", "addpeople", "addressbook_fill", "addressbook", "barrage_fill", "barrage", "browse_fill", "browse", "brush", "brush_fill", "businesscard_fill", "businesscard", "camera_fill", "camera", "clock", "close", "collection_fill", "collection", "computer", "coordinates_fill", "coordinates", "coupons_fill", "coupons", "createtask_fill", "createtask", "customerservice_fill", "customerservice", "delete_fill", "delete", "document", "document_fill", "dynamic", "editor", "empty", "empty_fill", "enter", "enterinto", "enterinto_fill", "feedback_fill", "feedback", "flag_fill", "flag", "flashlight", "flashlight_fill", "flip", "flip_fill", "fullscreen", "group", "group_fill", "headlines_fill", "headlines", "homepage_fill", "homepage", "integral_fill", "integral", "interactive_fill", "interactive", "keyboard", "label", "label_fill", "like_fill", "like", "live_fill", "live", "lock_fill", "lock", "mail", "mail_fill", "manage_fill", "manage", "message", "message_fill", "mine", "mine_fill", "mobilephone_fill", "mobilephone", "more", "narrow", "offline_fill", "offline", "order_fill", "order", "other", "people_fill", "people", "picture_fill", "picture", "play", "play_fill", "playon_fill", "playon", "praise_fill", "praise", "prompt_fill", "prompt", "qrcode_fill", "qrcode", "redpacket_fill", "redpacket", "refresh", "remind_fill", "remind", "return", "right", "scan", "select_fill", "select", "send", "service_fill", "service", "setup_fill", "setup", "share_fill", "share", "shielding_fill", "shielding", "smallscreen_fill", "smallscreen", "stealth_fill", "stealth", "success_fill", "success", "suspend", "switch", "systemprompt_fill", "systemprompt", "tailor", "task", "task_fill", "tasklist_fill", "tasklist", "text", "time_fill", "time", "translation_fill", "translation", "trash", "trash_fill", "undo", "unlock_fill", "unlock", "video", "video_fill", "warning_fill", "warning", "workbench_fill", "workbench", "search", "search fill",  "shop_fill", "transaction_fill", "packup", "unfold",  "financial_fill", "marketing_fill", "shake", "decoration_fill", "questions", "supply", "tools",  "commodity"]
            }
        }
    }
 </script>
 
 <style scoped>
      .list{display:flex; align-items: stretch;flex-wrap: wrap;flex-direction: row;justify-content: flex-start;}
      .list li{list-style:none;width:19%;text-align:center}
      .list li .icon-list{font-size:35px}
   </style>  
 ```

