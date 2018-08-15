<template>
    <div class="box">
        <h2>Cascader 级联选择器</h2>
        <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
        <h3>基础用法</h3>
        <p>有两种触发子菜单的方式</p>
        <Code>
            <template slot='source'>
                <div class="block">
                    <span class="demonstration">默认 click 触发子菜单</span>
                    <gl-cascader
                        :options="options"
                        v-model="selectedOptions"
                        @change="handleChange">
                    </gl-cascader>
                </div>
                <div class="block">
                    <span class="demonstration">hover 触发子菜单</span>
                    <gl-cascader
                        expand-trigger="hover"
                        :options="options"
                        v-model="selectedOptions2"
                        @change="handleChange">
                    </gl-cascader>
                </div>
            </template>
            <template slot='description'>
                <p>只需为 Cascader 的<code>options</code>属性指定选项数组即可渲染出一个级联选择器。通过<code>expand-trigger</code>可以定义展开子级菜单的触发方式。本例还展示了<code>change</code>事件，它的参数为 Cascader 的绑定值：一个由各级菜单的值所组成的数组。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认 click 触发子菜单<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                            <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"selectedOptions"</span>
                            <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>hover 触发子菜单<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                            <span class="hljs-attr">expand-trigger</span>=<span class="hljs-string">"hover"</span>
                            <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                            <span class="hljs-attr">v-model</span>=<span class="hljs-string">"selectedOptions2"</span>
                            <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">options</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
                                <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
                                    }]
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
                                    }]
                                }]
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
                                <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
                                    }]
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
                                    }]
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
                                    }]
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
                                    }]
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
                                    }]
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
                                    <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
                                    }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
                                    }]
                                }]
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
                                <span class="hljs-attr">children</span>: [{
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
                                }, {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
                                }]
                                }],
                                <span class="hljs-attr">selectedOptions</span>: [],
                                <span class="hljs-attr">selectedOptions2</span>: []
                            };
                        },
                        <span class="hljs-attr">methods</span>: {
                            handleChange(value) {
                                <span class="hljs-built_in">console</span>.log(value);
                            }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>禁用选项</h3>
        <p>通过在数据源中设置 <code>disabled</code> 字段来声明该选项是禁用的</p>
        <Code>
            <template slot='source'>
                <gl-cascader
                    :options="optionsWithDisabled"
                ></gl-cascader>
            </template>
            <template slot='description'>
                <p>本例中，<code>options</code>指定的数组中的第一个元素含有<code>disabled: true</code>键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的<code>disabled</code>字段是否为<code>true</code>，如果你的数据中表示禁用含义的字段名不为<code>disabled</code>，可以通过<code>props</code>属性来指定（详见下方 API 表格）。当然，<code>value</code>、<code>label</code>和<code>children</code>这三个字段名也可以通过同样的方式指定。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                    <span class="hljs-attr">:options</span>=<span class="hljs-string">"optionsWithDisabled"</span>
                    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">optionsWithDisabled</span>: [{
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
                            <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
                            }]
                            }]
                        };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>仅显示最后一级</h3>
        <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
        <Code>
            <template slot='source'>
                <gl-cascader
                :options="options"
                :show-all-levels="false"
                ></gl-cascader>
            </template>
            <template slot='description'>
                <p>属性<code>show-all-levels</code>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                    <span class="hljs-attr">:show-all-levels</span>=<span class="hljs-string">"false"</span>
                    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">options</span>: [{
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
                            }]
                            }]
                        };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>默认值</h3>
        <Code>
            <template slot='source'>
                <gl-cascader
                :options="options"
                v-model="selectedOptions3"
                ></gl-cascader>
            </template>
            <template slot='description'>
                <p>默认值通过数组的方式指定。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"selectedOptions3"</span>
                    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">options</span>: [{
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
                            }]
                            }],
                            <span class="hljs-attr">selectedOptions3</span>: [<span class="hljs-string">'zujian'</span>, <span class="hljs-string">'data'</span>, <span class="hljs-string">'tag'</span>]
                        };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>选择即改变</h3>
        <p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>
        <Code>
            <template slot='source'>
                <gl-cascader
                :options="options"
                change-on-select
                ></gl-cascader>
            </template>
            <template slot='description'>
                <p>若需要允许用户选择任意一级选项，则可将<code>change-on-select</code>赋值为<code>true</code></p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                    <span class="hljs-attr">change-on-select</span>
                    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">options</span>: [{
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
                            }]
                            }]
                        };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>动态加载次级选项</h3>
        <p>当选中某一级时，动态加载该级下的选项。</p>
        <Code>
            <template slot='source'>
                <gl-cascader
                :options="options2"
                @active-item-change="handleItemChange"
                :props="props"
                ></gl-cascader>
            </template>
            <template slot='description'>
                <p>本例的选项数据源在初始化时不包含子级数据。利用<code>active-item-change</code>事件，可以在用户点击某个选项时拉取该选项的子级数据。此外，本例还展示了<code>props</code>属性的用法。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options2"</span>
                    <span class="hljs-attr">@active-item-change</span>=<span class="hljs-string">"handleItemChange"</span>
                    <span class="hljs-attr">:props</span>=<span class="hljs-string">"props"</span>
                    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">options2</span>: [{
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'苟利国家生死以'</span>,
                                    <span class="hljs-attr">txt</span>: []
                                    }, {
                                    <span class="hljs-attr">label</span>: <span class="hljs-string">'闷声发大财'</span>,
                                    <span class="hljs-attr">txt</span>: []
                                }],
                                <span class="hljs-attr">props</span>: {
                                    <span class="hljs-attr">value</span>: <span class="hljs-string">'label'</span>,
                                    <span class="hljs-attr">children</span>: <span class="hljs-string">'txt'</span>
                                }
                            };
                        },

                        <span class="hljs-attr">methods</span>: {
                        handleItemChange(val) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'active item:'</span>, val);
                            setTimeout(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
                                <span class="hljs-keyword">if</span> (val.indexOf(<span class="hljs-string">'苟利国家生死以'</span>) &gt; <span class="hljs-number">-1</span> &amp;&amp; !<span class="hljs-keyword">this</span>.options2[<span class="hljs-number">0</span>].txt.length) {
                                    <span class="hljs-keyword">this</span>.options2[<span class="hljs-number">0</span>].txt = [{
                                        <span class="hljs-attr">label</span>: <span class="hljs-string">'岂因祸福避趋之'</span>
                                    }];
                                } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (val.indexOf(<span class="hljs-string">'闷声发大财'</span>) &gt; <span class="hljs-number">-1</span> &amp;&amp; !<span class="hljs-keyword">this</span>.options2[<span class="hljs-number">1</span>].txt.length) {
                                    <span class="hljs-keyword">this</span>.options2[<span class="hljs-number">1</span>].txt = [{
                                        <span class="hljs-attr">label</span>: <span class="hljs-string">'+1s'</span>
                                    }];
                                }
                            }, <span class="hljs-number">300</span>);
                        }
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>可搜索</h3>
        <p>可以快捷地搜索选项并选择。</p>
        <Code>
            <template slot='source'>
                <div class="block">
                <span class="demonstration">只可选择最后一级菜单的选项</span>
                <gl-cascader
                    placeholder="试试搜索：指南"
                    :options="options"
                    filterable
                ></gl-cascader>
                </div>
                <div class="block">
                <span class="demonstration">可选择任意一级菜单的选项</span>
                <gl-cascader
                    placeholder="试试搜索：指南"
                    :options="options"
                    filterable
                    change-on-select
                ></gl-cascader>
                </div>
            </template>
            <template slot='description'>
                <p>将<code>filterable</code>赋值为<code>true</code>即可打开搜索功能。</p>
            </template>
            <template slot='highlight'>
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>只可选择最后一级菜单的选项<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"试试搜索：指南"</span>
                            <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                            <span class="hljs-attr">filterable</span>
                        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>可选择任意一级菜单的选项<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-cascader</span>
                            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"试试搜索：指南"</span>
                            <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
                            <span class="hljs-attr">filterable</span>
                            <span class="hljs-attr">change-on-select</span>
                        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-cascader</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">options</span>: [{
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
                                }]
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
                                <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
                                }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
                                }]
                            }]
                            }, {
                            <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
                            <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
                            <span class="hljs-attr">children</span>: [{
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
                            }, {
                                <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
                                <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
                            }]
                            }]
                        };
                        }
                    };
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>Attributes</h3>
        <gl-table :table='Attributes'></gl-table>
        <h3>props</h3>
        <gl-table :table='Props'></gl-table>
        <h3>Events</h3>
        <gl-table :table='Events'></gl-table>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Cascader',
    data () {
      return {
          options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                value: 'yizhi',
                label: '一致'
                }, {
                value: 'fankui',
                label: '反馈'
                }, {
                value: 'xiaolv',
                label: '效率'
                }, {
                value: 'kekong',
                label: '可控'
                }]
            }, {
                value: 'daohang',
                label: '导航',
                children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
                }, {
                value: 'dingbudaohang',
                label: '顶部导航'
                }]
            }]
            }, {
            value: 'zujian',
            label: '组件',
            children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                value: 'layout',
                label: 'Layout 布局'
                }, {
                value: 'color',
                label: 'Color 色彩'
                }, {
                value: 'typography',
                label: 'Typography 字体'
                }, {
                value: 'icon',
                label: 'Icon 图标'
                }, {
                value: 'button',
                label: 'Button 按钮'
                }]
            }, {
                value: 'form',
                label: 'Form',
                children: [{
                value: 'radio',
                label: 'Radio 单选框'
                }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
                }, {
                value: 'input',
                label: 'Input 输入框'
                }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
                }, {
                value: 'select',
                label: 'Select 选择器'
                }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
                }, {
                value: 'switch',
                label: 'Switch 开关'
                }, {
                value: 'slider',
                label: 'Slider 滑块'
                }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
                }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
                }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
                }, {
                value: 'upload',
                label: 'Upload 上传'
                }, {
                value: 'rate',
                label: 'Rate 评分'
                }, {
                value: 'form',
                label: 'Form 表单'
                }]
            }, {
                value: 'data',
                label: 'Data',
                children: [{
                value: 'table',
                label: 'Table 表格'
                }, {
                value: 'tag',
                label: 'Tag 标签'
                }, {
                value: 'progress',
                label: 'Progress 进度条'
                }, {
                value: 'tree',
                label: 'Tree 树形控件'
                }, {
                value: 'pagination',
                label: 'Pagination 分页'
                }, {
                value: 'badge',
                label: 'Badge 标记'
                }]
            }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                value: 'alert',
                label: 'Alert 警告'
                }, {
                value: 'loading',
                label: 'Loading 加载'
                }, {
                value: 'message',
                label: 'Message 消息提示'
                }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
                }, {
                value: 'notification',
                label: 'Notification 通知'
                }]
            }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
                }, {
                value: 'tabs',
                label: 'Tabs 标签页'
                }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
                }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
                }, {
                value: 'steps',
                label: 'Steps 步骤条'
                }]
            }, {
                value: 'others',
                label: 'Others',
                children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
                }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
                }, {
                value: 'popover',
                label: 'Popover 弹出框'
                }, {
                value: 'card',
                label: 'Card 卡片'
                }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
                }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
                }]
            }]
            }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
                value: 'axure',
                label: 'Axure Components'
            }, {
                value: 'sketch',
                label: 'Sketch Templates'
            }, {
                value: 'jiaohu',
                label: '组件交互文档'
            }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['zujian', 'data', 'tag'],
        optionsWithDisabled: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
            children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                value: 'yizhi',
                label: '一致'
                }, {
                value: 'fankui',
                label: '反馈'
                }, {
                value: 'xiaolv',
                label: '效率'
                }, {
                value: 'kekong',
                label: '可控'
                }]
            }, {
                value: 'daohang',
                label: '导航',
                children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
                }, {
                value: 'dingbudaohang',
                label: '顶部导航'
                }]
            }]
            }, {
            value: 'zujian',
            label: '组件',
            children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                value: 'layout',
                label: 'Layout 布局'
                }, {
                value: 'color',
                label: 'Color 色彩'
                }, {
                value: 'typography',
                label: 'Typography 字体'
                }, {
                value: 'icon',
                label: 'Icon 图标'
                }, {
                value: 'button',
                label: 'Button 按钮'
                }]
            }, {
                value: 'form',
                label: 'Form',
                children: [{
                value: 'radio',
                label: 'Radio 单选框'
                }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
                }, {
                value: 'input',
                label: 'Input 输入框'
                }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
                }, {
                value: 'select',
                label: 'Select 选择器'
                }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
                }, {
                value: 'switch',
                label: 'Switch 开关'
                }, {
                value: 'slider',
                label: 'Slider 滑块'
                }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
                }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
                }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
                }, {
                value: 'upload',
                label: 'Upload 上传'
                }, {
                value: 'rate',
                label: 'Rate 评分'
                }, {
                value: 'form',
                label: 'Form 表单'
                }]
            }, {
                value: 'data',
                label: 'Data',
                children: [{
                value: 'table',
                label: 'Table 表格'
                }, {
                value: 'tag',
                label: 'Tag 标签'
                }, {
                value: 'progress',
                label: 'Progress 进度条'
                }, {
                value: 'tree',
                label: 'Tree 树形控件'
                }, {
                value: 'pagination',
                label: 'Pagination 分页'
                }, {
                value: 'badge',
                label: 'Badge 标记'
                }]
            }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                value: 'alert',
                label: 'Alert 警告'
                }, {
                value: 'loading',
                label: 'Loading 加载'
                }, {
                value: 'message',
                label: 'Message 消息提示'
                }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
                }, {
                value: 'notification',
                label: 'Notification 通知'
                }]
            }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
                }, {
                value: 'tabs',
                label: 'Tabs 标签页'
                }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
                }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
                }, {
                value: 'steps',
                label: 'Steps 步骤条'
                }]
            }, {
                value: 'others',
                label: 'Others',
                children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
                }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
                }, {
                value: 'popover',
                label: 'Popover 弹出框'
                }, {
                value: 'card',
                label: 'Card 卡片'
                }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
                }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
                }]
            }]
            }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
                value: 'axure',
                label: 'Axure Components'
            }, {
                value: 'sketch',
                label: 'Sketch Templates'
            }, {
                value: 'jiaohu',
                label: '组件交互文档'
            }]
        }],
        options2: [{
          label: '苟利国家生死以',
          txt: []
            }, {
          label: '闷声发大财',
          txt: []
        }],
        props: {
          value: 'label',
          children: 'txt'
        },
        Attributes: {
            data: [
              {
                 parameter: 'options',
                 state: '可选项数据源，键名可通过 props 属性配置',
                 mold: 'array',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'props',
                 state: '配置选项，具体见下表',
                 mold: 'object',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'value',
                 state: '选中项绑定值',
                 mold: 'array',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'separator',
                 state: '选项分隔符',
                 mold: 'string',
                 choose: '—',
                 default: "斜杠'/'"
              },
              {
                 parameter: 'popper-class',
                 state: '自定义浮层类名',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'placeholder',
                 state: '输入框占位文本',
                 mold: 'string',
                 choose: '—',
                 default: '请选择'
              },
              {
                 parameter: 'disabled',
                 state: '是否禁用',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'clearable',
                 state: '是否支持清空选项',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'expand-trigger',
                 state: '次级菜单的展开方式',
                 mold: 'string',
                 choose: 'click / hover',
                 default: 'click'
              },
              {
                 parameter: 'show-all-levels',
                 state: '输入框中是否显示选中值的完整路径',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'filterable',
                 state: '是否可搜索选项',
                 mold: 'boolean',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'debounce',
                 state: '搜索关键词输入的去抖延迟，毫秒',
                 mold: 'number',
                 choose: '—',
                 default: '300'
              },
              {
                 parameter: 'change-on-select',
                 state: '是否允许选择任意一级的选项',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'size',
                 state: '尺寸',
                 mold: 'string',
                 choose: 'medium / small / mini',
                 default: '—'
              },
              {
                 parameter: 'before-filter',
                 state: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
                 mold: 'function(value)',
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
                 width: '184'
              },
              {
                 label: '默认值',
                 prop: 'default'
               }
            ]
        },
        Props: {
            data: [
              {
                 parameter: 'value',
                 state: '指定选项的值为选项对象的某个属性值',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'label',
                 state: '指定选项标签为选项对象的某个属性值',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'children',
                 state: '指定选项的子选项为选项对象的某个属性值',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'disabled',
                 state: '指定选项的禁用为选项对象的某个属性值',
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
        Events: {
            data: [
              {
                 parameter: 'change',
                 state: '当绑定值变化时触发的事件',
                 mold: '当前值',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'active-item-change',
                 state: '当父级选项变化时触发的事件，仅在 change-on-select 为 false 时可用',
                 mold: '各父级选项组成的数组',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'blur',
                 state: '在 Cascader 失去焦点时触发',
                 mold: '(event: Event)',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'focus',
                 state: '在 Cascader 获得焦点时触发',
                 mold: '(event: Event)',
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
                 width: '420'
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
      handleChange(value) {
        console.log(value);
      },
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('苟利国家生死以') > -1 && !this.options2[0].txt.length) {
            this.options2[0].txt = [{
              label: '岂因祸福避趋之'
            }];
          } else if (val.indexOf('闷声发大财') > -1 && !this.options2[1].txt.length) {
            this.options2[1].txt = [{
              label: '+1s'
            }];
          }
        }, 300);
      }
    }
  }
</script>
<style scoped>
    .block{
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    }
    .block:last-child{
        border-right: none;
    }
    .block .demonstration{
            display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
    }
</style>