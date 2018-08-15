<template>
  <div class='box'>
    <h2>Badge 标记</h2>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
    <h3>基础用法</h3>
    <p>展示新消息数量。</p>
    <Code>
        <template slot='source'>
            <gl-badge :value="12" class="item">
            <gl-button size="small">评论</gl-button>
            </gl-badge>
            <gl-badge :value="3" class="item">
            <gl-button size="small">回复</gl-button>
            </gl-badge>

            <gl-dropdown trigger="click">
            <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <gl-dropdown-menu slot="dropdown">
                <gl-dropdown-item class="clearfix">
                评论
                <gl-badge class="mark" :value="12" />
                </gl-dropdown-item>
                <gl-dropdown-item class="clearfix">
                回复
                <gl-badge class="mark" :value="3" />
                </gl-dropdown-item>
            </gl-dropdown-menu>
            </gl-dropdown>
        </template>
        <template slot='description'>
            <p>定义<code>value</code>属性，它接受<code>Number</code>或者<code>String</code>。</p>
        </template>
        <template slot='highlight'>
            <pre data-v-36db4f7e=""><code data-v-36db4f7e="" class="hljs language-html">
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">:value</span>=<span data-v-36db4f7e="" class="hljs-string">"12"</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">size</span>=<span data-v-36db4f7e="" class="hljs-string">"small"</span>&gt;</span>评论<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">:value</span>=<span data-v-36db4f7e="" class="hljs-string">"3"</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">size</span>=<span data-v-36db4f7e="" class="hljs-string">"small"</span>&gt;</span>回复<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>

                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-dropdown</span> <span data-v-36db4f7e="" class="hljs-attr">trigger</span>=<span data-v-36db4f7e="" class="hljs-string">"click"</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">span</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"gl-dropdown-link"</span>&gt;</span>
                    点我查看<span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">i</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"el-icon-caret-bottom gl-icon--right"</span>&gt;</span><span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">i</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">span</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-dropdown-menu</span> <span data-v-36db4f7e="" class="hljs-attr">slot</span>=<span data-v-36db4f7e="" class="hljs-string">"dropdown"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-dropdown-item</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"clearfix"</span>&gt;</span>
                    评论
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"mark"</span> <span data-v-36db4f7e="" class="hljs-attr">:value</span>=<span data-v-36db4f7e="" class="hljs-string">"12"</span> /&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-dropdown-item</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-dropdown-item</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"clearfix"</span>&gt;</span>
                    回复
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"mark"</span> <span data-v-36db4f7e="" class="hljs-attr">:value</span>=<span data-v-36db4f7e="" class="hljs-string">"3"</span> /&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-dropdown-item</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-dropdown-menu</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-dropdown</span>&gt;</span>

                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">style</span>&gt;</span><span data-v-36db4f7e="" class="css">
                <span data-v-36db4f7e="" class="hljs-selector-class">.item</span> {
                <span data-v-36db4f7e="" class="hljs-attribute">margin-top</span>: <span data-v-36db4f7e="" class="hljs-number">10px</span>;
                <span data-v-36db4f7e="" class="hljs-attribute">margin-right</span>: <span data-v-36db4f7e="" class="hljs-number">40px</span>;
                }
                </span><span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">style</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>最大值</h3>
    <p>可自定义最大值。</p>
    <Code>
        <template slot='source'>
            <gl-badge :value="200" :max="99" class="item">
            <gl-button size="small">评论</gl-button>
            </gl-badge>
            <gl-badge :value="100" :max="10" class="item">
            <gl-button size="small">回复</gl-button>
            </gl-badge>
        </template>
        <template slot='description'>
            <p data-v-36db4f7e="">由<code data-v-36db4f7e="">max</code>属性定义，它接受一个<code data-v-36db4f7e="">Number</code>，需要注意的是，只有当<code data-v-36db4f7e="">value</code>为<code data-v-36db4f7e="">Number</code>时，它才会生效。</p>
        </template>
        <template slot='highlight'>
            <pre data-v-36db4f7e=""><code data-v-36db4f7e="" class="hljs language-html">
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">:value</span>=<span data-v-36db4f7e="" class="hljs-string">"200"</span> <span data-v-36db4f7e="" class="hljs-attr">:max</span>=<span data-v-36db4f7e="" class="hljs-string">"99"</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">size</span>=<span data-v-36db4f7e="" class="hljs-string">"small"</span>&gt;</span>评论<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">:value</span>=<span data-v-36db4f7e="" class="hljs-string">"100"</span> <span data-v-36db4f7e="" class="hljs-attr">:max</span>=<span data-v-36db4f7e="" class="hljs-string">"10"</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">size</span>=<span data-v-36db4f7e="" class="hljs-string">"small"</span>&gt;</span>回复<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>自定义内容</h3>
    <p>可以显示数字以外的文本内容。</p>
    <Code>
        <template slot='source'>
            <gl-badge value="new" class="item">
            <gl-button size="small">评论</gl-button>
            </gl-badge>
            <gl-badge value="hot" class="item">
            <gl-button size="small">回复</gl-button>
            </gl-badge>
        </template>
        <template slot='description'>
            <p data-v-36db4f7e="">定义<code data-v-36db4f7e="">value</code>为<code data-v-36db4f7e="">String</code>类型是时可以用于显示自定义文本。</p>
        </template>
        <template slot='highlight'>
            <pre data-v-36db4f7e=""><code data-v-36db4f7e="" class="hljs language-html">
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">value</span>=<span data-v-36db4f7e="" class="hljs-string">"new"</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">size</span>=<span data-v-36db4f7e="" class="hljs-string">"small"</span>&gt;</span>评论<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">value</span>=<span data-v-36db4f7e="" class="hljs-string">"hot"</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">size</span>=<span data-v-36db4f7e="" class="hljs-string">"small"</span>&gt;</span>回复<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>小红点</h3>
    <p>以红点的形式标注需要关注的内容。</p>
    <Code>
        <template slot='source'>
            <gl-badge is-dot class="item">数据查询</gl-badge>
            <gl-badge is-dot class="item">
                <gl-button class="share-button" icon="el-icon-share" type="primary"></gl-button>
            </gl-badge>
        </template>
        <template slot='description'>
            <p data-v-36db4f7e="">除了数字外，设置<code data-v-36db4f7e="">is-dot</code>属性，它接受一个<code data-v-36db4f7e="">Boolean</code>。</p>
        </template>
        <template slot='highlight'>
            <pre data-v-36db4f7e=""><code data-v-36db4f7e="" class="hljs language-html">
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">is-dot</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>数据查询<span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-badge</span> <span data-v-36db4f7e="" class="hljs-attr">is-dot</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"item"</span>&gt;</span>
                    <span data-v-36db4f7e="" class="hljs-tag">&lt;<span data-v-36db4f7e="" class="hljs-name">gl-button</span> <span data-v-36db4f7e="" class="hljs-attr">class</span>=<span data-v-36db4f7e="" class="hljs-string">"share-button"</span> <span data-v-36db4f7e="" class="hljs-attr">icon</span>=<span data-v-36db4f7e="" class="hljs-string">"el-icon-share"</span> <span data-v-36db4f7e="" class="hljs-attr">type</span>=<span data-v-36db4f7e="" class="hljs-string">"primary"</span>&gt;</span><span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-button</span>&gt;</span>
                <span data-v-36db4f7e="" class="hljs-tag">&lt;/<span data-v-36db4f7e="" class="hljs-name">gl-badge</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Attributes</h3>
    <gl-table :table='table'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Badge',
    data () {
      return {
          table: {
              data: [
                {
                   parameter: 'value',
                   state: '显示值',
                   mold: 'string, number',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'max',
                   state: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
                   mold: 'number',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'is-dot',
                   state: '小圆点',
                   mold: 'boolean',
                   choose: '—',
                   default: 'false'
                },
                {
                   parameter: 'hidden',
                   state: '隐藏 badge',
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
                   prop: 'state',
                   width: '400'
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
    }
  }
</script>

<style scoped>

</style>