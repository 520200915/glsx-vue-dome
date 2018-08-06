<template>
    <div class="box">
        <h2>Radio 单选框</h2>
        <p>在一组备选项中进行单选</p>
        <h3>基础用法</h3>
        <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        <Code>
            <template slot="source">
                <gl-radio v-model="radio" label="1" >备选项</gl-radio>
                <gl-radio v-model="radio" label="2">备选项</gl-radio>
            </template>
            <template slot="description">
                <p>要使用 Radio 组件，只需要设置<code>v-model</code>绑定变量，选中意味着变量的值为相应 Radio <code>label</code>属性的值，<code>label</code>可以是<code>String</code>、<code>Number</code>或<code>Boolean</code>。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data () {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">radio</span>: <span class="hljs-string">'1'</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>禁用状态</h3>
        <p>单选框不可用的状态。</p>
        <Code>
            <template slot="source">
                <gl-radio disabled v-model="radio1" label="禁用">备选项</gl-radio>
                <gl-radio disabled v-model="radio1" label="选中且禁用">备选项</gl-radio>
            </template>
            <template slot="description">
               <p>只要在<code>gl-radio</code>元素中设置<code>disabled</code>属性即可，它接受一个<code>Boolean</code>，<code>true</code>为禁用。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> disabled <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio1"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"禁用"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> disabled <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio1"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"选中且禁用"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data () {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">radio1</span>: <span class="hljs-string">'选中且禁用'</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>单选框组</h3>
        <p>适用于在多个互斥的选项中选择的场景</p>
        <Code>
            <template slot="source">
                <gl-radio-group v-model="radio2">
                    <gl-radio  label="3">备选项</gl-radio>
                    <gl-radio  label="6">备选项</gl-radio>
                    <gl-radio  label="9">备选项</gl-radio>
                </gl-radio-group>
            </template>
            <template slot="description">
                <p>结合<code>gl-radio-group</code>元素和子元素<code>gl-radio</code>可以实现单选组，在<code>gl-radio-group</code>中绑定<code>v-model</code>，在<code>gl-radio</code>中设置好<code>label</code>即可，无需再给每一个<code>gl-radio</code>绑定变量，另外，还提供了<code>change</code>事件来响应变化，它会传入一个参数<code>value</code>。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio2"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"3"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"6"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"9"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                            data () {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">radio2</span>: <span class="hljs-number">'3'</span>
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>按钮样式</h3>
        <p>按钮样式的单选组合。</p>
        <Code>
            <template slot="source">
                <div>
                    <gl-radio-group v-model="radio3">
                        <gl-radio-button  label="深圳"></gl-radio-button>
                        <gl-radio-button  label="北京"></gl-radio-button>
                        <gl-radio-button  label="广州"></gl-radio-button>
                        <gl-radio-button  label="上海"></gl-radio-button>
                    </gl-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <gl-radio-group v-model="radio4" size="medium">
                        <gl-radio-button  label="深圳"></gl-radio-button>
                        <gl-radio-button  label="北京"></gl-radio-button>
                        <gl-radio-button  label="广州"></gl-radio-button>
                        <gl-radio-button  label="上海"></gl-radio-button>
                    </gl-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <gl-radio-group v-model="radio5" size="small">
                        <gl-radio-button  label="深圳"></gl-radio-button>
                        <gl-radio-button  label="北京"></gl-radio-button>
                        <gl-radio-button  label="广州"></gl-radio-button>
                        <gl-radio-button  label="上海"></gl-radio-button>
                    </gl-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <gl-radio-group v-model="radio6" size="mini">
                        <gl-radio-button  label="深圳"></gl-radio-button>
                        <gl-radio-button  label="北京"></gl-radio-button>
                        <gl-radio-button  label="广州"></gl-radio-button>
                        <gl-radio-button  label="上海"></gl-radio-button>
                    </gl-radio-group>
                </div>
            </template>
            <template slot="description">
               <p>只需要把<code>gl-radio</code>元素换成<code>gl-radio-button</code>元素即可，此外，还提供了<code>size</code>属性。(需嵌套在 <code>gl-radio-group</code> 里)</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio3"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio5"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span> <span class="hljs-attr">disabled</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio6"</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"深圳"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"北京"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"广州"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"上海"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data () {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">radio3</span>: <span class="hljs-string">'深圳'</span>,
                            <span class="hljs-attr">radio4</span>: <span class="hljs-string">'深圳'</span>,
                            <span class="hljs-attr">radio5</span>: <span class="hljs-string">'深圳'</span>,
                            <span class="hljs-attr">radio6</span>: <span class="hljs-string">'深圳'</span>
                        };
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>带有边框</h3>
        <Code>
            <template slot="source">
                <div>
                    <gl-radio v-model="radio7" label="1" border>备选项1</gl-radio>
                    <gl-radio v-model="radio7" label="2" border>备选项2</gl-radio>
                </div>
                <div style="margin-top: 20px">
                    <gl-radio v-model="radio8" label="1" border size="medium">备选项1</gl-radio>
                    <gl-radio v-model="radio8" label="2" border size="medium">备选项2</gl-radio>
                </div>
                <div style="margin-top: 20px">
                    <gl-radio-group v-model="radio9" size="small">
                    <gl-radio label="1" border>备选项1</gl-radio>
                    <gl-radio label="2" border disabled>备选项2</gl-radio>
                    </gl-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <gl-radio-group v-model="radio10" size="mini" disabled>
                    <gl-radio label="1" border>备选项1</gl-radio>
                    <gl-radio label="2" border>备选项2</gl-radio>
                    </gl-radio-group>
                </div>
            </template>
            <template slot="description">
                <p>设置<code>border</code>属性可以渲染为带有边框的单选框。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio7"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">border</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio7"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">border</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio8"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio8"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio9"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">border</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"radio10"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">disabled</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">border</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">border</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data () {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">radio7</span>: <span class="hljs-string">'1'</span>,
                                <span class="hljs-attr">radio8</span>: <span class="hljs-string">'1'</span>,
                                <span class="hljs-attr">radio9</span>: <span class="hljs-string">'1'</span>,
                                <span class="hljs-attr">radio10</span>: <span class="hljs-string">'1'</span>
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>Radio Attributes</h3>
        <gl-table :table='Radio'></gl-table>
        <h3>Radio Events</h3>
        <gl-table :table='Events'></gl-table>
        <h3>Radio-group Attributes</h3>
        <gl-table :table='RadioGroup'></gl-table>
        <h3>Radio-group Events</h3>
        <gl-table :table='Events'></gl-table>
        <h3>Radio-button Attributes</h3>
        <gl-table :table='RadioButton'></gl-table>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Radio',
    data () {
        return {
            radio: '1',
            radio1: '选中且禁用',
            radio2: '3',
            radio3: '深圳',
            radio4: '深圳',
            radio5: '深圳',
            radio6: '深圳',
            radio7: '1',
            radio8: '1',
            radio9: '1',
            radio10: '1',
            Radio: {
                data: [
                    {
                        parameter: 'label',
                        state: 'Radio 的 value',
                        mold: 'string / number / boolean',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'disabled',
                        state: '是否禁用',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'border',
                        state: '是否显示边框',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'size',
                        state: 'Radio 的尺寸，仅在 border 为真时有效',
                        mold: 'string',
                        choose: 'medium / small / mini',
                        default: '—'
                    },
                    {
                        parameter: 'name',
                        state: '原生 name 属性',
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
                        state: '绑定值变化时触发的事件',
                        mold: '选中的 Radio label 值'
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
            RadioGroup: {
                data: [
                    {
                        parameter: 'size',
                        state: '单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效',
                        mold: 'string',
                        choose: 'medium / small / mini',
                        default: '—'
                    },
                    {
                        parameter: 'disabled',
                        state: '是否禁用',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'text-color',
                        state: '按钮形式的 Radio 激活时的文本颜色',
                        mold: 'string',
                        choose: '—',
                        default: '#ffffff'
                    },
                    {
                        parameter: 'fill',
                        state: '按钮形式的 Radio 激活时的填充色和边框色',
                        mold: 'string',
                        choose: '—',
                        default: '#409EFF'
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
                        width: '350'
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
            RadioButton: {
                data: [
                    {
                        parameter: 'label',
                        state: 'Radio 的 value',
                        mold: 'string / number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'disabled',
                        state: '是否禁用',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'name',
                        state: '原生 name 属性',
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
        }
    }
  }
</script>