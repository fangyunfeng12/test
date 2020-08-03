import Vue from 'vue'
import App from './App.vue'

//引入svg组件
import SvgIcon from '@/components/SvgIcon.vue'    

//全局注册icon-svg
Vue.component('SvgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
