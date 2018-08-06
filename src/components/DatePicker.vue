<template>
  <div class='box datePicker'>
    <h2>DatePicker 日期选择器</h2>
    <p>用于选择或输入日期</p>
    <h3>选择日</h3>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <Code>
        <template slot='source'>
            <div class="block">
                <span class="demonstration">默认</span>
                <gl-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">带快捷选项</span>
                <gl-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </gl-date-picker>
            </div>
        </template>
        <template slot='description'>
            <p>基本单位由<code>type</code>属性指定。快捷选项需配置<code>picker-options</code>对象中的<code>shortcuts</code>，禁用日期通过 <code>disabledDate</code> 设置，传入函数</p>
        </template>
        <template slot='highlight'>
            <pre>
                <code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>
                            <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
                            <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
                            <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>
                            <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions1"</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">pickerOptions1</span>: {
                                disabledDate(time) {
                                    <span class="hljs-keyword">return</span> time.getTime() &gt; <span class="hljs-built_in">Date</span>.now();
                                },
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
                            };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code>
            </pre>
        </template>
    </Code>
    <h3>其他日期单位</h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年或多个日期</p>
    <Code>
        <template slot='source'>
            <div class="container">
                <div class="block">
                    <span class="demonstration">周</span>
                    <gl-date-picker
                    v-model="value3"
                    type="week"
                    format="yyyy 第 WW 周"
                    placeholder="选择周">
                    </gl-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">月</span>
                    <gl-date-picker
                    v-model="value4"
                    type="month"
                    placeholder="选择月">
                    </gl-date-picker>
                </div>
            </div>
            <div class="container">
                <div class="block">
                    <span class="demonstration">年</span>
                    <gl-date-picker
                    v-model="value5"
                    type="year"
                    placeholder="选择年">
                    </gl-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">多个日期</span>
                    <gl-date-picker
                    type="dates"
                    v-model="value14"
                    placeholder="选择一个或多个日期">
                    </gl-date-picker>
                </div>
            </div>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>周<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"week"</span>
                        <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy 第 WW 周"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择周"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>月<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"month"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择月"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>年<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"year"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择年"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>多个日期<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"dates"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value14"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择一个或多个日期"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value3</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value4</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value5</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value14</span>: []
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
        </template>
    </Code>
    <h3>选择日期范围</h3>
    <p>可在一个选择器中便捷地选择一个时间范围</p>
    <Code>
        <template slot='source'>
             <div class="block">
                <span class="demonstration">默认</span>
                {{value6}}
                <gl-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">带快捷选项</span>
                <gl-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
                </gl-date-picker>
            </div>
        </template>
        <template slot='description'>
            <p>在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用<code>unlink-panels</code>属性解除联动。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        {<span>{</span>value6}}
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"daterange"</span>
                        <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"daterange"</span>
                        <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
                        <span class="hljs-attr">unlink-panels</span>
                        <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
                        <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions2"</span>&gt;</span>
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
                            <span class="hljs-attr">value6</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value7</span>: <span class="hljs-string">''</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
        </template>
    </Code>
    <h3>日期格式</h3>
    <p>使用<code>format</code>指定输入框的格式；使用<code>value-format</code>指定绑定值的格式。</p>
    <p>默认情况下，组件接受并返回Date对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：</p>
    <div class="warning"><p>请注意大小写</p></div>
    <gl-table :table='date'></gl-table>
    <Code>
        <template slot='source'>
             <div class="block">
                <span class="demonstration">默认为 Date 对象</span>
                <div class="demonstration">值：{{ value10 }}</div>
                <gl-date-picker
                v-model="value10"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">使用 value-format</span>
                <div class="demonstration">值：{{ value11 }}</div>
                <gl-date-picker
                v-model="value11"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
                </gl-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">时间戳</span>
                <div class  ="demonstration">值：{{ value12 }}</div>
                <gl-date-picker
                v-model="value12"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp">
                </gl-date-picker>
            </div>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认为 Date 对象<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>值：{<span>{</span> value10 }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value10"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>
                        <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy 年 MM 月 dd 日"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>使用 value-format<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>值：{<span>{</span> value11 }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value11"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>
                        <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy 年 MM 月 dd 日"</span>
                        <span class="hljs-attr">value-format</span>=<span class="hljs-string">"yyyy-MM-dd"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>时间戳<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>值：{<span>{</span> value12 }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value12"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>
                        <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy 年 MM 月 dd 日"</span>
                        <span class="hljs-attr">value-format</span>=<span class="hljs-string">"timestamp"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value10</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value11</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">value12</span>: <span class="hljs-string">''</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
        </template>
    </Code>
    <h3>默认显示日期</h3>
    <p>在选择日期范围时，指定起始日期和结束日期的默认时刻。</p>
    <Code>
        <template slot='source'>
            <div class="block">
                <p>组件值：{{ value13 }}</p>
                <gl-date-picker
                v-model="value13"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']">
                </gl-date-picker>
            </div>
        </template>
        <template slot='description'>
            <p>选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。通过<code>default-time</code>可以分别指定二者的具体时刻。<code>default-time</code>接受一个数组，其中的值为形如<code>12:00:00</code>的字符串，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>组件值：{<span>{</span> value13 }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-date-picker</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value13"</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"daterange"</span>
                        <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
                        <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
                        <span class="hljs-attr">:default-time</span>=<span class="hljs-string">"['00:00:00', '23:59:59']"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-date-picker</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">value13</span>: []
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
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
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
            value4: '',
            value5: '',
            value14: [],
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
            value6: '',
            value7: '',
            date: {
                data: [
                  {
                     parameter: 'yyyy',
                     state: '年',
                     mold: '',
                     choose: '2017',
                     default: '—'
                  },
                  {
                     parameter: 'M',
                     state: '月',
                     mold: '不补0',
                     choose: '1',
                     default: '—'
                  },
                  {
                     parameter: 'MM',
                     state: '月',
                     mold: '',
                     choose: '01',
                     default: '—'
                  },
                  {
                     parameter: 'W',
                     state: '周',
                     mold: '仅周选择器的 format 可用；不补0',
                     choose: '1',
                     default: '—'
                  },
                  {
                     parameter: 'WW',
                     state: '周',
                     mold: '仅周选择器的 format 可用',
                     choose: '01',
                     default: '—'
                  },
                  {
                     parameter: 'd',
                     state: '日',
                     mold: '不补0',
                     choose: '2',
                     default: '—'
                  },
                  {
                     parameter: 'dd',
                     state: '日',
                     mold: '',
                     choose: '02',
                     default: '—'
                  },
                  {
                     parameter: 'H',
                     state: '小时',
                     mold: '24小时制；不补0',
                     choose: '3',
                     default: '—'
                  },
                  {
                     parameter: 'HH',
                     state: '小时',
                     mold: '24小时制',
                     choose: '03',
                     default: '—'
                  },
                  {
                     parameter: 'h',
                     state: '小时',
                     mold: '12小时制，须和 A 或 a 使用；不补0',
                     choose: '3',
                     default: '—'
                  },
                  {
                     parameter: 'hh',
                     state: '小时',
                     mold: '12小时制，须和 A 或 a 使用',
                     choose: '03',
                     default: '—'
                  },
                  {
                     parameter: 'm',
                     state: '分钟',
                     mold: '不补0',
                     choose: '4',
                     default: '—'
                  },
                  {
                     parameter: 'mm',
                     state: '分钟',
                     mold: '',
                     choose: '04',
                     default: '—'
                  },
                  {
                     parameter: 's',
                     state: '秒',
                     mold: '不补0',
                     choose: '5',
                     default: '—'
                  },
                  {
                     parameter: 'ss',
                     state: '秒',
                     mold: '',
                     choose: '05',
                     default: '—'
                  },
                  {
                     parameter: 'A',
                     state: 'AM/PM',
                     mold: '仅 format 可用，大写',
                     choose: 'AM',
                     default: '—'
                  },
                  {
                     parameter: 'a',
                     state: 'am/pm',
                     mold: '仅 format 可用，小写',
                     choose: 'am',
                     default: '—'
                  },
                  {
                     parameter: 'timestamp',
                     state: 'JS时间戳',
                     mold: '仅 value-format 可用；组件绑定值为number类型',
                     choose: '1483326245000',
                     default: '—'
                  }
                ],
                column: [
                  {
                     label: '格式',
                     prop: 'parameter'
                  },
                  {
                     label: '含义',
                     prop: 'state'
                  },
                  {
                     label: '备注',
                     prop: 'mold'
                  },
                  {
                     label: '举例',
                     prop: 'choose'
                  }
                ]
            },
            value10: '',
            value11: '',
            value12: '',
            value13: [],
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
    }
  }
</script>