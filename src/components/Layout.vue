<template>
  <div class="box">
    <h2>Layout 布局</h2>
    <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
    <h3>基础布局</h3>
    <p>使用单一分栏创建基础的栅格布局。</p>
    <Code>
      <template slot="source">
        <gl-row>
          <gl-col :span="24"><div class="grid-content bg-purple-dark"></div></gl-col>
        </gl-row>
        <gl-row>
          <gl-col :span="12"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="12"><div class="grid-content bg-purple-light"></div></gl-col>
        </gl-row>
        <gl-row>
          <gl-col :span="8"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="8"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="8"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
        </gl-row>
        <gl-row>
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple-light"></div></gl-col>
        </gl-row>
      </template>
      <template slot='description'>
        <p>通过 row 和 col 组件，并通过 col 组件的 <code>span</code> 属性我们就可以自由地组合布局。</p>
      </template>
      <template slot="highlight">
        <pre>
          <code class="hljs language-html">
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"24"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-dark"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
            .el-row {
              margin-bottom: 20px;
              &amp;:last-child {
                margin-bottom: 0;
              }
            }
            .el-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: #99a9bf;
            }
            .bg-purple {
              background: #d3dce6;
            }
            .bg-purple-light {
              background: #e5e9f2;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
              background-color: #f9fafc;
            }
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          </code></pre>
      </template>
    </Code>
    <h3>分栏间隔</h3>
    <p>分栏之间存在间隔。</p>
    <Code>
      <template slot="source">
        <gl-row :gutter="20">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
      </template>
      <template slot='description'>
        <p>Row 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。</p>
      </template>
      <template slot="highlight">
        <pre><code class="hljs language-html">
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
          .el-row {
            margin-bottom: 20px;
            &amp;:last-child {
              margin-bottom: 0;
            }
          }
          .el-col {
            border-radius: 4px;
          }
          .bg-purple-dark {
            background: #99a9bf;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .bg-purple-light {
            background: #e5e9f2;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
          .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
          }
        </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
        </code></pre>
      </template>
    </Code>
    <h3>混合布局</h3>
    <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
    <Code>
      <template slot="source">
        <gl-row :gutter="20">
          <gl-col :span="16"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="8"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row :gutter="20">
          <gl-col :span="8"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="8"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row :gutter="20">
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="16"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="4"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
      </template>
      <template slot="highlight">
        <pre><code class="hljs language-html">
          <span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"16"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"8"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"16"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
            .el-row {
              margin-bottom: 20px;
              &amp;:last-child {
                margin-bottom: 0;
              }
            }
            .el-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: #99a9bf;
            }
            .bg-purple {
              background: #d3dce6;
            }
            .bg-purple-light {
              background: #e5e9f2;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
              background-color: #f9fafc;
            }
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
        </code></pre>
      </template>
    </Code>
    <h3>分栏偏移</h3>
    <p>支持偏移指定的栏数。</p>
    <Code>
      <template slot="source">
        <gl-row :gutter="20">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row :gutter="20">
          <gl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row :gutter="20">
          <gl-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
      </template>
      <template slot='description'>
        <p>通过制定 col 组件的<code>offset</code> 属性可以指定分栏偏移的栏数。</p>
      </template>
      <template slot="highlight">
        <pre><code class="hljs language-html">
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"20"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
          .el-row {
            margin-bottom: 20px;
            &amp;:last-child {
              margin-bottom: 0;
            }
          }
          .el-col {
            border-radius: 4px;
          }
          .bg-purple-dark {
            background: #99a9bf;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .bg-purple-light {
            background: #e5e9f2;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
          .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
          }
        </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
        </code></pre>
      </template>
    </Code>
    <h3>对齐方式</h3>
    <p>通过<code>flex</code>布局来对分栏进行灵活的对齐。</p>
    <Code>
      <template slot="source">
        <gl-row type="flex" class="row-bg">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row type="flex" class="row-bg" justify="center">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row type="flex" class="row-bg" justify="end">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row type="flex" class="row-bg" justify="space-between">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
        <gl-row type="flex" class="row-bg" justify="space-around">
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :span="6"><div class="grid-content bg-purple"></div></gl-col>
        </gl-row>
      </template>
      <template slot='description'>
        <p>将 <code>type</code> 属性赋值为 'flex'，可以启用 flex 布局，并可通过<code>justify</code>属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</p>
      </template>
      <template slot="highlight">
        <pre><code class="hljs language-html">
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"center"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"end"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"space-between"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"flex"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row-bg"</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">"space-around"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"6"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="undefined">
          .el-row {
            margin-bottom: 20px;
            &amp;:last-child {
              margin-bottom: 0;
            }
          }
          .el-col {
            border-radius: 4px;
          }
          .bg-purple-dark {
            background: #99a9bf;
          }
          .bg-purple {
            background: #d3dce6;
          }
          .bg-purple-light {
            background: #e5e9f2;
          }
          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }
          .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
          }
        </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
        </code></pre>
      </template>
    </Code>
    <h3>响应式布局</h3>
    <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>。</p>
    <Code>
      <template slot="source">
        <gl-row :gutter="10">
          <gl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></gl-col>
          <gl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></gl-col>
          <gl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></gl-col>
        </gl-row>
      </template>
      <template slot="highlight">
        <pre><code class="hljs language-html">
          <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">"10"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"9"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"11"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"9"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"11"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-col</span> <span class="hljs-attr">:xs</span>=<span class="hljs-string">"8"</span> <span class="hljs-attr">:sm</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">:md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">:lg</span>=<span class="hljs-string">"3"</span> <span class="hljs-attr">:xl</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-content bg-purple-light"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-col</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>

          <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
            <span class="hljs-selector-class">.el-col</span> {
              <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
            }
            <span class="hljs-selector-class">.bg-purple-dark</span> {
              <span class="hljs-attribute">background</span>: <span class="hljs-number">#99a9bf</span>;
            }
            <span class="hljs-selector-class">.bg-purple</span> {
              <span class="hljs-attribute">background</span>: <span class="hljs-number">#d3dce6</span>;
            }
            <span class="hljs-selector-class">.bg-purple-light</span> {
              <span class="hljs-attribute">background</span>: <span class="hljs-number">#e5e9f2</span>;
            }
            <span class="hljs-selector-class">.grid-content</span> {
              <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
              <span class="hljs-attribute">min-height</span>: <span class="hljs-number">36px</span>;
            }
          </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
          </code></pre>
      </template>
    </Code>
    <h3>Row Attributes</h3>
    <gl-table :table='row'></gl-table>
    <h3>Col Attributes</h3>
    <gl-table :table='col'></gl-table>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      row: {
        data: [
          {
            parameter: 'gutter',
            state: '栅格间隔',
            mold: 'number',
            choose: '—',
            default: 0
          },
          {
            parameter: 'type',
            state: '布局模式，可选 flex，现代浏览器下有效',
            mold: 'string',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'justify',
            state: 'flex 布局下的水平排列方式',
            mold: 'string',
            choose: 'start/end/center/space-around/space-between',
            default: 'start'
          },
          {
            parameter: 'align',
            state: 'flex 布局下的垂直排列方式',
            mold: 'string',
            choose: 'top/middle/bottom',
            default: 'top'
          },
          {
            parameter: 'tag',
            state: '自定义元素标签',
            mold: 'string',
            choose: '*',
            default: 'div'
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
            width: '300'
          },
          {
            label: '默认值',
            prop: 'default'
          }
        ]
      },
      col: {
        data: [
          {
            parameter: 'span',
            state: '栅格占据的列数',
            mold: 'number',
            choose: '—',
            default: 24
          },
          {
            parameter: 'offset',
            state: '栅格左侧的间隔格数',
            mold: 'number',
            choose: '—',
            default: 0
          },
          {
            parameter: 'push',
            state: '栅格向右移动格数',
            mold: 'number',
            choose: '—',
            default: 0
          },
          {
            parameter: 'pull',
            state: '栅格向左移动格数',
            mold: 'number',
            choose: '—',
            default: 0
          },
          {
            parameter: 'xs',
            state: '<768px 响应式栅格数或者栅格属性对象',
            mold: 'number/object (例如： {span: 4, offset: 4})',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'sm',
            state: '≥768px 响应式栅格数或者栅格属性对象',
            mold: 'number/object (例如： {span: 4, offset: 4})',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'md',
            state: '≥992px 响应式栅格数或者栅格属性对象',
            mold: 'number/object (例如： {span: 4, offset: 4})',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'lg',
            state: '≥1200px 响应式栅格数或者栅格属性对象',
            mold: 'number/object (例如： {span: 4, offset: 4})',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'xl',
            state: '≥1920px 响应式栅格数或者栅格属性对象',
            mold: 'number/object (例如： {span: 4, offset: 4})',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'tag',
            state: '自定义元素标签',
            mold: '	string',
            choose: '*',
            default: 'div'
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
            width: '300'
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
  }
}
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

