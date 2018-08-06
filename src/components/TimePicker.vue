<template>
  <div class='box'>
      <h2>TimePicker 时间选择器</h2>
      <p>用于选择或输入日期</p>
      <h3>固定时间点</h3>
      <p>提供几个固定的时间点供用户选择</p>
      <Code>
          <template slot='source'>
            <gl-time-select
                v-model="value1"
                :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                }"
                placeholder="选择时间">
            </gl-time-select>
          </template>
          <template slot='description'>
              <p>使用 gl-time-select 标签，分别通过<code>star</code>、<code>end</code>和<code>step</code>指定可选的起始时间、结束时间和步长，</p>
          </template>
          <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-select</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>
                        <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-select</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value1</span>: <span class="hljs-string">''</span>
                            };
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
          </template>
      </Code>
      <h3>任意时间点</h3>
      <p>可以选择任意时间</p>
      <Code>
          <template slot='source'>
              <gl-time-picker
                v-model="value2"
                :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
                }"             
                placeholder="任意时间点">
            </gl-time-picker>
            <gl-time-picker
                arrow-control
                v-model="value3"
                :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
                }"
                placeholder="任意时间点">
            </gl-time-picker>
          </template>
          <template slot='description'>
              <p>使用 gl-time-picker 标签，通过<code>selectableRange</code>限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开<code>arrow-control</code>属性则通过界面上的箭头进行选择。</p>
          </template>
          <template slot='highlight'>
              <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
                        <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
                        selectableRange: '18:30:00 - 20:30:00'
                        }"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"任意时间点"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-picker</span>
                        <span class="hljs-attr">arrow-control</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
                        <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
                        selectableRange: '18:30:00 - 20:30:00'
                        }"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"任意时间点"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value2</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">18</span>, <span class="hljs-number">40</span>),
                            <span class="hljs-attr">value3</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">18</span>, <span class="hljs-number">40</span>)
                        };
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
          </template>
      </Code>
      <h3>固定时间范围</h3>
      <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
      <Code>
          <template slot='source'>
               <gl-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                    }">
                </gl-time-select>
                <gl-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime
                    }">
                </gl-time-select>
          </template>
          <template slot='description'>
          </template>
          <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-select</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"起始时间"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"startTime"</span>
                            <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                            }"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-select</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-select</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"结束时间"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"endTime"</span>
                            <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30',
                            minTime: startTime
                            }"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-select</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">startTime</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">endTime</span>: <span class="hljs-string">''</span>
                        };
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
          </template>
      </Code>
      <h3>任意时间范围</h3>
      <p>可选择任意的时间范围</p>
      <Code>
          <template slot='source'>
              <gl-time-picker
                is-range
                v-model="value4"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
            </gl-time-picker>
            <gl-time-picker
                is-range
                arrow-control
                v-model="value5"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
            </gl-time-picker>
          </template>
          <template slot='description'>
              <p>添加<code>is-range</code>属性即可选择时间范围，同样支持<code>arrow-control</code>属性。</p>
          </template>
          <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-picker</span>
                            <span class="hljs-attr">is-range</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
                            <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
                            <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始时间"</span>
                            <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束时间"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间范围"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-picker</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-time-picker</span>
                            <span class="hljs-attr">is-range</span>
                            <span class="hljs-attr">arrow-control</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
                            <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
                            <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始时间"</span>
                            <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束时间"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间范围"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-time-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">value4</span>: [<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">8</span>, <span class="hljs-number">40</span>), <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">9</span>, <span class="hljs-number">40</span>)],
                                <span class="hljs-attr">value5</span>: [<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">8</span>, <span class="hljs-number">40</span>), <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">9</span>, <span class="hljs-number">40</span>)]
                            };
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
          </template>
      </Code>
      <h3>Attributes</h3>
      <gl-table :table='table'></gl-table>
      <h3>Time Select Options</h3>
      <gl-table :table='Select'></gl-table>
      <h3>Time Picker Options</h3>
      <gl-table :table='Options'></gl-table>
      <h3>Events</h3>
      <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
            value1: '',
            value2: new Date(2016, 9, 10, 18, 40),
            value3: new Date(2016, 9, 10, 18, 40),
            value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
            startTime: '',
            endTime: '',
            table: {
                data: [
                  {
                     parameter: 'readonly',
                     state: '完全只读',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'disabled',
                     state: '禁用',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'editable',
                     state: '文本框可输入',
                     mold: 'boolean',
                     choose: '—',
                     default: 'true'
                  },
                  {
                     parameter: 'clearable',
                     state: '是否显示清除按钮',
                     mold: 'boolean',
                     choose: '—',
                     default: 'true'
                  },
                  {
                     parameter: 'size',
                     state: '输入框尺寸',
                     mold: 'string',
                     choose: 'medium / small / mini',
                     default: '—'
                  },
                  {
                     parameter: 'placeholder',
                     state: '非范围选择时的占位内容',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'start-placeholder',
                     state: '范围选择时开始日期的占位内容',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'end-placeholder',
                     state: '范围选择时开始日期的占位内容',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'is-range',
                     state: '是否为时间范围选择，仅对<gl-time-picker>有效',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'arrow-control',
                     state: '是否使用箭头进行时间选择，仅对<gl-time-picker>有效',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'value',
                     state: '绑定值	',
                     mold: 'date(TimePicker) / string(TimeSelect)',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'align',
                     state: '对齐方式',
                     mold: 'string',
                     choose: 'left / center / right',
                     default: 'left'
                  },
                  {
                     parameter: 'popper-class',
                     state: 'TimePicker 下拉框的类名',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'picker-options',
                     state: '当前时间日期选择器特有的选项参考下表',
                     mold: 'object',
                     choose: '—',
                     default: '{}'
                  },
                  {
                     parameter: 'range-separator',
                     state: '选择范围时的分隔符',
                     mold: 'string',
                     choose: '—',
                     default: "'-'"
                  },
                  {
                     parameter: 'value-format',
                     state: '可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象',
                     mold: 'string',
                     choose: '见日期格式',
                     default: '—'
                  },
                  {
                     parameter: 'default-value',
                     state: '可选，选择器打开时默认显示的时间',
                     mold: 'Date(TimePicker) / string(TimeSelect)',
                     choose: '可被new Date()解析(TimePicker) / 可选值(TimeSelect)',
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
                     parameter: 'prefix-icon',
                     state: '自定义头部图标的类名',
                     mold: 'string',
                     choose: '—',
                     default: 'el-icon-time'
                  },
                  {
                     parameter: 'clear-icon',
                     state: '自定义清空图标的类名',
                     mold: 'string',
                     choose: '—',
                     default: 'el-icon-circle-close'
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
            Select: {
                data: [
                  {
                     parameter: 'start',
                     state: '开始时间',
                     mold: 'string',
                     choose: '—',
                     default: '09:00'
                  },
                  {
                     parameter: 'end',
                     state: '结束时间',
                     mold: 'string',
                     choose: '—',
                     default: '18:00'
                  },
                  {
                     parameter: 'step',
                     state: '间隔时间',
                     mold: 'string',
                     choose: '—',
                     default: '00:30'
                  },
                  {
                     parameter: 'minTime',
                     state: '最小时间，小于该时间的时间段将被禁用',
                     mold: 'string',
                     choose: '—',
                     default: '00:00'
                  },
                  {
                     parameter: 'maxTime',
                     state: '最大时间，大于该时间的时间段将被禁用',
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
                     prop: 'choose'
                  },
                  {
                     label: '默认值',
                     prop: 'default'
                   }
                ]
            },
            Options: {
                data: [
                  {
                     parameter: 'selectableRange',
                     state: "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
                     mold: 'string / array',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'format',
                     state: '时间格式化(TimePicker)',
                     mold: 'string',
                     choose: '小时：HH，分：mm，秒：ss，AM/PM A',
                     default: "'HHv-mm:ss'"
                  }
                ],
                column: [
                  {
                     label: '参数',
                     prop: 'parameter',                     
                     width: '130'
                  },
                  {
                     label: '说明',
                     prop: 'state'
                  },
                  {
                     label: '类型',
                     prop: 'mold',
                     width: '100'
                  },
                  {
                     label: '可选值',
                     prop: 'choose'
                  },
                  {
                     label: '默认值',
                     prop: 'default',
                     width: '100'
                   }
                ]
            },
            Events: {
                data: [
                  {
                     parameter: 'change',
                     state: '用户确认选定的值时触发',
                     mold: '组件绑定值',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'blur',
                     state: '当 input 失去焦点时触发',
                     mold: '组件实例',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'focus',
                     state: '当 input 获得焦点时触发',
                     mold: '组件实例',
                     choose: '—',
                     default: '—'
                  }
                ],
                column: [
                  {
                     label: '事件名',
                     prop: 'parameter'
                  },
                  {
                     label: '说明',
                     prop: 'state'
                  },
                  {
                     label: '参数',
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