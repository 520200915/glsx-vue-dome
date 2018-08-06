<template>
  <div class='box'>
    <h2>Table 表格</h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
    <h3>基础表格</h3>
    <p>基础的表格展示用法。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table'></gl-table>
        </template>
        <template slot='description'>
            <p>当<code>gl-table</code>元素中注入<code>table</code>对象后，<code>data</code>为数据 ，中用<code>column</code>数组来对应对象中的键名即可填入数据，用<code>label</code>属性来定义表格的列名。<code>prop</code>属性来定义列表需要渲染的数据，可以使用<code>width</code>属性来定义列宽。<code>export</code>显示导出表格按钮</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table:</span>: {
                                    export: true,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>带斑马纹表格</h3>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table2'></gl-table>
        </template>
        <template slot='description'>
            <p><code>stripe</code>属性可以创建带斑马纹的表格。它接受一个<code>Boolean</code>，默认为<code>false</code>，设置为<code>true</code>即为启用。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table2:</span>: {
                                    <span class="hljs-attr">stripe:</span> <span class="hljs-string">'true'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>带边框表格</h3>
    <Code>
        <template slot='source'>
            <gl-table :table='table3'></gl-table>
        </template>
        <template slot='description'>
            <p>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用<code>border</code>属性，它接受一个<code>Boolean</code>，设置为<code>true</code>即可启用。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table3:</span>: {
                                    <span class="hljs-attr">border:</span> <span class="hljs-string">'true'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>带状态表格</h3>
    <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table4' class="tab"></gl-table>
        </template>
        <template slot='description'>
            <p>可以通过指定 Table 组件的 <code>rowClassName</code> 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table4</span>=<span class="hljs-string">"table3"</span>&nbsp;<span class="hljs-attr">class</span>=<span class="hljs-string">"tab"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                    <span class="hljs-selector-class">.tab</span> <span class="hljs-selector-class">.warning-row</span> {
                        <span class="hljs-attribute">background</span>: oldlace;
                    }
                    <span class="hljs-selector-class">.tab</span> <span class="hljs-selector-class">.success-row</span> {
                        <span class="hljs-attribute">background</span>: <span class="hljs-number">#f0f9eb</span>;
                    }</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table4:</span>: {
                                    <span class="hljs-attr">rowClassName:</span> <span class="hljs-string">'this.tableRowClassName'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                        },
                        methods: {
                            tableRowClassName({row, rowIndex}) {
                                <span class="hljs-keyword">if</span> (rowIndex === <span class="hljs-number">1</span>) {
                                    <span class="hljs-keyword">return</span> <span class="hljs-string">'warning-row'</span>
                                } <span class="hljs-keyword">else if</span> (rowIndex === <span class="hljs-number">1</span>) {
                                    <span class="hljs-keyword">return</span> <span class="hljs-string">'success-row'</span>
                                }
                                <span class="hljs-keyword">return</span> ''
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>固定表头</h3>
    <p>纵向内容过多时，可选择固定表头。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table5' style="width: 100%;"></gl-table>
        </template>
        <template slot='description'>
            <p>只要在<code>gl-table</code>元素中定义了<code>height</code>属性，即可实现固定表头的表格，而不需要额外的代码。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table5:</span>: {
                                    <span class="hljs-attr">height:</span> <span class="hljs-string">'250'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>固定列</h3>
    <p>横向内容过多时，可选择固定列。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table6' style="width: 100%;"></gl-table>
        </template>
        <template slot='description'>
            <p>固定列需要使用<code>fixed</code>属性，它接受 Boolean 值或者<code>left</code><code>right</code>，表示左边固定还是右边固定。<code>console</code>属性显示控制台,默认固定在表格右边。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table6:</span>: {
                                    <span class="hljs-attr">border:</span> <span class="hljs-string">'true'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        }
                                    ],
                                    <span class="hljs-attr">column:</span> [
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'日期'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'date'</span>,
                                            <span class="hljs-attr">width:</span> <span class="hljs-string">'180'</span>,
                                            <span class="hljs-attr">fixed:</span> <span class="hljs-string">'left'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'名称'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'name'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'城市'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'province'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'市区'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'city'</span>,
                                            <span class="hljs-attr">width:</span> <span class="hljs-string">'180'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'地址'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'address'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'邮编'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'zip'</span>
                                        }
                                    ],
                                    <span class="hljs-attr">console:</span> {
                                        <span class="hljs-attr">label:</span> <span class="hljs-string">'操作'</span>,
                                        <span class="hljs-attr">width:</span> <span class="hljs-string">'150'</span>,
                                        <span class="hljs-attr">fixed:</span> <span class="hljs-string">'right'</span>,
                                        <span class="hljs-attr">button:</span> [
                                            {
                                                <span class="hljs-attr">type:</span> <span class="hljs-string">'primary'</span>,
                                                <span class="hljs-attr">icon:</span> <span class="hljs-string">'el-icon-delete'</span>,
                                                <span class="hljs-attr">callback:</span> <span class="hljs-string">(index, rows)</span> => {
                                                    <span class="hljs-string">rows.splice</span>(index, 1)
                                                }
                                            },
                                            {
                                                <span class="hljs-attr">label:</span> <span class="hljs-string">'编辑'</span>,
                                                <span class="hljs-attr">type:</span> <span class="hljs-string">'text'</span>,
                                                <span class="hljs-attr">callback:</span> <span class="hljs-string">(index, rows)</span> => {
                                                    <span class="hljs-string">this.$alert</span>(rows[index])
                                                }
                                            }
                                        ]
                                    }                            
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>固定列和表头</h3>
    <p>横纵内容过多时，可选择固定列和表头。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table7' style="width: 100%;"></gl-table>
        </template>
        <template slot='description'>
            <p>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table7"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table7:</span>: {
                                    <span class="hljs-attr">border:</span> <span class="hljs-string">'true'</span>,
                                    <span class="hljs-attr">height:</span> <span class="hljs-string">'250'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">province:</span> <span class="hljs-string">'深圳'</span>,
                                            <span class="hljs-attr">city:</span> <span class="hljs-string">'南山区'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>,
                                            <span class="hljs-attr">zip:</span> <span class="hljs-string">'518000'</span>
                                        }
                                    ],
                                    <span class="hljs-attr">column:</span> [
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'日期'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'date'</span>,
                                            <span class="hljs-attr">width:</span> <span class="hljs-string">'180'</span>,
                                            <span class="hljs-attr">fixed:</span> <span class="hljs-string">'left'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'名称'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'name'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'城市'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'province'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'市区'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'city'</span>,
                                            <span class="hljs-attr">width:</span> <span class="hljs-string">'180'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'地址'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'address'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'邮编'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'zip'</span>
                                        }
                                    ],
                                    <span class="hljs-attr">console:</span> {
                                        <span class="hljs-attr">label:</span> <span class="hljs-string">'操作'</span>,
                                        <span class="hljs-attr">width:</span> <span class="hljs-string">'150'</span>,
                                        <span class="hljs-attr">fixed:</span> <span class="hljs-string">'right'</span>,
                                        <span class="hljs-attr">button:</span> [
                                            {
                                                <span class="hljs-attr">type:</span> <span class="hljs-string">'primary'</span>,
                                                <span class="hljs-attr">icon:</span> <span class="hljs-string">'el-icon-delete'</span>,
                                                <span class="hljs-attr">callback:</span> <span class="hljs-string">(index, rows)</span> => {
                                                    <span class="hljs-string">rows.splice</span>(index, 1)
                                                }
                                            },
                                            {
                                                <span class="hljs-attr">label:</span> <span class="hljs-string">'编辑'</span>,
                                                <span class="hljs-attr">type:</span> <span class="hljs-string">'text'</span>,
                                                <span class="hljs-attr">callback:</span> <span class="hljs-string">(index, rows)</span> => {
                                                    <span class="hljs-string">this.$alert</span>(rows[index])
                                                }
                                            }
                                        ]
                                    }                            
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>单选</h3>
    <Code>
        <template slot='source'>
            <gl-table :table='table8' ref="singleTable"></gl-table>
            <div style="margin-top: 20px">
                <gl-button @click="setCurrent(table8.data[1])">选中第二行</gl-button>
                <gl-button @click="setCurrent()">取消选择</gl-button>
            </div>
        </template>
        <template slot='description'>
            <p>Table 组件提供了单选的支持，只需要配置<code>highlightCurrentRow</code>属性即可实现单选。之后由<code>currentChange</code>事件来管理选中时触发的事件，它会传入<code>currentRow</code>，<code>oldCurrentRow</code>。如果需要显示索引，可以增加<code>number</code>对象，即可显示从 1 开始的索引号。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table8"&nbsp;<span class="hljs-attr">ref</span>=<span class="hljs-string">"singleTable"</span></span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"setCurrent(table8.data[1])"</span>&gt;</span>选择第二行<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"setCurrent()"</span>&gt;</span>取消选择<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table8:</span>: {
                                    <span class="hljs-attr">highlightCurrentRow:</span> <span class="hljs-string">'true'</span>,
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                                    ],
                                    number: {},
                                    currentRow: null                      
                                },
                            },
                            methods: {
                                setCurrent(row) {
                                    this.$refs.singleTable.$refs.table.setCurrentRow(row)
                                },
                                handleCurrentChange(val) {
                                    this.currentRow = val
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>多选</h3>
    <p>选择多行数据时使用 Checkbox。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table9' ref="multipleTable"></gl-table>
            <div style="margin-top: 20px">
                <gl-button @click="toggleSelection([table9.data[0], table9.data[3]])">切换第一、第四行的选中状态</gl-button>
                <gl-button @click="toggleSelection()">取消选择</gl-button>
            </div>
        </template>
        <template slot='description'>
            <p>实现多选非常简单: 手动添加一个<code>selection</code>对象即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用<code>show-overflow-tooltip</code>属性，它接受一个<code>Boolean</code>，为<code>true</code>时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table9"</span>&nbsp;<span class="hljs-attr">ref</span>=<span class="hljs-string">"multipleTable"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"toggleSelection([tableData3[0], tableData3[3]])"</span>&gt;</span>切换第一、第四行的选中状态<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"toggleSelection()"</span>&gt;</span>取消选择<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table9:</span>: {
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                                    ],
                                    selection: {},
                                    multipleSelection: []                     
                                }
                            },
                            methods: {
                                toggleSelection(rows) {
                                    if (rows) {
                                        rows.forEach(row => {
                                            this.$refs.multipleTable.$refs.table.toggleRowSelection(row);
                                        });
                                    } else {
                                        this.$refs.multipleTable.$refs.table.clearSelection();
                                    }
                                },
                                handleSelectionChange(val) {
                                    this.multipleSelection = val;
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>自定义索引</h3>
    <p>自定义 <code>type=index</code> 列的行号。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table10'></gl-table>
        </template>
        <template slot='description'>
            <p>通过给 <code>number</code> 对象传入 <code>index</code> 方法，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 <code>0</code> 开始）作为参数，返回值将作为索引展示。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table10:</span>: {
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                        },
                                        {
                                            <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                                    ],
                                    number: {
                                        label: <span class="hljs-string">'序号'</span>,
                                        index: (index) => {
                                            ++index
                                            return index &lt; 10 && index > 0 ? '0' + index : index
                                        }
                                    }                           
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>展开行</h3>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table11'></gl-table>
        </template>
        <template slot='description'>
            <p>通过传入 <code>collapse</code>对象，指定展开行内容。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table11"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table11:</span>: {
                                    <span class="hljs-attr">data:</span> [
                                        {
                                            <span class="hljs-attr">id:</span> <span class="hljs-string">'9527'</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'去皮嚼嚼鸡'</span>,
                                            <span class="hljs-attr">category:</span> <span class="hljs-string">'小吃零食'</span>.
                                            <span class="hljs-attr">desc:</span> <span class="hljs-string">'3元1只，10元3只'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市'</span>,
                                            <span class="hljs-attr">shop:</span> <span class="hljs-string">'在哪里的？'</span>,
                                            <span class="hljs-attr">shopId:</span> <span class="hljs-string">'2333'</span>
                                        },
                                        {
                                            <span class="hljs-attr">id:</span> <span class="hljs-string">'9527'</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'去皮嚼嚼鸡'</span>,
                                            <span class="hljs-attr">category:</span> <span class="hljs-string">'小吃零食'</span>.
                                            <span class="hljs-attr">desc:</span> <span class="hljs-string">'3元1只，10元3只'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市'</span>,
                                            <span class="hljs-attr">shop:</span> <span class="hljs-string">'在哪里的？'</span>,
                                            <span class="hljs-attr">shopId:</span> <span class="hljs-string">'2333'</span>
                                        },
                                        {
                                            <span class="hljs-attr">id:</span> <span class="hljs-string">'9527'</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'去皮嚼嚼鸡'</span>,
                                            <span class="hljs-attr">category:</span> <span class="hljs-string">'小吃零食'</span>.
                                            <span class="hljs-attr">desc:</span> <span class="hljs-string">'3元1只，10元3只'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市'</span>,
                                            <span class="hljs-attr">shop:</span> <span class="hljs-string">'在哪里的？'</span>,
                                            <span class="hljs-attr">shopId:</span> <span class="hljs-string">'2333'</span>
                                        },
                                        {
                                            <span class="hljs-attr">id:</span> <span class="hljs-string">'9527'</span>,
                                            <span class="hljs-attr">name:</span> <span class="hljs-string">'去皮嚼嚼鸡'</span>,
                                            <span class="hljs-attr">category:</span> <span class="hljs-string">'小吃零食'</span>.
                                            <span class="hljs-attr">desc:</span> <span class="hljs-string">'3元1只，10元3只'</span>,
                                            <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市'</span>,
                                            <span class="hljs-attr">shop:</span> <span class="hljs-string">'在哪里的？'</span>,
                                            <span class="hljs-attr">shopId:</span> <span class="hljs-string">'2333'</span>
                                        }
                                    ],
                                    <span class="hljs-attr">column:</span> [
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'商品ID'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'id'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'商品名称'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'name'</span>
                                        },
                                        {
                                            <span class="hljs-attr">label:</span> <span class="hljs-string">'商品描述'</span>,
                                            <span class="hljs-attr">prop:</span> <span class="hljs-string">'desc'</span>
                                        }
                                    ],
                                    collapse: {
                                        fixed: 'left',
                                        label: ['商品名称', '所属店铺', '商品 ID', '店铺 ID', '商品分类', '店铺地址', '商品描述'],
                                        prop: ['name', 'shop', 'id', 'shopId', 'category', 'address', 'desc']
                                    }                                                        
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>表格分页</h3>
    <p>当数据过多是可以分页加载</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table12' :pagination='pagination'></gl-table>
        </template>
        <template slot='description'>
            <p>只需在 <code>gl-table</code>里加入 <code>pagination</code>对象，并设置属性 <code>show</code>为true即可显示分页，更多属性请查看分页组件。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>&nbsp;<span class="hljs-attr">:table</span>=<span class="hljs-string">"table12"</span>&nbsp;<span class="hljs-attr">:pagination</span>=<span class="hljs-string">"pagination"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    import axios from 'axios'
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table12:</span>: {
                                    border: 'true',
                                    maxHeight: '450',
                                    align: 'center',
                                    <span class="hljs-attr">data:</span> [],
                                    <span class="hljs-attr">column:</span> [
                                        {
                                            label: 'ID',
                                            prop: 'id'
                                        },
                                        {
                                            label: '地区',
                                            prop: 'citys'
                                        },
                                        {
                                            label: '日期',
                                            prop: 'date'
                                        },
                                        {
                                            label: '文本',
                                            prop: 'txt'
                                        },
                                        {
                                            label: '乱码'',
                                            prop: 'guid'
                                        },
                                        {
                                            label: '图片路径',
                                            prop: 'image'
                                        }
                                    ],
                                    pagination: {
                                        show: true,
                                        background: true,
                                        style: {
                                        marginTop: '20px'
                                        }
                                    }                               
                                }
                            }
                        },
                        created() {
                            axios.get('http://192.168.3.171:7300/mock/5b0ed7dbf189006180803286/standard/table/list').then( res => {
                                this.table12.data = res.data.data.items
                            }).catch( err => {
                                console.log(err)
                            })
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Table Attributes</h3>
    <gl-table :table='table13'></gl-table>
    <h3>Table Events</h3>
    <gl-table :table='Events'></gl-table>
    <h3>Table-column Attributes</h3>
    <gl-table :table='Column'></gl-table>
    <h3>Table-console</h3>
    <gl-table :table='Console'></gl-table>
    <h3>Table-number</h3>
    <gl-table :table='number'></gl-table>
    <h3>Table-selection</h3>
    <gl-table :table='selection'></gl-table>
    <h3>Table-collapse</h3>
    <gl-table :table='collapse'></gl-table>
    <h3>Table Methods</h3>
    <gl-table :table='Methods'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
import axios from 'axios'
import date from '../js/date.js'
  export default {
    name: '',
    data () {
      return {
          table: {
            export: true,
            data: [
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
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
            stripe: true,
            data: [
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
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
          table3: {
            border: true,
            data: [
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
              name: '嘀嘀虎',
              address: '深圳市南山区科兴科学园C3栋7楼'
              },
              {
              date: new Date().format("yyyy-MM-dd"),
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
          table4: {
              rowClassName: this.tableRowClassName,
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
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
          table5: {
              height: 250,
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
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
          table6: {
              border: true,
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  }
              ],
              column: [
                  {
                  label: '日期',
                  prop: 'date',
                  width: '180',
                  fixed: 'left'
                  },
                  {
                  label: '名称',
                  prop: 'name',
                  width: '120'
                  },
                  {
                  label: '城市',
                  prop: 'province',
                  width: '120'
                  },
                  {
                  label: '市区',
                  prop: 'city',
                  width: '120'
                  },
                  {
                  label: '地址',
                  prop: 'address',
                  width: '300'
                  },
                  {
                  label: '邮编',
                  prop: 'zip',
                  width: '120'
                  }
              ],
              console: {
                  label: '操作',
                  width: '150',
                  fixed: 'right',
                  button: [
                      {
                          type: 'primary',
                          icon: 'el-icon-delete',
                          callback: (index, rows) => {
                              rows.splice(index, 1)
                          }
                      },
                      {
                          label: '编辑',
                          type: 'text',
                          callback: (index, rows) => {
                              this.$alert(rows[index])
                          }
                      }
                  ]
              }
          }, 
          table7: {
              border: true,
              height: '250',
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  province: '深圳',
                  city: '南山区',
                  address: '深圳市南山区科兴科学园C3栋7楼',
                  zip: 518000
                  }
              ],
              column: [
                  {
                  label: '日期',
                  prop: 'date',
                  width: '180',
                  fixed: 'left'
                  },
                  {
                  label: '名称',
                  prop: 'name',
                  width: '120'
                  },
                  {
                  label: '城市',
                  prop: 'province',
                  width: '120'
                  },
                  {
                  label: '市区',
                  prop: 'city',
                  width: '120'
                  },
                  {
                  label: '地址',
                  prop: 'address',
                  width: '300'
                  },
                  {
                  label: '邮编',
                  prop: 'zip',
                  width: '120'
                  }
              ],
              console: {
                  label: '操作',
                  width: '150',
                  fixed: 'right',
                  button: [
                      {
                          type: 'primary',
                          icon: 'el-icon-delete',
                          callback: (index, rows) => {
                              rows.splice(index, 1)
                          }
                      },
                      {
                          label: '编辑',
                          type: 'text',
                          callback: (index, rows) => {
                              this.$alert(rows[index])
                          }
                      }
                  ]
              }
          },
          table8: {
              highlightCurrentRow: true,
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
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
              ],
              number: {}
          },
          table9: {
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
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
              ],
              selection: {}
          },
          table10: {
              data: [
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
                  name: '嘀嘀虎',
                  address: '深圳市南山区科兴科学园C3栋7楼'
                  },
                  {
                  date: new Date().format("yyyy-MM-dd"),
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
              ],
              number: {
                  label: '序号',
                  index: (index) => {
                      ++index
                      return index < 10 && index > 0 ? '0' + index : index
                  }
              }
          },
          table11: {
              data: [{
                  id: '9527',
                  name: '去皮嚼嚼鸡',
                  category: '小吃零食',
                  desc: '3元1只，10元3只！',
                  address: '深圳市',
                  shop: '在哪里的？',
                  shopId: '2333'
              }, {
                  id: '9527',
                  name: '去皮嚼嚼鸡',
                  category: '小吃零食',
                  desc: '3元1只，10元3只！',
                  address: '深圳市',
                  shop: '在哪里的？',
                  shopId: '2333'
              }, {
                  id: '9527',
                  name: '去皮嚼嚼鸡',
                  category: '小吃零食',
                  desc: '3元1只，10元3只！',
                  address: '深圳市',
                  shop: '在哪里的？',
                  shopId: '2333'
              }, {
                  id: '9527',
                  name: '去皮嚼嚼鸡',
                  category: '小吃零食',
                  desc: '3元1只，10元3只！',
                  address: '深圳市',
                  shop: '在哪里的？',
                  shopId: '2333'
              }],
              column: [
                  {
                  label: '商品ID',
                  prop: 'id'
                  },
                  {
                  label: '商品名称',
                  prop: 'name'
                  },
                  {
                  label: '商品描述',
                  prop: 'desc'
                  }
              ],
              collapse: {
                  fixed: 'left',
                  label: ['商品名称：', '所属店铺：', '商品 ID：', '店铺 ID：', '商品分类：', '店铺地址：', '商品描述：'],
                  prop: ['name', 'shop', 'id', 'shopId', 'category', 'address', 'desc']
              }
          },
          table12: {
              border: true,
              align: 'center',
              maxHeight: '450',
              data: [],
              column: [
                  {
                      label: 'ID',
                      prop: 'id'
                  },
                  {
                      label: '地区',
                      prop: 'citys'
                  },
                  {
                      label: '日期',
                      prop: 'date'
                  },
                  {
                      label: '文本',
                      prop: 'txt'
                  },
                  {
                      label: '乱码',
                      prop: 'guid'
                  },
                  {
                      label: '图片路径',
                      prop: 'image'
                  }
              ]    
          },
          pagination: {
              show: true,
              background: true,
              currentPage: 1,
              pageSize: 10,
              style: {
              marginTop: '20px'
              },
              currentChange: val => {
                  this.pagination.currentPage = val
                  axios.get('http://192.168.3.171:7300/mock/5b0ed7dbf189006180803286/standard/table/list').then( res => {
                      this.table12.data = []
                      for (let index = val * this.pagination.pageSize - this.pagination.pageSize ; index < this.pagination.pageSize * val; index++) {
                          this.table12.data.push(res.data.data.items[index])
                      }
                      this.pagination.total = res.data.data.items.length
                  }).catch( err => {
                      console.log(err)
                  })
              }
          },
          table13: {
              data: [
                {
                    parameter: 'data',
                    state: '传入的数据',
                    mold: 'array',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'height',
                    state: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
                    mold: 'string/number',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'max-height',
                    state: 'Table 的最大高度',
                    mold: 'string/number',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'stripe',
                    state: '是否为斑马纹 table',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'border',
                    state: '是否带有纵向边框',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'size',
                    state: 'Table 的尺寸',
                    mold: 'string',
                    choose: 'medium / small / mini',
                    default: '—'
                },
                {
                    parameter: 'fit',
                    state: '列的宽度是否自撑开',
                    mold: 'boolean',
                    choose: '—',
                    default: 'true'
                },
                {
                    parameter: 'show-header',
                    state: '是否显示表头',
                    mold: 'boolean',
                    choose: '—',
                    default: 'true'
                },
                {
                    parameter: 'highlight-current-row',
                    state: '是否要高亮当前行',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'current-row-key',
                    state: '当前行的 key，只写属性',
                    mold: 'String,Number',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'row-class-name',
                    state: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
                    mold: 'Function({row, rowIndex})/String',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'row-style',
                    state: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
                    mold: 'Function({row, rowIndex})/Object',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'cell-class-name',
                    state: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
                    mold: 'Function({row, column, rowIndex, columnIndex})/String',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'cell-style',
                    state: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
                    mold: 'Function({row, column, rowIndex, columnIndex})/Object',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-row-class-name',
                    state: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
                    mold: 'Function({row, rowIndex})/String',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-row-style',
                    state: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
                    mold: 'Function({row, rowIndex})/Object',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-cell-class-name',
                    state: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
                    mold: 'Function({row, column, rowIndex, columnIndex})/String',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-cell-style',
                    state: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
                    mold: 'Function({row, column, rowIndex, columnIndex})/Object',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'row-key',
                    state: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',
                    mold: 'Function(row)/String',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'empty-text',
                    state: '空数据时显示的文本内容',
                    mold: 'String',
                    choose: '—',
                    default: '暂无数据'
                },
                {
                    parameter: 'default-expand-all',
                    state: '是否默认展开所有行，当 Table 中存在 collapse 的时候有效',
                    mold: 'Boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'expand-row-keys',
                    state: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
                    mold: 'Array',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'default-sort',
                    state: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序',
                    mold: 'Object',
                    choose: 'order: ascending, descending',
                    default: '如果只指定了prop, 没有指定order, 则默认顺序是ascending'
                },
                {
                    parameter: 'tooltip-effect',
                    state: 'tooltip effect 属性',
                    mold: 'String',
                    choose: 'dark/light',
                    default: '—'
                },
                {
                    parameter: 'show-summary',
                    state: '是否在表尾显示合计行',
                    mold: 'Boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'sum-text',
                    state: '合计行第一列的文本',
                    mold: 'String',
                    choose: '—',
                    default: '合计'
                },
                {
                    parameter: 'summary-method',
                    state: '自定义的合计计算方法',
                    mold: 'Function({ columns, data })',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'span-method',
                    state: '合并行或列的计算方法',
                    mold: 'Function({ row, column, rowIndex, columnIndex })',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'select-on-indeterminate',
                    state: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
                    mold: 'Boolean',
                    choose: '—',
                    default: 'true'
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
          Events: {
              data: [
                {
                    parameter: 'select',
                    state: '当用户手动勾选数据行的 Checkbox 时触发的事件',
                    mold: 'selection, row',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'select-all',
                    state: '当用户手动勾选全选 Checkbox 时触发的事件',
                    mold: 'selection',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'selection-change',
                    state: '当选择项发生变化时会触发该事件',
                    mold: 'selection',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'cell-mouse-enter',
                    state: '当单元格 hover 进入时会触发该事件',
                    mold: 'row, column, cell, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'cell-mouse-leave',
                    state: '当单元格 hover 退出时会触发该事件',
                    mold: 'row, column, cell, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'cell-click',
                    state: '当某个单元格被点击时会触发该事件',
                    mold: 'row, column, cell, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'cell-dblclick',
                    state: '当某个单元格被双击击时会触发该事件',
                    mold: 'row, column, cell, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'row-click',
                    state: '当某一行被点击时会触发该事件',
                    mold: 'row, event, column',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'row-contextmenu',
                    state: '当某一行被鼠标右键点击时会触发该事件',
                    mold: 'row, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'row-dblclick',
                    state: '当某一行被双击时会触发该事件',
                    mold: 'row, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-click',
                    state: '当某一列的表头被点击时会触发该事件',
                    mold: 'column, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-contextmenu',
                    state: '当某一列的表头被鼠标右键点击时触发该事件',
                    mold: 'column, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'current-change',
                    state: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
                    mold: 'currentRow, oldCurrentRow',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'header-dragend',
                    state: '当拖动表头改变了列的宽度的时候会触发该事件',
                    mold: 'newWidth, oldWidth, column, event',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'expand-change',
                    state: '当用户对某一行展开或者关闭的时候会触发该事件',
                    mold: 'row, expandedRows',
                    choose: '—',
                    default: '—'
                }
              ],
              column: [
                {
                    label: '事件名',
                    prop: 'parameter',
                    width: '190'
                },
                {
                    label: '说明',
                    prop: 'state',
                    width: '350'
                },
                {
                    label: '参数',
                    prop: 'mold'
                }
              ]
          },
          Column: {
              data: [
                {
                    parameter: 'label',
                    state: '显示的标题',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'prop',
                    state: '对应列内容的字段名，也可以使用 property 属性',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'width',
                    state: '对应列的宽度',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'min-width',
                    state: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'fixed',
                    state: '列是否固定在左侧或者右侧，true 表示固定在左侧',
                    mold: 'string, boolean',
                    choose: 'true, left, right',
                    default: '—'
                },
                {
                    parameter: 'render-header',
                    state: '列标题 Label 区域渲染使用的 Function',
                    mold: 'Function(h, { column, $index })',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'resizable',
                    state: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）',
                    mold: 'boolean',
                    choose: '—',
                    default: 'true'
                },
                {
                    parameter: 'formatter',
                    state: '用来格式化内容',
                    mold: 'Function(row, column, cellValue, index)',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'show-overflow-tooltip',
                    state: '当内容过长被隐藏时显示 tooltip',
                    mold: 'Boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'align',
                    state: '对齐方式',
                    mold: 'String',
                    choose: 'left/center/right',
                    default: 'left'
                },
                {
                    parameter: 'header-align',
                    state: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
                    mold: 'String',
                    choose: 'left/center/right',
                    default: '—'
                },
                {
                    parameter: 'class-name',
                    state: '列的 className',
                    mold: 'String',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'label-class-name',
                    state: '当前列标题的自定义类名',
                    mold: 'String',
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
          Console: {
              data: [
                {
                    parameter: 'label',
                    state: '显示的标题',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'width',
                    state: '对应列的宽度',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'min-width',
                    state: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'fixed',
                    state: '列是否固定在左侧或者右侧，true 表示固定在左侧',
                    mold: 'string, boolean',
                    choose: 'true, left, right',
                    default: 'right'
                },
                {
                    parameter: 'align',
                    state: '对齐方式',
                    mold: 'string',
                    choose: 'left/center/right',
                    default: 'left'
                },
                {
                    parameter: 'header-align',
                    state: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
                    mold: 'string',
                    choose: 'left/center/right',
                    default: '—'
                },
                {
                    parameter: 'button',
                    state: '控制台的按钮',
                    mold: 'object',
                    choose: '参数{ type, size, icon, callback(index,data) }',
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
          number: {
              data: [
                {
                    parameter: 'label',
                    state: '显示的标题',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'width',
                    state: '对应列的宽度',
                    mold: '类型',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'min-width',
                    state: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'fixed',
                    state: '列是否固定在左侧或者右侧，true 表示固定在左侧',
                    mold: 'string, boolean',
                    choose: 'true, left, right',
                    default: 'left'
                },
                {
                    parameter: 'align',
                    state: '对齐方式',
                    mold: 'string',
                    choose: 'left/center/right',
                    default: 'left'
                },
                {
                    parameter: 'header-align',
                    state: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
                    mold: 'string',
                    choose: 'left/center/right',
                    default: '—'
                },
                {
                    parameter: 'index',
                    state: '自定义索引',
                    mold: 'string, Function(index)',
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
          selection: {
              data: [
                {
                    parameter: 'width',
                    state: '对应列的宽度',
                    mold: '类型',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'min-width',
                    state: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'fixed',
                    state: '列是否固定在左侧或者右侧，true 表示固定在左侧',
                    mold: 'string, boolean',
                    choose: 'true, left, right',
                    default: 'left'
                },
                {
                    parameter: 'align',
                    state: '对齐方式',
                    mold: 'string',
                    choose: 'left/center/right',
                    default: 'left'
                },
                {
                    parameter: 'header-align',
                    state: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
                    mold: 'string',
                    choose: 'left/center/right',
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
          collapse: {
              data: [
                {
                    parameter: 'fixed',
                    state: '列是否固定在左侧或者右侧，true 表示固定在左侧',
                    mold: 'string, boolean',
                    choose: 'true, left, right',
                    default: 'left'
                },
                {
                    parameter: 'label',
                    state: '展开行的标题',
                    mold: 'array',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'prop',
                    state: '展开行的数据',
                    mold: 'array',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'labelPosition',
                    state: 'label标题的位置',
                    mold: 'string',
                    choose: 'top/left/right',
                    default: 'left'
                },
                {
                    parameter: 'collapseClass',
                    state: '展开行的自定义Class',
                    mold: 'String',
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
          Methods: {
              data: [
                {
                    parameter: 'clearSelection',
                    state: '用于多选表格，清空用户的选择',
                    mold: '—',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'toggleRowSelection',
                    state: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
                    mold: 'row, selected',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'toggleAllSelection',
                    state: '用于多选表格，切换所有行的选中状态',
                    mold: '—',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'toggleRowExpansion',
                    state: '用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
                    mold: 'row, expanded',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'setCurrentRow',
                    state: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
                    mold: 'row',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'clearSort',
                    state: '用于清空排序条件，数据会恢复成未排序的状态',
                    mold: '—',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'clearFilter',
                    state: '用于清空过滤条件，数据会恢复成未过滤的状态',
                    mold: '—',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'doLayout',
                    state: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
                    mold: '—',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'sort',
                    state: '手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。',
                    mold: 'prop: string, order: string',
                    choose: '—',
                    default: '—'
                }
              ],
              column: [
                {
                    label: '方法名',
                    prop: 'parameter',
                    width: '200'
                },
                {
                    label: '说明',
                    prop: 'state',
                    width: '400'
                },
                {
                    label: '参数',
                    prop: 'mold'
                }
              ]
          },
          currentRow: null,
          multipleSelection: []
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
       setCurrent(row) {
        this.$refs.singleTable.$refs.table.setCurrentRow(row)
      },
      handleCurrentChange(val) {
        this.currentRow = val
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.$refs.table.toggleRowSelection(row)
          });
        } else {
          this.$refs.multipleTable.$refs.table.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    created() {
        axios.get('http://192.168.3.171:7300/mock/5b0ed7dbf189006180803286/standard/table/list').then( res => {
            // this.table12.data = res.data.data.items
            for (let index = 0; index < this.pagination.pageSize; index++) {
                this.table12.data.push(res.data.data.items[index])
            }
            this.pagination.total = res.data.data.items.length
        }).catch( err => {
            console.log(err)
        })
    }
  }
</script>
