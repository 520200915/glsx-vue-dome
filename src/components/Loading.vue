<template>
  <div class='box'>
    <h2>Loading 加载</h2>
    <p>加载数据时显示动效。</p>
    <h3>区域加载</h3>
    <p>在表格等容器中加载数据时显示。</p>
    <Code>
        <template slot='source'>
            <gl-table :table='table' v-loading="loading"></gl-table>
        </template>
        <template slot='description'>
            <p>提供了两种调用 Loading 的方法：指令和服务。对于自定义指令<code>v-loading</code>，只需要绑定<code>Boolean</code>即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加<code>body</code>修饰符，可以使遮罩插入至 DOM 中的 body 上。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>
                        <span class="hljs-attr">v-loading</span>=<span class="hljs-string">"loading"</span>
                        <span class="hljs-attr">:table</span>=<span class="hljs-string">"table"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">table:</span>: {
                                <span class="hljs-attr">data:</span> [
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'new Date().format("yyyy-MM-dd")'</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'new Date().format("yyyy-MM-dd")'</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'new Date().format("yyyy-MM-dd")'</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">'new Date().format("yyyy-MM-dd")'</span>,
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
                            <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>自定义</h3>
    <p>可自定义加载文案、图标和背景色。</p>
    <Code>
        <template slot='source'>
            <gl-table 
                :table='table'
                v-loading="loading2"
                gl-loading-text="拼命加载中"
                gl-loading-icon="el-icon-loading"
                gl-loading-background="rgba(0, 0, 0, 0.8)"
            ></gl-table>
        </template>
        <template slot='description'>
            <p>在绑定了<code>v-loading</code>指令的元素上添加<code>gl-loading-text</code>属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，<code>gl-loading-icon</code>和<code>gl-loading-background</code>属性分别用来设定图标类名和背景色值。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-table</span>
                        <span class="hljs-attr">v-loading</span>=<span class="hljs-string">"loading2"</span>
                        <span class="hljs-attr">gl-loading-text</span>=<span class="hljs-string">"拼命加载中"</span>
                        <span class="hljs-attr">gl-loading-icon</span>=<span class="hljs-string">"el-icon-loading"</span>
                        <span class="hljs-attr">gl-loading-background</span>=<span class="hljs-string">"rgba(0, 0, 0, 0.8)"</span>
                        <span class="hljs-attr">:table</span>=<span class="hljs-string">"table"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-table</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">table:</span>: {
                                <span class="hljs-attr">data:</span> [
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
                                        <span class="hljs-attr">name:</span> <span class="hljs-string">'嘀嘀虎'</span>,
                                        <span class="hljs-attr">address:</span> <span class="hljs-string">'深圳市南山区科兴科学园C3栋7楼'</span>
                                    },
                                    {
                                        <span class="hljs-attr">date:</span> <span class="hljs-string">new Date().format("yyyy-MM-dd")</span>,
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
                            <span class="hljs-attr">loading2</span>: <span class="hljs-literal">true</span>
                        };
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>整页加载</h3>
    <p>页面数据加载时显示。</p>
    <Code>
        <template slot='source'>
            <gl-button
                type="primary"
                @click="openFullScreen"
                v-loading.fullscreen.lock="fullscreenLoading">
                指令方式
            </gl-button>
            <gl-button
                type="primary"
                @click="openFullScreen2">
                服务方式
            </gl-button>
        </template>
        <template slot='description'>
            <p>当使用指令方式时，全屏遮罩需要添加<code>fullscreen</code>修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用<code>lock</code>修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>
                        <span class="hljs-attr">@click</span>=<span class="hljs-string">"openFullScreen"</span>
                        <span class="hljs-attr">v-loading.fullscreen.lock</span>=<span class="hljs-string">"fullscreenLoading"</span>&gt;</span>
                        指令方式
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span>
                        <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>
                        <span class="hljs-attr">@click</span>=<span class="hljs-string">"openFullScreen2"</span>&gt;</span>
                        服务方式
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">fullscreenLoading</span>: <span class="hljs-literal">false</span>
                        }
                    },
                    <span class="hljs-attr">methods</span>: {
                        openFullScreen() {
                            <span class="hljs-keyword">this</span>.fullscreenLoading = <span class="hljs-literal">true</span>;
                            setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            <span class="hljs-keyword">this</span>.fullscreenLoading = <span class="hljs-literal">false</span>;
                            }, <span class="hljs-number">2000</span>);
                        },
                        openFullScreen2() {
                            <span class="hljs-keyword">const</span> loading = <span class="hljs-keyword">this</span>.$loading({
                            <span class="hljs-attr">lock</span>: <span class="hljs-literal">true</span>,
                            <span class="hljs-attr">text</span>: <span class="hljs-string">'Loading'</span>,
                            <span class="hljs-attr">icon</span>: <span class="hljs-string">'el-icon-loading'</span>,
                            <span class="hljs-attr">background</span>: <span class="hljs-string">'rgba(0, 0, 0, 0.7)'</span>
                            });
                            setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
                            loading.close();
                            }, <span class="hljs-number">2000</span>);
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Options</h3>
    <gl-table :table='Options'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Loading',
    data () {
        return {
            loading: true,
            fullscreenLoading: false,
            loading2: true,
            table: {
                data: [
                    {
                    date: new Date().format("yyyy-MM-dd"),
                    name: '嘀嘀虎',
                    address: '深圳市南山区科兴科学园C3栋7楼'
                    },
                    {
                    date: new Date().format("yyyy-MM-dd"),
                    name: '嘀嘀虎',
                    address: '深圳市南山区科兴科学园C3栋7楼'
                    },
                    {
                    date: new Date().format("yyyy-MM-dd"),
                    name: '嘀嘀虎',
                    address: '深圳市南山区科兴科学园C3栋7楼'
                    },
                    {
                    date: new Date().format("yyyy-MM-dd"),
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
            Options: {
                data: [
                  {
                     parameter: 'target',
                     state: 'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点',
                     mold: 'object/string',
                     choose: '—',
                     default: 'document.body'
                  },
                  {
                     parameter: 'body',
                     state: '同 v-loading 指令中的 body 修饰符',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'fullscreen',
                     state: '同 v-loading 指令中的 fullscreen 修饰符',
                     mold: 'boolean',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'lock',
                     state: '同 v-loading 指令中的 lock 修饰符',
                     mold: 'boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'text',
                     state: '显示在加载图标下方的加载文案',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'icon',
                     state: '自定义加载图标类名',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'background',
                     state: '遮罩背景色',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'customClass',
                     state: 'Loading 的自定义类名',
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
            }
        }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          icon: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>

<style scoped>

</style>