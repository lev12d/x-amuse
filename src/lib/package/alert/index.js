
import XAlert from './src/alert.vue'

XAlert.install = function(Vue){
   Vue.component(XAlert.name,XAlert)
}
export default XAlert;