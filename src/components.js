import {
    Code
  } from '@/components/components'
  const components = [
    Code
  ]
  const VueComponents = {}
 VueComponents.install = Vue => {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
  if (typeof window !== 'undefined' && window.Vue) {
    VueComponents.install(window.Vue)
  }
  export default VueComponents
  