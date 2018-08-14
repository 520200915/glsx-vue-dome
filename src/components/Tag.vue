<template>
  <div class='box'>
    <h2>Tag 标签</h2>
    <p>用于标记和选择。</p>
    <h3>基础用法</h3>
    <Code>
        <template slot='source'>
            <gl-tag>标签一</gl-tag>
            <gl-tag type="success">标签二</gl-tag>
            <gl-tag type="info">标签三</gl-tag>
            <gl-tag type="warning">标签四</gl-tag>
            <gl-tag type="danger">标签五</gl-tag>
        </template>
        <template slot='description'>
            <p>由<code>type</code>属性来选择tag的类型，也可以通过<code>color</code>属性来自定义背景色。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span>&gt;</span>标签一<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>标签二<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>标签三<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>标签四<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>标签五<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>可移除标签</h3>
    <Code>
        <template slot='source'>
            <gl-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type"
                style="margin-right:10px;">
                {{tag.name}}
            </gl-tag>
        </template>
        <template slot='description'>
            <p>设置<code>closable</code>属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置<code>disable-transitions</code>属性，它接受一个<code>Boolean</code>，true 为关闭。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span>
                    <span class="hljs-attr">v-for</span>=<span class="hljs-string">"tag in tags"</span>
                    <span class="hljs-attr">:key</span>=<span class="hljs-string">"tag.name"</span>
                    <span class="hljs-attr">closable</span>
                    <span class="hljs-attr">:type</span>=<span class="hljs-string">"tag.type"</span>&gt;</span>
                    {<span>{</span>tag.name}}
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                    <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">tags</span>: [
                        { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签一'</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">''</span> },
                        { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签二'</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span> },
                        { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签三'</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span> },
                        { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签四'</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span> },
                        { <span class="hljs-attr">name</span>: <span class="hljs-string">'标签五'</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">'danger'</span> }
                        ]
                    };
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>动态编辑标签</h3>
    <p>动态编辑标签可以通过点击标签关闭按钮后触发的 <code>close</code> 事件来实现</p>
    <Code>
        <template slot='source'>
            <gl-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            style="margin-right:10px;"
            @close="handleClose(tag)">
            {{tag}}
            </gl-tag>
            <gl-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @blur="handleInputConfirm"
            style="width: 200px;"
            >
            </gl-input>
            <gl-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</gl-button>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span>
                    <span class="hljs-attr">:key</span>=<span class="hljs-string">"tag"</span>
                    <span class="hljs-attr">v-for</span>=<span class="hljs-string">"tag in dynamicTags"</span>
                    <span class="hljs-attr">closable</span>
                    <span class="hljs-attr">:disable-transitions</span>=<span class="hljs-string">"false"</span>
                    <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose(tag)"</span>&gt;</span>
                    {<span>{</span>tag}}
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-input</span>
                    <span class="hljs-attr">class</span>=<span class="hljs-string">"input-new-tag"</span>
                    <span class="hljs-attr">v-if</span>=<span class="hljs-string">"inputVisible"</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"inputValue"</span>
                    <span class="hljs-attr">ref</span>=<span class="hljs-string">"saveTagInput"</span>
                    <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>
                    <span class="hljs-attr">@blur</span>=<span class="hljs-string">"handleInputConfirm"</span>
                    &gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-input</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">v-else</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button-new-tag"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showInput"</span>&gt;</span>+ New Tag<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">dynamicTags</span>: [<span class="hljs-string">'标签一'</span>, <span class="hljs-string">'标签二'</span>, <span class="hljs-string">'标签三'</span>],
                            <span class="hljs-attr">inputVisible</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">inputValue</span>: <span class="hljs-string">''</span>
                        };
                    },
                    <span class="hljs-attr">methods</span>: {
                        handleClose(tag) {
                            <span class="hljs-keyword">this</span>.dynamicTags.splice(<span class="hljs-keyword">this</span>.dynamicTags.indexOf(tag), <span class="hljs-number">1</span>);
                        },

                        showInput() {
                            <span class="hljs-keyword">this</span>.inputVisible = <span class="hljs-literal">true</span>
                            <span class="hljs-keyword">this</span>.$nextTick( _ => {
                                <span class="hljs-keyword">this</span>.$refs.saveTagInput.$refs.input.focus()
                            })
                        },

                        handleInputConfirm() {
                            <span class="hljs-keyword">let</span> inputValue = <span class="hljs-keyword">this</span>.inputValue;
                            <span class="hljs-keyword">if</span> (inputValue) {
                                <span class="hljs-keyword">this</span>.dynamicTags.push(inputValue);
                            }
                            <span class="hljs-keyword">this</span>.inputVisible = <span class="hljs-literal">false</span>;
                            <span class="hljs-keyword">this</span>.inputValue = <span class="hljs-string">''</span>;
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>不同尺寸</h3>
    <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <Code>
        <template slot='source'>
            <gl-tag closable>默认标签</gl-tag>
            <gl-tag size="medium" closable>中等标签</gl-tag>
            <gl-tag size="small" closable>小型标签</gl-tag>
            <gl-tag size="mini" closable>超小标签</gl-tag>
        </template>
        <template slot='description'>
            <p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">closable</span>&gt;</span>默认标签<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">closable</span>&gt;</span>中等标签<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">closable</span>&gt;</span>小型标签<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tag</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">closable</span>&gt;</span>超小标签<span class="hljs-tag">&lt;/<span class="hljs-name">gl-tag</span>&gt;</span>
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
    data () {
      return {
        tags: [
            { name: '标签一', type: '' },
            { name: '标签二', type: 'success' },
            { name: '标签三', type: 'info' },
            { name: '标签四', type: 'warning' },
            { name: '标签五', type: 'danger' }
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        table: {
            data: [
              {
                 parameter: 'type',
                 state: '主题',
                 mold: 'string',
                 choose: 'success/info/warning/danger',
                 default: '—'
              },
              {
                 parameter: 'closable',
                 state: '是否可关闭',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'disable-transitions',
                 state: '是否禁用渐变动画',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'hit',
                 state: '是否有边框描边',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'color',
                 state: '背景色',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'size',
                 state: '尺寸',
                 mold: 'string',
                 choose: 'medium / small / mini',
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
        },
        Events: {
            data: [
              {
                 parameter: 'close',
                 state: '关闭 Tag 时触发的事件',
                 mold: '—',
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
    },
    methods: {
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus()
            })
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
    }
  }
</script>

<style scoped>

</style>