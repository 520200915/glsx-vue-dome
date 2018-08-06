<template>
    <div class="box">
        <h2>Icon 图标</h2>
        <p>提供了一套常用的图标集合。</p>
        <h3>使用方法</h3>
        <p>直接通过设置类名为 el-icon-iconName 来使用即可。例如：</p>
        <Code class="dome-icon">
            <template slot="source">
                <i class="el-icon-edit"></i>
                <i class="el-icon-share"></i>
                <i class="el-icon-delete"></i>
                <gl-button type="primary" icon="el-icon-search">搜索</gl-button>
            </template>
            <template slot="highlight">
                <pre><code class="hljs language-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">gl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">gl-button</span>&gt;</span>
                </code></pre>
            </template>
        </Code>
        <h3>图标集合</h3>
        <ul class="icon-list">
            <li v-for="i in list" :key="i">
                <span>
                    <i :class="i"></i>
                    <span class="icon-name">{{i}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Icon',
    data () {
      return {
          list: [
                'el-icon-info',
                'el-icon-error',
                'el-icon-success',
                'el-icon-warning',
                'el-icon-question',
                'el-icon-back',
                'el-icon-arrow-left',
                'el-icon-arrow-down',
                'el-icon-arrow-right',
                'el-icon-arrow-up',
                'el-icon-caret-left',
                'el-icon-caret-bottom',
                'el-icon-caret-top',
                'el-icon-caret-right',
                'el-icon-d-arrow-left',
                'el-icon-d-arrow-right',
                'el-icon-minus',
                'el-icon-plus',
                'el-icon-remove',
                'el-icon-circle-plus',
                'el-icon-remove-outline',
                'el-icon-circle-plus-outline',
                'el-icon-close',
                'el-icon-check',
                'el-icon-circle-close',
                'el-icon-circle-check',
                'el-icon-circle-close-outline',
                'el-icon-circle-check-outline',
                'el-icon-zoom-out',
                'el-icon-zoom-in',
                'el-icon-d-caret',
                'el-icon-sort',
                'el-icon-sort-down',
                'el-icon-sort-up',
                'el-icon-tickets',
                'el-icon-document',
                'el-icon-goods',
                'el-icon-sold-out',
                'el-icon-news',
                'el-icon-message',
                'el-icon-date',
                'el-icon-printer',
                'el-icon-time',
                'el-icon-bell',
                'el-icon-mobile-phone',
                'el-icon-service',
                'el-icon-view',
                'el-icon-menu',
                'el-icon-more',
                'el-icon-more-outline',
                'el-icon-star-on',
                'el-icon-star-off',
                'el-icon-location',
                'el-icon-location-outline',
                'el-icon-phone',
                'el-icon-phone-outline',
                'el-icon-picture',
                'el-icon-picture-outline',
                'el-icon-delete',
                'el-icon-search',
                'el-icon-edit',
                'el-icon-edit-outline',
                'el-icon-rank',
                'el-icon-refresh',
                'el-icon-share',
                'el-icon-setting',
                'el-icon-upload',
                'el-icon-upload2',
                'el-icon-download',
                'el-icon-loading'
          ]
      }
    }
  }
  
</script>

<style scoped>
    .dome-icon .source>i{
        color: #606266;
        margin: 0 20px;
        font-size: 1.5em;
        vertical-align: middle;
    }
    .demo-icon .source>button{
        margin: 0 20px;
    }
    ul.icon-list{
        overflow: hidden;
        list-style: none;
        padding: 0;
        border: 1px solid #eaeefb;
        border-radius: 4px;
    }
    ul.icon-list li{
        float: left;
        width: 16.66%;
        text-align: center;
        height: 120px;
        line-height: 120px;
        color: #666;
        font-size: 13px;
        transition: color .15s linear;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-right: -1px;
        margin-bottom: -1px;
    }
    ul.icon-list li span{
        display: inline-block;
        line-height: normal;
        vertical-align: middle;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        color: #99a9bf;
    }
    ul.icon-list li i{
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
    }
    .icon-list li .icon-name{
        display: inline-block;
        padding: 0 3px;
        height: 1em;
        color: #606266;
    }
</style>
