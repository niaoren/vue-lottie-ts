import Lottie from './lottie.vue'

const install: any = (Vue: any) => {
  if (install.installed) return
  install.installed = true
  Vue.component('Lottie', Lottie)
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

(Lottie as any).install = install

export default Lottie
