<template>
  <div class='box'>
    <h2>Dialog 对话框</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h3>基本用法</h3>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="dialogVisible = true">点击打开 Dialog</gl-button>
            <gl-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <gl-button @click="dialogVisible = false">取 消</gl-button>
                <gl-button type="primary" @click="dialogVisible = false">确 定</gl-button>
            </span>
            </gl-dialog>
        </template>
        <template slot='description'>
            <p>需要设置<code>visible</code>属性，它接收<code>Boolean</code>，当为<code>true</code>时显示 Dialog。Dialog 分为两个部分：<code>body</code>和<code>footer</code>，<code>footer</code>需要具名为<code>footer</code>的<code>slot</code>。<code>title</code>属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了<code>before-close</code>的用法。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogVisible = true"</span>&gt;</span>点击打开 Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dialog</span>
                    <span class="hljs-attr">title</span>=<span class="hljs-string">"提示"</span>
                    <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"dialogVisible"</span>
                    <span class="hljs-attr">width</span>=<span class="hljs-string">"30%"</span>
                    <span class="hljs-attr">:before-close</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>这是一段信息<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dialog-footer"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogVisible = false"</span>&gt;</span>确 定<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dialog</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">dialogVisible</span>: <span class="hljs-literal">false</span>
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleClose(done) {
                            <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'确认关闭？'</span>)
                            .then(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
                                done();
                            })
                            .catch(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {});
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <div class="tip"><p><code>before-close</code> 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 <code>footer</code> 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 <code>before-close</code> 的相关逻辑。</p></div>
    <h3>自定义内容</h3>
    <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Table 和 Form 组件的两个样例。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="dialogTableVisible = true" style="margin-right: 15px;">打开嵌套表格的 Dialog</gl-button>
            <gl-dialog title="收货地址" :visible.sync="dialogTableVisible">
                <gl-table :table='table'></gl-table>
            </gl-dialog>

            <!-- Form -->
            <gl-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</gl-button>

            <gl-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <gl-form :model="form">
                    <gl-form-item label="活动名称" :label-width="formLabelWidth">
                    <gl-input v-model="form.name" auto-complete="off"></gl-input>
                    </gl-form-item>
                    <gl-form-item label="活动区域" :label-width="formLabelWidth">
                    <gl-select v-model="form.region" placeholder="请选择活动区域">
                        <gl-option label="区域一" value="shanghai"></gl-option>
                        <gl-option label="区域二" value="beijing"></gl-option>
                    </gl-select>
                    </gl-form-item>
                </gl-form>
                <div slot="footer" class="dialog-footer">
                    <gl-button @click="dialogFormVisible = false">取 消</gl-button>
                    <gl-button type="primary" @click="dialogFormVisible = false">确 定</gl-button>
                </div>
            </gl-dialog>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-comment">&lt;!-- Table --&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogTableVisible = true"</span>&gt;</span>打开嵌套表格的 Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"收货地址"</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"dialogTableVisible"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span> <span class="hljs-attr">:table</span>=<span class="hljs-string">"table"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dialog</span>&gt;</span>

                <span class="hljs-comment">&lt;!-- Form --&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogFormVisible = true"</span>&gt;</span>打开嵌套表单的 Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"收货地址"</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"dialogFormVisible"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-form</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"form"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"活动名称"</span> <span class="hljs-attr">:label-width</span>=<span class="hljs-string">"formLabelWidth"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.name"</span> <span class="hljs-attr">auto-complete</span>=<span class="hljs-string">"off"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-form-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"活动区域"</span> <span class="hljs-attr">:label-width</span>=<span class="hljs-string">"formLabelWidth"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择活动区域"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"区域一"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-option</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-option</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"区域二"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"beijing"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-option</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-select</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-form-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-form</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dialog-footer"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogFormVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogFormVisible = false"</span>&gt;</span>确 定<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dialog</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">table:</span>: {
                                <span class="hljs-attr">data:</span> [
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'2018-07-30'</span>,
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
                            },
                            <span class="hljs-attr">dialogTableVisible</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">dialogFormVisible</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">form</span>: {
                            <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">date1</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">date2</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">type</span>: [],
                            <span class="hljs-attr">resource</span>: <span class="hljs-string">''</span>,
                            <span class="hljs-attr">desc</span>: <span class="hljs-string">''</span>
                            },
                            <span class="hljs-attr">formLabelWidth</span>: <span class="hljs-string">'120px'</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>嵌套的 Dialog</h3>
    <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 <code>append-to-body</code> 属性。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="outerVisible = true">点击打开外层 Dialog</gl-button>
            <gl-dialog title="外层 Dialog" :visible.sync="outerVisible">
                <gl-dialog
                width="30%"
                title="内层 Dialog"
                :visible.sync="innerVisible"
                append-to-body>
                </gl-dialog>
                <div slot="footer" class="dialog-footer">
                <gl-button @click="outerVisible = false">取 消</gl-button>
                <gl-button type="primary" @click="innerVisible = true">打开内层 Dialog</gl-button>
                </div>
            </gl-dialog>
        </template>
        <template slot='description'>
            <p>正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了<code>append-to-body</code>属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"outerVisible = true"</span>&gt;</span>点击打开外层 Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"外层 Dialog"</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"outerVisible"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-dialog</span>
                        <span class="hljs-attr">width</span>=<span class="hljs-string">"30%"</span>
                        <span class="hljs-attr">title</span>=<span class="hljs-string">"内层 Dialog"</span>
                        <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"innerVisible"</span>
                        <span class="hljs-attr">append-to-body</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dialog</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dialog-footer"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"outerVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"innerVisible = true"</span>&gt;</span>打开内层 Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dialog</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">outerVisible</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">innerVisible</span>: <span class="hljs-literal">false</span>
                        };
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>居中布局</h3>
    <p>标题和底部可水平居中</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</gl-button>
            <gl-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
                <gl-button @click="centerDialogVisible = false">取 消</gl-button>
                <gl-button type="primary" @click="centerDialogVisible = false">确 定</gl-button>
            </span>
            </gl-dialog>
        </template>
        <template slot='description'>
            <p>将<code>center</code>设置为<code>true</code>即可使标题和底部居中。<code>center</code>仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"centerDialogVisible = true"</span>&gt;</span>点击打开 Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dialog</span>
                    <span class="hljs-attr">title</span>=<span class="hljs-string">"提示"</span>
                    <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"centerDialogVisible"</span>
                    <span class="hljs-attr">width</span>=<span class="hljs-string">"30%"</span>
                    <span class="hljs-attr">center</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>需要注意的是内容是默认不居中的<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dialog-footer"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"centerDialogVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"centerDialogVisible = false"</span>&gt;</span>确 定<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dialog</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">centerDialogVisible</span>: <span class="hljs-literal">false</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <div class="tip"><p>Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p></div>
    <div class="tip"><p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Dialog 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p></div>
    <h3>Attributes</h3>
    <gl-table :table='Attributes'></gl-table>
    <h3>Slot</h3>
    <gl-table :table='Slot'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
        centerDialogVisible: false,
        dialogVisible: false,
        table: {
                data: [
                    {
                    date: '2018-07-30',
                    name: '嘀嘀虎',
                    address: '深圳市南山区科兴科学园C3栋7楼'
                    },
                    {
                    date: '2018-07-30',
                    name: '嘀嘀虎',
                    address: '深圳市南山区科兴科学园C3栋7楼'
                    },
                    {
                    date: '2018-07-30',
                    name: '嘀嘀虎',
                    address: '深圳市南山区科兴科学园C3栋7楼'
                    },
                    {
                    date: '2018-07-30',
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
        dialogTableVisible: false,
        dialogFormVisible: false,
        outerVisible: false,
        innerVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        Attributes: {
            data: [
              {
                 parameter: 'visible',
                 state: '是否显示 Dialog，支持 .sync 修饰符',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'title',
                 state: 'Dialog 的标题，也可通过具名 slot （见下表）传入',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'width',
                 state: 'Dialog 的宽度',
                 mold: 'string',
                 choose: '—',
                 default: '50%'
              },
              {
                 parameter: 'fullscreen',
                 state: '是否为全屏 Dialog',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'top',
                 state: 'Dialog CSS 中的 margin-top 值',
                 mold: 'string',
                 choose: '—',
                 default: '15vh'
              },
              {
                 parameter: 'modal',
                 state: '是否需要遮罩层',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'modal-append-to-body',
                 state: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'append-to-body',
                 state: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'lock-scroll',
                 state: '是否在 Dialog 出现时将 body 滚动锁定',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'custom-class',
                 state: 'Dialog 的自定义类名',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'close-on-click-modal',
                 state: '是否可以通过点击 modal 关闭 Dialog',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'close-on-press-escape',
                 state: '是否可以通过按下 ESC 关闭 Dialog',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'show-close',
                 state: '是否显示关闭按钮',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'before-close',
                 state: '关闭前的回调，会暂停 Dialog 的关闭',
                 mold: 'function(done)，done 用于关闭 Dialog',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'center',
                 state: '是否对头部和底部采用居中布局',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              }
            ],
            column: [
              {
                 label: '参数',
                 prop: 'parameter',
                 width: '165'
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
                 width: '70'
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
                 parameter: '—',
                 state: 'Dialog 的内容',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'title',
                 state: 'Dialog 标题区的内容',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'footer',
                 state: 'Dialog 按钮操作区的内容',
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
                 parameter: 'open',
                 state: 'Dialog 打开的回调',
                 mold: '—',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'close',
                 state: 'Dialog 关闭的回调',
                 mold: '—',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'closed',
                 state: 'Dialog 关闭动画结束时的回调',
                 mold: '—',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: '事件名称',
                 prop: 'parameter',
                 width: '200'
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
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>

</style>