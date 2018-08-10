<template>
    <div class="box">
        <h2>Container 布局容器</h2>
        <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
        <p><code>&lt;gl-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;gl-header&gt;</code> 或 <code>&lt;gl-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
        <p><code>&lt;gl-header&gt;</code>：顶栏容器。</p>
        <p><code>&lt;gl-aside&gt;</code>：侧边栏容器。</p>
        <p><code>&lt;gl-main&gt;</code>：主要区域容器。</p>
        <p><code>&lt;gl-footer&gt;</code>：底栏容器。</p>
        <div class="tip">
            <p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;gl-container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;gl-container&gt;</code></p>
        </div>
        <h3>常见页面布局</h3>
        <Code>
            <template slot="source">
                <gl-container>
                    <gl-header>Header</gl-header>
                    <gl-main class="gl-main">Main(示例一)</gl-main>
                </gl-container>
                <gl-container>
                    <gl-header>Header</gl-header>
                    <gl-main class="gl-main">Main(示例二)</gl-main>
                    <gl-footer>Footer</gl-footer>
                </gl-container>

                <gl-container>
                    <gl-aside width="200px">Aside</gl-aside>
                    <gl-main class="gl-main">Main(示例三)</gl-main>
                </gl-container>

                <gl-container>
                    <gl-header>Header</gl-header>
                    <gl-container>
                        <gl-aside width="200px">Aside</gl-aside>
                        <gl-main class="gl-main">Main(示例四)</gl-main>
                    </gl-container>
                </gl-container>

                <gl-container>
                    <gl-header>Header</gl-header>
                    <gl-container>
                        <gl-aside width="200px">Aside</gl-aside>
                        <gl-container>
                        <gl-main class="gl-main">Main(示例五)</gl-main>
                        <gl-footer>Footer</gl-footer>
                        </gl-container>
                    </gl-container>
                </gl-container>

                <gl-container>
                    <gl-aside width="200px">Aside</gl-aside>
                    <gl-container>
                        <gl-header>Header</gl-header>
                        <gl-main class="gl-main">Main(示例六)</gl-main>
                    </gl-container>
                </gl-container>

                <gl-container>
                    <gl-aside width="200px">Aside</gl-aside>
                    <gl-container>
                        <gl-header>Header</gl-header>
                        <gl-main class="gl-main">Main(示例七)</gl-main>
                        <gl-footer>Footer</gl-footer>
                    </gl-container>
                </gl-container>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第一个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">el-main</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">gl-footer</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第二个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">gl-aside</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">gl-main</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第三个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">gl-header</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">gl-aside</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">gl-main</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第四个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">gl-header</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">gl-aside</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">gl-main</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">gl-footer</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第五个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">gl-aside</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">gl-header</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">gl-main</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第六个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span class="hljs-name">gl-aside</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">gl-header</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span class="hljs-name">gl-main</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">gl-footer</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    ↑ 第七个示例
                    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                        <span class="hljs-selector-class">.el-header</span>, <span class="hljs-selector-class">.el-footer</span> {
                            <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#B3C0D1</span>;
                            <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
                            <span class="hljs-attribute">text-align</span>: center;
                            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>;
                        }
                        
                        <span class="hljs-selector-class">.el-aside</span> {
                            <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#D3DCE6</span>;
                            <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
                            <span class="hljs-attribute">text-align</span>: center;
                            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">200px</span>;
                        }
                        
                        <span class="hljs-selector-class">.el-main</span> {
                            <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#E9EEF3</span>;
                            <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
                            <span class="hljs-attribute">text-align</span>: center;
                            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">160px</span>;
                        }
                        
                        <span class="hljs-selector-tag">body</span> &gt; <span class="hljs-selector-class">.el-container</span> {
                            <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">40px</span>;
                        }
                        
                        <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(5)</span> <span class="hljs-selector-class">.el-aside</span>,
                        <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(6)</span> <span class="hljs-selector-class">.el-aside</span> {
                            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">260px</span>;
                        }
                        
                        <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(7)</span> <span class="hljs-selector-class">.el-aside</span> {
                            <span class="hljs-attribute">line-height</span>: <span class="hljs-number">320px</span>;
                        }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                    </code></pre>
            </template>
        </Code>
        <h3>实例</h3>
        <Code>
            <template slot="source">
                <gl-container style="height: 500px; border: 1px solid #eee">
                    <gl-aside width="200px" style="background-color: rgb(238, 241, 246)">
                        <gl-menu :default-openeds="['1', '3']">
                        <gl-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <gl-menu-item-group>
                            <template slot="title">分组一</template>
                            <gl-menu-item index="1-1">选项1</gl-menu-item>
                            <gl-menu-item index="1-2">选项2</gl-menu-item>
                            </gl-menu-item-group>
                            <gl-menu-item-group title="分组2">
                            <gl-menu-item index="1-3">选项3</gl-menu-item>
                            </gl-menu-item-group>
                            <gl-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <gl-menu-item index="1-4-1">选项4-1</gl-menu-item>
                            </gl-submenu>
                        </gl-submenu>
                        <gl-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                            <gl-menu-item-group>
                            <template slot="title">分组一</template>
                            <gl-menu-item index="2-1">选项1</gl-menu-item>
                            <gl-menu-item index="2-2">选项2</gl-menu-item>
                            </gl-menu-item-group>
                            <gl-menu-item-group title="分组2">
                            <gl-menu-item index="2-3">选项3</gl-menu-item>
                            </gl-menu-item-group>
                            <gl-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <gl-menu-item index="2-4-1">选项4-1</gl-menu-item>
                            </gl-submenu>
                        </gl-submenu>
                        <gl-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                            <gl-menu-item-group>
                            <template slot="title">分组一</template>
                            <gl-menu-item index="3-1">选项1</gl-menu-item>
                            <gl-menu-item index="3-2">选项2</gl-menu-item>
                            </gl-menu-item-group>
                            <gl-menu-item-group title="分组2">
                            <gl-menu-item index="3-3">选项3</gl-menu-item>
                            </gl-menu-item-group>
                            <gl-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <gl-menu-item index="3-4-1">选项4-1</gl-menu-item>
                            </gl-submenu>
                        </gl-submenu>
                        </gl-menu>
                    </gl-aside>
                    
                    <gl-container>
                        <gl-header style="text-align: right; font-size: 12px">
                        <gl-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <gl-dropdown-menu slot="dropdown">
                            <gl-dropdown-item>查看</gl-dropdown-item>
                            <gl-dropdown-item>新增</gl-dropdown-item>
                            <gl-dropdown-item>删除</gl-dropdown-item>
                            </gl-dropdown-menu>
                        </gl-dropdown>
                        <span>嘀嘀虎</span>
                        </gl-header>                    
                        <gl-main>
                            <gl-table :table='table'></gl-table>
                        </gl-main>
                    </gl-container>
                </gl-container>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height: 500px; border: 1px solid #eee"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-aside</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"200px"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background-color: rgb(238, 241, 246)"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu</span> <span class="hljs-attr">:default-openeds</span>=<span class="hljs-string">"['1', '3']"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-icon-message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项4-1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-1"</span>&gt;</span>选项4-1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3-4"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3-4-1"</span>&gt;</span>选项4-1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-aside</span>&gt;</span>
                        
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-container</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-header</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: right; font-size: 12px"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-icon-setting"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-right: 15px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>查看<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>新增<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>嘀嘀虎<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-header</span>&gt;</span>
                          
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-main</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span> <span class="hljs-attr">:table</span>=<span class="hljs-string">"table"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-main</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-container</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                    <span class="hljs-selector-class">.el-header</span> {
                        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#B3C0D1</span>;
                        <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
                        <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>;
                    }
                    
                    <span class="hljs-selector-class">.el-aside</span> {
                        <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
                    }
                    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                        data() {
                            <span class="hljs-keyword">const</span> item = {
                                <span class="hljs-attr">date</span>: <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                <span class="hljs-attr">name</span>: <span class="hljs-string">'嘀嘀虎'</span>,
                                <span class="hljs-attr">address</span>: <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼广联赛讯'</span>
                            }
                            <span class="hljs-keyword">return</span> {
                                <span class="hljs-attr">table</span>: {
                                    <span class="hljs-attr">data</span>: <span class="hljs-built_in">Array</span>(<span class="hljs-number">20</span>).fill(item),                                  
                                    <span class="hljs-attr">column</span>: [
                                        { <span class="hljs-built_in">label</span>: '日期'，<span class="hljs-built_in">prop</span>: 'date'，<span class="hljs-built_in">width</span>: '140' },
                                        { <span class="hljs-built_in">label</span>: '名字'，<span class="hljs-built_in">prop</span>: 'name'，<span class="hljs-built_in">width</span>: '140' },
                                        { <span class="hljs-built_in">label</span>: '地址'，<span class="hljs-built_in">prop</span>: 'address' }
                                    ]
                                }
                            }
                        }
                    }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>Container Attributes</h3>
        <gl-table :table='container'></gl-table>
        <h3>Header Attributes</h3>
        <gl-table :table='header'></gl-table>
        <h3>Aside Attributes</h3>
        <gl-table :table='aside'></gl-table>
        <h3>Footer Attributes</h3>
        <gl-table :table='footer'></gl-table>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Container',
    data () {
      const item = {
        date: new Date().format("yyyy-MM-dd"),
        name: '嘀嘀虎',
        address: '深圳市南山区科兴科学园C3栋7楼广联赛讯'
      }
      return {
        table: {
            data: Array(20).fill(item),
            column: [
                { label: '日期', prop: 'date', width: '140' },
                { label: '名字', prop: 'name', width: '120' },
                { label: '地址', prop: 'address' }
            ]
        },
        container: {
            data: [
                {
                    parameter: 'direction',
                    state: '子元素的排列方向',
                    mold: 'string',
                    choose: 'horizontal / vertical',
                    default: '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal'
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
                    prop: 'default',
                    width: '250'
                }
            ]
        },
        header: {
            data: [
                {
                    parameter: 'height',
                    state: '顶栏高度',
                    mold: 'string',
                    choose: '——',
                    default: '60px'
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
                    prop: 'default',
                    width: '250'
                }
            ]
        },
        aside: {
            data: [
                {
                    parameter: 'width',
                    state: '侧边栏宽度',
                    mold: 'string',
                    choose: '——',
                    default: '300px'
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
                    prop: 'default',
                    width: '250'
                }
            ]
        },
        footer: {
            data: [
                {
                    parameter: 'height',
                    state: '底栏高度',
                    mold: 'string',
                    choose: '——',
                    default: '60px'
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
                    prop: 'default',
                    width: '250'
                }
            ]
        }
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .gl-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .source>section{
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
