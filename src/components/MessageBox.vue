<template>
  <div class='box'>
    <h2>MessageBox 弹框</h2>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
    <div class="tip"><p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</p></div>
    <h3>消息提示</h3>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>调用<code>$alert</code>方法即可打开消息提示，它模拟了系统的 <code>alert</code>，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，<code>message</code>和<code>title</code>。值得一提的是，窗口被关闭后，它默认会返回一个<code>Promise</code>对象便于进行后续操作的处理。若不确定浏览器是否支持<code>Promise</code>，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open() {
                            <span class="hljs-keyword">this</span>.$alert(<span class="hljs-string">'这是一段内容'</span>, <span class="hljs-string">'标题名称'</span>, {
                            <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
                            <span class="hljs-attr">callback</span>: <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> {
                                <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">`action: <span class="hljs-subst">${ action }</span>`</span>
                                });
                            }
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>确认消息</h3>
    <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open2">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>调用<code>$confirm</code>方法即可打开消息提示，它模拟了系统的 <code>confirm</code>。Message Box 组件也拥有极高的定制性，我们可以传入<code>options</code>作为第三个参数，它是一个字面量对象。<code>type</code>字段表明消息类型，可以为<code>success</code>，<code>error</code>，<code>info</code>和<code>warning</code>，无效的设置将会被忽略。注意，第二个参数<code>title</code>必须定义为<code>String</code>类型，如果是<code>Object</code>，会被理解为<code>options</code>。在这里我们用了 Promise 来处理后续响应。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open2"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open2() {
                            <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'此操作将永久删除该文件, 是否继续?'</span>, <span class="hljs-string">'提示'</span>, {
                            <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
                            <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
                            <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>
                            }).then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'删除成功!'</span>
                            });
                            }).catch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'已取消删除'</span>
                            });          
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>提交内容</h3>
    <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open3">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>调用<code>$prompt</code>方法即可打开消息提示，它模拟了系统的 <code>prompt</code>。可以用<code>inputPattern</code>字段自己规定匹配模式，或者用<code>inputValidator</code>规定校验函数，可以返回<code>Boolean</code>或<code>String</code>，返回<code>false</code>或字符串时均表示校验未通过，同时返回的字符串相当于定义了<code>inputErrorMessage</code>字段。此外，可以用<code>inputPlaceholder</code>字段来定义输入框的占位符。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open3"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open3() {
                            <span class="hljs-keyword">this</span>.$prompt(<span class="hljs-string">'请输入邮箱'</span>, <span class="hljs-string">'提示'</span>, {
                            <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
                            <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
                            <span class="hljs-attr">inputPattern</span>: <span class="hljs-regexp">/[\w!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[\w!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/</span>,
                            <span class="hljs-attr">inputErrorMessage</span>: <span class="hljs-string">'邮箱格式不正确'</span>
                            }).then(<span class="hljs-function">(<span class="hljs-params">{ value }</span>) =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'你的邮箱是: '</span> + value
                            });
                            }).catch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'取消输入'</span>
                            });       
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>自定义</h3>
    <p>可自定义配置不同内容。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open4">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>以上三个方法都是对<code>$msgbox</code>方法的再包装。本例直接调用<code>$msgbox</code>方法，使用了<code>showCancelButton</code>字段，用于显示取消按钮。另外可使用<code>cancelButtonClass</code>为其添加自定义样式，使用<code>cancelButtonText</code>来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了<code>beforeClose</code>属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：<code>action</code>、实例本身和<code>done</code>方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加<code>loading</code>状态等；此时若需要关闭实例，可以调用<code>done</code>方法（若在<code>beforeClose</code>中没有调用<code>done</code>，则实例不会关闭）。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open4"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open4() {
                            <span class="hljs-keyword">const</span> h = <span class="hljs-keyword">this</span>.$createElement;
                            <span class="hljs-keyword">this</span>.$msgbox({
                            <span class="hljs-attr">title</span>: <span class="hljs-string">'消息'</span>,
                            <span class="hljs-attr">message</span>: h(<span class="hljs-string">'p'</span>, <span class="hljs-literal">null</span>, [
                                h(<span class="hljs-string">'span'</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">'内容可以是 '</span>),
                                h(<span class="hljs-string">'i'</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">'color: teal'</span> }, <span class="hljs-string">'VNode'</span>)
                            ]),
                            <span class="hljs-attr">showCancelButton</span>: <span class="hljs-literal">true</span>,
                            <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
                            <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
                            <span class="hljs-attr">beforeClose</span>: <span class="hljs-function">(<span class="hljs-params">action, instance, done</span>) =&gt;</span> {
                                <span class="hljs-keyword">if</span> (action === <span class="hljs-string">'confirm'</span>) {
                                instance.confirmButtonLoading = <span class="hljs-literal">true</span>;
                                instance.confirmButtonText = <span class="hljs-string">'执行中...'</span>;
                                setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                                    done();
                                    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                                    instance.confirmButtonLoading = <span class="hljs-literal">false</span>;
                                    }, <span class="hljs-number">300</span>);
                                }, <span class="hljs-number">3000</span>);
                                } <span class="hljs-keyword">else</span> {
                                done();
                                }
                            }
                            }).then(<span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'action: '</span> + action
                            });
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <div class="tip"><p>弹出层的内容可以是 <code>VNode</code>，所以我们能把一些自定义组件传入其中。每次弹出层打开后，Vue 会对新老 <code>VNode</code> 节点进行比对，然后将根据比较结果进行最小单位地修改视图。这也许会造成弹出层内容区域的组件没有重新渲染，例如 <a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>。当这类问题出现时，解决方案是给 <code>VNode</code> 加上一个不相同的 key，参考<a href="https://jsfiddle.net/zhiyang/ezmhq2ef/">这里</a>。</p></div>
    <h3>使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open5">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML 片段处理。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open5"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open5() {
                            <span class="hljs-keyword">this</span>.$alert(<span class="hljs-string">'&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;'</span>, <span class="hljs-string">'HTML 片段'</span>, {
                            <span class="hljs-attr">dangerouslyUseHTMLString</span>: <span class="hljs-literal">true</span>
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <div class="warning"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div>
    <h3>区分取消与关闭</h3>
    <p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open6">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和<code>callback</code>回调的参数均为 'cancel'。如果将<code>distinguishCancelAndClose</code>属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open6"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open6() {
                            <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'检测到未保存的内容，是否在离开页面前保存修改？'</span>, <span class="hljs-string">'确认信息'</span>, {
                            <span class="hljs-attr">distinguishCancelAndClose</span>: <span class="hljs-literal">true</span>,
                            <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'保存'</span>,
                            <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'放弃修改'</span>
                            })
                            .then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                                <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'保存修改'</span>
                                });
                            })
                            .catch(<span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> {
                                <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: action === <span class="hljs-string">'cancel'</span>
                                    ? <span class="hljs-string">'放弃保存并离开页面'</span>
                                    : <span class="hljs-string">'停留在当前页面'</span>
                                })
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>居中布局</h3>
    <p>内容支持居中布局</p>
    <Code>
        <template slot='source'>
            <gl-button type="text" @click="open7">点击打开 Message Box</gl-button>
        </template>
        <template slot='description'>
            <p>将 <code>center</code> 设置为 <code>true</code> 即可开启居中布局</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open7"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        open7() {
                            <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'此操作将永久删除该文件, 是否继续?'</span>, <span class="hljs-string">'提示'</span>, {
                            <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
                            <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
                            <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>,
                            <span class="hljs-attr">center</span>: <span class="hljs-literal">true</span>
                            }).then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'删除成功!'</span>
                            });
                            }).catch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.$message({
                                <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
                                <span class="hljs-attr">message</span>: <span class="hljs-string">'已取消删除'</span>
                            });
                            });
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Options</h3>
    <gl-table :table='table'></gl-table>
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
                   parameter: 'title',
                   state: 'MessageBox 标题',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'message',
                   state: 'MessageBox 消息正文内容',
                   mold: 'string / VNode',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'dangerouslyUseHTMLString',
                   state: '是否将 message 属性作为 HTML 片段处理',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'type',
                   state: '消息类型，用于显示图标',
                   mold: 'string',
                   choose: 'success / info / warning / error',
                   default: '—'
                },
                {
                   parameter: 'iconClass',
                   state: '自定义图标的类名，会覆盖 type',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'customClass',
                   state: 'MessageBox 的自定义类名',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'callback',
                   state: '若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调',
                   mold: "function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法",
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'showClose',
                   state: 'MessageBox 是否显示右上角关闭按钮',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'beforeClose',
                   state: 'MessageBox 关闭前的回调，会暂停实例的关闭',
                   mold: "function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例",
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'distinguishCancelAndClose',
                   state: '是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'lockScroll',
                   state: '是否在 MessageBox 出现时将 body 滚动锁定',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'showCancelButton',
                   state: '是否显示取消按钮',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false（以 confirm 和 prompt 方式调用时为 true）'
                },
                {
                   parameter: 'showConfirmButton',
                   state: '是否显示确定按钮',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'cancelButtonText',
                   state: '取消按钮的文本内容',
                   mold: 'string',
                   choose: '—',
                   default: '取消'
                },
                {
                   parameter: 'confirmButtonText',
                   state: '确定按钮的文本内容',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'cancelButtonClass',
                   state: '取消按钮的自定义类名',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'confirmButtonClass',
                   state: '确定按钮的自定义类名	',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'closeOnClickModal',
                   state: '是否可通过点击遮罩关闭 MessageBox',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true（以 alert 方式调用时为 false）'
                },
                {
                   parameter: 'closeOnPressEscape',
                   state: '是否可通过按下 ESC 键关闭 MessageBox',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true（以 alert 方式调用时为 false）'
                },
                {
                   parameter: 'closeOnHashChange',
                   state: '是否在 hashchange 时关闭 MessageBox',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'showInput',
                   state: '是否显示输入框',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false（以 prompt 方式调用时为 true）'
                },
                {
                   parameter: 'inputPlaceholder',
                   state: '输入框的占位符',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'inputType',
                   state: '输入框的类型',
                   mold: 'string',
                   choose: '—',
                   default: 'text'
                },
                {
                   parameter: 'inputValue',
                   state: '输入框的初始文本',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'inputPattern',
                   state: '输入框的正则表达式',
                   mold: 'regexp',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'inputValidator',
                   state: '输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage',
                   mold: 'function',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'inputErrorMessage',
                   state: '校验未通过时的提示文本',
                   mold: 'string',
                   choose: '—',
                   default: '输入的数据不合法!'
                },
                {
                   parameter: 'center',
                   state: '是否居中布局',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'roundButton',
                   state: '是否使用圆角按钮',
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
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        }).catch(err =>{
            console.log(err)
        });
      },
      open5() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      },
      open6() {
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
      },
      open7() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>