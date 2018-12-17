<template>
  <div class='box'>
    <h2>Movable 可拖拽组件</h2>
    <p>可移动的视图容器，在页面中可以拖拽滑动。</p>
    <h3>基础用法</h3>
    <Code>
        <template slot='source'>
          <gl-movable-area v-model="test">
            <gl-movable-view  
              v-for="(i, index) in test" 
              :key='index'
              :drag-style='dragStyle'
              :target-style='targetStyle'
              >
              <div>{{i.label}}</div>
              <p>{{i.text}}</p>
            </gl-movable-view>
          </gl-movable-area>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
        </template>
    </Code>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Movable',
    data () {
      return {
        test: [
          {text: '第一', label: '这是第一个'},
          {text: '第二', label: '这是第二个'},
          {text: '第三', label: '这是第三个'},
          {text: '第四', label: '这是第四个'},
          {text: '第五', label: '这是第五个'}
        ],
        dragStyle: {
          boxShadow: '0 0 10px #000',
          fontWeight: 700
        },
        targetStyle: {
          boxShadow: '0 0 10px rgba(255,0,0,0.8)'
        }
      }
    }
  }
</script>

<style scoped>

</style>