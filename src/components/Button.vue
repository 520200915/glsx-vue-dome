<template>
    <div class="box">
        <h2>Button 按钮</h2>
        <p>常用的操作按钮。</p>
        <h3>基础用法</h3>
        <p>基础的按钮用法。</p>
        <Code>
            <template slot="source">
                <gl-row>
                    <gl-button>默认按钮</gl-button>
                    <gl-button type="primary">主要按钮</gl-button>
                    <gl-button type="success">成功按钮</gl-button>
                    <gl-button type="info">信息按钮</gl-button>
                    <gl-button type="warning">警告按钮</gl-button>
                    <gl-button type="danger">危险按钮</gl-button>
                </gl-row>

                <gl-row>
                    <gl-button plain>朴素按钮</gl-button>
                    <gl-button type="primary" plain>主要按钮</gl-button>
                    <gl-button type="success" plain>成功按钮</gl-button>
                    <gl-button type="info" plain>信息按钮</gl-button>
                    <gl-button type="warning" plain>警告按钮</gl-button>
                    <gl-button type="danger" plain>危险按钮</gl-button>
                </gl-row>

                <gl-row>
                    <gl-button round>圆角按钮</gl-button>
                    <gl-button type="primary" round>主要按钮</gl-button>
                    <gl-button type="success" round>成功按钮</gl-button>
                    <gl-button type="info" round>信息按钮</gl-button>
                    <gl-button type="warning" round>警告按钮</gl-button>
                    <gl-button type="danger" round>危险按钮</gl-button>
                </gl-row>

                <gl-row>
                    <gl-button icon="el-icon-search" circle></gl-button>
                    <gl-button type="primary" icon="el-icon-edit" circle></gl-button>
                    <gl-button type="success" icon="el-icon-check" circle></gl-button>
                    <gl-button type="info" icon="el-icon-message" circle></gl-button>
                    <gl-button type="warning" icon="el-icon-star-off" circle></gl-button>
                    <gl-button type="danger" icon="el-icon-delete" circle></gl-button>
                </gl-row>
            </template>
            <template slot="description">
                <p>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">plain</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">plain</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">round</span>&gt;</span>圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">round</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">round</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">round</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">round</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">round</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-check"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-message"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-star-off"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span> <span class="hljs-attr">circle</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>禁用状态</h3>
        <p>按钮不可用状态。</p>
        <Code>
            <template slot="source">
                <gl-row>
                    <gl-button disabled>默认按钮</gl-button>
                    <gl-button type="primary" disabled>主要按钮</gl-button>
                    <gl-button type="success" disabled>成功按钮</gl-button>
                    <gl-button type="info" disabled>信息按钮</gl-button>
                    <gl-button type="warning" disabled>警告按钮</gl-button>
                    <gl-button type="danger" disabled>危险按钮</gl-button>
                </gl-row>

                <gl-row>
                    <gl-button plain disabled>朴素按钮</gl-button>
                    <gl-button type="primary" plain disabled>主要按钮</gl-button>
                    <gl-button type="success" plain disabled>成功按钮</gl-button>
                    <gl-button type="info" plain disabled>信息按钮</gl-button>
                    <gl-button type="warning" plain disabled>警告按钮</gl-button>
                    <gl-button type="danger" plain disabled>危险按钮</gl-button>
                </gl-row>
            </template>
            <template slot="description">
                <p>你可以使用 <code>disabled</code> 属性来定义按钮是否可用，它接受一个 <code>Boolean</code> 值。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">disabled</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">disabled</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">disabled</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">disabled</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">disabled</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">disabled</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>朴素按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>主要按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>成功按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>信息按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>警告按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">disabled</span>&gt;</span>危险按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>文字按钮</h3>
        <p>没有边框和背景色的按钮。</p>
        <Code>
            <template slot="source">
                <gl-button type="text">文字按钮</gl-button>
                <gl-button type="text" disabled>文字按钮</gl-button>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">disabled</span>&gt;</span>文字按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>图标按钮</h3>
        <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
        <Code>
            <template slot="source">
                <gl-button type="primary" icon="el-icon-edit"></gl-button>
                <gl-button type="primary" icon="el-icon-share"></gl-button>
                <gl-button type="primary" icon="el-icon-delete"></gl-button>
                <gl-button type="primary" icon="el-icon-search">搜索</gl-button>
                <gl-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></gl-button>
            </template>
            <template slot="description">
                <p>设置 <code>icon</code> 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 <code>i</code> 标签即可，可以使用自定义图标。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>上传<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-upload el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>按钮组</h3>
        <p>以按钮组的方式出现，常用于多项类似操作。</p>
        <Code>
            <template slot="source">
                <gl-button-group>
                    <gl-button type="primary" icon="el-icon-arrow-left">上一页</gl-button>
                    <gl-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></gl-button>
                </gl-button-group>
                <gl-button-group>
                    <gl-button type="primary" icon="el-icon-edit"></gl-button>
                    <gl-button type="primary" icon="el-icon-share"></gl-button>
                    <gl-button type="primary" icon="el-icon-delete"></gl-button>
                </gl-button-group>
            </template>
            <template slot="description">
                <p>使用 <code>&lt;el-button-group&gt;</code> 标签来嵌套你的按钮。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button-group</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-arrow-left"</span>&gt;</span>上一页<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>下一页<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-right el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-button-group</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button-group</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-button-group</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>加载中</h3>
        <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
        <Code>
            <template slot="source">
                <gl-button type="primary" :loading="true">加载中</gl-button>
            </template>
            <template slot="description">
                要设置为 loading 状态，只要设置 <code>loading</code> 属性为 <code>true</code> 即可。
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">"true"</span>&gt;</span>加载中<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>不同尺寸</h3>
        <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
        <Code>
            <template slot="source">
                <gl-row>
                    <gl-button>默认按钮</gl-button>
                    <gl-button size="medium">中等按钮</gl-button>
                    <gl-button size="small">小型按钮</gl-button>
                    <gl-button size="mini">超小按钮</gl-button>
                </gl-row>
                <gl-row>
                    <gl-button round>默认按钮</gl-button>
                    <gl-button size="medium" round>中等按钮</gl-button>
                    <gl-button size="small" round>小型按钮</gl-button>
                    <gl-button size="mini" round>超小按钮</gl-button>
                </gl-row>
            </template>
            <template slot="description">
                <p>额外的尺寸：<code>medium</code> 、<code>small</code> 、<code>mini</code> ，通过设置 <code>size</code> 属性来配置它们。</p>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>中等按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">round</span>&gt;</span>默认按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">round</span>&gt;</span>中等按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">round</span>&gt;</span>小型按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">round</span>&gt;</span>超小按钮<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>Attributes</h3>
        <gl-table :table='row'></gl-table>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Button',
    data () {
      return {
        row: {
            data: [
                {
                    parameter: 'size',
                    state: '尺寸',
                    mold: 'string',
                    choose: 'medium / small / mini',
                    default: '—'
                },
                {
                    parameter: 'type',
                    state: '类型',
                    mold: 'string',
                    choose: 'primary / success / warning / danger / info / text',
                    default: '—'
                },
                {
                    parameter: 'plain',
                    state: '是否朴素按钮',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'round',
                    state: '是否圆角按钮',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'circle',
                    state: '是否圆形按钮',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'loading',
                    state: '是否加载中状态',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'disabled',
                    state: '是否禁用状态',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'icon',
                    state: '图标类名',
                    mold: 'string',
                    choose: '—',
                    default: '—'
                },
                {
                    parameter: 'autofocus',
                    state: '是否默认聚焦',
                    mold: 'boolean',
                    choose: '—',
                    default: 'false'
                },
                {
                    parameter: 'native-type',
                    state: '原生 type 属性',
                    mold: 'string',
                    choose: 'button / submit / reset',
                    default: 'button'
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
                    prop: 'choose',
                    width: '300'
                },
                {
                    label: '默认值',
                    prop: 'default'
                }
            ]
        }
      }
    }
  }
</script>

<style scoped>
    .box .el-row{
        margin-bottom: 20px;
    }
</style>
