<template>
  <div class='box'>
    <h2>Popover 弹出框</h2>
    <h3>基础用法</h3>
    <p>Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
    <Code>
        <template slot='source'>
            <gl-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <gl-button slot="reference">hover 激活</gl-button>
            </gl-popover>
            <gl-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <gl-button slot="reference">click 激活</gl-button>
            </gl-popover>
        </template>
        <template slot='description'>
            <p><code>trigger</code>属性用于设置何时触发 Popover，支持四种触发方式：<code>hover</code>，<code>click</code>，<code>focus</code> 和 <code>manual</code>。对于触发 Popover 的元素，使用 <code>slot="reference"</code> 的具名插槽。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-popover</span>
                    <span class="hljs-attr">placement</span>=<span class="hljs-string">"top-start"</span>
                    <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span>
                    <span class="hljs-attr">width</span>=<span class="hljs-string">"200"</span>
                    <span class="hljs-attr">trigger</span>=<span class="hljs-string">"hover"</span>
                    <span class="hljs-attr">content</span>=<span class="hljs-string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"reference"</span>&gt;</span>hover 激活<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-popover</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-popover</span>
                    <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span>
                    <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span>
                    <span class="hljs-attr">width</span>=<span class="hljs-string">"200"</span>
                    <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span>
                    <span class="hljs-attr">content</span>=<span class="hljs-string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"reference"</span>&gt;</span>click 激活<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-popover</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-popover</span>
                    <span class="hljs-attr">ref</span>=<span class="hljs-string">"popover"</span>
                    <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>
                    <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span>
                    <span class="hljs-attr">width</span>=<span class="hljs-string">"200"</span>
                    <span class="hljs-attr">trigger</span>=<span class="hljs-string">"focus"</span>
                    <span class="hljs-attr">content</span>=<span class="hljs-string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-popover</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">v-popover:popover</span>&gt;</span>focus 激活<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>嵌套信息</h3>
    <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
    <Code>
        <template slot='source'>
            <gl-popover
                placement="right"
                width="700"
                trigger="click">
                <gl-table :table='table'></gl-table>
                <gl-button slot="reference">click 激活</gl-button>
            </gl-popover>
        </template>
        <template slot='description'>
            <p>利用分发取代<code>content</code>属性</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-popover</span>
                <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>
                <span class="hljs-attr">width</span>=<span class="hljs-string">"400"</span>
                <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span> <span class="hljs-attr">:table</span>=<span class="hljs-string">"table"</span><span class="hljs-tag">&gt;&lt;/</span><span class="hljs-name">gl-table</span>&gt;</span>            
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"reference"</span>&gt;</span>click 激活<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-popover</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-attr">table:</span>: {
                            <span class="hljs-attr">data:</span> [
                                {
                                    <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                    <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                    <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                },
                                {
                                    <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                    <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                    <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                },
                                {
                                    <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                    <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                    <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                },
                                {
                                    <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                    <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                    <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                }
                            ],
                            <span class="hljs-attr">column:</span> [
                                {
                                    <span class="hljs-attr">label:</span> <span class="hljs-string">'日期'</span>,
                                    <span class="hljs-attr">prop:</span> <span class="hljs-string">'date'</span>,
                                    <span class="hljs-attr">width:</span> <span class="hljs-string">'180'</span>
                                },
                                {
                                    <span class="hljs-attr">label:</span> <span class="hljs-string">'名称'</span>,
                                    <span class="hljs-attr">prop:</span> <span class="hljs-string">'name'</span>
                                },
                                {
                                    <span class="hljs-attr">label:</span> <span class="hljs-string">'地址'</span>,
                                    <span class="hljs-attr">prop:</span> <span class="hljs-string">'address'</span>
                                }
                            ]                              
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>嵌套操作</h3>
    <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
    <Code>
        <template slot='source'>
            <gl-popover
                placement="top"
                width="160"
                v-model="visible2">
                <p>这是一段内容这是一段内容确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                    <gl-button size="mini" type="text" @click="visible2 = false">取消</gl-button>
                    <gl-button type="primary" size="mini" @click="visible2 = false">确定</gl-button>
                </div>
                <gl-button slot="reference">删除</gl-button>
            </gl-popover>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-popover</span>
                    <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>
                    <span class="hljs-attr">width</span>=<span class="hljs-string">"160"</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"visible2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一段内容这是一段内容确定删除吗？<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: right; margin: 0"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"visible2 = false"</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"visible2 = false"</span>&gt;</span>确定<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"reference"</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-popover</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,
                        };
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table2'></gl-table>
    <h3>Slot</h3>
    <gl-table :table='Slot'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Popover',
    data () {
      return {
        visible2: false,
        table: {
            data: [
                {
                date: '2018-07-30',
                name: '嘀嘀虎',
                address: '深圳市南山区科兴科学园C3栋7楼'
                },
                {
                date: '2018-07-30',
                name: '嘀嘀虎',
                address: '深圳市南山区科兴科学园C3栋7楼'
                },
                {
                date: '2018-07-30',
                name: '嘀嘀虎',
                address: '深圳市南山区科兴科学园C3栋7楼'
                },
                {
                date: '2018-07-30',
                name: '嘀嘀虎',
                address: '深圳市南山区科兴科学园C3栋7楼'
                }
            ],
            column: [
                {
                label: '日期',
                prop: 'date',
                width: '180'
                },
                {
                label: '名称',
                prop: 'name'
                },
                {
                label: '地址',
                prop: 'address'
                }
            ]
        },
        table2: {
            data: [
              {
                 parameter: 'trigger',
                 state: '触发方式',
                 mold: 'String',
                 choose: 'click/focus/hover/manual',
                 default: 'click'
              },
              {
                 parameter: 'title',
                 state: '标题',
                 mold: 'String',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'content',
                 state: '显示的内容，也可以通过 slot 传入 DOM',
                 mold: 'String',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'width',
                 state: '宽度',
                 mold: 'String, Number',
                 choose: '—',
                 default: '最小宽度 150px'
              },
              {
                 parameter: 'placement',
                 state: '出现位置',
                 mold: 'String',
                 choose: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
                 default: 'bottom'
              },
              {
                 parameter: 'disabled',
                 state: 'Popover 是否可用',
                 mold: 'Boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'value(v-model)',
                 state: '状态是否可见',
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
                 default: 'fade-in-linear'
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
                 state: 'popper.js 的参数',
                 mold: 'Object',
                 choose: '参考 popper.js 文档',
                 default: "{ boundariesElement: 'body', gpuAcceleration: false }"
              },
              {
                 parameter: 'popper-class',
                 state: '为 popper 添加类名',
                 mold: 'String',
                 choose: '—',
                 default: '—'
              },

              {
                 parameter: 'open-delay',
                 state: '触发方式为 hover 时的显示延迟，单位为毫秒',
                 mold: 'Number',
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
        Slot: {
            data: [
              {
                 parameter: '—',
                 state: 'Popover 内嵌 HTML 文本',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'reference',
                 state: '触发 Popover 显示的 HTML 元素',
                 mold: '类型',
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
              }
            ]
        },
        Events: {
            data: [
              {
                 parameter: 'show',
                 state: '显示时触发',
                 mold: '—',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'after-enter',
                 state: '显示动画播放完毕后触发',
                 mold: '—',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'hide',
                 state: '隐藏时触发',
                 mold: '—',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'after-leave',
                 state: '隐藏动画播放完毕后触发',
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
    }
  }
</script>

<style scoped>

</style>