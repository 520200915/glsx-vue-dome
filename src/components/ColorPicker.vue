<template>
  <div class='box rate'>
    <h2>ColorPicker 颜色选择器</h2>
    <p>用于颜色选择，支持多种格式。</p>
    <h3>基础用法</h3>
    <Code>
        <template slot='source'>
            <div class="block">
            <span class="demonstration">有默认值</span>
            <gl-color-picker v-model="color1" ></gl-color-picker>
            </div>
            <div class="block">
            <span class="demonstration">无默认值</span>
            <gl-color-picker v-model="color2"></gl-color-picker>
            </div>
        </template>
        <template slot='description'>
            <p>使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>有默认值<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>无默认值<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">color1</span>: <span class="hljs-string">'#409EFF'</span>,
                            <span class="hljs-attr">color2</span>: <span class="hljs-literal">null</span>
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>选择透明度</h3>
    <Code>
        <template slot='source'>
            <gl-color-picker v-model="color3" show-alpha></gl-color-picker>
        </template>
        <template slot='description'>
            <p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过<code>show-alpha</code>属性即可控制是否支持透明度的选择。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color3"</span> <span class="hljs-attr">show-alpha</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">color3</span>: <span class="hljs-string">'rgba(19, 206, 102, 0.8)'</span>
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>预定义颜色</h3>
    <Code>
        <template slot='source'>
            <gl-color-picker
            v-model="color5"
            show-alpha
            :predefine="predefineColors">
            </gl-color-picker>
        </template>
        <template slot='description'>
            <p>ColorPicker 支持预定义颜色</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span>
                    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color5"</span>
                    <span class="hljs-attr">show-alpha</span>
                    <span class="hljs-attr">:predefine</span>=<span class="hljs-string">"predefineColors"</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">color5</span>: <span class="hljs-string">'rgba(255, 69, 0, 0.68)'</span>,
                            <span class="hljs-attr">predefineColors</span>: [
                            <span class="hljs-string">'#ff4500'</span>,
                            <span class="hljs-string">'#ff8c00'</span>,
                            <span class="hljs-string">'#ffd700'</span>,
                            <span class="hljs-string">'#90ee90'</span>,
                            <span class="hljs-string">'#00ced1'</span>,
                            <span class="hljs-string">'#1e90ff'</span>,
                            <span class="hljs-string">'#c71585'</span>,
                            <span class="hljs-string">'rgba(255, 69, 0, 0.68)'</span>,
                            <span class="hljs-string">'rgb(255, 120, 0)'</span>,
                            <span class="hljs-string">'hsv(51, 100, 98)'</span>,
                            <span class="hljs-string">'hsva(120, 40, 94, 0.5)'</span>,
                            <span class="hljs-string">'hsl(181, 100%, 37%)'</span>,
                            <span class="hljs-string">'hsla(209, 100%, 56%, 0.73)'</span>,
                            <span class="hljs-string">'#c7158577'</span>
                            ]
                        }
                    }
                };
                </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>不同尺寸</h3>
    <Code>
        <template slot='source'>
            <gl-color-picker v-model="color4" style="margin-right:20px;"></gl-color-picker>
            <gl-color-picker v-model="color4" size="medium" style="margin-right:20px;"></gl-color-picker>
            <gl-color-picker v-model="color4" size="small" style="margin-right:20px;"></gl-color-picker>
            <gl-color-picker v-model="color4" size="mini" style="margin-right:20px;"></gl-color-picker>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">gl-color-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"color4"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">gl-color-picker</span>&gt;</span>

                <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
                <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
                    data() {
                        <span class="hljs-keyword">return</span> {
                            <span class="hljs-attr">color4</span>: <span class="hljs-string">'#409EFF'</span>
                        }
                    }
                };
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
    name: 'ColorPicker',
    data () {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF',
        color5: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        table: {
            data: [
              {
                 parameter: 'disabled',
                 state: '是否禁用',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'size',
                 state: '尺寸',
                 mold: 'string',
                 choose: '—',
                 default: 'medium / small / mini'
              },
              {
                 parameter: 'show-alpha',
                 state: '是否支持透明度选择',
                 mold: 'boolean',
                 choose: '—',
                 default: 'false'
              },
              {
                 parameter: 'color-format',
                 state: '写入 v-model 的颜色的格式',
                 mold: 'string',
                 choose: 'hsl / hsv / hex / rgb',
                 default: 'hex（show-alpha 为 false）/ rgb（show-alpha 为 true）'
              },
              {
                 parameter: 'popper-class',
                 state: 'ColorPicker 下拉框的类名',
                 mold: 'string',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'predefine',
                 state: '预定义颜色',
                 mold: 'array',
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
        },
        Events: {
            data: [
              {
                 parameter: 'change',
                 state: '当绑定值变化时触发',
                 mold: '当前值',
                 choose: '—',
                 default: '—'
              },
              {
                 parameter: 'active-change',
                 state: '面板中当前显示的颜色发生改变时触发',
                 mold: '当前显示的颜色值',
                 choose: '—',
                 default: '—'
              }
            ],
            column: [
              {
                 label: '参数',
                 prop: 'parameter',
                 width: '187'
              },
              {
                 label: '说明',
                 prop: 'state',
                 width: '450'
              },
              {
                 label: '类型',
                 prop: 'mold'
              }
            ]
        }
      }
    }
  }
</script>