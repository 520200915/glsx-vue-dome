<template>
  <div class='box rate'>
    <h2>Pagination 分页</h2>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h3>基础用法</h3>
    <Code>
        <template slot='source'>
            <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <gl-pagination
                layout="prev, pager, next"
                :total="50">
            </gl-pagination>
            </div>
            <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <gl-pagination
                layout="prev, pager, next"
                :total="1000">
            </gl-pagination>
            </div>
        </template>
        <template slot='description'>
            <p>设置<code>layout</code>，表示需要显示的内容，用逗号分隔，布局元素会依次显示。<code>prev</code>表示上一页，<code>next</code>为下一页，<code>pager</code>表示页码列表，除此以外还提供了<code>jumper</code>和<code>total</code>，<code>size</code>和特殊的布局符号<code>-&gt;</code>，<code>-&gt;</code>后的元素会靠右显示，<code>jumper</code>表示跳页元素，<code>total</code>表示显示页码总数，<code>size</code>用于设置每页显示的页码数量。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>页数较少时的效果<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                        <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
                        <span class="hljs-attr">:total</span>=<span class="hljs-string">"50"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>大于 7 页时的效果<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                        <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
                        <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>设置最大页码按钮数</h3>
    <Code>
        <template slot='source'>
                <gl-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
        </gl-pagination>
        </template>
        <template slot='description'>
            <p>默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过<code>pager-count</code>属性可以设置最大页码按钮数。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"20"</span>
                <span class="hljs-attr">:pager-count</span>=<span class="hljs-string">"11"</span>
                <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
                <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>带有背景色的分页</h3>
    <Code>
        <template slot='source'>
            <gl-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </gl-pagination>
        </template>
        <template slot='description'>
            <p>设置<code>background</code>属性可以为分页按钮添加背景色。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                    <span class="hljs-attr">background</span>
                    <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
                    <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>小型分页</h3>
    <p>在空间有限的情况下，可以使用简单的小型分页。</p>
    <Code>
        <template slot='source'>
            <gl-pagination
            small
            layout="prev, pager, next"
            :total="50">
            </gl-pagination>
        </template>
        <template slot='description'>
            <p>只需要一个<code>small</code>属性，它接受一个<code>Boolean</code>，默认为<code>false</code>，设为<code>true</code>即可启用。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                    <span class="hljs-attr">small</span>
                    <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
                    <span class="hljs-attr">:total</span>=<span class="hljs-string">"50"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>附加功能</h3>
    <p>根据场景需要，可以添加其他功能模块。</p>
    <Code class="last">
        <template slot='source' >
            <div class="block">
                <span class="demonstration">显示总数</span>
                <gl-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
                </gl-pagination>
            </div>
            <div class="block">
                <span class="demonstration">调整每页显示条数</span>
                <gl-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage2"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="sizes, prev, pager, next"
                :total="1000">
                </gl-pagination>
            </div>
            <div class="block">
                <span class="demonstration">直接前往</span>
                <gl-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
                </gl-pagination>
            </div>
            <div class="block">
                <span class="demonstration">完整功能</span>
                <gl-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </gl-pagination>
            </div>
        </template>
        <template slot='description'>
            <p>此例是一个完整的用例，使用了<code>size-change</code>和<code>current-change</code>事件来处理页码大小和当前页变动时候触发的事件。<code>page-sizes</code>接受一个整型数组，数组元素为展示的选择每页显示个数的选项，<code>[100, 200, 300, 400]</code>表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>显示总数<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                        <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
                        <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
                        <span class="hljs-attr">:current-page.sync</span>=<span class="hljs-string">"currentPage1"</span>
                        <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
                        <span class="hljs-attr">layout</span>=<span class="hljs-string">"total, prev, pager, next"</span>
                        <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>调整每页显示条数<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                        <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
                        <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
                        <span class="hljs-attr">:current-page.sync</span>=<span class="hljs-string">"currentPage2"</span>
                        <span class="hljs-attr">:page-sizes</span>=<span class="hljs-string">"[100, 200, 300, 400]"</span>
                        <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
                        <span class="hljs-attr">layout</span>=<span class="hljs-string">"sizes, prev, pager, next"</span>
                        <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>直接前往<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                        <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
                        <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
                        <span class="hljs-attr">:current-page.sync</span>=<span class="hljs-string">"currentPage3"</span>
                        <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
                        <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next, jumper"</span>
                        <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>完整功能<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-pagination</span>
                        <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
                        <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
                        <span class="hljs-attr">:current-page</span>=<span class="hljs-string">"currentPage4"</span>
                        <span class="hljs-attr">:page-sizes</span>=<span class="hljs-string">"[100, 200, 300, 400]"</span>
                        <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
                        <span class="hljs-attr">layout</span>=<span class="hljs-string">"total, sizes, prev, pager, next, jumper"</span>
                        <span class="hljs-attr">:total</span>=<span class="hljs-string">"400"</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-pagination</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    <span class="hljs-attr">methods</span>: {
                        handleSizeChange(val) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`每页 <span class="hljs-subst">${val}</span> 条`</span>);
                        },
                        handleCurrentChange(val) {
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`当前页: <span class="hljs-subst">${val}</span>`</span>);
                        }
                    },
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">currentPage1</span>: <span class="hljs-number">5</span>,
                            <span class="hljs-attr">currentPage2</span>: <span class="hljs-number">5</span>,
                            <span class="hljs-attr">currentPage3</span>: <span class="hljs-number">5</span>,
                            <span class="hljs-attr">currentPage4</span>: <span class="hljs-number">4</span>
                        };
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Events</h3>
    <gl-table :table='Events'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data () {
      return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            table: {
                data: [
                  {
                     parameter: 'small',
                     state: '是否使用小型分页样式',
                     mold: 'Boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'background',
                     state: '是否为分页按钮添加背景色',
                     mold: 'Boolean',
                     choose: '—',
                     default: 'false'
                  },
                  {
                     parameter: 'page-size',
                     state: '每页显示条目个数',
                     mold: 'Number',
                     choose: '—',
                     default: '10'
                  },
                  {
                     parameter: 'total',
                     state: '总条目数',
                     mold: 'Number',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'page-count',
                     state: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
                     mold: 'Number',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'pager-count',
                     state: '页码按钮的数量，当总页数超过该值时会折叠',
                     mold: 'Number',
                     choose: '大于等于 5 且小于等于 21 的奇数',
                     default: '7'
                  },
                  {
                     parameter: 'current-page',
                     state: '当前页数',
                     mold: 'Number',
                     choose: '—',
                     default: '1'
                  },
                  {
                     parameter: 'layout',
                     state: '组件布局，子组件名用逗号分隔',
                     mold: 'String',
                     choose: 'sizes, prev, pager, next, jumper, ->, total, slot',
                     default: "'prev, pager, next, jumper, ->, total'"
                  },
                  {
                     parameter: 'page-sizes',
                     state: '每页显示个数选择器的选项设置',
                     mold: 'Number[]',
                     choose: '—',
                     default: '[10, 20, 30, 40, 50, 100]'
                  },
                  {
                     parameter: 'popper-class',
                     state: '每页显示个数选择器的下拉框类名',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'prev-text',
                     state: '替代图标显示的上一页文字',
                     mold: 'string',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'next-text',
                     state: '替代图标显示的下一页文字',
                     mold: 'string',
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
            Events: {
                data: [
                  {
                     parameter: 'size-change',
                     state: 'pageSize 改变时会触发',
                     mold: '每页条数',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'current-change',
                     state: 'currentPage 改变时会触发',
                     mold: '当前页',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'prev-click',
                     state: '用户点击上一页按钮改变当前页后触发',
                     mold: '当前页',
                     choose: '—',
                     default: '—'
                  },
                  {
                     parameter: 'next-click',
                     state: '用户点击下一页按钮改变当前页后触发',
                     mold: '当前页',
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
            }
      }
    }
  }
</script>

<style scoped>

</style>