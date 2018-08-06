<template>
  <div class='box tree'>
    <h2>Tree 树形控件</h2>
    <p>用清晰的层级结构展示信息，可展开或折叠。</p>
    <h3>基础用法</h3>
    <p>基础的树形结构展示。</p>
    <Code>
        <template slot='source'>
            <gl-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></gl-tree>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span> <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span> <span class="hljs-attr">@node-click</span>=<span class="hljs-string">"handleNodeClick"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data</span>: [{
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-1-1'</span>
                                }]
                            }, {
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-2-1'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-1'</span>
                                }]
                            }, {
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
                                }]
                            }]
                            }],
                            <span class="hljs-attr">defaultProps</span>: {
                            <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
                            }
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleNodeClick(data) {
                            <span class="hljs-built_in">console</span>.log(data);
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>可选择</h3>
    <p>适用于需要选择层级时使用。</p>
    <Code>
        <template slot='source'>
            <gl-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
            </gl-tree>
        </template>
        <template slot='description'>
            <p>本例还展示了动态加载节点数据的方法。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                    <span class="hljs-attr">:props</span>=<span class="hljs-string">"props"</span>
                    <span class="hljs-attr">:load</span>=<span class="hljs-string">"loadNode"</span>
                    <span class="hljs-attr">lazy</span>
                    <span class="hljs-attr">show-checkbox</span>
                    <span class="hljs-attr">@check-change</span>=<span class="hljs-string">"handleCheckChange"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">props</span>: {
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'name'</span>,
                            <span class="hljs-attr">children</span>: <span class="hljs-string">'zones'</span>
                            },
                            <span class="hljs-attr">count</span>: <span class="hljs-number">1</span>
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleCheckChange(data, checked, indeterminate) {
                            <span class="hljs-built_in">console</span>.log(data, checked, indeterminate);
                        },
                        handleNodeClick(data) {
                            <span class="hljs-built_in">console</span>.log(data);
                        },
                        loadNode(node, resolve) {
                            <span class="hljs-keyword">if</span> (node.level === <span class="hljs-number">0</span>) {
                            <span class="hljs-keyword">return</span> resolve([{ <span class="hljs-attr">name</span>: <span class="hljs-string">'region1'</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">'region2'</span> }]);
                            }
                            <span class="hljs-keyword">if</span> (node.level &gt; <span class="hljs-number">3</span>) <span class="hljs-keyword">return</span> resolve([]);

                            <span class="hljs-keyword">var</span> hasChild;
                            <span class="hljs-keyword">if</span> (node.data.name === <span class="hljs-string">'region1'</span>) {
                            hasChild = <span class="hljs-literal">true</span>;
                            } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.data.name === <span class="hljs-string">'region2'</span>) {
                            hasChild = <span class="hljs-literal">false</span>;
                            } <span class="hljs-keyword">else</span> {
                            hasChild = <span class="hljs-built_in">Math</span>.random() &gt; <span class="hljs-number">0.5</span>;
                            }

                            setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">var</span> data;
                            <span class="hljs-keyword">if</span> (hasChild) {
                                data = [{
                                <span class="hljs-attr">name</span>: <span class="hljs-string">'zone'</span> + <span class="hljs-keyword">this</span>.count++
                                }, {
                                <span class="hljs-attr">name</span>: <span class="hljs-string">'zone'</span> + <span class="hljs-keyword">this</span>.count++
                                }];
                            } <span class="hljs-keyword">else</span> {
                                data = [];
                            }

                            resolve(data);
                            }, <span class="hljs-number">500</span>);
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>懒加载自定义叶子节点</h3>
    <Code>
        <template slot='source'>
            <gl-tree
            :props="props1"
            :load="loadNode1"
            lazy
            show-checkbox>
            </gl-tree>
        </template>
        <template slot='description'>
            <p>由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                <span class="hljs-attr">:props</span>=<span class="hljs-string">"props1"</span>
                <span class="hljs-attr">:load</span>=<span class="hljs-string">"loadNode1"</span>
                <span class="hljs-attr">lazy</span>
                <span class="hljs-attr">show-checkbox</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                    <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">props1</span>: {
                        <span class="hljs-attr">label</span>: <span class="hljs-string">'name'</span>,
                        <span class="hljs-attr">children</span>: <span class="hljs-string">'zones'</span>,
                        <span class="hljs-attr">isLeaf</span>: <span class="hljs-string">'leaf'</span>
                        },
                    };
                    },
                    <span class="hljs-attr">methods</span>: {
                    loadNode1(node, resolve) {
                        <span class="hljs-keyword">if</span> (node.level === <span class="hljs-number">0</span>) {
                        <span class="hljs-keyword">return</span> resolve([{ <span class="hljs-attr">name</span>: <span class="hljs-string">'region'</span> }]);
                        }
                        <span class="hljs-keyword">if</span> (node.level &gt; <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> resolve([]);

                        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                        <span class="hljs-keyword">const</span> data = [{
                            <span class="hljs-attr">name</span>: <span class="hljs-string">'leaf'</span>,
                            <span class="hljs-attr">leaf</span>: <span class="hljs-literal">true</span>
                        }, {
                            <span class="hljs-attr">name</span>: <span class="hljs-string">'zone'</span>
                        }];

                        resolve(data);
                        }, <span class="hljs-number">500</span>);
                    }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>默认展开和默认选中</h3>
    <p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
    <Code>
        <template slot='source'>
            <gl-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
            </gl-tree>
        </template>
        <template slot='description'>
            <p>分别通过<code>default-expanded-keys</code>和<code>default-checked-keys</code>设置默认展开和默认选中的节点。需要注意的是，此时必须设置<code>node-key</code>，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                    <span class="hljs-attr">:data</span>=<span class="hljs-string">"data2"</span>
                    <span class="hljs-attr">show-checkbox</span>
                    <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
                    <span class="hljs-attr">:default-expanded-keys</span>=<span class="hljs-string">"[2, 3]"</span>
                    <span class="hljs-attr">:default-checked-keys</span>=<span class="hljs-string">"[5]"</span>
                    <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data2</span>: [{
                            <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
                                }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-2'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>
                            }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>
                            }]
                            }, {
                            <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>
                            }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>
                            }]
                            }],
                            <span class="hljs-attr">defaultProps</span>: {
                            <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
                            }
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>禁用状态</h3>
    <p>可将 Tree 的某些节点设置为禁用状态</p>
    <Code>
        <template slot='source'>
            <gl-tree
            :data="data3"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]">
            </gl-tree>
        </template>
        <template slot='description'>
            <p>通过<code>disabled</code>设置禁用状态。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                    <span class="hljs-attr">:data</span>=<span class="hljs-string">"data3"</span>
                    <span class="hljs-attr">show-checkbox</span>
                    <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
                    <span class="hljs-attr">:default-expanded-keys</span>=<span class="hljs-string">"[2, 3]"</span>
                    <span class="hljs-attr">:default-checked-keys</span>=<span class="hljs-string">"[5]"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data3</span>: [{
                            <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-1'</span>
                                }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-2'</span>,
                                <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
                                }]
                            }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>,
                                <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
                                }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-2'</span>,
                                <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
                                }]
                            }]
                            }],
                            <span class="hljs-attr">defaultProps</span>: {
                            <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
                            }
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
        </template>
    </Code>
    <h3>自定义节点内容</h3>
    <Code>
        <template slot='source'>
            <div class="custom-tree-container">
                <div class="block">
                    <p>使用 render-content</p>
                    <gl-tree
                    :data="data4"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent">
                    </gl-tree>
                </div>                
            </div>
        </template>
        <template slot='description'>
            <p>使用<code>render-content</code>指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。注意：由于 jsfiddle 不支持 JSX 语法，所以<code>render-content</code>示例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"custom-tree-container"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>使用 render-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                        <span class="hljs-attr">:data</span>=<span class="hljs-string">"data4"</span>
                        <span class="hljs-attr">show-checkbox</span>
                        <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
                        <span class="hljs-attr">default-expand-all</span>
                        <span class="hljs-attr">:expand-on-click-node</span>=<span class="hljs-string">"false"</span>
                        <span class="hljs-attr">:render-content</span>=<span class="hljs-string">"renderContent"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
                let id = <span class="hljs-number">1000</span>;

                export <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">const</span> data = [{
                            id: <span class="hljs-number">1</span>,
                            label: <span class="hljs-string">'一级 1'</span>,
                            children: [{
                            id: <span class="hljs-number">4</span>,
                            label: <span class="hljs-string">'二级 1-1'</span>,
                            children: [{
                                id: <span class="hljs-number">9</span>,
                                label: <span class="hljs-string">'三级 1-1-1'</span>
                            }, {
                                id: <span class="hljs-number">10</span>,
                                label: <span class="hljs-string">'三级 1-1-2'</span>
                            }]
                            }]
                        }, {
                            id: <span class="hljs-number">2</span>,
                            label: <span class="hljs-string">'一级 2'</span>,
                            children: [{
                            id: <span class="hljs-number">5</span>,
                            label: <span class="hljs-string">'二级 2-1'</span>
                            }, {
                            id: <span class="hljs-number">6</span>,
                            label: <span class="hljs-string">'二级 2-2'</span>
                            }]
                        }, {
                            id: <span class="hljs-number">3</span>,
                            label: <span class="hljs-string">'一级 3'</span>,
                            children: [{
                            id: <span class="hljs-number">7</span>,
                            label: <span class="hljs-string">'二级 3-1'</span>
                            }, {
                            id: <span class="hljs-number">8</span>,
                            label: <span class="hljs-string">'二级 3-2'</span>
                            }]
                        }];
                        <span class="hljs-keyword">return</span> {
                            data4: JSON.parse(JSON.stringify(data)),
                            data5: JSON.parse(JSON.stringify(data))
                        }
                    },

                    methods: {
                        append(data) {
                            <span class="hljs-keyword">const</span> newChild = { id: id++, label: <span class="hljs-string">'testtest'</span>, children: [] };
                            <span class="hljs-keyword">if</span> (!data.children) {
                            <span class="hljs-keyword">this</span>.$<span class="hljs-keyword">set</span>(data, <span class="hljs-string">'children'</span>, []);
                            }
                            data.children.push(newChild);
                        },

                        remove(node, data) {
                            <span class="hljs-keyword">const</span> parent = node.parent;
                            <span class="hljs-keyword">const</span> children = parent.data.children || parent.data;
                            <span class="hljs-keyword">const</span> index = children.findIndex(d =&gt; d.id === data.id);
                            children.splice(index, <span class="hljs-number">1</span>);
                        },

                        renderContent(h, { node, data, store }) {
                            <span class="hljs-keyword">return</span> (
                            &lt;span <span class="hljs-class"><span class="hljs-keyword">class</span>="<span class="hljs-title">custom</span>-<span class="hljs-title">tree</span>-<span class="hljs-title">node</span>"&gt;
                                &lt;<span class="hljs-title">span</span>&gt;</span>{node.label}&lt;/span&gt;
                                &lt;span&gt;
                                &lt;gl-button size=<span class="hljs-string">"mini"</span> type=<span class="hljs-string">"text"</span> on-click={ () =&gt; <span class="hljs-keyword">this</span>.append(data) }&gt;Append&lt;/gl-button&gt;
                                &lt;gl-button size=<span class="hljs-string">"mini"</span> type=<span class="hljs-string">"text"</span> on-click={ () =&gt; <span class="hljs-keyword">this</span>.remove(node, data) }&gt;Delete&lt;/gl-button&gt;
                                &lt;/span&gt;
                            &lt;/span&gt;);
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                <span class="hljs-selector-class">.custom-tree-node</span> {
                    <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>;
                    <span class="hljs-attribute">display</span>: flex;
                    <span class="hljs-attribute">align-items</span>: center;
                    <span class="hljs-attribute">justify-content</span>: space-between;
                    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;
                    <span class="hljs-attribute">padding-right</span>: <span class="hljs-number">8px</span>;
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                </code></pre>
        </template>
    </Code>
    <h3>手风琴模式</h3>
    <p>对于同一级的节点，每次只能展开一个</p>
    <Code>
        <template slot='source'>
            <gl-tree
            :data="data"
            :props="defaultProps"
            accordion
            @node-click="handleNodeClick">
            </gl-tree>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                    <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span>
                    <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>
                    <span class="hljs-attr">accordion</span>
                    <span class="hljs-attr">@node-click</span>=<span class="hljs-string">"handleNodeClick"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data</span>: [{
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-1-1'</span>
                                }]
                            }, {
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-2-1'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-1'</span>
                                }]
                            }, {
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
                                }]
                            }]
                            }],
                            <span class="hljs-attr">defaultProps</span>: {
                            <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
                            }
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleNodeClick(data) {
                            <span class="hljs-built_in">console</span>.log(data);
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>可拖拽节点</h3>
    <p>通过 draggable 属性可让节点变为可拖拽。</p>
    <Code>
        <template slot='source'>
            <gl-tree
            :data="data6"
            node-key="id"
            default-expand-all
            @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter"
            @node-drag-leave="handleDragLeave"
            @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd"
            @node-drop="handleDrop"
            draggable
            :allow-drop="allowDrop"
            :allow-drag="allowDrag">
            </gl-tree>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tree</span>
                <span class="hljs-attr">:data</span>=<span class="hljs-string">"data6"</span>
                <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
                <span class="hljs-attr">default-expand-all</span>
                <span class="hljs-attr">@node-drag-start</span>=<span class="hljs-string">"handleDragStart"</span>
                <span class="hljs-attr">@node-drag-enter</span>=<span class="hljs-string">"handleDragEnter"</span>
                <span class="hljs-attr">@node-drag-leave</span>=<span class="hljs-string">"handleDragLeave"</span>
                <span class="hljs-attr">@node-drag-over</span>=<span class="hljs-string">"handleDragOver"</span>
                <span class="hljs-attr">@node-drag-end</span>=<span class="hljs-string">"handleDragEnd"</span>
                <span class="hljs-attr">@node-drop</span>=<span class="hljs-string">"handleDrop"</span>
                <span class="hljs-attr">draggable</span>
                <span class="hljs-attr">:allow-drop</span>=<span class="hljs-string">"allowDrop"</span>
                <span class="hljs-attr">:allow-drag</span>=<span class="hljs-string">"allowDrag"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tree</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">data6</span>: [{
                            <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
                                }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-2'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>
                            }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>
                            }]
                            }, {
                            <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>
                            }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">id</span>: <span class="hljs-number">11</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
                                }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">12</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-2'</span>
                                }, {
                                <span class="hljs-attr">id</span>: <span class="hljs-number">13</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-3'</span>
                                }]
                            }]
                            }],
                            <span class="hljs-attr">defaultProps</span>: {
                            <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
                            }
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleDragStart(node, ev) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'drag start'</span>, node);
                        },
                        handleDragEnter(draggingNode, dropNode, ev) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'tree drag enter: '</span>, dropNode.label);
                        },
                        handleDragLeave(draggingNode, dropNode, ev) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'tree drag leave: '</span>, dropNode.label);
                        },
                        handleDragOver(draggingNode, dropNode, ev) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'tree drag over: '</span>, dropNode.label);
                        },
                        handleDragEnd(draggingNode, dropNode, dropType, ev) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'tree drag end: '</span>, dropNode &amp;&amp; dropNode.label, dropType);
                        },
                        handleDrop(draggingNode, dropNode, dropType, ev) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'tree drop: '</span>, dropNode.label, dropType);
                        },
                        allowDrop(draggingNode, dropNode, type) {
                            <span class="hljs-keyword">if</span> (dropNode.data.label === <span class="hljs-string">'二级 3-1'</span>) {
                            <span class="hljs-keyword">return</span> type !== <span class="hljs-string">'inner'</span>;
                            } <span class="hljs-keyword">else</span> {
                            <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
                            }
                        },
                        allowDrag(draggingNode) {
                            <span class="hljs-keyword">return</span> draggingNode.data.label.indexOf(<span class="hljs-string">'三级 3-2-2'</span>) === <span class="hljs-number">-1</span>;
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>props</h3>
    <gl-table :table='Props'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
let id = 1000;
  export default {
    name: '',
    data () {
        const data = [{
            id: 1,
            label: '一级 1',
            children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
                id: 9,
                label: '三级 1-1-1'
            }, {
                id: 10,
                label: '三级 1-1-2'
            }]
            }]
            }, {
            id: 2,
            label: '一级 2',
            children: [{
            id: 5,
            label: '二级 2-1'
            }, {
            id: 6,
            label: '二级 2-2'
            }]
            }, {
            id: 3,
            label: '一级 3',
            children: [{
            id: 7,
            label: '二级 3-1'
            }, {
            id: 8,
            label: '二级 3-2'
            }]
      }]
      return {
        data: [{
            label: '一级 1',
            children: [{
                label: '二级 1-1',
                children: [{
                label: '三级 1-1-1'
                }]
            }]
            }, {
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                label: '三级 2-1-1'
                }]
            }, {
                label: '二级 2-2',
                children: [{
                label: '三级 2-2-1'
                }]
            }]
            }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                label: '三级 3-2-1'
                }]
            }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
            id: 9,
            label: '三级 1-1-1'
            }, {
            id: 10,
            label: '三级 1-1-2'
            }]
            }]
            }, {
            id: 2,
            label: '一级 2',
            children: [{
                id: 5,
                label: '二级 2-1'
            }, {
                id: 6,
                label: '二级 2-2'
            }]
            }, {
            id: 3,
            label: '一级 3',
            children: [{
                id: 7,
                label: '二级 3-1'
            }, {
                id: 8,
                label: '二级 3-2'
            }]
        }],
        data3: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        data6: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
            }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
            }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
             id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        table: {
            data: [
              {
                 parameter: 'data',
                 state: '展示数据',
                 mold: 'array',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'empty-text',
                 state: '内容为空的时候展示的文本',
                 mold: 'String',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-key',
                 state: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
                 mold: 'String',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'props',
                 state: '配置选项，具体看下表',
                 mold: 'object',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'render-after-expand',
                 state: '是否在第一次展开某个树节点后才渲染其子节点',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'load',
                 state: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
                 mold: 'function(node, resolve)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'render-content',
                 state: '树节点的内容区的渲染 Function',
                 mold: 'Function(h, { node, data, store }',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'highlight-current',
                 state: '是否高亮当前选中节点，默认值是 false。',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'default-expand-all',
                 state: '是否默认展开所有节点',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'expand-on-click-node',
                 state: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'check-on-click-node',
                 state: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'auto-expand-parent',
                 state: '展开子节点的时候是否自动展开父节点',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'default-expanded-keys',
                 state: '默认展开的节点的 key 的数组',
                 mold: 'array',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'show-checkbox',
                 state: '节点是否可被选择',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'check-strictly',
                 state: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'default-checked-keys',
                 state: '默认勾选的节点的 key 的数组',
                 mold: 'array',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'filter-node-method',
                 state: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
                 mold: 'Function(value, data, node)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'accordion',
                 state: '是否每次只打开一个同级树节点展开',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'indent',
                 state: '相邻级节点间的水平缩进，单位为像素',
                 mold: 'number',
                 choose: '—',
                 default: '16'
              },
              {
                 parameter: 'lazy',
                 state: '是否懒加载子节点，需与 load 方法结合使用',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'draggable',
                 state: '是否开启拖拽节点功能',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'allow-drag',
                 state: '判断节点能否被拖拽',
                 mold: 'Function(node)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'allow-drop',
                 state: "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
                 mold: 'Function(draggingNode, dropNode, type)',
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
                 width: '350'
              },
              {
                 label: '类型',
                 prop: 'mold'
              },
              {
                 label: '可选值',
                 prop: 'choose',
                 width: '50'
              },
              {
                 label: '默认值',
                 prop: 'default',
                 width: '80'
               }
            ]
        },
        Props: {
            data: [
              {
                 parameter: 'label',
                 state: '指定节点标签为节点对象的某个属性值',
                 mold: 'string, function(data, node)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'children',
                 state: '指定子树为节点对象的某个属性值',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {                 
                 parameter: 'disabled',
                 state: '指定节点选择框是否禁用为节点对象的某个属性值',
                 mold: 'boolean, function(data, node)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'isLeaf',
                 state: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
                 mold: 'boolean, function(data, node)',
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
                 width: '350'
              },
              {
                 label: '类型',
                 prop: 'mold',
                 width: '280'
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
                 parameter: 'node-click',
                 state: '节点被点击时的回调',
                 mold: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-contextmenu',
                 state: '当某一节点被鼠标右键点击时会触发该事件',
                 mold: '共四个参数，依次为：event、传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'check-change',
                 state: '节点选中状态发生变化时的回调',
                 mold: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'check',
                 state: '当复选框被点击的时候触发',
                 mold: '共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'current-change',
                 state: '当前选中节点变化时触发的事件',
                 mold: '共两个参数，依次为：当前节点的数据，当前节点的 Node 对象',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-expand',
                 state: '节点被展开时触发的事件',
                 mold: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-collapse',
                 state: '节点被关闭时触发的事件',
                 mold: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-drag-start',
                 state: '节点开始拖拽时触发的事件',
                 mold: '共两个参数，依次为：被拖拽节点对应的 Node、event',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-drag-enter',
                 state: '拖拽进入其他节点时触发的事件',
                 mold: '共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-drag-leave',
                 state: '拖拽离开某个节点时触发的事件',
                 mold: '共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-drag-over',
                 state: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）',
                 mold: '共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-drag-end',
                 state: '拖拽结束时（可能未成功）触发的事件',
                 mold: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'node-drop',
                 state: '拖拽成功完成时触发的事件',
                 mold: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event',
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
                 width: '350'
              },
              {
                 label: '回调参数',
                 prop: 'mold',
                 width: '350'
              }
            ]
        }
      }
    },
    methods: {
        handleNodeClick(data) {
            console.log(data)
        },
        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
        },
        handleNodeClick(data) {
            console.log(data);
        },
        loadNode(node, resolve) {
            if (node.level === 0) {
            return resolve([{ name: 'region1' }, { name: 'region2' }]);
            }
            if (node.level > 3) return resolve([]);

            var hasChild;
            if (node.data.name === 'region1') {
            hasChild = true;
            } else if (node.data.name === 'region2') {
            hasChild = false;
            } else {
            hasChild = Math.random() > 0.5;
            }

            setTimeout(() => {
            var data;
            if (hasChild) {
                data = [{
                name: 'zone' + this.count++
                }, {
                name: 'zone' + this.count++
                }];
            } else {
                data = [];
            }

            resolve(data);
            }, 500);
        },
        loadNode1(node, resolve) {
            if (node.level === 0) {
            return resolve([{ name: 'region' }]);
            }
            if (node.level > 1) return resolve([]);

            setTimeout(() => {
            const data = [{
                name: 'leaf',
                leaf: true
            }, {
                name: 'zone'
            }];

            resolve(data);
            }, 500);
        },
        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
            this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
        renderContent(h, { node, data, store }) {
            return (
            <span class="custom-tree-node">
                <span>{node.label}</span>
                <span>
                <gl-button size="mini" type="text" on-click={ () => this.append(data) }>Append</gl-button>
                <gl-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</gl-button>
                </span>
            </span>);
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        handleDragStart(node, ev) {
            console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
        },
        allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === '二级 3-1') {
            return type !== 'inner';
            } else {
            return true;
            }
        },
        allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
        }
    }
  }
</script>