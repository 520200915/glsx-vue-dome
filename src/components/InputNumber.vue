<template>
    <div class="box">
        <h2>InputNumber 计数器</h2>
        <p>仅允许输入标准的数字值，可定义范围</p>
        <h3>基础用法</h3>
        <Code>
            <template slot='source'>
                <gl-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></gl-input-number>
            </template>
            <template slot='description'>
                <p>要使用它，只需要在<code>gl-input-number</code>元素中使用<code>v-model</code>绑定变量即可，变量的初始值即为默认值。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num1"</span> <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"描述文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">num1</span>: <span class="hljs-number">1</span>
                            };
                        },
                        <span class="hljs-attr">methods</span>: {
                            handleChange(value) {
                                <span class="hljs-built_in">console</span>.log(value);
                            }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>禁用状态</h3>
        <Code>
            <template slot='source'>
                <gl-input-number v-model="num2" :disabled="true"></gl-input-number>
            </template>
            <template slot='description'>
                <p><code>disabled</code>属性接受一个<code>Boolean</code>，设置为<code>true</code>即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置<code>min</code>属性和<code>max</code>属性，不设置<code>min</code>和<code>max</code>时，最小值为 0。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num2"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">num2</span>: <span class="hljs-number">1</span>
                            }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>步数</h3>
        <p>允许定义递增递减的步数控制</p>
        <Code>
            <template slot='source'>
                <gl-input-number v-model="num3" :step="2"></gl-input-number>
            </template>
            <template slot='description'>
                <p>设置<code>step</code>属性可以控制步长，接受一个<code>Number</code>。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num3"</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">num3</span>: <span class="hljs-number">5</span>
                            }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>精度</h3>
        <Code>
            <template slot='source'>
                <gl-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></gl-input-number>
            </template>
            <template slot='description'>
                <p>设置 <code>precision</code> 属性可以控制数值精度，接收一个 <code>Number</code>。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num9"</span> <span class="hljs-attr">:precision</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">"0.1"</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">num9</span>: <span class="hljs-number">1</span>
                            }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <div class="tip"><p><code>precision</code> 的值必须是一个正整数，并且不能小于 <code>step</code> 的小数位数。</p></div>
        <h3>尺寸</h3>
        <p>额外提供了 <code>medium</code>、<code>small</code>、<code>mini</code> 三种尺寸的数字输入框</p>
        <Code>
            <template slot='source'>
                <gl-input-number v-model="num4"></gl-input-number>
                <gl-input-number size="medium" v-model="num5"></gl-input-number>
                <gl-input-number size="small" v-model="num6"></gl-input-number>
                <gl-input-number size="mini" v-model="num7"></gl-input-number>
            </template>
            <template slot='description'>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">num4</span>: <span class="hljs-number">1</span>,
                                <span class="hljs-attr">num5</span>: <span class="hljs-number">1</span>,
                                <span class="hljs-attr">num6</span>: <span class="hljs-number">1</span>,
                                <span class="hljs-attr">num7</span>: <span class="hljs-number">1</span>
                            }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>按钮位置</h3>
        <Code>
            <template slot='source'>
                <gl-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></gl-input-number>
            </template>
            <template slot='description'>
                <p>设置 <code>controls-position</code> 属性可以控制按钮位置。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                     <span class="hljs-tag">&lt;<span class="hljs-name">gl-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num8"</span> <span class="hljs-attr">controls-position</span>=<span class="hljs-string">"right"</span> <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input-number</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data()
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">num8</span>: <span class="hljs-number">1</span>
                            };
                        },
                        <span class="hljs-attr">methods</span>: {
                            handleChange(value) {
                                <span class="hljs-built_in">console</span>.log(value);
                            }
                        }
                    };
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
            num1: 1,
            num2: 1,
            num3: 5,
            num9: 1,
            num4: 1,
            num5: 1,
            num6: 1,
            num7: 1,
            num8: 1,
            table: {
                data: [
                {
                    parameter: 'value',
                    state: '绑定值',
                    mold: 'number',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'min',
                    state: '设置计数器允许的最小值',
                    mold: 'number',
                    choose: '—',
                    default: '-Infinity'
                },
                {
                    parameter: 'max',
                    state: '设置计数器允许的最大值',
                    mold: 'number',
                    choose: '—',
                    default: 'Infinity'
                },
                {
                    parameter: 'step',
                    state: '计数器步长',
                    mold: 'number',
                    choose: '—',
                    default: '1'
                },
                {
                    parameter: 'precision',
                    state: '数值精度',
                    mold: 'number',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'size',
                    state: '计数器尺寸',
                    mold: 'string',
                    choose: 'large, small',
                    default: '—'
                },
                {
                    parameter: 'disabled',
                    state: '是否禁用计数器',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'controls',
                    state: '是否使用控制按钮',
                    mold: 'boolean',
                    choose: '—',
                    default: 'true'
                },
                {
                    parameter: 'controls-position',
                    state: '控制按钮位置',
                    mold: 'string',
                    choose: 'right',
                    default: '—'
                },
                {
                    parameter: 'name',
                    state: '原生属性',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'label',
                    state: '输入框关联的label文字',
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
            Events: {
                data: [
                {
                    parameter: 'change',
                    state: '绑定值被改变时触发',
                    mold: '最后变更的值'
                },
                {
                    parameter: 'blur',
                    state: '在组件 Input 失去焦点时触发',
                    mold: '(event: Event)'
                },
                {
                    parameter: 'focus',
                    state: '在组件 Input 获得焦点时触发',
                    mold: '(event: Event)'
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
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>