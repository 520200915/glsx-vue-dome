<template>
  <div class='box'>
    <h2>Tooltip 文字提示</h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <h3>基础用法</h3>
    <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
    <Code>
        <template slot='source'>
            <div class="tool">
                <div class="top">
                    <gl-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                    <gl-button>上左</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                    <gl-button>上边</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                    <gl-button>上右</gl-button>
                    </gl-tooltip>
                </div>
                <div class="left">
                    <gl-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                    <gl-button>左上</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                    <gl-button>左边</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                    <gl-button>左下</gl-button>
                    </gl-tooltip>
                </div>

                <div class="right">
                    <gl-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                    <gl-button>右上</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                    <gl-button>右边</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                    <gl-button>右下</gl-button>
                    </gl-tooltip>
                </div>
                <div class="bottom">
                    <gl-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                    <gl-button>下左</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                    <gl-button>下边</gl-button>
                    </gl-tooltip>
                    <gl-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                    <gl-button>下右</gl-button>
                    </gl-tooltip>
                </div>
            </div>
        </template>
        <template slot='description'>
            <p>使用<code>content</code>属性来决定<code>hover</code>时的提示信息。由<code>placement</code>属性决定展示效果：<code>placement</code>属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；三种对齐位置：<code>start</code>, <code>end</code>，默认为空。如<code>placement="left-end"</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"box"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"top"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Left 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top-start"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>上左<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Center 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>上边<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Right 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top-end"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>上右<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"left"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Left Top 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"left-start"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>左上<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Left Center 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"left"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>左边<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Left Bottom 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"left-end"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>左下<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"right"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Right Top 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"right-start"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>右上<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Right Center 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>右边<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Right Bottom 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"right-end"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>右下<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bottom"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom Left 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom-start"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>下左<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom Center 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>下边<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"dark"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom Right 提示文字"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom-end"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>下右<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>主题</h3>
    <p>Tooltip 组件提供了两个不同的主题：<code>dark</code>和<code>light</code>。</p>
    <Code>
        <template slot='source'>
            <gl-tooltip content="Top center" placement="top">
            <gl-button>Dark</gl-button>
            </gl-tooltip>
            <gl-tooltip content="Bottom center" placement="bottom" effect="light">
            <gl-button>Light</gl-button>
            </gl-tooltip>
        </template>
        <template slot='description'>
            <p>通过设置<code>effect</code>属性来改变主题，默认为<code>dark</code>。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top center"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>Dark<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Bottom center"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"light"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>Light<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>更多 Content</h3>
    <p>展示多行文本或者是设置文本内容的格式</p>
    <Code>
        <template slot='source'>
            <gl-tooltip placement="top">
            <div slot="content">多行信息<br/>第二行信息</div>
            <gl-button>Top center</gl-button>
            </gl-tooltip>
        </template>
        <template slot='description'>
            <p>用具名 slot 分发<code>content</code>，替代<code>tooltip</code>中的<code>content</code>属性。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"content"</span>&gt;</span>多行信息<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>第二行信息<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>Top center<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>高级扩展</h3>
    <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
    <p><code>transition</code> 属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。</p>
    <p>事实上，这是基于 <a href="https://github.com/element-component/vue-popper">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>
    <Code>
        <template slot='source'>
            <gl-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
                <gl-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</gl-button>
            </gl-tooltip>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"disabled"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"点击关闭 tooltip 功能"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span> <span class="hljs-attr">effect</span>=<span class="hljs-string">"light"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"disabled = !disabled"</span>&gt;</span>点击{{disabled ? '开启' : '关闭'}} tooltip 功能<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <div class="tip"><p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p><p>tooltip 内不支持 disabled form 元素，参考<a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。</p></div>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Tooltip',
    data () {
      return {
          disabled: false,
          table: {
              data: [
                {
                   parameter: 'effect',
                   state: '默认提供的主题',
                   mold: 'String',
                   choose: 'dark/light',
                   default: 'dark'
                },
                {
                   parameter: 'content',
                   state: '显示的内容，也可以通过 slot#content 传入 DOM',
                   mold: 'String',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'placement',
                   state: 'Tooltip 的出现位置',
                   mold: 'String',
                   choose: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
                   default: 'bottom'
                },
                {
                   parameter: 'value(v-model)',
                   state: '状态是否可见',
                   mold: 'Boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'disabled',
                   state: 'Tooltip 是否可用',
                   mold: 'Boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'offset',
                   state: '出现位置的偏移量',
                   mold: 'Number',
                   choose: '—',
                   default: '0'
                },
                {
                   parameter: 'transition',
                   state: '定义渐变动画',
                   mold: 'String',
                   choose: '—',
                   default: 'el-fade-in-linear'
                },
                {
                   parameter: 'visible-arrow',
                   state: '是否显示 Tooltip 箭头，更多参数可见Vue-popper',
                   mold: 'Boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'popper-options',
                   state: 'Object',
                   mold: '参考 popper.js 文档',
                   choose: '—',
                   default: "{ boundariesElement: 'body', gpuAcceleration: false }"
                },
                {
                   parameter: 'open-delay',
                   state: '延迟出现，单位毫秒',
                   mold: 'Number',
                   choose: '—',
                   default: '0'
                },
                {
                   parameter: 'manual',
                   state: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
                   mold: 'Boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'popper-class	',
                   state: '为 Tooltip 的 popper 添加类名',
                   mold: 'String',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'enterable',
                   state: '鼠标是否可进入到 tooltip 中',
                   mold: 'Boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'hide-after',
                   state: 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏',
                   mold: 'Number',
                   choose: '—',
                   default: '0'
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