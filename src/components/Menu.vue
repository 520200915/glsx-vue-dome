<template>
  <div class='box menu'>
    <h2>NavMenu 导航菜单</h2>
    <p>为网站提供导航功能的菜单。</p>
    <h3>顶栏</h3>
    <p>适用广泛的基础用法。</p>
    <Code>
        <template slot='source'>
            <gl-menu :default-active="activeIndex" class="gl-menu-demo" mode="horizontal" @select="handleSelect">
                <gl-menu-item index="1">处理中心</gl-menu-item>
                <gl-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <gl-menu-item index="2-1">选项1</gl-menu-item>
                    <gl-menu-item index="2-2">选项2</gl-menu-item>
                    <gl-menu-item index="2-3">选项3</gl-menu-item>
                    <gl-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <gl-menu-item index="2-4-1">选项1</gl-menu-item>
                    <gl-menu-item index="2-4-2">选项2</gl-menu-item>
                    <gl-menu-item index="2-4-3">选项3</gl-menu-item>
                    </gl-submenu>
                </gl-submenu>
                <gl-menu-item index="3" disabled>消息中心</gl-menu-item>
                <gl-menu-item index="4"><a href="http://www.glsx.com.cn" target="_blank">官网</a></gl-menu-item>
            </gl-menu>
            <div class="line"></div>
            <gl-menu
                :default-active="activeIndex2"
                class="gl-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <gl-menu-item index="1">处理中心</gl-menu-item>
                <gl-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <gl-menu-item index="2-1">选项1</gl-menu-item>
                    <gl-menu-item index="2-2">选项2</gl-menu-item>
                    <gl-menu-item index="2-3">选项3</gl-menu-item>
                    <gl-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <gl-menu-item index="2-4-1">选项1</gl-menu-item>
                    <gl-menu-item index="2-4-2">选项2</gl-menu-item>
                    <gl-menu-item index="2-4-3">选项3</gl-menu-item>
                    </gl-submenu>
                </gl-submenu>
                <gl-menu-item index="3" disabled>消息中心</gl-menu-item>
                <gl-menu-item index="4"><a href="http://www.glsx.com.cn" target="_blank">官网</a></gl-menu-item>
            </gl-menu>
        </template>
        <template slot='description'>
            <p>导航菜单默认为垂直模式，通过<code>mode</code>属性可以使导航菜单变更为水平模式。另外，在菜单中通过<code>submenu</code>组件可以生成二级菜单。Menu 还提供了<code>background-color</code>、<code>text-color</code>和<code>active-text-color</code>，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu</span> <span class="hljs-attr">:default-active</span>=<span class="hljs-string">"activeIndex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-menu-demo"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"horizontal"</span> <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>处理中心<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>我的工作台<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>消息中心<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"http://www.glsx.com.cn"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>官网<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"line"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu</span>
                    <span class="hljs-attr">:default-active</span>=<span class="hljs-string">"activeIndex2"</span>
                    <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-menu-demo"</span>
                    <span class="hljs-attr">mode</span>=<span class="hljs-string">"horizontal"</span>
                    <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
                    <span class="hljs-attr">background-color</span>=<span class="hljs-string">"#545c64"</span>
                    <span class="hljs-attr">text-color</span>=<span class="hljs-string">"#fff"</span>
                    <span class="hljs-attr">active-text-color</span>=<span class="hljs-string">"#ffd04b"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>处理中心<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>我的工作台<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2-4-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>消息中心<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"http://www.glsx.com.cn"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>官网<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">activeIndex</span>: <span class="hljs-string">'1'</span>,
                            <span class="hljs-attr">activeIndex2</span>: <span class="hljs-string">'1'</span>
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleSelect(key, keyPath) {
                            <span class="hljs-built_in">console</span>.log(key, keyPath);
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>侧栏</h3>
    <p>垂直菜单，可内嵌子菜单。</p>
    <Code>
        <template slot='source'>
            <gl-row class="tac">
                <gl-col :span="12">
                    <h5>默认颜色</h5>
                    <gl-menu
                    default-active="2"
                    class="gl-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <gl-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
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
                        <gl-menu-item index="1-4-1">选项1</gl-menu-item>
                        </gl-submenu>
                    </gl-submenu>
                    <gl-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </gl-menu-item>
                    <gl-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </gl-menu-item>
                    <gl-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </gl-menu-item>
                    </gl-menu>
                </gl-col>
                <gl-col :span="12">
                    <h5>自定义颜色</h5>
                    <gl-menu
                    default-active="2"
                    class="gl-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <gl-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                        </template>
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
                        <gl-menu-item index="1-4-1">选项1</gl-menu-item>
                        </gl-submenu>
                    </gl-submenu>
                    <gl-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </gl-menu-item>
                    <gl-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </gl-menu-item>
                    <gl-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </gl-menu-item>
                    </gl-menu>
                </gl-col>
                </gl-row>
        </template>
        <template slot='description'>
            <p>通过<code>gl-menu-item-group</code>组件可以实现菜单进行分组，分组名可以通过<code>title</code>属性直接设定，也可以通过具名 slot 来设定。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tac"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>默认颜色<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu</span>
                        <span class="hljs-attr">default-active</span>=<span class="hljs-string">"2"</span>
                        <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-menu-vertical-demo"</span>
                        <span class="hljs-attr">@open</span>=<span class="hljs-string">"handleOpen"</span>
                        <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
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
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-document"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航四<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>自定义颜色<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu</span>
                        <span class="hljs-attr">default-active</span>=<span class="hljs-string">"2"</span>
                        <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-menu-vertical-demo"</span>
                        <span class="hljs-attr">@open</span>=<span class="hljs-string">"handleOpen"</span>
                        <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose"</span>
                        <span class="hljs-attr">background-color</span>=<span class="hljs-string">"#545c64"</span>
                        <span class="hljs-attr">text-color</span>=<span class="hljs-string">"#fff"</span>
                        <span class="hljs-attr">active-text-color</span>=<span class="hljs-string">"#ffd04b"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
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
                            <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-submenu</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-document"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航四<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        handleOpen(key, keyPath) {
                            <span class="hljs-built_in">console</span>.log(key, keyPath);
                        },
                        handleClose(key, keyPath) {
                            <span class="hljs-built_in">console</span>.log(key, keyPath);
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                </code></pre>
        </template>
    </Code>
    <h3>折叠</h3>
    <Code>
        <template slot='source'>
            <gl-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <gl-radio-button :label="false">展开</gl-radio-button>
                <gl-radio-button :label="true">收起</gl-radio-button>
            </gl-radio-group>
            <gl-menu default-active="1-4-1" class="gl-menu-vertical-demo isNotCenter" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <gl-menu-item-group>
                <span slot="title">分组一</span>
                <gl-menu-item index="1-1">选项1</gl-menu-item>
                <gl-menu-item index="1-2">选项2</gl-menu-item>
                </gl-menu-item-group>
                <gl-menu-item-group title="分组2">
                <gl-menu-item index="1-3">选项3</gl-menu-item>
                </gl-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <gl-menu-item index="1-4-1">选项1</gl-menu-item>
                </el-submenu>
            </el-submenu>
            <gl-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </gl-menu-item>
            <gl-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </gl-menu-item>
            <gl-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </gl-menu-item>
            </gl-menu>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"isCollapse"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-bottom: 20px;"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"false"</span>&gt;</span>展开<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-radio-button</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"true"</span>&gt;</span>收起<span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-radio-group</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu</span> <span class="hljs-attr">default-active</span>=<span class="hljs-string">"1-4-1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-menu-vertical-demo"</span> <span class="hljs-attr">@open</span>=<span class="hljs-string">"handleOpen"</span> <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose"</span> <span class="hljs-attr">:collapse</span>=<span class="hljs-string">"isCollapse"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item-group</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">disabled</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-document"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"4"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航四<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-menu</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
                <span class="hljs-selector-class">.gl-menu-vertical-demo</span><span class="hljs-selector-pseudo">:not(.gl-menu--collapse)</span> {
                    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
                    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">400px</span>;
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">isCollapse</span>: <span class="hljs-literal">true</span>
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleOpen(key, keyPath) {
                            <span class="hljs-built_in">console</span>.log(key, keyPath);
                        },
                        handleClose(key, keyPath) {
                            <span class="hljs-built_in">console</span>.log(key, keyPath);
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Menu Attribute</h3>
    <gl-table :table='table'></gl-table>
    <h3>Menu Events</h3>
    <gl-table :table='Events'></gl-table>
    <h3>SubMenu Attribute</h3>
    <gl-table :table='SubMenu'></gl-table>
    <h3>Menu-Item Attribute</h3>
    <gl-table :table='Item'></gl-table>
    <h3>Menu-Group Attribute</h3>
    <gl-table :table='Group'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Menu',
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: true,
        table: {
            data: [
              {
                 parameter: 'mode',
                 state: '模式',
                 mold: 'string',
                 choose: 'horizontal / vertical',
                 default: 'vertical'
              },
              {
                 parameter: 'collapse',
                 state: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'background-color',
                 state: '菜单的背景色（仅支持 hex 格式）',
                 mold: 'string',
                 choose: '—',
                 default: '#fff'
              },
              {
                 parameter: 'text-color',
                 state: '菜单的文字颜色（仅支持 hex 格式）',
                 mold: 'string',
                 choose: '—',
                 default: '#303133'
              },
              {
                 parameter: 'active-text-color',
                 state: '当前激活菜单的文字颜色（仅支持 hex 格式）',
                 mold: 'string',
                 choose: '—',
                 default: '#409EFF'
              },
              {
                 parameter: 'default-active',
                 state: '当前激活菜单的 index',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'default-openeds',
                 state: '当前打开的 sub-menu 的 index 的数组',
                 mold: 'Array',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'unique-opened',
                 state: '是否只保持一个子菜单的展开',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'menu-trigger',
                 state: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
                 mold: 'string',
                 choose: '—',
                 default: 'hover'
              },
              {
                 parameter: 'router',
                 state: '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'collapse-transition',
                 state: '是否开启折叠动画',
                 mold: 'boolean',
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
                 parameter: 'select',
                 state: '菜单激活回调',
                 mold: 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'open',
                 state: 'sub-menu 展开的回调',
                 mold: 'index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'close',
                 state: 'sub-menu 收起的回调',
                 mold: 'index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path',
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
                 prop: 'state'
              },
              {
                 label: '回调参数',
                 prop: 'mold',
                 width: '450'
              }
            ]
        },
        SubMenu: {
            data: [
              {
                 parameter: 'index',
                 state: '唯一标志',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'popper-class',
                 state: '弹出菜单的自定义类名',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'show-timeout',
                 state: '展开 sub-menu 的延时',
                 mold: 'number',
                 choose: '—',
                 default: '300'
              },
              {
                 parameter: 'hide-timeout',
                 state: '收起 sub-menu 的延时',
                 mold: 'number',
                 choose: '—',
                 default: '300'
              },
              {
                 parameter: 'disabled',
                 state: '是否禁用',
                 mold: 'boolean',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'popper-append-to-body',
                 state: '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性',
                 mold: 'boolean',
                 choose: '—',
                 default: '一级子菜单：true / 非一级子菜单：false'
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
        Item: {
            data: [
              {
                 parameter: 'index',
                 state: '唯一标志',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'route',
                 state: 'Vue Router 路径对象',
                 mold: 'Object',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'disabled',
                 state: '是否禁用',
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
        Group: {
            data: [
              {
                 parameter: 'title',
                 state: '分组标题',
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
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>