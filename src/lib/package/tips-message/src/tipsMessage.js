import Vue from 'vue'
import XTipsMessage from './tipsMessage.vue'

let TipsMessageConstruct = Vue.extend(XTipsMessage);
let instance;
let instances = []
let id = 0
const TipsMessage = function (options) {
  let indexId = id++
  // console.log(new TipsMessageConstruct({data:{message:'hh',visible:true}}))

  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,

    }
  } else {
    options = {
      message: options.message,
      type: options.type ? options.type : 'info',
      duration: options.duration ? options.duration : 2500
    }
  }

  instance = new TipsMessageConstruct({
    data: options
  })
  instance.$mount();
  document.body.appendChild(instance.$el);
  // let top = options.top || 25
  // instances.forEach((ele)=>{
  //    top += ele.$el.offsetHeight + 16;
  // })
  // instance.top = top;
  instance.visible = true

  instance.$el.style.zIndex = indexId + 1000
  instances.push(instance)
  instances.forEach((ele, index) => {
    if (index < instances.length - 1) {
      ele.visible = false
    }
  })
  return instance;

}

const typeArr = ['success', 'warning', 'info', 'error'];
typeArr.forEach(type => {
  TipsMessage[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return TipsMessage(options);
  };
});

// TipsMessage.close = function (id, userOnClose) {
//   console.log(instances)
//   let len = instances.length;
//   let index = -1;
//   for (let i = 0; i < len; i++) {
//     if (id === instances[i].id) {
//       index = i;
//       if (typeof userOnClose === 'function') {
//         userOnClose(instances[i]);
//       }
//       instances.splice(i, 1);
//       break;
//     }
//   }
//   if (len <= 1 || index === -1 || index > instances.length - 1) return;
//   const removedHeight = instances[index].$el.offsetHeight;
//   for (let i = index; i < len - 1; i++) {
//     let dom = instances[i].$el;
//     dom.style['top'] =
//       parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
//   }
// };

export default TipsMessage;