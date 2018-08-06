<template>
  <div class='box datePicker'>
    <h2>DateTimePicker 日期时间选择器</h2>
    <p>在同一个选择器里选择日期和时间</p>
    <div class="tip"><p>DateTimePicker 由 DatePicker 和 TimePicker 派生，<code>Picker Options</code> 或者其他选项可以参照 DatePicker 和 TimePicker。</p></div>
    <h3>日期和时间点</h3>
    <Code>
        <template slot='source'>
            <div class="block">
                <span class="demonstration">默认</span>
                <gl-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">带快捷选项</span>
                <gl-date-picker
                v-model="value2"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions1">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">设置默认时间</span>
                <gl-date-picker
                v-model="value3"
                type="datetime"
                placeholder="选择日期时间"
                default-time="12:00:00">
                </gl-date-picker>
            </div>
        </template>
        <template slot='description'>
            <p>通过设置<code>type</code>属性为<code>datetime</code>，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetime"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期时间"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetime"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期时间"</span>
                        <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
                        <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions1"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>设置默认时间<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetime"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期时间"</span>
                        <span class="hljs-attr">default-time</span>=<span class="hljs-string">"12:00:00"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">pickerOptions1</span>: {
                            <span class="hljs-attr">shortcuts</span>: [{
                                <span class="hljs-attr">text</span>: <span class="hljs-string">'今天'</span>,
                                onClick(picker) {
                                picker.$emit(<span class="hljs-string">'pick'</span>, <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>());
                                }
                            }, {
                                <span class="hljs-attr">text</span>: <span class="hljs-string">'昨天'</span>,
                                onClick(picker) {
                                <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                date.setTime(date.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span>);
                                picker.$emit(<span class="hljs-string">'pick'</span>, date);
                                }
                            }, {
                                <span class="hljs-attr">text</span>: <span class="hljs-string">'一周前'</span>,
                                onClick(picker) {
                                <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                                date.setTime(date.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">7</span>);
                                picker.$emit(<span class="hljs-string">'pick'</span>, date);
                                }
                            }]
                            },
                            <span class="hljs-attr">value1</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value2</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value3</span>: <span class="hljs-string">''</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>日期和时间范围</h3>
    <Code>
        <template slot='source'>
            <div class="block">
                <span class="demonstration">默认</span>
                <gl-date-picker
                v-model="value4"
                type='datetimerange'
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">带快捷选项</span>
                <gl-date-picker
                v-model="value5"
                type="datetimerange"
                :picker-options="pickerOptions2"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </gl-date-picker>
            </div>
        </template>
        <template slot='description'>
            <p>设置<code>type</code>为<code>datetimerange</code>即可选择日期和时间范围</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetimerange"</span>
                        <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetimerange"</span>
                        <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions2"</span>
                        <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
                        <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                    <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">pickerOptions2</span>: {
                        <span class="hljs-attr">shortcuts</span>: [{
                            <span class="hljs-attr">text</span>: <span class="hljs-string">'最近一周'</span>,
                            onClick(picker) {
                            <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">7</span>);
                            picker.$emit(<span class="hljs-string">'pick'</span>, [start, end]);
                            }
                        }, {
                            <span class="hljs-attr">text</span>: <span class="hljs-string">'最近一个月'</span>,
                            onClick(picker) {
                            <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">30</span>);
                            picker.$emit(<span class="hljs-string">'pick'</span>, [start, end]);
                            }
                        }, {
                            <span class="hljs-attr">text</span>: <span class="hljs-string">'最近三个月'</span>,
                            onClick(picker) {
                            <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();
                            start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">90</span>);
                            picker.$emit(<span class="hljs-string">'pick'</span>, [start, end]);
                            }
                        }]
                        },
                        <span class="hljs-attr">value4</span>: [<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>), <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>)],
                        <span class="hljs-attr">value5</span>: <span class="hljs-string">''</span>
                    };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>默认的起始与结束时刻</h3>
    <Code>
        <template slot='source'>
            <div class="block">
                <span class="demonstration">起始日期时刻为 12:00:00</span>
                <gl-date-picker
                v-model="value6"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
                <gl-date-picker
                v-model="value7"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']">
                </gl-date-picker>
            </div>
        </template>
        <template slot='description'>
            <p>使用<code>datetimerange</code>进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的<code>00:00:00</code>作为起始与结束的时刻；通过选项<code>default-time</code>可以控制选中起始与结束日期时所使用的具体时刻。<code>default-time</code>接受一个数组，数组每项值为字符串，形如<code>12:00:00</code>，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>起始日期时刻为 12:00:00<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetimerange"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
                        <span class="hljs-attr">:default-time</span>=<span class="hljs-string">"['12:00:00']"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"datetimerange"</span>
                        <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
                        <span class="hljs-attr">:default-time</span>=<span class="hljs-string">"['12:00:00', '08:00:00']"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value6</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value7</span>: <span class="hljs-string">''</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Picker Options</h3>
    <gl-table :table='Options'></gl-table>
    <h3>Shortcuts</h3>
    <gl-table :table='Shortcuts'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
          pickerOptions1: {
            shortcuts: [{
                text: '今天',
                onClick(picker) {
                picker.$emit('pick', new Date());
                }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                text: '一周前',
                onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
                }
            }]
        },
        value1: '',
        value2: '',
        value3: '',
        pickerOptions2: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        value6: '',
        value7: '',
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
                    choose: 'large, small, mini',
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
                    state: '范围选择时结束日期的占位内容',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'type',
                    state: '显示类型',
                    mold: 'string',
                    choose: 'year/month/date/dates/ week/datetime/datetimerange/daterange',
                    default: 'date'
                },
                {
                    parameter: 'format',
                    state: '显示在输入框中的格式',
                    mold: 'string',
                    choose: '见日期格式',
                    default: 'yyyy-MM-dd'
                },
                {
                    parameter: 'align',
                    state: '对齐方式',
                    mold: 'string',
                    choose: 'left, center, right',
                    default: 'left'
                },
                {
                    parameter: 'popper-class',
                    state: 'DatePicker 下拉框的类名',
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
                    default: '"-"'
                },
                {
                    parameter: 'default-value',
                    state: '可选，选择器打开时默认显示的时间',
                    mold: 'Date',
                    choose: '可被new Date()解析',
                    default: '—'
                },
                {
                    parameter: 'default-time',
                    state: '范围选择时选中日期所使用的当日内具体时刻',
                    mold: 'string[]',
                    choose: '数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00',
                    default: '—'
                },
                {
                    parameter: 'value-format',
                    state: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
                    mold: 'string',
                    choose: '见日期格式',
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
                    parameter: 'unlink-panels',
                    state: '在范围选择器里取消两个日期面板之间的联动',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'prefix-icon',
                    state: '自定义头部图标的类名',
                    mold: 'string',
                    choose: '—',
                    default: 'el-icon-date'
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
                    prop: 'state',
                    width: '260'
                },
                {
                    label: '类型',
                    prop: 'mold'
                },
                {
                    label: '可选值',
                    prop: 'choose',
                    width: '280'
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
                    parameter: 'shortcuts',
                    state: '设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表',
                    mold: 'Object[]',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'disabledDate',
                    state: '设置禁用状态，参数为当前日期，要求返回 Boolean',
                    mold: 'Function',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'firstDayOfWeek',
                    state: '周起始日',
                    mold: 'Number',
                    choose: '1 到 7',
                    default: '7'
                },
                {
                    parameter: 'onPick',
                    state: '选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效',
                    mold: 'Function({ maxDate, minDate })',
                    choose: '—',
                    default: '—'
                }
            ],
            column: [
                {
                    label: '参数',
                    prop: 'parameter',
                    width: '140'
                },
                {
                    label: '说明',
                    prop: 'state',
                    width: '300'
                },
                {
                    label: '类型',
                    prop: 'mold',
                    width: '260'
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
        Shortcuts: {
            data: [
                {
                    parameter: 'text',
                    state: '标题文本',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'onClick',
                    state: "选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())",
                    mold: 'function',
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
                    width: '430'
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
                    state: '用户确认选定的值时触发',
                    mold: '组件绑定值。格式与绑定值一致，可受 value-format 控制',
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
                    label: '事件名称',
                    prop: 'parameter'
                },
                {
                    label: '说明',
                    prop: 'state',
                    width: "300"
                },
                {
                    label: '回调参数',
                    prop: 'mold',
                    width: '450'
                }
            ]
        }
      }
    },
    watch: {
        value1(a) {
            console.log(a)
        }
    }
  }
</script>

<style scoped>

</style>