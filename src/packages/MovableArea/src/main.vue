<template>
  <div
    @mouseover="status = true"
    @mouseout="status = false"
    ref="movableBox">
    <slot></slot>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'GlMovableArea',
    provide() {
      return {
        glMovableArea: this
      }
    },
    props: {
      value: Array
    },
    data () {
      return {
        status: false
      }
    }
  }
</script>

<style scoped>
</style>
