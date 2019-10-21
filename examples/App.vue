<template>
  <div id="app">
    <div class="lottie">
      <Lottie v-bind="options" @created="lottieCreated"></Lottie>
      <button @click="stop">stop</button>
      <button @click="play">play</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lottie from '../packages'
// import Lottie from '../lib/vue-lottie-ts.umd.min.js'
const animationData = require('./assets/data.json')
@Component({
  components: {
    Lottie
  }
})
export default class App extends Vue {
  private lottieObj:any

  get options (): {} {
    return {
      animationData,
      loop: true,
      autoPlay: true
    }
  }

  lottieCreated (obj:any):void{
    this.lottieObj = obj
  }

  stop () {
    this.lottieObj.stop()
  }

  play () {
    this.lottieObj.play()
  }
}
</script>

<style scoped>
.lottie {
  width: 10rem;
  height: 10rem;
}
</style>
