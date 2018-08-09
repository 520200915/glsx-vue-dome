<template>
    <div class="box">
        <h2>安装与引入</h2>
        <h3>npm 安装</h3>
        <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
        <pre><code class="hljs language-shell">npm </code></pre>
        <h3>引入</h3>
        <p>在 main.js 中写入以下内容：</p>
        <pre><code class="hljs language-javascript">
            <span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>;
            <span class="hljs-keyword">import</span>  <span class="hljs-keyword">from</span> <span class="hljs-string">''</span>;
            <span class="hljs-keyword">import</span> <span class="hljs-string">''</span>;
            <span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">'./App.vue'</span>;

            Vue.use();

            <span class="hljs-keyword">new</span> Vue({
                <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,
                <span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App)
            });
        </code></pre>
    </div>
</template>

<script>
export default {
    name: 'Installation'
}
</script>
