import Vue from 'vue'
import App from './App'
import axios from 'axios'
// import GlsxVueComponents from 'glsx-vue-components'
import GlsxVueComponents from './index'
import { Code } from '@/components/components'
import router from './router'
import 'glsx-vue-components/dist/glsx-vue-components.css'
import '@/css/common.css'
import '@/js/date.js'
Vue.use(GlsxVueComponents)
Vue.component('Code', Code)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
