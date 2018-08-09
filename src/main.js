import Vue from 'vue'
import App from './App'
import XLSX from 'xlsx'
import axios from 'axios'
import GlsxVueComponents from './index'
import VueComponents from './components.js'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/css/common.css'
import date from '@/js/date.js'
Vue.use(GlsxVueComponents)
Vue.use(VueComponents)
Vue.use(date)
const outputXlsxFile = (data, wscols, xlsxName) => {
  const ws = XLSX.utils.aoa_to_sheet(data)
  ws['!cols'] = wscols
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, xlsxName)
  XLSX.writeFile(wb, xlsxName + ".xlsx")
}
Vue.prototype.$outputXlsxFile = outputXlsxFile
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
