<template>
    <div class="box">
        <h2>Checkbox 多选框</h2>
        <p>一组备选项中进行多选</p>
        <h3>基础用法</h3>
        <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
        <Code>
              <template slot="source">
                <gl-checkbox v-model="checked">备选项</gl-checkbox>
            </template>
            <template slot="description">
                <p>在<code>gl-checkbox</code>元素中定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-comment">&lt;!-- `checked` 为 true 或 false --&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>
                            };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>禁用状态</h3>
        <p>多选框不可用状态。</p>
        <Code>
              <template slot="source">
                    <gl-checkbox v-model="checked1" disabled>备选项1</gl-checkbox>
                    <gl-checkbox v-model="checked2" disabled>备选项</gl-checkbox>
            </template>
            <template slot="description">
                <p>设置<code>disabled</code>属性即可。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked1"</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked2"</span> <span class="hljs-attr">disabled</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                    <span class="hljs-attr">checked1</span>: <span class="hljs-literal">false</span>,
                                    <span class="hljs-attr">checked2</span>: <span class="hljs-literal">true</span>
                                }
                            }
                        }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>多选框组</h3>
        <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
        <Code>
              <template slot="source">
                <gl-checkbox-group v-model="checkList">
                    <gl-checkbox label="复选框 A"></gl-checkbox>
                    <gl-checkbox label="复选框 B"></gl-checkbox>
                    <gl-checkbox label="复选框 C"></gl-checkbox>
                    <gl-checkbox label="禁用" disabled></gl-checkbox>
                    <gl-checkbox label="选中且禁用" disabled></gl-checkbox>
                </gl-checkbox-group>
            </template>
            <template slot="description">
                <p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group 中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>gl-checkbox</code> 的 <code>label</code>属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。<code>label</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkList"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"复选框 A"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"复选框 B"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"复选框 C"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"禁用"</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"选中且禁用"</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                            data () {
                                <span class="hljs-keyword">return</span> {
                                    <span class="hljs-attr">checkList</span>: [<span class="hljs-string">'选中且禁用'</span>,<span class="hljs-string">'复选框 A'</span>]
                                }
                            }
                        }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>indeterminate 状态</h3>
        <p><code>indeterminate</code> 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
        <Code>
              <template slot="source">
                <gl-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</gl-checkbox>
                <div style="margin: 15px 0;"></div>
                <gl-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <gl-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</gl-checkbox>
                </gl-checkbox-group>       
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">:indeterminate</span>=<span class="hljs-string">"isIndeterminate"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkAll"</span> <span class="hljs-attr">:change</span>=<span class="hljs-string">"handleCheckAllChange"</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin: 15px 0;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkedCities"</span> <span class="hljs-attr">:change</span>=<span class="hljs-string">"handleCheckedCitiesChange"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span>{<span>{</span>city<span>}</span>}<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">const</span> cityOptions = [<span class="hljs-string">'深圳'</span>, <span class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span class="hljs-string">'上海'</span>];
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">checkAll</span>: <span class="hljs-literal">false</span>,
                                <span class="hljs-attr">checkedCities</span>: [<span class="hljs-string">'深圳'</span>, <span class="hljs-string">'广州'</span>],
                                <span class="hljs-attr">cities</span>: cityOptions,
                                <span class="hljs-attr">isIndeterminate</span>: <span class="hljs-literal">true</span>
                            }
                        },
                        <span class="hljs-attr">methods</span>: {
                            handleCheckAllChange(val) {
                                <span class="hljs-keyword">this</span>.checkedCities = val ? cityOptions : []
                                <span class="hljs-keyword">this</span>.isIndeterminate = <span class="hljs-literal">false</span>
                            },
                            handleCheckedCitiesChange(value) {
                                <span class="hljs-keyword">let</span> checkedCount = value.length
                                <span class="hljs-keyword">this</span>.checkAll = checkedCount === <span class="hljs-keyword">this</span>.cities.length
                                <span class="hljs-keyword">this</span>.isIndeterminate = checkedCount &gt; <span class="hljs-number">0</span> &amp;&amp; checkedCount &lt; <span class="hljs-keyword">this</span>.cities.length
                            }
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>可选项目数量的限制</h3>
        <p>使用 <code>min</code> 和 <code>max</code> 属性能够限制可以被勾选的项目的数量。</p>
        <Code>
              <template slot="source">
                 <gl-checkbox-group 
                    v-model="checkedCities1"
                    :min="1"
                    :max="2">
                    <gl-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</gl-checkbox>
                </gl-checkbox-group>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> 
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkedCities1"</span>
                            <span class="hljs-attr">:min</span>=<span class="hljs-string">"1"</span>
                            <span class="hljs-attr">:max</span>=<span class="hljs-string">"2"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span>{<span>{</span>city}}<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">const</span> cityOptions = [<span class="hljs-string">'深圳'</span>, <span class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span class="hljs-string">'上海'</span>];
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">checkedCities1</span>: [<span class="hljs-string">'上海'</span>, <span class="hljs-string">'北京'</span>],
                                <span class="hljs-attr">cities</span>: cityOptions
                            };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>按钮样式</h3>
        <p>按钮样式的多选组合。</p>
        <Code>
            <template slot="source">
                <div>
                <gl-checkbox-group v-model="checkboxGroup1">
                    <gl-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</gl-checkbox-button>
                </gl-checkbox-group>
            </div>
            <div style="margin-top: 20px">
                <gl-checkbox-group v-model="checkboxGroup2" size="medium">
                <gl-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</gl-checkbox-button>
                </gl-checkbox-group>
            </div>
            <div style="margin-top: 20px">
                <gl-checkbox-group v-model="checkboxGroup3" size="small">
                <gl-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</gl-checkbox-button>
                </gl-checkbox-group>
            </div>
            <div style="margin-top: 20px">
                <gl-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                <gl-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</gl-checkbox-button>
                </gl-checkbox-group>
            </div>
            </template>
            <template slot="description">
            <p>只需要把<code>gl-checkbox</code>元素替换为<code>gl-checkbox-button</code>元素即可。此外，还提供了<code>size</code>属性。</p>
            </template>
            <template slot="highlight">
            <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup1"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span>{<span>{</span>city}}<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup2"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span>{<span>{</span>city}}<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup3"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"city === '北京'"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span>{<span>{</span>city}<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">disabled</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-button</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"city in cities"</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"city"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"city"</span>&gt;</span>{<span>{</span>city}}<span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <span class="hljs-keyword">const</span> cityOptions = [<span class="hljs-string">'深圳'</span>, <span class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span class="hljs-string">'上海'</span>];
            <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                data () {
                    <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">checkboxGroup1</span>: [<span class="hljs-string">'深圳'</span>],
                        <span class="hljs-attr">checkboxGroup2</span>: [<span class="hljs-string">'深圳'</span>],
                        <span class="hljs-attr">checkboxGroup3</span>: [<span class="hljs-string">'深圳'</span>],
                        <span class="hljs-attr">checkboxGroup4</span>: [<span class="hljs-string">'深圳'</span>],
                        <span class="hljs-attr">cities</span>: cityOptions
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
                    <gl-checkbox v-model="checked3" label="备选项1" border></gl-checkbox>
                    <gl-checkbox v-model="checked4" label="备选项2" border></gl-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <gl-checkbox v-model="checked5" label="备选项1" border size="medium"></gl-checkbox>
                    <gl-checkbox v-model="checked6" label="备选项2" border size="medium"></gl-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <gl-checkbox-group v-model="checkboxGroup5" size="small">
                    <gl-checkbox label="备选项1" border></gl-checkbox>
                    <gl-checkbox label="备选项2" border disabled></gl-checkbox>
                    </gl-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <gl-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                    <gl-checkbox label="备选项1" border></gl-checkbox>
                    <gl-checkbox label="备选项2" border></gl-checkbox>
                    </gl-checkbox-group>
                </div>
            </template>
            <template slot="description">
                <p>设置<code>border</code>属性可以渲染为带有边框的多选框。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked3"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项1"</span> <span class="hljs-attr">border</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked4"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项2"</span> <span class="hljs-attr">border</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked5"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项1"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checked6"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项2"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup5"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项1"</span> <span class="hljs-attr">border</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项2"</span> <span class="hljs-attr">border</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"checkboxGroup6"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">disabled</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项1"</span> <span class="hljs-attr">border</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"备选项2"</span> <span class="hljs-attr">border</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-checkbox-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data () {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">checked3</span>: <span class="hljs-literal">true</span>,
                                <span class="hljs-attr">checked4</span>: <span class="hljs-literal">false</span>,
                                <span class="hljs-attr">checked5</span>: <span class="hljs-literal">false</span>,
                                <span class="hljs-attr">checked6</span>: <span class="hljs-literal">true</span>,
                                <span class="hljs-attr">checkboxGroup5</span>: [],
                                <span class="hljs-attr">checkboxGroup6</span>: []
                            };
                        }
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>Checkbox Attributes</h3>
        <gl-table :table='Checkbox'></gl-table>
        <h3>Checkbox Events</h3>
        <gl-table :table='Events'></gl-table>
        <h3>Checkbox-group Attributes</h3>
        <gl-table :table='CheckboxGroup'></gl-table>
        <h3>Checkbox-group Events</h3>
        <gl-table :table='Events'></gl-table>
        <h3>Checkbox-button Attributes</h3>
        <gl-table :table='CheckboxButton'></gl-table>
    </div> 
</template>

<script type='text/ecmascript-6'>
const cityOptions = ['深圳', '北京', '广州', '上海']
  export default {
    name: '',
    data () {
      return {
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ['选中且禁用','复选框 A'],
            checkAll: false,
            checkedCities: ['深圳', '广州'],
            cities: cityOptions,
            isIndeterminate: true,
            checkedCities1: ['上海', '北京'],
            checkboxGroup1: ['深圳'],
            checkboxGroup2: ['深圳'],
            checkboxGroup3: ['深圳'],
            checkboxGroup4: ['深圳'],
            checked3: true,
            checked4: false,
            checked5: false,
            checked6: true,
            checkboxGroup5: [],
            checkboxGroup6: [],
            Checkbox: {
                data: [
                    {
                        parameter: 'label',
                        state: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
                        mold: 'string / number / boolean',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'true-label',
                        state: '选中时的值',
                        mold: 'string / number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'false-label',
                        state: '没有选中时的值',
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
                        parameter: 'border',
                        state: '是否显示边框',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'size',
                        state: 'Checkbox 的尺寸，仅在 border 为真时有效',
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
                    },
                    {
                        parameter: 'checked',
                        state: '当前是否勾选',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
                    },
                    {
                        parameter: 'indeterminate',
                        state: '设置 indeterminate 状态，只负责样式控制',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
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
                        prop: 'mold',
                        width: '200'
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
            Events: {
                data: [
                     {
                        parameter: 'change',
                        state: '绑定值变化时触发的事件',
                        mold: '更新后的值'
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
            CheckboxGroup: {
                data: [
                    {
                        parameter: 'size',
                        state: 'Checkbox 的尺寸，仅在 border 为真时有效',
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
                        parameter: 'min',
                        state: '可被勾选的 checkbox 的最小数量',
                        mold: 'number',
                        choose: '—',
                        default: '—'
                    },                  
                    {
                        parameter: 'max',
                        state: '可被勾选的 checkbox 的最大数量',
                        mold: 'number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'text-color',
                        state: '按钮形式的 Checkbox 激活时的文本颜色',
                        mold: 'string',
                        choose: '—',
                        default: '#fff'
                    },
                    {
                        parameter: 'fill',
                        state: '按钮形式的 Checkbox 激活时的填充色和边框色',
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
            CheckboxButton: {
                data: [
                    {
                        parameter: 'label',
                        state: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
                        mold: 'string / number / boolean',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'true-label',
                        state: '选中时的值',
                        mold: 'string / number',
                        choose: '—',
                        default: '—'
                    },
                    {
                        parameter: 'false-label',
                        state: '没有选中时的值',
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
                    },
                    {
                        parameter: 'checked',
                        state: '当前是否勾选',
                        mold: 'boolean',
                        choose: '—',
                        default: 'false'
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
                        prop: 'mold',
                        width: '200'
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
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(val) {
        let checkedCount = val.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>