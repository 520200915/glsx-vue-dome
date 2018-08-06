<template>
  <div class='box'>
    <h2>Collapse 折叠面板</h2>
    <p>通过折叠面板收纳内容区域</p>
    <h3>基础用法</h3>
    <p>可同时展开多个面板，面板之间不影响</p>
    <Code>
        <template slot='source'>
          <gl-collapse v-model="activeNames" @change="handleChange">
            <gl-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </gl-collapse-item>
            <gl-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </gl-collapse-item>
            <gl-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </gl-collapse-item>
            <gl-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </gl-collapse-item>
          </gl-collapse>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"activeNames"</span> <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"一致性 Consistency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"反馈 Feedback"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"2"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"效率 Efficiency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"3"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>简化流程：设计简洁直观的操作流程；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"可控 Controllability"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"4"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
              <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                data() {
                  <span class="hljs-keyword">return</span> {
                    <span class="hljs-attr">activeNames</span>: [<span class="hljs-string">'1'</span>]
                  };
                },
                <span class="hljs-attr">methods</span>: {
                  handleChange(val) {
                    <span class="hljs-built_in">console</span>.log(val);
                  }
                }
              }
            </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>手风琴效果</h3>
    <p>每次只能展开一个面板</p>
    <Code>
        <template slot='source'>
          <gl-collapse v-model="activeName" accordion>
            <gl-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </gl-collapse-item>
            <gl-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </gl-collapse-item>
            <gl-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </gl-collapse-item>
            <gl-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </gl-collapse-item>
          </gl-collapse>
        </template>
        <template slot='description'>
          <p>通过 <code>accordion</code> 属性来设置是否以手风琴模式显示。</p>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"activeName"</span> <span class="hljs-attr">accordion</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"一致性 Consistency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"1"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"反馈 Feedback"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"2"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"效率 Efficiency"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"3"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>简化流程：设计简洁直观的操作流程；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"可控 Controllability"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"4"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
              <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                data() {
                  <span class="hljs-keyword">return</span> {
                    <span class="hljs-attr">activeName</span>: <span class="hljs-string">'1'</span>
                  };
                }
              }
            </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>自定义面板标题</h3>
    <p>除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <Code>
        <template slot='source'>
          <gl-collapse accordion>
            <gl-collapse-item>
              <template slot="title">
                一致性 Consistency<i class="header-icon el-icon-info" style="margin-left: 5px;"></i>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </gl-collapse-item>
            <gl-collapse-item title="反馈 Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </gl-collapse-item>
            <gl-collapse-item title="效率 Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </gl-collapse-item>
            <gl-collapse-item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </gl-collapse-item>
          </gl-collapse>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
          <pre><code class="hljs language-html">
            <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse</span> <span class="hljs-attr">accordion</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
                  一致性 Consistency<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"header-icon el-icon-info"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"反馈 Feedback"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"效率 Efficiency"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>简化流程：设计简洁直观的操作流程；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">gl-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"可控 Controllability"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">gl-collapse</span>&gt;</span>
          </code></pre>
        </template>
    </Code>
    <h3>Collapse Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Collapse Events</h3>
    <gl-table :table='Events'></gl-table>
    <h3>Collapse Item Attributes</h3>
    <gl-table :table='Item'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: '',
    data () {
      return {
        activeNames: ['1'],
        activeName: '1',
        table: {
            data: [
              {
                 parameter: 'accordion',
                 state: '是否手风琴模式',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'value',
                 state: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
                 mold: 'string/array',
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
        },
        Events: {
            data: [
              {
                 parameter: 'change',
                 state: '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)',
                 mold: '(activeNames: array|string)',
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
                 parameter: 'name',
                 state: '唯一标志符',
                 mold: 'string/number',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'title',
                 state: '面板标题',
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
      handleChange(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>