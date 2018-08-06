<template>
    <div class="demo-block demo-box demo-layout">
        <div class="source">
            <slot name='source'></slot>
        </div>
        <div class="meta" :style="{height:height}">
            <div class="description" ref="description" v-if="state">
              <slot name="description"></slot>
            </div>
            <div class="highlight">
                <slot name='highlight'></slot>
            </div>
        </div>
        <div class="demo-block-control" @click="showCode">
          <i :class="showIcon"></i>
          <span>{{show}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',
    data() {
        return {
            show: '显示代码',
            showIcon: 'el-icon-caret-bottom',
            height: '0',
            state: true
        }
    },
    methods: {
        showCode() {                     
            if(this.height === 'auto') {
                this.show = '显示代码' 
                this.showIcon = 'el-icon-caret-bottom'
                this.height = '0'
            }else{
                this.show = '隐藏代码'
                this.showIcon = 'el-icon-caret-top'
                this.height = 'auto'
            }
        }
    },
    mounted() {
        this.$refs.description.innerHTML === '' ? this.state = false : this.state = true
    }
}
</script>