<template>
    <div class="box slider">
        <h2>Slider 滑块</h2>
        <p>通过拖动滑块在一个固定区间内进行选择</p>
        <h3>基础用法</h3>
        <p>在拖动滑块时，显示当前值</p>
        <Code>
            <template slot='source'>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <gl-slider v-model="value1"></gl-slider>
                </div>
                <div class="block">
                    <span class="demonstration">自定义初始值</span>
                    <gl-slider v-model="value2"></gl-slider>
                </div>
                <div class="block">
                    <span class="demonstration">隐藏 Tooltip</span>
                    <gl-slider v-model="value3" :show-tooltip="false"></gl-slider>
                </div>
                <div class="block">
                    <span class="demonstration">格式化 Tooltip</span>
                    <gl-slider v-model="value4" :format-tooltip="formatTooltip"></gl-slider>
                </div>
                <div class="block">
                    <span class="demonstration">禁用</span>
                    <gl-slider v-model="value5" disabled></gl-slider>
                </div>
            </template>
            <template slot='description'>
                <p>通过设置绑定值自定义滑块的初始值</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>自定义初始值<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>隐藏 Tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span> <span class="hljs-attr">:show-tooltip</span>=<span class="hljs-string">"false"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>格式化 Tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span> <span class="hljs-attr">:format-tooltip</span>=<span class="hljs-string">"formatTooltip"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>禁用<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,
                                <span class="hljs-attr">value2</span>: <span class="hljs-number">50</span>,
                                <span class="hljs-attr">value3</span>: <span class="hljs-number">36</span>,
                                <span class="hljs-attr">value4</span>: <span class="hljs-number">48</span>,
                                <span class="hljs-attr">value5</span>: <span class="hljs-number">42</span>
                            }
                        },
                        <span class="hljs-attr">methods</span>: {
                            formatTooltip(val) {
                                <span class="hljs-keyword">return</span> val / <span class="hljs-number">100</span>;
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>离散值</h3>
        <p>选项可以是离散的</p>
        <Code>
            <template slot='source'>
                <div class="block">
                    <span class="demonstration">不显示间断点</span>
                    <gl-slider
                    v-model="value6"
                    :step="10">
                    </gl-slider>
                </div>
                <div class="block">
                    <span class="demonstration">显示间断点</span>
                    <gl-slider
                    v-model="value7"
                    :step="10"
                    show-stops>
                    </gl-slider>
                </div>
            </template>
            <template slot='description'>
                <p>改变<code>step</code>的值可以改变步长，通过设置<code>show-step</code>属性可以显示间断点</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>不显示间断点<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
                            <span class="hljs-attr">:step</span>=<span class="hljs-string">"10"</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>显示间断点<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
                            <span class="hljs-attr">:step</span>=<span class="hljs-string">"10"</span>
                            <span class="hljs-attr">show-stops</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value6</span>: <span class="hljs-number">0</span>,
                                <span class="hljs-attr">value7</span>: <span class="hljs-number">0</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>带有输入框</h3>
        <p>通过输入框设置精确数值</p>
        <Code>
            <template slot='source'>
                 <div class="block">
                    <gl-slider
                    v-model="value8"
                    show-input>
                    </gl-slider>
                </div>
            </template>
            <template slot='description'>
                <p>设置<code>show-input</code>属性会在右侧显示一个输入框</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value8"</span>
                            <span class="hljs-attr">show-input</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value8</span>: <span class="hljs-number">0</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>范围选择</h3>
        <p>支持选择某一数值范围</p>
        <Code>
            <template slot='source'>
                <div class="block">
                    <gl-slider
                    v-model="value9"
                    range
                    show-stops
                    :max="10">
                    </gl-slider>
                </div>
            </template>
            <template slot='description'>
                <p>设置<code>range</code>即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value9"</span>
                            <span class="hljs-attr">range</span>
                            <span class="hljs-attr">show-stops</span>
                            <span class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value9</span>: [<span class="hljs-number">4</span>, <span class="hljs-number">8</span>]
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>竖向模式</h3>
        <Code>
            <template slot='source'>
                <div class="block">
                    <gl-slider
                    v-model="value10"
                    vertical
                    height="200px">
                    </gl-slider>
                </div>
            </template>
            <template slot='description'>
                <p>设置<code>vertical</code>可使 Slider 变成竖向模式，此时必须设置高度<code>height</code>属性</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-slider</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value10"</span>
                            <span class="hljs-attr">vertical</span>
                            <span class="hljs-attr">height</span>=<span class="hljs-string">"200px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-slider</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value10</span>: <span class="hljs-number">0</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>Attributes</h3>
        <gl-table :table='Attributes'></gl-table>
        <h3>Events</h3>
        <gl-table :table='Events'></gl-table>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0,
        Attributes: {
            data: [
              {
                 parameter: 'min',
                 state: '最小值',
                 mold: 'number',
                 choose: '—',
                 default: '0'
              },
              {
                 parameter: 'max',
                 state: '最大值',
                 mold: 'number',
                 choose: '—',
                 default: '100'
              },
              {
                 parameter: 'disabled',
                 state: '是否禁用',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'step',
                 state: '步长',
                 mold: 'number',
                 choose: '—',
                 default: '1'
              },
              {
                 parameter: 'show-input',
                 state: '是否显示输入框，仅在非范围选择时有效',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'show-input-controls',
                 state: '在显示输入框的情况下，是否显示输入框的控制按钮',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'input-size',
                 state: '输入框的尺寸',
                 mold: 'string',
                 choose: 'large / medium / small / mini',
                 default: 'small'
              },
              {
                 parameter: 'show-stops',
                 state: '是否显示间断点',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'show-tooltip',
                 state: '是否显示 tooltip',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'format-tooltip',
                 state: '格式化 tooltip message',
                 mold: 'function(value)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'range',
                 state: '是否为范围选择',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'vertical',
                 state: '是否竖向模式',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'height',
                 state: 'Slider 高度，竖向模式时必填',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'label',
                 state: '屏幕阅读器标签',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'debounce',
                 state: '输入时的去抖延迟，毫秒，仅在show-input等于true时有效',
                 mold: 'number',
                 choose: '—',
                 default: '300'
              },
              {
                 parameter: 'tooltip-class',
                 state: 'tooltip 的自定义类名',
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
                 prop: 'state',
                 width: '300'
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
        Events: {
            data: [
              {
                 parameter: 'change',
                 state: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
                 mold: '改变后的值',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: '事件名称',
                 prop: 'parameter',
                 width: '150'
              },
              {
                 label: '说明',
                 prop: 'state'
              },
              {
                 label: '回调参数',
                 prop: 'mold',
                 width: '200'
              }
            ]
        }
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
      fun(val) {
          console.log(val)
      }
    }
  }
</script>

<style scoped>
    .demo-box .block{
        padding: 30px 24px;
        overflow: hidden;
        border-bottom: 1px solid #eff2f6;
    }
    .demo-box .block:last-child{
        border-bottom: none;
    }
    
</style>