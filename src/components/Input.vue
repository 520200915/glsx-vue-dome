<template>
   <div class="box input">
        <h2>Input 输入框</h2>
        <p>通过鼠标或键盘输入字符</p>
        <h3>基础用法</h3>
        <Code>
            <template slot="source">
                <gl-input v-model="input" placeholder="请输入内容"></gl-input>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">input</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>禁用状态</h3>
        <Code>
            <template slot="source">
                <gl-input
                    placeholder="请输入内容"
                    v-model="input1"
                    :disabled="true">
                </gl-input>
            </template>
            <template slot='description'>
                <p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input1"</span>
                        <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">input1</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>可清空</h3>
        <Code>
            <template slot="source">
                <gl-input
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
                </gl-input>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input1"</span>
                        <span class="hljs-attr">clearable</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">input10</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>带 icon 的输入框</h3>
        <p>带有图标标记输入类型</p>
        <Code>
            <template slot="source">
                <div class="demo-input-suffix">
                    属性方式：
                    <gl-input
                        placeholder="请选择日期"
                        suffix-icon="el-icon-date"
                        v-model="input2">
                    </gl-input>
                    <gl-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="input21">
                    </gl-input>
                </div>
                <div class="demo-input-suffix">
                    slot 方式：
                    <gl-input
                        placeholder="请选择日期"
                        v-model="input22">
                        <i slot="suffix" class="el-input__icon el-icon-date"></i>
                    </gl-input>
                    <gl-input
                        placeholder="请输入内容"
                        v-model="input23">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </gl-input>
                </div>
            </template>
            <template slot="description">
                <p>可以通过 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-input-suffix"</span>&gt;</span>
                        属性方式：
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择日期"</span>
                            <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">"el-icon-date"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">prefix-icon</span>=<span class="hljs-string">"el-icon-search"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input21"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-input-suffix"</span>&gt;</span>
                        slot 方式：
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择日期"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input22"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"suffix"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-input__icon el-icon-date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input23"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"prefix"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-input__icon el-icon-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">input2</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input21</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input22</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input23</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>文本域</h3>
        <p>用于输入多行文本信息，通过将 <code>type</code> 属性的值指定为 textarea。</p>
        <Code>
            <template slot="source">
                <gl-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
                </gl-input>
            </template>
            <template slot="description">
                <p>文本域高度可通过 <code>rows</code> 属性控制</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span>
                        <span class="hljs-attr">:rows</span>=<span class="hljs-string">"2"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"textarea"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                             <span class="hljs-attr">textarea</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>可自适应文本高度的文本域</h3>
        <p>通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数。</p>
        <Code>
            <template slot="source">
                <gl-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="textarea2">
                </gl-input>
                <div style="margin: 20px 0;"></div>
                <gl-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea3">
                </gl-input>
            </template>
            <template slot="description">
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span>
                        <span class="hljs-attr">autosize</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"textarea2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin: 20px 0;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span>
                        <span class="hljs-attr">:autosize</span>=<span class="hljs-string">"{ minRows: 2, maxRows: 4}"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"textarea3"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">textarea2</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">textarea3</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>复合型输入框</h3>
        <p>可前置或后置元素，一般为标签或按钮</p>
        <Code>
            <template slot="source">
               <div>
                <gl-input placeholder="请输入内容" v-model="input3">
                    <template slot="prepend">Http://</template>
                </gl-input>
                </div>
                <div style="margin-top: 15px;">
                <gl-input placeholder="请输入内容" v-model="input4">
                    <template slot="append">.com</template>
                </gl-input>
                </div>
                <div style="margin-top: 15px;">
                <gl-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                    <gl-select v-model="select" slot="prepend" placeholder="请选择">
                    <gl-option label="餐厅名" value="1"></gl-option>
                    <gl-option label="订单号" value="2"></gl-option>
                    <gl-option label="用户电话" value="3"></gl-option>
                    </gl-select>
                    <gl-button slot="append" icon="el-icon-search"></gl-button>
                </gl-input>
                </div>
            </template>
            <template slot="description">
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input3"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"prepend"</span>&gt;</span>Http://<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 15px;"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input4"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"append"</span>&gt;</span>.com<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 15px;"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input5"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-with-select"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"select"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"prepend"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"餐厅名"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-option</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"订单号"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-option</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"用户电话"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-option</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-select</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"append"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                        <span class="hljs-selector-class">.el-select</span> <span class="hljs-selector-class">.el-input</span> {
                            <span class="hljs-attribute">width</span>: <span class="hljs-number">130px</span>;
                        }
                        <span class="hljs-selector-class">.input-with-select</span> <span class="hljs-selector-class">.el-input-group__prepend</span> {
                            <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;
                        }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">input3</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input4</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input5</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">select</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>尺寸</h3>
        <Code>
            <template slot='source'>
                <div class="demo-input-size">
                    <gl-input
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input6">
                    </gl-input>
                    <gl-input
                        size="medium"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input7">
                    </gl-input>
                    <gl-input
                        size="small"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input8">
                    </gl-input>
                    <gl-input
                        size="mini"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input9">
                    </gl-input>
                </div>
            </template>
            <template slot='description'>
                <p>可通过 <code>size</code> 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-input-size"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">"el-icon-date"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input6"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">"el-icon-date"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input7"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">"el-icon-date"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input8"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                            <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">"el-icon-date"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input9"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">input6</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input7</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input8</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">input9</span>: <span class="hljs-string">''</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>带输入建议</h3>
        <p>根据输入内容提供对应的输入建议</p>
        <Code>
            <template slot='source'>
                <gl-row class="demo-autocomplete">
                    <gl-col :span="12">
                        <div class="sub-title">激活即列出输入建议</div>
                        <gl-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        ></gl-autocomplete>
                    </gl-col>
                    <gl-col :span="12">
                        <div class="sub-title">输入后匹配输入建议</div>
                        <gl-autocomplete
                        class="inline-input"
                        v-model="state2"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                        ></gl-autocomplete>
                    </gl-col>
                </gl-row>
            </template>
            <template slot='description'>
                <p>autocomplete 是一个可带输入建议的输入框组件，<code>fetch-suggestions</code> 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-autocomplete"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sub-title"</span>&gt;</span>激活即列出输入建议<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-autocomplete</span>
                            <span class="hljs-attr">class</span>=<span class="hljs-string">"inline-input"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state1"</span>
                            <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearch"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
                            &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-autocomplete</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sub-title"</span>&gt;</span>输入后匹配输入建议<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-autocomplete</span>
                            <span class="hljs-attr">class</span>=<span class="hljs-string">"inline-input"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state2"</span>
                            <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearch"</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                            <span class="hljs-attr">:trigger-on-focus</span>=<span class="hljs-string">"false"</span>
                            <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
                            &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-autocomplete</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">restaurants</span>: [],
                                <span class="hljs-attr">state1</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">state2</span>: <span class="hljs-string">''</span>
                            };
                        },
                        <span class="hljs-attr">methods</span>: {
                            querySearch(queryString, cb) {
                                <span class="hljs-keyword">var</span> restaurants = <span class="hljs-keyword">this</span>.restaurants;
                                <span class="hljs-keyword">var</span> results = queryString ? restaurants.filter(<span class="hljs-keyword">this</span>.createFilter(queryString)) : restaurants;
                                <span class="hljs-comment">// 调用 callback 返回建议列表的数据</span>
                                cb(results);
                            },
                            createFilter(queryString) {
                                <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">restaurant</span>) =&gt;</span> {
                                <span class="hljs-keyword">return</span> (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === <span class="hljs-number">0</span>);
                                };
                            },
                            loadAll() {
                                <span class="hljs-keyword">return</span> [
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"三全鲜食（北新泾店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Hot honey 首尔炸鸡（仙霞路）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区淞虹路661号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新旺角茶餐厅"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"泷千家(天山西路店)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路438号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"胖仙女纸杯蛋糕（上海凌空店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"贡茶"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路633号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"豪大大香鸡排超级奶爸"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区曹安公路曹安路1685号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"茶芝兰（奶茶，手抓饼）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区同普路1435号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"十二泷町"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市北翟路1444弄81号B幢-107"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"星移浓缩咖啡"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区新郁路817号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阿姨奶茶/豪大大"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安路1611号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新麦甜四季甜品炸鸡"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安公路2383弄55号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Monica摩托主题咖啡店"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浮生若茶（凌空soho店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海长宁区金钟路968号9号楼地下一层"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"NONO JUICE  鲜榨果汁"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路119号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"CoCo都可(北新泾店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"快乐柠檬（神州智慧店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路567号1层R117号店铺"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Merci Paul cafe"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"猫山王（西郊百联店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"枪会山"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区棕榈路"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"纵食"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"元丰天山花园(东门) 双流路267号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"钱记"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹杯加"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区通协路"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"唦哇嘀咖"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(西郊百联)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号1305室"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(近铁广场)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"鲜果榨汁（金沙江路和美广店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"开心丽果（缤谷店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区威宁路天山路341号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"超级鸡车（丰庄路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区丰庄路240号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"妙生活果园（北新泾店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"香宜度麻辣香锅"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区淞虹路148号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"凡仔汉堡（老真北路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区老真北路160号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"港式小铺"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"蜀香源麻辣香锅（剑河路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"剑河路443-1"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"北京饺子馆"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区北新泾街道天山西路490-1号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"饭典*新简餐（凌空SOHO店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"焦耳·川式快餐（金钟路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市金钟路633号地下一层甲部"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"动力鸡车"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路299弄3号101B"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浏阳蒸菜"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路430号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"四海游龙（天山西路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"樱花食堂（凌空店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹分米客家传统调制米粉(天山店)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路428号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"福荣祥烧腊（平溪路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区协和路福泉路255弄57-73号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"速记黄焖鸡米饭"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"红辣椒麻辣烫"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路492号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"(小杨生煎)西郊百联餐厅"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号百联2楼"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阳阳麻辣烫"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路389号"</span> },
                                    { <span class="hljs-string">"value"</span>: <span class="hljs-string">"南拳妈妈龙虾盖浇饭"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> }
                                ];
                            },
                            handleSelect(item) {
                                <span class="hljs-built_in">console</span>.log(item);
                            }
                        },
                            mounted() {
                            <span class="hljs-keyword">this</span>.restaurants = <span class="hljs-keyword">this</span>.loadAll();
                            }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <!-- <h3>自定义模板</h3>
        <Code>
            <template slot='source'>
                <gl-autocomplete
                    class="my-autocomplete"
                    popper-class="my-autocomplete"
                    v-model="state3"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect">
                    <i
                        class="el-icon-edit el-input__icon"
                        slot="suffix"
                        @click="handleIconClick">
                    </i>
                </gl-autocomplete>
            </template>
            <template slot='description'>
                <p>使用<code>scoped slot</code>自定义输入建议的模板。该 scope 的参数为<code>item</code>，表示当前输入建议对象。</p>
            </template>
            <template slot='highlight'>
            </template>
        </Code> -->
        <h3>远程搜索</h3>
        <p>从服务端搜索数据</p>
        <Code>
            <template slot='source'>
                <gl-autocomplete
                v-model="state4"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
                ></gl-autocomplete>
            </template>
            <template slot='description'>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-autocomplete</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"state4"</span>
                        <span class="hljs-attr">:fetch-suggestions</span>=<span class="hljs-string">"querySearchAsync"</span>
                        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
                        <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
                    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-autocomplete</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">restaurants</span>: [],
                                <span class="hljs-attr">state4</span>: <span class="hljs-string">''</span>,
                                <span class="hljs-attr">timeout</span>:  <span class="hljs-literal">null</span>
                            };
                        },
                        <span class="hljs-attr">methods</span>: {
                            loadAll() {
                                <span class="hljs-keyword">return</span> [
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"三全鲜食（北新泾店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Hot honey 首尔炸鸡（仙霞路）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区淞虹路661号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新旺角茶餐厅"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路988号创邑金沙谷6号楼113"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"泷千家(天山西路店)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路438号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"胖仙女纸杯蛋糕（上海凌空店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"贡茶"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路633号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"豪大大香鸡排超级奶爸"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区曹安公路曹安路1685号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"茶芝兰（奶茶，手抓饼）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区同普路1435号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"十二泷町"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市北翟路1444弄81号B幢-107"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"星移浓缩咖啡"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区新郁路817号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阿姨奶茶/豪大大"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安路1611号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"新麦甜四季甜品炸鸡"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区曹安公路2383弄55号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Monica摩托主题咖啡店"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浮生若茶（凌空soho店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海长宁区金钟路968号9号楼地下一层"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"NONO JUICE  鲜榨果汁"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路119号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"CoCo都可(北新泾店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"快乐柠檬（神州智慧店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路567号1层R117号店铺"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"Merci Paul cafe"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区光复西路丹巴路28弄6号楼819"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"猫山王（西郊百联店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区仙霞西路88号第一层G05-F01-1-306"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"枪会山"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区棕榈路"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"纵食"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"元丰天山花园(东门) 双流路267号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"钱记"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹杯加"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区通协路"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"唦哇嘀咖"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(西郊百联)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号1305室"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"爱茜茜里(近铁广场)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"鲜果榨汁（金沙江路和美广店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路2239号金沙和美广场B1-10-6"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"开心丽果（缤谷店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区威宁路天山路341号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"超级鸡车（丰庄路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市嘉定区丰庄路240号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"妙生活果园（北新泾店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区新渔路144号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"香宜度麻辣香锅"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区淞虹路148号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"凡仔汉堡（老真北路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市普陀区老真北路160号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"港式小铺"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"蜀香源麻辣香锅（剑河路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"剑河路443-1"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"北京饺子馆"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区北新泾街道天山西路490-1号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"饭典*新简餐（凌空SOHO店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号9号楼地下一层9-83室"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"焦耳·川式快餐（金钟路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市金钟路633号地下一层甲部"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"动力鸡车"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路299弄3号101B"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"浏阳蒸菜"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路430号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"四海游龙（天山西路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"樱花食堂（凌空店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区金钟路968号15楼15-105室"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"壹分米客家传统调制米粉(天山店)"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路428号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"福荣祥烧腊（平溪路店）"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区协和路福泉路255弄57-73号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"速记黄焖鸡米饭"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区北新泾街道金钟路180号1层01号摊位"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"红辣椒麻辣烫"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"上海市长宁区天山西路492号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"(小杨生煎)西郊百联餐厅"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"长宁区仙霞西路88号百联2楼"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"阳阳麻辣烫"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"天山西路389号"</span> },
                                { <span class="hljs-string">"value"</span>: <span class="hljs-string">"南拳妈妈龙虾盖浇饭"</span>, <span class="hljs-string">"address"</span>: <span class="hljs-string">"普陀区金沙江路1699号鑫乐惠美食广场A13"</span> }
                                ];
                            },
                            querySearchAsync(queryString, cb) {
                                <span class="hljs-keyword">var</span> restaurants = <span class="hljs-keyword">this</span>.restaurants;
                                <span class="hljs-keyword">var</span> results = queryString ? restaurants.filter(<span class="hljs-keyword">this</span>.createStateFilter(queryString)) : restaurants;

                                clearTimeout(<span class="hljs-keyword">this</span>.timeout);
                                <span class="hljs-keyword">this</span>.timeout = setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                                cb(results);
                                }, <span class="hljs-number">3000</span> * <span class="hljs-built_in">Math</span>.random());
                            },
                            createStateFilter(queryString) {
                                <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">state</span>) =&gt;</span> {
                                <span class="hljs-keyword">return</span> (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === <span class="hljs-number">0</span>);
                                };
                            },
                            handleSelect(item) {
                                <span class="hljs-built_in">console</span>.log(item);
                            }
                        },
                        mounted() {
                         <span class="hljs-keyword">this</span>.restaurants = <span class="hljs-keyword">this</span>.loadAll();
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>Input Attributes</h3>
        <gl-table :table='Input'></gl-table>
        <h3>Input Slots</h3>
        <gl-table :table='Slot'></gl-table>
        <h3>Input Events</h3>
        <gl-table :table='Events'></gl-table>
        <h3>Autocomplete Attributes</h3>
        <gl-table :table='Autocomplete'></gl-table>
        <h3>Autocomplete Events</h3>
        <gl-table :table='AEvents'></gl-table>
   </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
            input: '',
            input1: '',
            input10: '',
            input2: '',
            input21: '',
            input22: '',
            input23: '',
            textarea: '',
            textarea2: '',
            textarea3: '',
            input3: '',
            input4: '',
            input5: '',
            select: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            restaurants: [],
            state1: '',
            state2: '',
            state3: '',
            state4: '',
            Input: {
                data: [
                    {
                        parameter: 'type',
                        state: '类型',
                        mold: 'string',
                        choose: 'text，textarea 和其他 原生 input 的 type 值',
                        default: 'text'
                    },
                    {
                        parameter: 'value',
                        state: '绑定值',
                        mold: 'string / number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'maxlength',
                        state: '原生属性，最大输入长度',
                        mold: 'number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'minlength',
                        state: '原生属性，最小输入长度',
                        mold: 'number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'placeholder',
                        state: '输入框占位文本',
                        mold: 'string',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'clearable',
                        state: '是否可清空',
                        mold: 'boolean',
                        choose: '-',
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
                        parameter: 'size',
                        state: '输入框尺寸，只在 type!="textarea" 时有效',
                        mold: 'string',
                        choose: 'medium / small / mini',
                        default: '—'
                    },
                    {
                        parameter: 'prefix-icon',
                        state: '输入框头部图标',
                        mold: 'string',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'suffix-icon',
                        state: '输入框尾部图标',
                        mold: 'string',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'rows',
                        state: '输入框行数，只对 type="textarea" 有效',
                        mold: 'number',
                        choose: '—',
                        default: '2'
                    },
                    {
                        parameter: 'autosize',
                        state: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
                        mold: 'boolean / object',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'auto-complete',
                        state: '原生属性，自动补全',
                        mold: 'string',
                        choose: 'on, off',
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
                        parameter: 'readonly',
                        state: '原生属性，是否只读',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'max',
                        state: '原生属性，设置最大值',
                        mold: '—',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'min',
                        state: '原生属性，设置最小值',
                        mold: '—',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'step',
                        state: '原生属性，设置输入字段的合法数字间隔',
                        mold: '—',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'resize',
                        state: '控制是否能被用户缩放',
                        mold: 'string',
                        choose: 'none, both, horizontal, vertical',
                        default: '—'
                    },
                    {
                        parameter: 'autofocus',
                        state: '原生属性，自动获取焦点',
                        mold: 'boolean',
                        choose: 'true, false',
                        default: 'false'
                    },
                    {
                        parameter: 'form',
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
                    },
                    {
                        parameter: 'tabindex',
                        state: '输入框的tabindex',
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
                    width: '180'
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
                           parameter: 'prefix',
                           state: '输入框头部内容，只对 type="text" 有效'
                        },
                        {
                           parameter: 'suffix',
                           state: '输入框尾部内容，只对 type="text" 有效'
                        },
                        {
                           parameter: 'prepend',
                           state: '输入框前置内容，只对 type="text" 有效'
                        },
                        {
                           parameter: 'append',
                           state: '输入框后置内容，只对 type="text" 有效'
                        }
                      ],
                column: [
                           {
                             label: 'name',
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
                     parameter: 'blur',
                     state: '在 Input 失去焦点时触发',
                     mold: '(event: Event)'
                  },
                  {
                     parameter: 'focus',
                     state: '在 Input 获得焦点时触发',
                     mold: '(event: Event)'
                  },
                  {
                     parameter: 'change',
                     state: '在 Input 值改变时触发',
                     mold: '(value: string | number)'
                  },
                  {
                     parameter: 'clear',
                     state: '在点击由 clearable 属性生成的清空按钮时触发',
                     mold: '—'
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
            },
            Autocomplete: {
                data: [
                  {
                     parameter: 'placeholder',
                     state: '输入框占位文本',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'disabled',
                     state: '禁用',
                     mold: 'boolean	',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'value-key',
                     state: '输入建议对象中用于显示的键名',
                     mold: 'string',
                     choose: '—',
                     default: 'value'
                  },
                  {
                     parameter: 'value',
                     state: '必填值，输入绑定值',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'debounce',
                     state: '获取输入建议的去抖延时',
                     mold: 'number',
                     choose: '—',
                     default: '300'
                  },
                  {
                     parameter: 'placement',
                     state: '菜单弹出位置',
                     mold: 'string',
                     choose: 'top / top-start / top-end / bottom / bottom-start / bottom-end',
                     default: 'bottom-start'
                  },
                  {
                     parameter: 'fetch-suggestions',
                     state: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
                     mold: 'Function(queryString, callback)',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'popper-class',
                     state: 'Autocomplete 下拉列表的类名',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'trigger-on-focus',
                     state: '是否在输入框 focus 时显示建议列表',
                     mold: 'boolean',
                     choose: '—',
                     default: 'true'
                  },
                  {
                     parameter: 'name',
                     state: '原生属性',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'select-when-unmatched',
                     state: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'label',
                     state: '输入框关联的label文字',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'prefix-icon',
                     state: '输入框头部图标',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'suffix-icon',
                     state: '输入框尾部图标',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'hide-loading',
                     state: '是否隐藏远程加载时的加载图标',
                     mold: 'boolean',
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
            AEvents: {
                data: [
                  {
                     parameter: 'select',
                     state: '点击选中建议项时触发',
                     mold: '选中建议项',
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
       querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 4000 * Math.random());
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createStateFilter(queryString) {
        return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item)
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style scoped scss>

    .demo-input-suffix .el-input{
        width: 180px;
        display: inline-block;
        margin-right: 15px;
    }
    .demo-input-suffix{
        margin-bottom: 15px;
    }
    .demo-input-size .el-input{
        vertical-align: top;
        width: 180px;
        margin: 0 10px 10px 0;
    }
    .demo-autocomplete{
        text-align: center;
    }
    .demo-autocomplete .sub-title{
            margin-bottom: 10px;
        font-size: 14px;
        color: #8492a6;
    }
    .demo-autocomplete .el-col:not(:last-child){
        border-right: 1px solid rgba(224,230,237,.5);
    }
    
</style>