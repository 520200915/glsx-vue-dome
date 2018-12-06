<template>
<div class='box'>
  <h2>Card 卡片</h2>
  <p>将信息聚合在卡片容器中展示。</p>
  <h3>基础用法</h3>
  <p>包含标题，内容和操作。</p>
  <Code>
        <template slot='source'>
            <gl-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <gl-button style="float: right; padding: 3px 0" type="text">操作按钮</gl-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{`列表内容${o}`}}
            </div>
            </gl-card>
        </template>
        <template slot='description'>
            <p data-v-68fac5f9="">Card 组件包括<code data-v-68fac5f9="">header</code>和<code data-v-68fac5f9="">body</code>部分，<code data-v-68fac5f9="">header</code>部分需要有显式具名 slot 分发，同时也是可选的。</p>
  </template>
  <template slot='highlight'>
    <pre data-v-68fac5f9=""><code data-v-68fac5f9="" class="hljs language-html">
                <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-card</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"box-card"</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">div</span> <span data-v-68fac5f9="" class="hljs-attr">slot</span>=<span data-v-68fac5f9="" class="hljs-string">"header"</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"clearfix"</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">span</span>&gt;</span>卡片名称<span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">span</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-button</span> <span data-v-68fac5f9="" class="hljs-attr">style</span>=<span data-v-68fac5f9="" class="hljs-string">"float: right; padding: 3px 0"</span> <span data-v-68fac5f9="" class="hljs-attr">type</span>=<span data-v-68fac5f9="" class="hljs-string">"text"</span>&gt;</span>操作按钮<span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-button</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">div</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">div</span> <span data-v-68fac5f9="" class="hljs-attr">v-for</span>=<span data-v-68fac5f9="" class="hljs-string">"o in 4"</span> <span data-v-68fac5f9="" class="hljs-attr">:key</span>=<span data-v-68fac5f9="" class="hljs-string">"o"</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"text item"</span>&gt;</span>
                        <span>{</span>{`列表内容${o}`}}
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">div</span>&gt;</span>
                <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-card</span>&gt;</span>        
            </code></pre>
  </template>
  </Code>
  <h3>简单卡片</h3>
  <p>卡片可以只有内容区域。</p>
  <Code>
        <template slot='source'>
            <gl-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
                {{`列表内容${o}`}}
            </div>
            </gl-card>
        </template>
        <template slot='description'>
        </template>
        <template slot='highlight'>
            <pre data-v-68fac5f9=""><code data-v-68fac5f9="" class="hljs language-html">
                <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-card</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"box-card"</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">div</span> <span data-v-68fac5f9="" class="hljs-attr">v-for</span>=<span data-v-68fac5f9="" class="hljs-string">"o in 4"</span> <span data-v-68fac5f9="" class="hljs-attr">:key</span>=<span data-v-68fac5f9="" class="hljs-string">"o"</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"text item"</span>&gt;</span>
                        <span>{</span>{`列表内容${o}`}}
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">div</span>&gt;</span>
                <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-card</span>&gt;</span>
            </code></pre>
  </template>
  </Code>
  <h3>带图片</h3>
  <p>可配置定义更丰富的内容展示。</p>
  <Code>
        <template slot='source'>
            <gl-row>
                <gl-col :span="10" v-for="(o, index) in item" :key="o" :offset="index%2 !== 0 ? 2 : 0">
                    <gl-card :body-style="{ padding: '0px' }" style="margin-bottom:10px;">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534310288866&di=49fcbb17de1b4f15d1229e7daabee2a1&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160812%2FImg463991939.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>嘀嘀虎</span>
                            <div class="bottom clearfix">
                            <span class="time">{{ currentDate }}</span>
                            <gl-button type="text" class="button" @click="item--">删除</gl-button>
                            <gl-button type="text" class="button" @click="item++">添加</gl-button>                           
                            </div>
                        </div>
                    </gl-card>
                </gl-col>
            </gl-row>
        </template>
        <template slot='description'>
            <p data-v-68fac5f9="">配置<code data-v-68fac5f9="">body-style</code>属性来自定义<code data-v-68fac5f9="">body</code>部分的<code data-v-68fac5f9="">style</code>，我们还使用了布局组件。</p>
  </template>
  <template slot='highlight'>
    <pre data-v-68fac5f9=""><code data-v-68fac5f9="" class="hljs language-html">
                <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-row</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-col</span> <span data-v-68fac5f9="" class="hljs-attr">:span</span>=<span data-v-68fac5f9="" class="hljs-string">"10"</span> <span data-v-68fac5f9="" class="hljs-attr">v-for</span>=<span data-v-68fac5f9="" class="hljs-string">"(o, index) in item"</span> <span data-v-68fac5f9="" class="hljs-attr">:key</span>=<span data-v-68fac5f9="" class="hljs-string">"o"</span> <span data-v-68fac5f9="" class="hljs-attr">:offset</span>=<span data-v-68fac5f9="" class="hljs-string">"index%2 !== 0 ? 2 : 0"</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-card</span> <span data-v-68fac5f9="" class="hljs-attr">:body-style</span>=<span data-v-68fac5f9="" class="hljs-string">"{ padding: '0px' }" style='margin-bottom:10px;'</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">img</span> <span data-v-68fac5f9="" class="hljs-attr">src</span>=<span data-v-68fac5f9="" class="hljs-string">"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534310288866&di=49fcbb17de1b4f15d1229e7daabee2a1&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160812%2FImg463991939.jpg"</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"image"</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">div</span> <span data-v-68fac5f9="" class="hljs-attr">style</span>=<span data-v-68fac5f9="" class="hljs-string">"padding: 14px;"</span>&gt;</span>
                            <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">span</span>&gt;</span>嘀嘀虎<span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">span</span>&gt;</span>
                            <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">div</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"bottom clearfix"</span>&gt;</span>
                            <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">time</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"time"</span>&gt;</span>{<span>{</span> currentDate }}<span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">time</span>&gt;</span>
                            <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-button</span> <span data-v-68fac5f9="" class="hljs-attr">type</span>=<span data-v-68fac5f9="" class="hljs-string">"text"</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"button" @click='item--'</span>&gt;</span>删除<span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-button</span>&gt;</span>
                            <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-button</span> <span data-v-68fac5f9="" class="hljs-attr">type</span>=<span data-v-68fac5f9="" class="hljs-string">"text"</span> <span data-v-68fac5f9="" class="hljs-attr">class</span>=<span data-v-68fac5f9="" class="hljs-string">"button" @click='item++'</span>&gt;</span>添加<span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-button</span>&gt;</span>
                            <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">div</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">div</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-card</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-col</span>&gt;</span>
                <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-row</span>&gt;</span>
                <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">script</span>&gt;</span><span data-v-68fac5f9="" class="javascript">
                <span data-v-68fac5f9="" class="hljs-keyword">export</span> <span data-v-68fac5f9="" class="hljs-keyword">default</span> {
                    data() {
                        <span data-v-68fac5f9="" class="hljs-keyword">return</span> {
                            <span data-v-68fac5f9="" class="hljs-attr">item</span>: <span data-v-68fac5f9="" class="hljs-keyword">2</span>,
                            <span data-v-68fac5f9="" class="hljs-attr">currentDate</span>: <span data-v-68fac5f9="" class="hljs-keyword">new</span> <span data-v-68fac5f9="" class="hljs-built_in">Date</span>().format("yyyy-MM-dd HH:mm:ss")
                        };
                    }
                }
                </span><span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">script</span>&gt;</span>
            </code></pre>
  </template>
  </Code>
  <h3>卡片阴影</h3>
  <p>可对阴影的显示进行配置。</p>
  <Code>
        <template slot='source'>
            <gl-row :gutter="12">
                <gl-col :span="8">
                    <gl-card shadow="always">
                    总是显示
                    </gl-card>
                </gl-col>
                <gl-col :span="8">
                    <gl-card shadow="hover">
                    鼠标悬浮时显示
                    </gl-card>
                </gl-col>
                <gl-col :span="8">
                    <gl-card shadow="never">
                    从不显示
                    </gl-card>
                </gl-col>
            </gl-row>
        </template>
        <template slot='description'>
            <p data-v-68fac5f9="">通过<code data-v-68fac5f9="">shadow</code>属性设置卡片阴影出现的时机：<code data-v-68fac5f9="">always</code>、<code data-v-68fac5f9="">hover</code>或<code data-v-68fac5f9="">never</code>。</p>
  </template>
  <template slot='highlight'>
    <pre data-v-68fac5f9=""><code data-v-68fac5f9="" class="hljs language-html">
                <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-row</span> <span data-v-68fac5f9="" class="hljs-attr">:gutter</span>=<span data-v-68fac5f9="" class="hljs-string">"12"</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-col</span> <span data-v-68fac5f9="" class="hljs-attr">:span</span>=<span data-v-68fac5f9="" class="hljs-string">"8"</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-card</span> <span data-v-68fac5f9="" class="hljs-attr">shadow</span>=<span data-v-68fac5f9="" class="hljs-string">"always"</span>&gt;</span>
                        总是显示
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-card</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-col</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-col</span> <span data-v-68fac5f9="" class="hljs-attr">:span</span>=<span data-v-68fac5f9="" class="hljs-string">"8"</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-card</span> <span data-v-68fac5f9="" class="hljs-attr">shadow</span>=<span data-v-68fac5f9="" class="hljs-string">"hover"</span>&gt;</span>
                        鼠标悬浮时显示
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-card</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-col</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-col</span> <span data-v-68fac5f9="" class="hljs-attr">:span</span>=<span data-v-68fac5f9="" class="hljs-string">"8"</span>&gt;</span>
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;<span data-v-68fac5f9="" class="hljs-name">gl-card</span> <span data-v-68fac5f9="" class="hljs-attr">shadow</span>=<span data-v-68fac5f9="" class="hljs-string">"never"</span>&gt;</span>
                        从不显示
                        <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-card</span>&gt;</span>
                    <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-col</span>&gt;</span>
                <span data-v-68fac5f9="" class="hljs-tag">&lt;/<span data-v-68fac5f9="" class="hljs-name">gl-row</span>&gt;</span>
            </code></pre>
  </template>
  </Code>
  <h3>Attributes</h3>
  <gl-table :table='table'></gl-table>
</div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      item: 2,
      currentDate: new Date().format("yyyy-MM-dd HH:mm:ss"),
      table: {
        data: [{
            parameter: 'header',
            state: '设置 header，也可以通过 slot#header 传入 DOM',
            mold: 'string',
            choose: '—',
            default: '—'
          },
          {
            parameter: 'body-style',
            state: '设置 body 的样式',
            mold: 'object',
            choose: '—',
            default: "{ padding: '20px' }"
          },
          {
            parameter: 'shadow',
            state: '设置阴影显示时机',
            mold: 'string',
            choose: 'always / hover / never',
            default: 'always'
          }
        ],
        column: [{
            label: '参数',
            prop: 'parameter',
            width: '100'
          },
          {
            label: '说明',
            prop: 'state'
          },
          {
            label: '类型',
            prop: 'mold',
            width: '100'
          },
          {
            label: '可选值',
            prop: 'choose',
            width: '200'
          },
          {
            label: '默认值',
            prop: 'default',
            width: '150'
          }
        ]
      }
    }
  }
}
</script>

<style>
.box-card {
  width: 480px;
}

.text {
  margin-bottom: 18px;
  font-size: 14px;
}

.time {
  font-size: 13px;
  color: #999;
}

.button {
  padding: 0;
  float: right;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
