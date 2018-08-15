<template>
  <div class='box'>
    <h2>Transfer 穿梭框</h2>
    <h3>基础用法</h3>
    <Code>
        <template slot='source'>
            <gl-transfer v-model="value1" :data="data"></gl-transfer>
        </template>
        <template slot='description'>
            <p>Transfer 的数据通过 <code>data</code> 属性传入。数据需要是一个对象数组，每个对象有以下属性：<code>key</code> 为数据的唯一性标识，<code>label</code> 为显示文本，<code>disabled</code> 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 <code>v-model</code> 的变量，值为数据项的 <code>key</code> 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 <code>v-model</code> 绑定的变量赋予一个初始值。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-transfer</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-transfer</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">const</span> generateData = <span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
                            <span class="hljs-keyword">const</span> data = [];
                            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">15</span>; i++) {
                            data.push({
                                <span class="hljs-attr">key</span>: i,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">`备选项 <span class="hljs-subst">${ i }</span>`</span>,
                                <span class="hljs-attr">disabled</span>: i % <span class="hljs-number">4</span> === <span class="hljs-number">0</span>
                            });
                            }
                            <span class="hljs-keyword">return</span> data;
                        };
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data</span>: generateData(),
                            <span class="hljs-attr">value1</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">4</span>]
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>可搜索</h3>
    <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
    <Code>
        <template slot='source'>
            <gl-transfer
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                :data="data2">
            </gl-transfer>
        </template>
        <template slot='description'>
            <p>设置 <code>filterable</code> 为 <code>true</code> 即可开启搜索模式。默认情况下，若数据项的 <code>label</code> 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 <code>filter-method</code> 定义自己的搜索逻辑。<code>filter-method</code> 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 <code>true</code>，则会在搜索结果中显示对应的数据项。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-transfer</span>
                        <span class="hljs-attr">filterable</span>
                        <span class="hljs-attr">:filter-method</span>=<span class="hljs-string">"filterMethod"</span>
                        <span class="hljs-attr">filter-placeholder</span>=<span class="hljs-string">"请输入城市拼音"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
                        <span class="hljs-attr">:data</span>=<span class="hljs-string">"data2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-transfer</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">const</span> generateData2 = <span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
                            <span class="hljs-keyword">const</span> data = [];
                            <span class="hljs-keyword">const</span> cities = [<span class="hljs-string">'上海'</span>, <span class="hljs-string">'北京'</span>, <span class="hljs-string">'广州'</span>, <span class="hljs-string">'深圳'</span>, <span class="hljs-string">'南京'</span>, <span class="hljs-string">'西安'</span>, <span class="hljs-string">'成都'</span>];
                            <span class="hljs-keyword">const</span> pinyin = [<span class="hljs-string">'shanghai'</span>, <span class="hljs-string">'beijing'</span>, <span class="hljs-string">'guangzhou'</span>, <span class="hljs-string">'shenzhen'</span>, <span class="hljs-string">'nanjing'</span>, <span class="hljs-string">'xian'</span>, <span class="hljs-string">'chengdu'</span>];
                            cities.forEach(<span class="hljs-function">(<span class="hljs-params">city, index</span>) =&gt;</span> {
                                data.push({
                                    <span class="hljs-attr">label</span>: city,
                                    <span class="hljs-attr">key</span>: index,
                                    <span class="hljs-attr">pinyin</span>: pinyin[index]
                                });
                            });
                            <span class="hljs-keyword">return</span> data;
                        };
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data2</span>: generateData2(),
                            <span class="hljs-attr">value2</span>: [],
                            filterMethod(query, item) {
                                <span class="hljs-keyword">return</span> item.pinyin.indexOf(query) &gt; <span class="hljs-number">-1</span>;
                            }
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>可自定义</h3>
    <p>可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。</p>
    <Code>
        <template slot='source'>
            <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
            <div style="text-align: center">
                <gl-transfer
                style="text-align: left; display: inline-block"
                v-model="value3"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :render-content="renderFunc"
                :titles="['Source', 'Target']"
                :button-texts="['到左边', '到右边']"
                :format="{
                    noChecked: '${total}',
                    hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
                <gl-button class="transfer-footer" slot="left-footer" size="small">操作</gl-button>
                <gl-button class="transfer-footer" slot="right-footer" size="small">操作</gl-button>
                </gl-transfer>
            </div>
            <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
            <div style="text-align: center">
                <gl-transfer
                style="text-align: left; display: inline-block"
                v-model="value4"
                filterable
                :left-default-checked="[2, 3]"
                :right-default-checked="[1]"
                :titles="['Source', 'Target']"
                :button-texts="['到左边', '到右边']"
                :format="{
                    noChecked: '${total}',
                    hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
                <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                <gl-button class="transfer-footer" slot="left-footer" size="small">操作</gl-button>
                <gl-button class="transfer-footer" slot="right-footer" size="small">操作</gl-button>
                </gl-transfer>
            </div>
        </template>
        <template slot='description'>
            <p>可以使用 <code>titles</code>、<code>button-texts</code>、<code>render-content</code> 和 <code>format</code> 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 <code>scoped-slot</code> 进行自定义。对于列表底部的内容区，提供了两个具名 slot：<code>left-footer</code> 和 <code>right-footer</code>。此外，如果希望某些数据项在初始化时就被勾选，可以使用 <code>left-default-checked</code> 和 <code>right-default-checked</code> 属性。最后，本例还展示了 <code>change</code> 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以使用 <code>render-content</code> 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center; margin: 0 0 20px"</span>&gt;</span>使用 render-content 自定义数据项<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-transfer</span>
                        <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: left; display: inline-block"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
                        <span class="hljs-attr">filterable</span>
                        <span class="hljs-attr">:left-default-checked</span>=<span class="hljs-string">"[2, 3]"</span>
                        <span class="hljs-attr">:right-default-checked</span>=<span class="hljs-string">"[1]"</span>
                        <span class="hljs-attr">:render-content</span>=<span class="hljs-string">"renderFunc"</span>
                        <span class="hljs-attr">:titles</span>=<span class="hljs-string">"['Source', 'Target']"</span>
                        <span class="hljs-attr">:button-texts</span>=<span class="hljs-string">"['到左边', '到右边']"</span>
                        <span class="hljs-attr">:format</span>=<span class="hljs-string">"{
                            noChecked: '${total}',
                            hasChecked: '${checked}/${total}'
                        }"</span>
                        <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>
                        <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transfer-footer"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left-footer"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>操作<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transfer-footer"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right-footer"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>操作<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-transfer</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center; margin: 50px 0 20px"</span>&gt;</span>使用 scoped-slot 自定义数据项<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-transfer</span>
                        <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: left; display: inline-block"</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
                        <span class="hljs-attr">filterable</span>
                        <span class="hljs-attr">:left-default-checked</span>=<span class="hljs-string">"[2, 3]"</span>
                        <span class="hljs-attr">:right-default-checked</span>=<span class="hljs-string">"[1]"</span>
                        <span class="hljs-attr">:titles</span>=<span class="hljs-string">"['Source', 'Target']"</span>
                        <span class="hljs-attr">:button-texts</span>=<span class="hljs-string">"['到左边', '到右边']"</span>
                        <span class="hljs-attr">:format</span>=<span class="hljs-string">"{
                            noChecked: '${total}',
                            hasChecked: '${checked}/${total}'
                        }"</span>
                        <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>
                        <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot-scope</span>=<span class="hljs-string">"{ option }"</span>&gt;</span>{<span>{</span> option.key }} - {<span>{</span> option.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transfer-footer"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"left-footer"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>操作<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transfer-footer"</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"right-footer"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>操作<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-transfer</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                    <span class="hljs-selector-class">.transfer-footer</span> {
                        <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">20px</span>;
                        <span class="hljs-attribute">padding</span>: <span class="hljs-number">6px</span> <span class="hljs-number">5px</span>;
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">const</span> generateData = <span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
                                <span class="hljs-keyword">const</span> data = [];
                                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">15</span>; i++) {
                                data.push({
                                    <span class="hljs-attr">key</span>: i,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">`备选项 <span class="hljs-subst">${ i }</span>`</span>,
                                    <span class="hljs-attr">disabled</span>: i % <span class="hljs-number">4</span> === <span class="hljs-number">0</span>
                                });
                                }
                                <span class="hljs-keyword">return</span> data;
                            };
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">data</span>: generateData(),
                                <span class="hljs-attr">value3</span>: [<span class="hljs-number">1</span>],
                                <span class="hljs-attr">value4</span>: [<span class="hljs-number">1</span>],
                                renderFunc(h, option) {
                                    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{ option.key } - { option.label }<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>;
                                }
                            };
                        },

                        <span class="hljs-attr">methods</span>: {
                            handleChange(value, direction, movedKeys) {
                                <span class="hljs-built_in">console</span>.log(value, direction, movedKeys);
                            }
                        }
                    };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>数据项属性别名</h3>
    <p>默认情况下，Transfer 仅能识别数据项中的 <code>key</code>、<code>label</code> 和 <code>disabled</code> 字段。如果你的数据的字段名不同，可以使用 <code>props</code> 属性为它们设置别名。</p>
    <Code>
        <template slot='source'>
            <gl-transfer
                v-model="value5"
                :props="{
                key: 'value',
                label: 'desc'
                }"
                :data="data3">
            </gl-transfer>
        </template>
        <template slot='description'>
            <p>本例中的数据源没有 <code>key</code> 和 <code>label</code> 字段，在功能上与它们相同的字段名为 <code>value</code> 和 <code>desc</code>。因此可以使用<code>props</code> 属性为 <code>key</code> 和 <code>label</code> 设置别名。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-transfer</span>
                        <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
                        <span class="hljs-attr">:props</span>=<span class="hljs-string">"{
                        key: 'value',
                        label: 'desc'
                        }"</span>
                        <span class="hljs-attr">:data</span>=<span class="hljs-string">"data3"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-transfer</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">const</span> generateData3 = <span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
                            <span class="hljs-keyword">const</span> data = [];
                            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">15</span>; i++) {
                            data.push({
                                <span class="hljs-attr">value</span>: i,
                                <span class="hljs-attr">desc</span>: <span class="hljs-string">`备选项 <span class="hljs-subst">${ i }</span>`</span>,
                                <span class="hljs-attr">disabled</span>: i % <span class="hljs-number">4</span> === <span class="hljs-number">0</span>
                            });
                            }
                            <span class="hljs-keyword">return</span> data;
                        };
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data3</span>: generateData3(),
                            <span class="hljs-attr">value5</span>: []
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Slot</h3>
    <gl-table :table='Slot'></gl-table>
    <h3>Scoped Slot</h3>
    <gl-table :table='Scoped'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Transfer',
    data () {
      const generateData = _ => {
        const data = []
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          })
        }
        return data
      }
      const generateData2 = _ => {
        const data = []
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
        cities.forEach((city, index) => {
        data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
        })
        })
        return data
      }
      const generateData3 = _ => {
        const data = []
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          })
        }
        return data;
      }
      return {
        data: generateData(),
        value1: [1, 4],
        data2: generateData2(),
        value2: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        value3: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        },
        data3: generateData3(),
        value5: [],
        table: {
            data: [
              {
                 parameter: 'data',
                 state: 'Transfer 的数据源',
                 mold: 'array[{ key, label, disabled }]',
                 choose: '—',
                 default: '[]'
              },
              {
                 parameter: 'filterable',
                 state: '是否可搜索',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'filter-placeholder',
                 state: '搜索框占位符',
                 mold: 'string',
                 choose: '—',
                 default: '请输入搜索内容'
              },
              {
                 parameter: 'filter-method',
                 state: '自定义搜索方法',
                 mold: 'function',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'target-order',
                 state: '右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前',
                 mold: 'string',
                 choose: 'original / push / unshift',
                 default: 'original'
              },
              {
                 parameter: 'titles',
                 state: '自定义列表标题',
                 mold: 'array',
                 choose: '—',
                 default: "['列表 1', '列表 2']"
              },
              {
                 parameter: 'button-texts',
                 state: '自定义按钮文案',
                 mold: 'array',
                 choose: '—',
                 default: '[]'
              },
              {
                 parameter: 'render-content',
                 state: '自定义数据项渲染函数',
                 mold: 'function(h, option)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'format',
                 state: '列表顶部勾选状态文案',
                 mold: 'object{noChecked, hasChecked}',
                 choose: '—',
                 default: "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
              },
              {
                 parameter: 'props',
                 state: '数据源的字段别名',
                 mold: 'object{key, label, disabled}',
                 choose: '—',
                 default: ''
              },
              {
                 parameter: 'left-default-checked',
                 state: '初始状态下左侧列表的已勾选项的 key 数组',
                 mold: 'array',
                 choose: '—',
                 default: '[]'
              },
              {
                 parameter: 'right-default-checked',
                 state: '初始状态下右侧列表的已勾选项的 key 数组',
                 mold: 'array',
                 choose: '—',
                 default: '[]'
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
        Slot: {
            data: [
              {
                 parameter: 'left-footer',
                 state: '左侧列表底部的内容',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'right-footer',
                 state: '右侧列表底部的内容',
                 mold: '类型',
                 choose: '—',
                 default: '—'
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
        Scoped: {
            data: [
              {
                 parameter: '—',
                 state: '自定义数据项的内容，参数为 { option }',
                 mold: '类型',
                 choose: '—',
                 default: '—'
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
                 parameter: 'change',
                 state: '右侧列表元素变化时触发',
                 mold: "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组",
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'left-check-change',
                 state: '左侧列表元素被用户选中 / 取消选中时触发',
                 mold: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'right-check-change',
                 state: '右侧列表元素被用户选中 / 取消选中时触发',
                 mold: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: '事件名称',
                 prop: 'parameter',
                 width: '180'
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
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      f(a) {
            console.log(a)
        }
    }
  }
</script>

<style scoped>
    .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>