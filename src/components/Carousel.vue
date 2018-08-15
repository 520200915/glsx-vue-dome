<template>
  <div class='box carousel'>
    <h2>Carousel 走马灯</h2>
    <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法</p>
    <Code>
        <template slot='source'>
             <div class="block">
                <span class="demonstration">默认 Hover 指示器触发</span>
                <gl-carousel height="150px">
                <gl-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </gl-carousel-item>
                </gl-carousel>
            </div>
            <div class="block">
                <span class="demonstration">Click 指示器触发</span>
                <gl-carousel trigger="click" height="150px">
                <gl-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </gl-carousel-item>
                </gl-carousel>
            </div>
        </template>
        <template slot='description'>
            <p>结合使用<code>gl-carousel</code>和<code>gl-carousel-item</code>标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在<code>gl-carousel-item</code>标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置<code>trigger</code>属性为<code>click</code>，可以达到点击触发的效果。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>默认 Hover 指示器触发<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"150px"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{</span>{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demonstration"</span>&gt;</span>Click 指示器触发<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel</span> <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"150px"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{</span>{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>指示器</h3>
    <p>可以将指示器的显示位置设置在容器外部</p>
    <Code class="big">
        <template slot='source'>
            <gl-carousel indicator-position="outside">
                <gl-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </gl-carousel-item>
            </gl-carousel>
        </template>
        <template slot='description'>
            <p><code>indicator-position</code>属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为<code>outside</code>则会显示在外部；设置为<code>none</code>则不会显示指示器。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel</span> <span class="hljs-attr">indicator-position</span>=<span class="hljs-string">"outside"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{</span>{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>切换箭头</h3>
    <p>可以设置切换箭头的显示时机</p>
    <Code class="big">
        <template slot='source'>
            <gl-carousel :interval="5000" arrow="always">
                <gl-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </gl-carousel-item>
            </gl-carousel>
        </template>
        <template slot='description'>
            <p><code>arrow</code>属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将<code>arrow</code>设置为<code>always</code>，则会一直显示；设置为<code>never</code>，则会一直隐藏。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel</span> <span class="hljs-attr">:interval</span>=<span class="hljs-string">"5000"</span> <span class="hljs-attr">arrow</span>=<span class="hljs-string">"always"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 4"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{</span>{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>卡片化</h3>
    <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
    <Code class="big medium">
        <template slot='source'>
            <gl-carousel :interval="4000" type="card" height="200px">
                <gl-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
                </gl-carousel-item>
            </gl-carousel>
        </template>
        <template slot='description'>
            <p>将<code>type</code>属性设置为<code>card</code>即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。</p>
        </template>
        <template slot='highlight'>
            <pre><code class="hljs language-html">
                <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel</span> <span class="hljs-attr">:interval</span>=<span class="hljs-string">"4000"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"card"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"200px"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">gl-carousel-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in 6"</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">"item"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span><span>{</span>{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">gl-carousel</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
            </code></pre>
        </template>
    </Code>
    <h3>Carousel Attributes</h3>
    <gl-table :table='table'></gl-table>
    <h3>Carousel Events</h3>
    <gl-table :table='Events'></gl-table>
    <h3>Carousel Methods</h3>
    <gl-table :table='Methods'></gl-table>
    <h3>Carousel-Item Attributes</h3>
    <gl-table :table='Carousel'></gl-table>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Carousel',
    data () {
      return {
          table: {
              data: [
                {
                   parameter: 'height',
                   state: '走马灯的高度',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'initial-index',
                   state: '初始状态激活的幻灯片的索引，从 0 开始',
                   mold: 'number',
                   choose: '—',
                   default: '0'
                },
                {
                   parameter: 'trigger',
                   state: '指示器的触发方式',
                   mold: 'string',
                   choose: 'click/hover',
                   default: 'hover'
                },
                {
                   parameter: 'autoplay',
                   state: '是否自动切换',
                   mold: 'boolean',
                   choose: '—',
                   default: 'true'
                },
                {
                   parameter: 'interval',
                   state: '自动切换的时间间隔，单位为毫秒',
                   mold: 'number',
                   choose: '—',
                   default: '3000'
                },
                {
                   parameter: 'indicator-position',
                   state: '指示器的位置',
                   mold: 'string',
                   choose: 'outside/none',
                   default: '—'
                },
                {
                   parameter: 'arrow',
                   state: '切换箭头的显示时机',
                   mold: 'string',
                   choose: 'always/hover/never',
                   default: 'hover'
                },
                {
                   parameter: 'type',
                   state: '走马灯的类型',
                   mold: 'string',
                   choose: 'card',
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
                   state: '幻灯片切换时触发',
                   mold: '目前激活的幻灯片的索引，原幻灯片的索引',
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
          Methods: {
              data: [
                {
                   parameter: 'setActiveItem',
                   state: '手动切换幻灯片',
                   mold: '需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'prev',
                   state: '切换至上一张幻灯片',
                   mold: '—',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'next',
                   state: '切换至下一张幻灯片',
                   mold: '—',
                   choose: '—',
                   default: '—'
                }
              ],
              column: [
                {
                   label: '方法名',
                   prop: 'parameter'
                },
                {
                   label: '说明',
                   prop: 'state'
                },
                {
                   label: '参数',
                   prop: 'mold'
                }
              ]
          },
          Carousel: {
              data: [
                {
                   parameter: 'name',
                   state: '幻灯片的名字，可用作 setActiveItem 的参数',
                   mold: 'string',
                   choose: '—',
                   default: '—'
                },
                {
                   parameter: 'label',
                   state: '该幻灯片所对应指示器的文本',
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
                   width: '450'
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