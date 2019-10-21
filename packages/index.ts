import Lottie from './lottie.vue'
import Vue from 'vue'

const install: any = (vue: typeof Vue) => {
  if (install.installed) return
  install.installed = true
  vue.component('Lottie', Lottie)
}

if (typeof window !== 'undefined' && (window as any).vue) {
  install((window as any).vue)
}

(Lottie as any).install = install

export default Lottie
