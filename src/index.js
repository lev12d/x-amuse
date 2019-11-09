import './assets/css/styles/index.css'
import XButton from './lib/package/button/index.js'
import XButtonGroup from './lib/package/button-group/index.js'
import XIcon from './lib/package/icon/index.js'
import XAlert from './lib/package/alert/index.js'
import XTipsMessage from './lib/package/tips-message/index.js'
import XDrawer from './lib/package/drawer/index.js'
import XSwitch from './lib/package/switch/index.js'
import XCheckbox from './lib/package/checkbox/index.js'
import XPopup from './lib/package/popup/index.js'
import XTooltip from './lib/package/tooltip/index.js'

const components = [
    XButton,
    XButtonGroup,
    XIcon,
    XAlert,
    XDrawer,
    XSwitch,
    XCheckbox,
    XPopup,
    XTooltip
]

 const install = function(Vue, options = {}){
    components.forEach((ele)=>{
        Vue.component(ele.name,ele)
     })

     Vue.prototype.$tips = XTipsMessage;
 }


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  export default {
      version:'0.0.1',
      install,
      XButton,
      XButtonGroup,
      XIcon,
      XAlert,
      XTipsMessage,
      XDrawer,
      XSwitch,
      XCheckbox,
      XPopup,
      XTooltip
  }