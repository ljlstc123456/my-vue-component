import Picker from './picker'
import './weui.min.css'

const version = '1.6.1'
const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(Picker.name, Picker)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  Picker
}
