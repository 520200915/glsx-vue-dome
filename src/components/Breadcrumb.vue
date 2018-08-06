<template>
  <div class='box'>
    <h2>Breadcrumb 面包屑</h2>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法。</p>
    <Code>
        <template slot='source'>
            <gl-breadcrumb separator="/">
                <gl-breadcrumb-item :to="{ path: '/' }">首页</gl-breadcrumb-item>
                <gl-breadcrumb-item><a href="/">活动管理</a></gl-breadcrumb-item>
                <gl-breadcrumb-item>活动列表</gl-breadcrumb-item>
                <gl-breadcrumb-item>活动详情</gl-breadcrumb-item>
            </gl-breadcrumb>
        </template>
        <template slot='description'>
            <p>在<code>gl-breadcrumb</code>中使用<code>gl-breadcrumb-item</code>标签表示从首页开始的每一级。提供了一个<code>separator</code>属性，在<code>gl-breadcrumb</code>标签中设置它来决定分隔符，它只能是字符串，默认为斜杠<code>/</code>。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb</span> <span class="hljs-attr">separator</span>=<span class="hljs-string">"/"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: '/' }"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/"</span>&gt;</span>活动管理<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>活动列表<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>活动详情<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>图标分隔符</h3>
    <Code>
        <template slot='source'>
            <gl-breadcrumb separator-class="el-icon-arrow-right">
            <gl-breadcrumb-item :to="{ path: '/' }">首页</gl-breadcrumb-item>
            <gl-breadcrumb-item>活动管理</gl-breadcrumb-item>
            <gl-breadcrumb-item>活动列表</gl-breadcrumb-item>
            <gl-breadcrumb-item>活动详情</gl-breadcrumb-item>
            </gl-breadcrumb>
        </template>
        <template slot='description'>
            <p>通过设置 <code>separator-class</code> 可使用相应的 <code>iconfont</code> 作为分隔符，注意这将使 <code>separator</code> 设置失效</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb</span> <span class="hljs-attr">separator-class</span>=<span class="hljs-string">"el-icon-arrow-right"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: '/' }"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>活动管理<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>活动列表<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>活动详情<span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb-item</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-breadcrumb</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Breadcrumb Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Breadcrumb Item Attributes</h3>
    <gl-table :table='Item'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
          table: {
              data: [
                {
                   parameter: 'separator',
                   state: '分隔符',
                   mold: 'string',
                   choose: '—',
                   default: "斜杠'/'"
                },
                {
                   parameter: 'separator-class',
                   state: '图标分隔符 class',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                }
              ],
              column: [
                {
                   label: '参数',
                   prop: 'parameter'
                },
                {
                   label: '说明',
                   prop: 'state'
                },
                {
                   label: '类型',
                   prop: 'mold'
                },
                {
                   label: '可选值',
                   prop: 'choose'
                },
                {
                   label: '默认值',
                   prop: 'default'
                 }
              ]
          },
          Item: {
              data: [
                {
                   parameter: 'to',
                   state: '路由跳转对象，同 vue-router 的 to',
                   mold: 'string/object',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: '参数replace',
                   state: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false'
                }
              ],
              column: [
                {
                   label: '参数',
                   prop: 'parameter'
                },
                {
                   label: '说明',
                   prop: 'state'
                },
                {
                   label: '类型',
                   prop: 'mold'
                },
                {
                   label: '可选值',
                   prop: 'choose'
                },
                {
                   label: '默认值',
                   prop: 'default'
                 }
              ]
          }
      }
    }
  }
</script>

<style scoped>

</style>