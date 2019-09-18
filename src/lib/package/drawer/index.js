import XDrawer from './src/drawer.vue'

XDrawer.install = function(Vue){
    Vue.component(XDrawer.name,XDrawer);
}
export default XDrawer;