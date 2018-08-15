<template>
  <div class='box'>
    <h2>Steps 步骤条</h2>
    <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
    <h3>基础用法</h3>
    <p>简单的步骤条。</p>
    <Code>
        <template slot='source'>
            <gl-steps :active="active" finish-status="success">
                <gl-step title="步骤 1"></gl-step>
                <gl-step title="步骤 2"></gl-step>
                <gl-step title="步骤 3"></gl-step>
            </gl-steps>
            <gl-button style="margin-top: 12px;" @click="next">下一步</gl-button>
        </template>
        <template slot='description'>
            <p>设置<code>active</code>属性，接受一个<code>Number</code>，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置<code>space</code>属性即可，它接受<code>Boolean</code>，单位为<code>px</code>，如果不设置，则为自适应。设置<code>finish-status</code>属性可以改变已经完成的步骤的状态。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"active"</span> <span class="hljs-attr">finish-status</span>=<span class="hljs-string">"success"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 12px;"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"next"</span>&gt;</span>下一步<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">active</span>: <span class="hljs-number">0</span>
                        };
                    },

                    <span class="hljs-attr">methods</span>: {
                        next() {
                            <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.active++ &gt; <span class="hljs-number">2</span>) <span class="hljs-keyword">this</span>.active = <span class="hljs-number">0</span>;
                        }
                    }
                }
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>含状态步骤条</h3>
    <p>每一步骤显示出该步骤的状态。</p>
    <Code>
        <template slot='source'>
            <gl-steps :space="200" :active="1" finish-status="success">
                <gl-step title="已完成"></gl-step>
                <gl-step title="进行中"></gl-step>
                <gl-step title="步骤 3"></gl-step>
            </gl-steps>
        </template>
        <template slot='description'>
            <p>也可以使用<code>title</code>具名分发，可以用<code>slot</code>的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:space</span>=<span class="hljs-string">"200"</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">finish-status</span>=<span class="hljs-string">"success"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"已完成"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"进行中"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>有描述的步骤条</h3>
    <p>每个步骤有其对应的步骤状态描述。</p>
    <Code>
        <template slot='source'>
            <gl-steps :active="1">
                <gl-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></gl-step>
                <gl-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></gl-step>
                <gl-step title="步骤 3" description="这段就没那么长了"></gl-step>
            </gl-steps>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 1"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 2"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这段就没那么长了"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>居中的步骤条</h3>
    <p>标题和描述都将居中。</p>
    <Code>
        <template slot='source'>
            <gl-steps :active="2" align-center>
            <gl-step title="步骤1" description="这是一段很长很长很长的描述性文字"></gl-step>
            <gl-step title="步骤2" description="这是一段很长很长很长的描述性文字"></gl-step>
            <gl-step title="步骤3" description="这是一段很长很长很长的描述性文字"></gl-step>
            <gl-step title="步骤4" description="这是一段很长很长很长的描述性文字"></gl-step>
            </gl-steps>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"2"</span> <span class="hljs-attr">align-center</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤1"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤2"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤3"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤4"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>带图标的步骤条</h3>
    <p>步骤条内可以启用各种自定义的图标。</p>
    <Code>
        <template slot='source'>
            <gl-steps :active="1">
                <gl-step title="步骤 1" icon="el-icon-edit"></gl-step>
                <gl-step title="步骤 2" icon="el-icon-upload"></gl-step>
                <gl-step title="步骤 3" icon="el-icon-picture"></gl-step>
            </gl-steps>
        </template>
        <template slot='description'>
            <p>通过<code>icon</code>属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名<code>slot</code>来使用自定义的图标。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 1"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 2"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-upload"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-picture"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>竖式步骤条</h3>
    <p>竖直方向的步骤条。</p>
    <Code>
        <template slot='source'>
            <div style="height: 300px;">
            <gl-steps direction="vertical" :active="1">
                <gl-step title="步骤 1"></gl-step>
                <gl-step title="步骤 2"></gl-step>
                <gl-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></gl-step>
            </gl-steps>
            </div>
        </template>
        <template slot='description'>
            <p>只需要在<code>gl-steps</code>元素中设置<code>direction</code>属性为<code>vertical</code>即可。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height: 300px;"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">"vertical"</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span> <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一段很长很长很长的描述性文字"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>简洁风格的步骤条</h3>
    <p>设置 <code>simple</code> 可应用简洁风格，该条件下 <code>align-center</code> / <code>description</code> / <code>direction</code> / <code>space</code> 都将失效。</p>
    <Code>
        <template slot='source'>
            <gl-steps :active="1" simple>
            <gl-step title="步骤 1" icon="el-icon-edit"></gl-step>
            <gl-step title="步骤 2" icon="el-icon-upload"></gl-step>
            <gl-step title="步骤 3" icon="el-icon-picture"></gl-step>
            </gl-steps>

            <gl-steps :active="1" finish-status="success" simple style="margin-top: 20px">
            <gl-step title="步骤 1" ></gl-step>
            <gl-step title="步骤 2" ></gl-step>
            <gl-step title="步骤 3" ></gl-step>
            </gl-steps>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">simple</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 1"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 2"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-upload"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-picture"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">gl-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">finish-status</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">simple</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 1"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 2"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-step</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"步骤 3"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-step</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-steps</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Steps Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Step Attributes</h3>
    <gl-table :table='Step'></gl-table>
    <h3>Step Slot</h3>
    <gl-table :table='Slot'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Steps',
    data () {
      return {
        active: 0,
        table: {
            data: [
              {
                 parameter: 'space',
                 state: '每个 step 的间距，不填写将自适应间距。支持百分比。',
                 mold: 'number / string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'direction',
                 state: '显示方向',
                 mold: 'string',
                 choose: 'vertical/horizontal',
                 default: 'horizontal'
              },
              {
                 parameter: 'active',
                 state: '设置当前激活步骤',
                 mold: 'number',
                 choose: '—',
                 default: '0'
              },
              {
                 parameter: 'process-status',
                 state: '设置当前步骤的状态',
                 mold: 'string',
                 choose: 'wait / process / finish / error / success',
                 default: 'process'
              },
              {
                 parameter: 'finish-status',
                 state: '设置结束步骤的状态',
                 mold: 'string',
                 choose: 'wait / process / finish / error / success',
                 default: 'finish'
              },
              {
                 parameter: 'align-center',
                 state: '进行居中对齐',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'simple',
                 state: '是否应用简洁风格',
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
        Step: {
            data: [
              {
                 parameter: 'title',
                 state: '标题',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'description',
                 state: '描述性文字',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'icon',
                 state: '图标',
                 mold: '传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'status',
                 state: '设置当前步骤的状态，不设置则根据 steps 确定状态',
                 mold: 'wait / process / finish / error / success',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: '参数',
                 prop: 'parameter',
                 width: '150'
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
                 width: '80'
              },
              {
                 label: '默认值',
                 prop: 'default',
                 width: '80'
               }
            ]
        },
        Slot: {
            data: [
              {
                 parameter: 'icon',
                 state: '图标',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'title',
                 state: '标题',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'description',
                 state: '描述性文字',
                 mold: '类型',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: 'name',
                 prop: 'parameter'
              },
              {
                 label: '说明',
                 prop: 'state'
              }
            ]
        }
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style scoped>

</style>