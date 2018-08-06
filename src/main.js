import Vue from 'vue'
import App from './App'
import GlsxVueComponents from './index'
import VueComponents from './components.js'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/css/common.css'
Vue.use(GlsxVueComponents)
Vue.use(VueComponents)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
