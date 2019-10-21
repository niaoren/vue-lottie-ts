<template>
  <div class="lottie"
    ref="lottie"></div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
const LottieWeb: any = require('lottie-web')

@Component
export default class Lottie extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: true
  }) private loop!: boolean

  @Prop({
    type: Boolean,
    required: false,
    default: true
  }) private autoPlay!: boolean

  @Prop({
    type: String,
    required: false,
    default: 'lottie'
  }) private name!: string

  @Prop({
    type: Object,
    required: true,
    default: () => {
      return {}
    }
  }) private animationData!: {}

  private lottieObj: any = LottieWeb

  private get options (): {} {
    return {
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoPlay,
      name: this.name,
      animationData: this.animationData
    }
  }

  @Emit('created')
  emitCreated (lottie: any) { }

  private mounted () {
    this.lottieObj.loadAnimation(this.options)
    this.emitCreated(this.lottieObj)
  }
}

</script>
<style>
.lottie {
  width: 100%;
  height: 100%;
}
</style>
