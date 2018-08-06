<template>
  <div class='box'>
    <h2>Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基本用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <Code>
        <template slot='source'>
          <gl-alert
            title="成功提示的文案"
            type="success">
          </gl-alert>
          <gl-alert
            title="消息提示的文案"
            type="info">
          </gl-alert>
          <gl-alert
            title="警告提示的文案"
            type="warning">
          </gl-alert>
          <gl-alert
            title="错误提示的文案"
            type="error">
          </gl-alert>
        </template>
        <template slot='description'>
          <p>Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>自定义关闭按钮</h3>
    <p>自定义关闭按钮为文字或其他符号。</p>
    <Code>
        <template slot='source'>
          <gl-alert
            title="不可关闭的 alert"
            type="success"
            :closable="false">
          </gl-alert>
          <gl-alert
            title="自定义 close-text"
            type="info"
            close-text="知道了">
          </gl-alert>
          <gl-alert
            title="设置了回调的 alert"
            type="warning"
            @close="hello">
          </gl-alert>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
        </template>
    </Code>
    <h3>带有 icon</h3>
    <p>表示某种状态时提升可读性。</p>
    <Code>
        <template slot='source'>
          <gl-alert
            title="成功提示的文案"
            type="success"
            show-icon>
          </gl-alert>
          <gl-alert
            title="消息提示的文案"
            type="info"
            show-icon>
          </gl-alert>
          <gl-alert
            title="警告提示的文案"
            type="warning"
            show-icon>
          </gl-alert>
          <gl-alert
            title="错误提示的文案"
            type="error"
            show-icon>
          </gl-alert>
        </template>
        <template slot='description'>
          <p>通过设置<code>show-icon</code>属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>文字居中</h3>
    <p>使用 <code>center</code> 属性让文字水平居中。</p>
    <Code>
        <template slot='source'>
          <gl-alert
            title="成功提示的文案"
            type="success"
            center
            show-icon>
          </gl-alert>
          <gl-alert
            title="消息提示的文案"
            type="info"
            center
            show-icon>
          </gl-alert>
          <gl-alert
            title="警告提示的文案"
            type="warning"
            center
            show-icon>
          </gl-alert>
          <gl-alert
            title="错误提示的文案"
            type="error"
            center
            show-icon>
          </gl-alert>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
                <span class="hljs-attr">center</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
                <span class="hljs-attr">center</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
                <span class="hljs-attr">center</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>
                <span class="hljs-attr">center</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>带有辅助性文字介绍</h3>
    <p>包含标题和内容，解释更详细的警告。</p>
    <Code>
        <template slot='source'>
          <gl-alert
            title="带辅助性文字介绍"
            type="success"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
          </gl-alert>
        </template>
        <template slot='description'>
          <p>除了必填的<code>title</code>属性外，你可以设置<code>description</code>属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"带辅助性文字介绍"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
                <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>带有 icon 和辅助性文字介绍</h3>
    <Code>
        <template slot='source'>
          <gl-alert
            title="成功提示的文案"
            type="success"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </gl-alert>
          <gl-alert
            title="消息提示的文案"
            type="info"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </gl-alert>
          <gl-alert
            title="警告提示的文案"
            type="warning"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </gl-alert>
          <gl-alert
            title="错误提示的文案"
            type="error"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </gl-alert>
        </template>
        <template slot='description'>
          <p>最后，这是一个同时具有 icon 和辅助性文字的样例。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
                <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
                <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
                <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-alert</span>
                <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
                <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>
                <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
                <span class="hljs-attr">show-icon</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-alert</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Events</h3>
    <gl-table :table='close'></gl-table>
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
                 parameter: 'title',
                 state: '标题，必选参数',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'type',
                 state: '主题',
                 mold: 'string',
                 choose: 'success/warning/info/error',
                 default: 'info'
              },
              {
                 parameter: 'description',
                 state: '辅助性文字。也可通过默认 slot 传入',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'closable',
                 state: '是否可关闭',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'center',
                 state: '文字是否居中',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'close-text',
                 state: '关闭按钮自定义文本',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'show-icon',
                 state: '是否显示图标',
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
                 prop: 'state',
                 width: '320'
              },
              {
                 label: '类型',
                 prop: 'mold'
              },
              {
                 label: '可选值',
                 prop: 'choose',
                 width: '200'
              },
              {
                 label: '默认值',
                 prop: 'default'
               }
            ]
        },
        close: {
            data: [
              {
                 parameter: 'close',
                 state: '关闭alert时触发的事件',
                 mold: '—',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: '事件名称',
                 prop: 'parameter'
              },
              {
                 label: '说明',
                 prop: 'state'
              },
              {
                 label: '回调参数',
                 prop: 'mold'
              }
            ]
        }
      }
    },
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

<style scoped>

</style>