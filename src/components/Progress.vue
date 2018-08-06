<template>
  <div class='box progress'>
    <h2>Progress 进度条</h2>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>
    <h3>线形进度条 — 百分比外显</h3>
    <Code>
        <template slot='source'>
            <gl-progress :percentage="0"></gl-progress>
            <gl-progress :percentage="70"></gl-progress>
            <gl-progress :percentage="80" color="#8e71c7"></gl-progress>
            <gl-progress :percentage="100" status="success"></gl-progress>
            <gl-progress :percentage="50" status="exception"></gl-progress>
        </template>
        <template slot='description'>
            <p>Progress 组件设置<code>percentage</code>属性即可，表示进度条对应的百分比，<strong>必填</strong>，必须在 0-100。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"70"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"80"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#8e71c7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"exception"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>线形进度条 — 百分比内显</h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <Code>
        <template slot='source'>
            <gl-progress :text-inside="true" :stroke-width="18" :percentage="0"></gl-progress>
            <gl-progress :text-inside="true" :stroke-width="18" :percentage="70"></gl-progress>
            <gl-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></gl-progress>
            <gl-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></gl-progress>
            <gl-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></gl-progress>
        </template>
        <template slot='description'>
            <p>Progress 组件可通过 <code>stroke-width</code> 属性更改进度条的高度，并可通过 <code>text-inside</code> 属性来将进度条描述置于进度条内部。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"70"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"80"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"rgba(142, 113, 199, 0.7)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"exception"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>环形进度条</h3>
    <Code>
        <template slot='source'>
            <gl-progress type="circle" :percentage="0"></gl-progress>
            <gl-progress type="circle" :percentage="25"></gl-progress>
            <gl-progress type="circle" :percentage="80" color="#8e71c7"></gl-progress>
            <gl-progress type="circle" :percentage="100" status="success"></gl-progress>
            <gl-progress type="circle" :percentage="50" status="exception"></gl-progress>
        </template>
        <template slot='description'>
            <p>Progress 组件可通过 <code>type</code> 属性来指定使用环形进度条，在环形进度条中，还可以通过 <code>width</code> 属性来设置其大小。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"25"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"80"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#8e71c7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"exception"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-progress</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
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
                   parameter: 'percentage',
                   state: '百分比（必填）',
                   mold: 'number',
                   choose: '0-100',
                   default: '0'
                },
                {
                   parameter: 'type',
                   state: '进度条类型',
                   mold: 'string',
                   choose: 'line/circle',
                   default: 'line'
                },
                {
                   parameter: 'stroke-width',
                   state: '进度条的宽度，单位 px',
                   mold: 'number',
                   choose: '—',
                   default: '6'
                },
                {
                   parameter: 'text-inside',
                   state: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'status',
                   state: '进度条当前状态',
                   mold: 'string',
                   choose: 'success/exception',
                   default: '—'
                },
                {
                   parameter: 'color',
                   state: '进度条背景色（会覆盖 status 状态颜色）',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'width',
                   state: '环形进度条画布宽度（只在 type=circle 时可用）',
                   mold: 'number',
                   choose: '—',
                   default: '126'
                },
                {
                   parameter: 'show-text',
                   state: '是否显示进度条文字内容',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true'
                },
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