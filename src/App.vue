<template>
  <div id="app" class="is-component">
    <gl-header :height='"100px"'>
      <div>
        <div class="img"><img src="@/img/logo.png"></div>
        <h1><b v-html="title"></b><span style="color: #409eff">{{header}}</span></h1> 
      </div>
    </gl-header>
    <div class="app-main">
      <el-scrollbar class="page-component__scroll">
        <div class="layout">
          <gl-container>   
            <gl-container class="container">
              <gl-aside class="aside" :width='"270px"'>
                <el-scrollbar style="height: 100%;">
                  <div class="nav-group" v-for="(i, index) in data" :key="index">
                    <div class="nav-group__title">{{i.title}}</div>
                    <ul class="pure-menu-list">
                      <li v-for="(k, ind) in i.list" :key="ind" @click='goTop'>
                        <router-link :to="'/' + k.link" ref="list">{{k.text}}</router-link>
                      </li>
                    </ul>
                  </div>
                </el-scrollbar>
              </gl-aside>
              <gl-main class="main">
                <router-view></router-view>
              </gl-main>
            </gl-container>
            <div class="goTop" @click="goTop" v-show="show">
                <i class="el-icon-caret-top"></i>
            </div>
          </gl-container>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
      title: this.$route.path.replace(/[/]/g,'').length === 0 ? 'Vue组件' : 'Vue组件 - ',
      header: this.$route.path.replace(/[/]/g,''),
      data: [
        {
          title: '开发指南',
          list: [
            { text: '安装与引入', link: 'Installation' }
          ]
        },
        {
          title: 'Basic',
          list: [
            { text: 'Layout 布局', link: 'Layout' },
            { text: 'Container 布局容器', link: 'Container' },
            { text: 'Icon 图标', link: 'Icon' },
            { text: 'Button 按钮', link: 'Button' }
          ]
        },
        {
          title: 'Data',
          list: [
            { text: 'Table 表格', link: 'Table' },
            { text: 'Tag 标签', link: 'Tag' },
            { text: 'Progress 进度条', link: 'Progress' },
            { text: 'Tree 树形控件', link: 'Tree' },
            { text: 'Pagination 分页', link: 'Pagination' },
            { text: 'Badge 标记', link: 'Badge' }
          ]
        },
        {
          title: 'Notice',
          list: [
            { text: 'Alert 警告', link: 'Alert' },
            { text: 'Loading 加载', link: 'Loading' },
            { text: 'Message 消息提示', link: 'Message' },
            { text: 'MessageBox 弹框', link: 'MessageBox' },
            { text: 'Notification 通知', link: 'Notification' }
          ]
        },
        {
          title: 'Navigation',
          list: [
            { text: 'NavMenu 导航菜单', link: 'Menu' },
            { text: 'Tabs 标签页', link: 'Tabs' },
            { text: 'Breadcrumb 面包屑', link: 'Breadcrumb' },
            { text: 'Dropdown 下拉菜单', link: 'Dropdown' },
            { text: 'Steps 步骤条', link: 'Steps' }
          ]
        },
        {
          title: 'Others',
          list: [
            { text: 'Dialog 对话框', link: 'Dialog' },
            { text: 'Tooltip 文字提示', link: 'Tooltip' },
            { text: 'Popover 弹出框', link: 'Popover' },
            { text: 'Card 卡片', link: 'Card' },
            { text: 'Carousel 走马灯', link: 'Carousel' },
            { text: 'Collapse 折叠面板', link: 'Collapse' }
          ]
        },
        {
          title: 'Form',
          list: [
            { text: 'Radio 单选框', link: 'Radio' },
            { text: 'Checkbox 多选框', link: 'Checkbox' },
            { text: 'Input 输入框', link: 'Input' },
            { text: 'InputNumber 计数器', link: 'InputNumber' },
            { text: 'Select 选择器', link: 'Select' },
            { text: 'Cascader 级联选择器', link: 'Cascader' },
            { text: 'Switch 开关', link: 'Switch' },
            { text: 'Slider 滑块', link: 'Slider' },
            { text: 'TimePicker 时间选择器', link: 'TimePicker' },
            { text: 'DatePicker 日期选择器', link: 'DatePicker' },
            { text: 'DateTimePicker 日期时间选择器', link: 'dateTimePicker' },
            { text: 'Upload 上传', link: 'Upload' },
            { text: 'Rate 评分', link: 'rate' },
            { text: 'ColorPicker 颜色选择器', link: 'ColorPicker' },
            { text: 'Transfer 穿梭框', link: 'Transfer' },
            { text: 'Form 表单', link: 'Form' }
          ]
        }
      ]
    }
  },
  methods: {
    goTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  },
  mounted() {   
    window.onscroll = _ => {
      document.documentElement.scrollTop > window.screen.availHeight/2 ? this.show = true : this.show = false
    }
  },
  watch: {
    '$route.path'(val) {
      this.header =  val.replace(/[/]/g,'')
      this.title = val.replace(/[/]/g,'').length === 0 ? 'Vue组件' : 'Vue组件 - '
    }
  }
}
</script>
<style scoped>
#app.is-component{
  height: 100%;
  overflow-y: hidden;
}
  .app-main{
    padding: 0;
    margin-top: 0;
    height: 100%;
    min-height: auto;
    box-sizing: border-box;
  }
  .page-component__scroll {
    height: 100%;
    margin-top: 100px;
  }
  .page-component__scroll .el-scrollbar__wrap {
      overflow-x: auto;
  }
  #app .el-header{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2001;
    background: #fff;
    text-align: center;
  }
    #app .el-header>div{
      width: 1240px;
      height: 100%;
      margin: 0 auto;
    }
  #app .el-header .img{
    width: 270px;
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding: 20px 25px 25px;
  }
   #app .el-header .img img{
     width: 100%;
   }
  .layout{
    max-width: 1240px;
    margin: 0 auto;
  }
  h1{
    display: inline-block;
    text-align: center;
    height: 100px;
    line-height: 100px;
    font-size: 35px;
    letter-spacing: 5px;
    color: #4D4D4D;
  }
  .aside{
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 100px;
    margin-bottom: -17px;
    overflow-x:auto;
  }
  .nav-group:last-of-type{
    padding-bottom: 50px;
  }
  .main{
    margin-left:270px;
  }
   
  .nav-group__title{
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }
  .pure-menu-list  li{
    list-style-type: none;
  }
  .pure-menu-list li a{
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
  }
  .pure-menu-list li .router-link-active{
    color: #409eff;
  }
  .goTop{
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 5;
  }
  .goTop i{
    color: #409eff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
</style>
