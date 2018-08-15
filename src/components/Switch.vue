<template>
    <div class="box">
        <h2>Switch 开关</h2>
        <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
        <h3>基本用法</h3>
        <Code>
            <template slot='source'>
              <gl-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </gl-switch>
            </template>
            <template slot='description'>
                <p>绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色。</p>
            </template>
            <template slot='highlight'>
              <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-switch</span>
                  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
                  <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
                  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-switch</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                      <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">value1</span>: <span class="hljs-literal">true</span>,
                        <span class="hljs-attr">value2</span>: <span class="hljs-literal">true</span>
                      }
                    }
                  };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
              </code></pre>
            </template>
        </Code>
        <h3>文字描述</h3>
        <Code>
            <template slot='source'>
                <gl-switch
                  v-model="value3"
                  active-text="按月付费"
                  inactive-text="按年付费">
                </gl-switch>
                <gl-switch
                  style="display: block; margin:20px 20px 20px 0;"
                  v-model="value4"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="按月付费"
                  inactive-text="按年付费">
                </gl-switch>
            </template>
            <template slot='description'>
              <p>使用<code>active-text</code>属性与<code>inactive-text</code>属性来设置开关的文字描述。</p>
            </template>
            <template slot='highlight'>
              <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-switch</span>
                  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
                  <span class="hljs-attr">active-text</span>=<span class="hljs-string">"按月付费"</span>
                  <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">"按年付费"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-switch</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-switch</span>
                  <span class="hljs-attr">style</span>=<span class="hljs-string">"display: block"</span>
                  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
                  <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
                  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>
                  <span class="hljs-attr">active-text</span>=<span class="hljs-string">"按月付费"</span>
                  <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">"按年付费"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-switch</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                      <span class="hljs-keyword">return</span> {
                          <span class="hljs-attr">value3</span>: <span class="hljs-literal">true</span>,
                          <span class="hljs-attr">value4</span>: <span class="hljs-literal">true</span>
                        }
                    }
                  };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
              </code></pre>
            </template>
        </Code>
        <h3>扩展的 value 类型</h3>
        <Code>
            <template slot='source'>
              <gl-tooltip :content="'Switch value: ' + value5" placement="top">
                <gl-switch
                  v-model="value5"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-value="100"
                  inactive-value="0">
                </gl-switch>
              </gl-tooltip>
            </template>
            <template slot='description'>
              <p>设置<code>active-value</code>和<code>inactive-value</code>属性，接受<code>Boolean</code>, <code>String</code>或<code>Number</code>类型的值。</p>
            </template>
            <template slot='highlight'>
              <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-tooltip</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">"'Switch value: ' + value5"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">gl-switch</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
                    <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
                    <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>
                    <span class="hljs-attr">active-value</span>=<span class="hljs-string">"100"</span>
                    <span class="hljs-attr">inactive-value</span>=<span class="hljs-string">"0"</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">gl-switch</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-tooltip</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                      <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">value5</span>: <span class="hljs-string">'100'</span>
                      }
                    }
                  };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
              </code></pre>
            </template>
        </Code>
        <h3>禁用状态</h3>
        <Code>
            <template slot='source'>
              <gl-switch
                style="margin: 20px 20px 20px 0;"
                v-model="value6"
                disabled>
              </gl-switch>
              <gl-switch
                v-model="value7"
                disabled>
              </gl-switch>
            </template>
            <template slot='description'>
              <p>设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。</p>
            </template>
            <template slot='highlight'>
              <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-switch</span>
                  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
                  <span class="hljs-attr">disabled</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-switch</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-switch</span>
                  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
                  <span class="hljs-attr">disabled</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-switch</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                      <span class="hljs-keyword">return</span> {
                        <span class="hljs-attr">value6</span>: <span class="hljs-literal">true</span>,
                        <span class="hljs-attr">value7</span>: <span class="hljs-literal">false</span>
                      }
                    }
                  };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
              </code></pre>
            </template>
        </Code>
        <h3>Attributes</h3>
        <gl-table :table='Attributes'></gl-table>
        <h3>Events</h3>
        <gl-table :table='table'></gl-table>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Switch',
    data () {
      return {
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false,
        Attributes: {
            data: [
              {
                 parameter: 'disabled',
                 state: '是否禁用	',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'width',
                 state: 'switch 的宽度（像素）',
                 mold: 'number',
                 choose: '—',
                 default: '40'
              },
              {
                 parameter: 'active-icon-class',
                 state: 'switch 打开时所显示图标的类名，设置此项会忽略 active-text',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'inactive-icon-class',
                 state: 'switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'active-text',
                 state: 'switch 打开时的文字描述',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'inactive-text',
                 state: 'switch 关闭时的文字描述',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'active-value',
                 state: 'switch 打开时的值',
                 mold: 'boolean / string / number',
                 choose: '—',
                 default: 'true'
              },
              {
                 parameter: 'inactive-value',
                 state: 'switch 关闭时的值',
                 mold: 'boolean / string / number',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'active-color',
                 state: 'switch 打开时的背景色',
                 mold: 'string',
                 choose: '—',
                 default: '#409EFF'
              },
              {
                 parameter: 'inactive-color',
                 state: 'switch 关闭时的背景色',
                 mold: 'string',
                 choose: '—',
                 default: '#C0CCDA'
              },
              {
                 parameter: 'name',
                 state: 'switch 对应的 name 属性',
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
                 width: '310'
              },
              {
                 label: '类型',
                 prop: 'mold',
                 width: '200'
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
        table: {
            data: [
              {
                 parameter: 'change',
                 state: 'switch 状态发生变化时的回调函数',
                 mold: '新状态的值',
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