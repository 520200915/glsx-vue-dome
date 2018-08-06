<template>
  <div class='box rate'>
    <h2>Rate 评分</h2>
    <p>评分组件</p>
    <h3>基础用法</h3>
    <Code>
        <template slot='source'>
            <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <gl-rate v-model="value1"></gl-rate>
            </div>
            <div class="block">
            <span class="demonstration">区分颜色</span>
            <gl-rate
                v-model="value2"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </gl-rate>
            </div>
        </template>
        <template slot='description'>
            <p>评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过<code>colors</code>属性设置，而它们对应的两个阈值则通过 <code>low-threshold</code> 和 <code>high-threshold</code> 设定。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认不区分颜色<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-rate</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>区分颜色<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-rate</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
                        <span class="hljs-attr">:colors</span>=<span class="hljs-string">"['#99A9BF', '#F7BA2A', '#FF9900']"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-rate</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                    <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">value1</span>: <span class="hljs-literal">null</span>,
                        <span class="hljs-attr">value2</span>: <span class="hljs-literal">null</span>
                    }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>辅助文字</h3>
    <p>用辅助文字直接地表达对应分数</p>
    <Code>
        <template slot='source'>
            <gl-rate    
            v-model="value3"
            show-text>
            </gl-rate>
        </template>
        <template slot='description'>
            <p>为组件设置 <code>show-text</code> 属性会在右侧显示辅助文字。通过设置 <code>texts</code> 可以为每一个分值指定对应的辅助文字。<code>texts</code> 为一个数组，长度应等于最大值 <code>max</code>。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-rate</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
                    <span class="hljs-attr">show-text</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-rate</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value3</span>: <span class="hljs-literal">null</span>
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>其它 icon</h3>
    <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
    <Code>
        <template slot='source'>
            <gl-rate
            v-model="value4"
            :icon-classes="['el-icon-remove-outline', 'el-icon-circle-plus-outline', 'el-icon-circle-check-outline']"
            void-icon-class="el-icon-circle-close"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </gl-rate>
        </template>
        <template slot='description'>
            <p>设置<code>icon-classes</code>属性可以自定义对应 3 个不同分段的图标。本例还使用<code>void-icon-class</code>指定了未选中时的图标类名。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-rate</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
                    <span class="hljs-attr">:icon-classes</span>=<span class="hljs-string">"['el-icon-remove-outline', 'el-icon-circle-plus-outline', 'el-icon-circle-check-outline']"</span>
                    <span class="hljs-attr">void-icon-class</span>=<span class="hljs-string">"el-icon-circle-close"</span>
                    <span class="hljs-attr">:colors</span>=<span class="hljs-string">"['#99A9BF', '#F7BA2A', '#FF9900']"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-rate</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value4</span>: <span class="hljs-literal">null</span>
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>只读</h3>
    <p>只读的评分用来展示分数，允许出现半星</p>
    <Code>
        <template slot='source'>
            <gl-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
            </gl-rate>
        </template>
        <template slot='description'>
            <p>为组件设置 <code>disabled</code> 属性表示组件为只读，支持小数分值。此时若设置 <code>show-score</code>，则会在右侧显示目前的分值。可以提供 <code>score-template</code> 作为显示模板，模板为一个包含了 <code>{value}</code> 的字符串，<code>{value}</code> 会被解析为分值。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-rate</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
                    <span class="hljs-attr">disabled</span>
                    <span class="hljs-attr">show-score</span>
                    <span class="hljs-attr">text-color</span>=<span class="hljs-string">"#ff9900"</span>
                    <span class="hljs-attr">score-template</span>=<span class="hljs-string">"{value}"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-rate</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value5</span>: <span class="hljs-number">3.7</span>
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7,
        table: {
            data: [
              {
                 parameter: 'max',
                 state: '最大分值',
                 mold: 'number',
                 choose: '—',
                 default: '5'
              },
              {
                 parameter: 'disabled',
                 state: '是否为只读',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'allow-half',
                 state: '是否允许半选',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'low-threshold',
                 state: '低分和中等分数的界限值，值本身被划分在低分中',
                 mold: 'number',
                 choose: '—',
                 default: '2'
              },
              {
                 parameter: 'high-threshold',
                 state: '高分和中等分数的界限值，值本身被划分在高分中',
                 mold: 'number',
                 choose: '—',
                 default: '4'
              },
              {
                 parameter: 'colors',
                 state: 'icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色',
                 mold: 'array',
                 choose: '—',
                 default: "['#F7BA2A', '#F7BA2A', '#F7BA2A']"
              },
              {
                 parameter: 'void-color',
                 state: '未选中 icon 的颜色',
                 mold: 'string',
                 choose: '—',
                 default: '#C6D1DE'
              },
              {
                 parameter: 'disabled-void-color',
                 state: '只读时未选中 icon 的颜色',
                 mold: 'string',
                 choose: '—',
                 default: '#EFF2F7'
              },
              {
                 parameter: 'icon-classes',
                 state: 'icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名',
                 mold: 'array',
                 choose: '—',
                 default: "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
              },
              {
                 parameter: 'void-icon-class',
                 state: '未选中 icon 的类名',
                 mold: 'string',
                 choose: '—',
                 default: 'el-icon-star-off'
              },
              {
                 parameter: 'disabled-void-icon-class',
                 state: '只读时未选中 icon 的类名',
                 mold: 'string',
                 choose: '—',
                 default: 'el-icon-star-on'
              },
              {
                 parameter: 'show-text',
                 state: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'show-score',
                 state: '是否显示当前分数，show-score 和 show-text 不能同时为真',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'text-color',
                 state: '辅助文字的颜色',
                 mold: 'string',
                 choose: '—',
                 default: '#1F2D3D'
              },
              {
                 parameter: 'texts',
                 state: '辅助文字数组',
                 mold: 'array',
                 choose: '—',
                 default: "['极差', '失望', '一般', '满意', '惊喜']"
              },
              {
                 parameter: 'score-template',
                 state: '分数显示模板',
                 mold: 'string',
                 choose: '—',
                 default: '{value}'
              }
            ],
            column: [
              {
                 label: '参数',
                 prop: 'parameter',
                 width: "170"
              },
              {
                 label: '说明',
                 prop: 'state',
                 width: '280'
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
                 prop: 'default',
                 width: '270'
               }
            ]
        },
        Events: {
            data: [
              {
                 parameter: 'change',
                 state: '分值改变时触发',
                 mold: '改变后的分值',
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
                 prop: 'state',
                 width: '350'
              },
              {
                 label: '回调参数',
                 prop: 'mold'
              }
            ]
        }
      }
    }
  }
</script>