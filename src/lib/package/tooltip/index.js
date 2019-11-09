import XTooltip from './src/tooltip.vue'

XTooltip.install = function(Vue){
      Vue.component(XTooltip.name,XTooltip)
}

export default XTooltip;