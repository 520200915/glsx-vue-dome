<template>
  <div 
    :class='className'
    @dragstart="dragstart"
    @drop='drop'
    @dragleave.stop="dragleave"
    @dragend ="dragend"
    @dragover="dragover"
    @dragenter.stop="dragenter"
    ref="view"
    draggable="true"
    >
      <slot></slot>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'GlMovableView',
    inject: ['glMovableArea'],
    props: {
      viewClass: String,
      dragStyle: {
        type: Object,
        default: _ => {
          return  {
            border: '5px solid #000'
          }
        }
      },
      targetStyle: {
        type: Object,
        default: _ => {
          return {
            boxShadow: '0 0 8px rgba(30, 144, 255, 0.8)'
          }
        }
      }
    },
    data () {
      return {
        viewKey: 0
      }
    },
    mounted() {
      this.glMovableArea.$slots.default.forEach(e => {
        if(e.elm === this.$refs.view) this.viewKey = e.key
      })
    },
    computed: {
      className() {
        return this.viewClass || 'view'
      }
    },
    methods: {
      // 控件开始被拖拽时触发的事件
      dragstart (even) {
        this._style_(even, this.dragStyle, true)        
        even.dataTransfer.setData('index', this.viewKey)
      },
      // 当控件被“释放”到一个有效的释放目标位置时触发，在这个方法中处理数据
      drop(even) {
        even.preventDefault()
        if(this.glMovableArea.status === true) {
          this._style_(even, this.dragStyle, false)
          let temp = this.glMovableArea.value[this.viewKey]
          let drag = this.glMovableArea.value[even.dataTransfer.getData('index')]
          this.$set(this.glMovableArea.value, this.viewKey, drag)
          this.$set(this.glMovableArea.value, even.dataTransfer.getData('index'), temp)
        }
          
      },
      dragend(even) {
        this._style_(even, this.targetStyle, false)
        this._style_(even, this.dragStyle, false)
      },
      // a拖到b，离开b的时候触发，可以用于监听消除移入效果的时机
      dragleave(even) {
        this._style_(even, this.targetStyle, false)
      },
      // 规定当前控件可以接收拖拽的组件的方法，一般在此方法中阻止冒泡
      dragover(even) {
        even.preventDefault()
      },
      // 拖动后鼠标进入另一个可接受区域时触发，通过它可以实现移入效果
      dragenter(even) {
        this._style_(even, this.targetStyle, true)
      },
      _style_(even, object, status) {
        if(this.glMovableArea.status === true) {
          for (const key in object) {
            even.target.style[key] = status === true ? object[key] : ''
          }
        }
      }
    }
  }
</script>

<style scoped>
  .view{
    width: 100%;
    padding: 15px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    margin-bottom: 10px;
    background: #fff;
    cursor: move;
    -webkit-user-select: none;
  }
</style>