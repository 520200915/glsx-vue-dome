<template>
  <div class='box dropdown'>
    <h2>Dropdown 下拉菜单</h2>
    <p>将动作或菜单折叠到下拉菜单中。</p>
    <h3>基础用法</h3>
    <p>移动到下拉菜单上，展开更多操作。</p>
    <Code>
        <template slot='source'>
            <gl-dropdown>
              <span class="gl-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <gl-dropdown-menu slot="dropdown">
                <gl-dropdown-item>黄金糕</gl-dropdown-item>
                <gl-dropdown-item>狮子头</gl-dropdown-item>
                <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
                <gl-dropdown-item disabled>双皮奶</gl-dropdown-item>
                <gl-dropdown-item divided>蚵仔煎</gl-dropdown-item>
              </gl-dropdown-menu>
            </gl-dropdown>
        </template>
        <template slot='description'>
          <p>通过组件<code>slot</code>来设置下拉触发的元素以及需要通过具名<code>slot</code>为<code>dropdown</code> 来设置下拉菜单。默认情况下，下拉按钮只要<code>hover</code>即可，无需点击也会显示下拉菜单。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-dropdown-link"</span>&gt;</span>
                下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">disabled</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">divided</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>触发对象</h3>
    <p>可使用按钮触发下拉菜单。</p>
    <Code>
        <template slot='source'>
          <gl-dropdown>
            <el-button type="primary">
              更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item>双皮奶</gl-dropdown-item>
              <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>
          <gl-dropdown split-button type="primary" @click="handleClick" style="margin-left:10px;">
            更多菜单
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item>双皮奶</gl-dropdown-item>
              <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>
        </template>
        <template slot='description'>
          <p>设置<code>split-button</code>属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为<code>true</code>即可。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
                更多菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"handleClick"</span>&gt;</span>
              更多菜单
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
              <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                <span class="hljs-attr">methods</span>: {
                  handleClick() {
                    alert(<span class="hljs-string">'button click'</span>);
                  }
                }
              }
            </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>触发方式</h3>
    <p>可以配置 click 激活或者 hover 激活。</p>
    <Code>
        <template slot='source'>
          <gl-row class="block-col-2">
            <el-col :span="12">
              <span class="demonstration">hover 激活</span>
              <gl-dropdown>
                <span class="gl-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <gl-dropdown-menu slot="dropdown">
                  <gl-dropdown-item>黄金糕</gl-dropdown-item>
                  <gl-dropdown-item>狮子头</gl-dropdown-item>
                  <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
                  <gl-dropdown-item>双皮奶</gl-dropdown-item>
                  <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
                </gl-dropdown-menu>
              </gl-dropdown>
            </el-col>
            <el-col :span="12">
              <span class="demonstration">click 激活</span>
              <gl-dropdown trigger="click">
                <span class="gl-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <gl-dropdown-menu slot="dropdown">
                  <gl-dropdown-item>黄金糕</gl-dropdown-item>
                  <gl-dropdown-item>狮子头</gl-dropdown-item>
                  <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
                  <gl-dropdown-item>双皮奶</gl-dropdown-item>
                  <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
                </gl-dropdown-menu>
              </gl-dropdown>
            </el-col>
          </gl-row>
        </template>
        <template slot='description'>
          <p>在<code>trigger</code>属性设置为<code>click</code>即可。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block-col-2"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>hover 激活<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-dropdown-link"</span>&gt;</span>
                    下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>click 激活<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-dropdown-link"</span>&gt;</span>
                    下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-row</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>菜单隐藏方式</h3>
    <p>可以<code>hide-on-click</code>属性来配置。</p>
    <Code>
        <template slot='source'>
          <gl-dropdown :hide-on-click="false">
            <span class="gl-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item disabled>双皮奶</gl-dropdown-item>
              <gl-dropdown-item divided>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>
        </template>
        <template slot='description'>
          <p>下拉菜单默认在点击菜单项后会被隐藏，将<code>hide-on-click</code>属性默认为<code>false</code>可以关闭此功能。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">:hide-on-click</span>=<span class="hljs-string">"false"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-dropdown-link"</span>&gt;</span>
                下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">disabled</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">divided</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>指令事件</h3>
    <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作</p>
    <Code>
        <template slot='source'>
          <gl-dropdown @command="handleCommand">
            <span class="gl-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item command="a">黄金糕</gl-dropdown-item>
              <gl-dropdown-item command="b">狮子头</gl-dropdown-item>
              <gl-dropdown-item command="c">螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item command="d" disabled>双皮奶</gl-dropdown-item>
              <gl-dropdown-item command="e" divided>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">@command</span>=<span class="hljs-string">"handleCommand"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"gl-dropdown-link"</span>&gt;</span>
                下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">command</span>=<span class="hljs-string">"a"</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">command</span>=<span class="hljs-string">"b"</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">command</span>=<span class="hljs-string">"c"</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">command</span>=<span class="hljs-string">"d"</span> <span class="hljs-attr">disabled</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span> <span class="hljs-attr">command</span>=<span class="hljs-string">"e"</span> <span class="hljs-attr">divided</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
              <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                <span class="hljs-attr">methods</span>: {
                  handleCommand(command) {
                    <span class="hljs-keyword">this</span>.$message(<span class="hljs-string">`click on item ${ command }`</span>)
                  }
                }
              }
            </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>不同尺寸</h3>
    <p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
    <Code>
        <template slot='source'>
          <gl-dropdown split-button type="primary">
            默认尺寸
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item>双皮奶</gl-dropdown-item>
              <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>

          <gl-dropdown size="medium" split-button type="primary">
            中等尺寸
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item>双皮奶</gl-dropdown-item>
              <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>

          <gl-dropdown size="small" split-button type="primary">
            小型尺寸
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item>双皮奶</gl-dropdown-item>
              <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>

          <gl-dropdown size="mini" split-button type="primary">
            超小尺寸
            <gl-dropdown-menu slot="dropdown">
              <gl-dropdown-item>黄金糕</gl-dropdown-item>
              <gl-dropdown-item>狮子头</gl-dropdown-item>
              <gl-dropdown-item>螺蛳粉</gl-dropdown-item>
              <gl-dropdown-item>双皮奶</gl-dropdown-item>
              <gl-dropdown-item>蚵仔煎</gl-dropdown-item>
            </gl-dropdown-menu>
          </gl-dropdown>
        </template>
        <template slot='description'>
          <p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
              默认尺寸
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>

            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
              中等尺寸
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>

            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
              小型尺寸
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>

            <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
              超小尺寸
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-item</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown-menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-dropdown</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>Dropdown Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Dropdown Events</h3>
    <gl-table :table='Events'></gl-table>
    <h3>Dropdown Menu Item Attributes</h3>
    <gl-table :table='Item'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
        table: {
            data: [
              {
                 parameter: 'type',
                 state: '菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'size',
                 state: '菜单尺寸，在split-button为 true 的情况下也对触发按钮生效',
                 mold: 'string',
                 choose: 'medium / small / mini',
                 default: '—'
              },
              {
                 parameter: 'split-button',
                 state: '下拉触发元素呈现为按钮组',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'placement',
                 state: '菜单弹出位置',
                 mold: 'string',
                 choose: 'top/top-start/top-end/bottom/bottom-start/bottom-end',
                 default: 'bottom-end'
              },
              {
                 parameter: 'trigger',
                 state: '触发下拉的行为',
                 mold: 'string',
                 choose: 'hover, click',
                 default: 'hover'
              },
              {
                 parameter: 'hide-on-click',
                 state: '是否在点击菜单项后隐藏菜单',
                 mold: 'boolean',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'show-timeout',
                 state: '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）',
                 mold: 'number',
                 choose: '—',
                 default: '250'
              },
              {
                 parameter: 'hide-timeout',
                 state: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
                 mold: 'number',
                 choose: '—',
                 default: '150'
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
                 parameter: 'click',
                 state: 'split-button 为 true 时，点击左侧按钮的回调',
                 mold: '—',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'command',
                 state: 'command',
                 mold: 'dropdown-item 的指令',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'visible-change',
                 state: '下拉框出现/隐藏时触发',
                 mold: '出现则为 true，隐藏则为 false',
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
                 prop: 'mold'
              }
            ]
        },
        Item: {
            data: [
              {
                 parameter: 'command',
                 state: '指令',
                 mold: 'string/number/object',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'disabled',
                 state: '禁用',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'divided',
                 state: '显示分割线',
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
        }
      }
    },
    methods: {
      handleClick() {
        alert('button click');
      },
      handleCommand(command) {
        this.$message(`click on item ${ command }`);
      }
    }
  }
</script>

<style scoped>

</style>