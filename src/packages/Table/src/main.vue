<template>
  <div class="tableBox" :style="table.style" >
    <div>
      <el-table
        ref="table"
        :data="table.data"
        :stripe='table.stripe'
        :border='table.border'
        :height='table.height'
        :size='table.size'
        :fit='table.fit'
        :max-height='table.maxHeight'
        :resizable='table.resizable'
        :highlight-current-row='table.highlightCurrentRow'
        :show-header='table.showHeader'
        :empty-text='table.emptyText'
        :row-class-name='table.rowClassName'
        :cell-class-name='table.cellClassName'
        :tooltip-effect='table.tooltipEffect'
        :show-summary='table.showSummary'
        :summary-method='table.summaryMethod'
        :sum-text='table.sumText'
        :span-method='table.spanMethod'
        :row-style='table.rowStyle'
        :cell-style='table.cellStyle'
        :header-row-style='table.headerRowStyle'
        :header-row-class-name='table.headerRowClassName'
        :header-cell-class-name='table.headerCellClassName'
        :header-cell-style='table.headerCellStyle'
        :default-expand-all='table.expandAll'
        @select="select"
        @select-all='selectAll'
        @selection-change="selectionChange"
        @cell-mouse-enter='mouseHover'
        @cell-mouse-leave='mouseLeave'
        @cell-click='cellClick'
        @cell-dblclick='cellDblclick'
        @row-click='rowClick'
        @row-contextmenu='rowContextmenu'
        @row-dblclick='rowDblclick'
        @header-click='headerClick'
        @header-contextmenu='headerContextmenu'     
        @current-change='currentChange'
        @header-dragend='headerDragend'
        @expand-change='expandChange'
      >   
          <!-- 展开详情 -->
          <el-table-column type="expand"
            v-if="table.collapse"
            :fixed='table.collapse.fixed'>
            <template slot-scope="props">
              <el-form :label-position="table.collapse.labelPosition" :class="collapseClass">
                <el-form-item 
                  v-for='(i,index) in table.collapse.label'
                  :key='index'
                  :label="i"
                >
                  <span>{{props.row[table.collapse.prop[index]]}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <!-- 多选框 -->
          <el-table-column
            v-if="table.selection"
            type="selection"
            :width="table.selection.width"
            :min-width='table.selection.minWidth'
            :fixed='table.selection.fixed'
            :align='table.selection.align || table.align'
            :header-align='table.selection.headerAlign || table.headerAlign'>
          </el-table-column>
          <!-- 序号 -->
          <el-table-column 
              v-if="table.number"
              :label='table.number.label'
              type="index"
              :index='table.number.index'
              :width='table.number.width'
              :min-width='table.number.minWidth'
              :fixed='table.number.fixed'
              :align='table.number.align || table.align'
              :header-align='table.number.headerAlign || table.headerAlign'>
          </el-table-column>
          <!-- 表格内容 -->
          <el-table-column
              v-for='(i,index) in table.column'
              :key='index'
              :prop='i.prop'
              :label='i.label'
              :width='i.width'
              :min-width='i.minWidth'
              :render-header='i.renderHeader'
              :show-overflow-tooltip='i.showOverflowTooltip || table.showOverflowTooltip'
              :label-class-name='i.labelClassName'
              :class-name='i.className'
              :fixed='i.fixed'
              :align='i.align || table.align'
              :header-align='i.headerAlign || table.headerAlign'
              :formatter='i.formatter'
              :resizable='i.resizable'>
             <!-- <template slot-scope="scope">
              <a :href="'http://'+ scope.row"
                target="_blank"
              >{{scope.row}}</a>
            </template> -->
          </el-table-column>
          <!-- 操作 -->
          <el-table-column
            v-if="table.console"
            :fixed="table.console.fixed || 'right'"
            :label="table.console.label || '操作'"
            :width="table.console.width"
            :min-width="table.console.minWidth"
            :align='table.console.align || table.align'
            :header-align='table.console.headerAlign || table.headerAlign'
            >
            <template slot-scope="scope">
              <el-button           
                :class="i.label ? '' : 'clearBtn'"
                v-for="(i,index) in table.console.button"
                :key="index"              
                :type="i.type"
                :size="i.size"
                :icon='i.icon'
                @click.native.prevent="i.callback(scope.$index, pagination.show ? pageData : table.data)"
                >
                  <template v-if="i.label">
                    {{i.label}}
                  </template>
                </el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>  
    <div 
      v-if="pagination.show"
      :style="pagination.style">
      <el-pagination         
          :small='pagination.small'
          :background='pagination.background'
          :page-size="pagination.pageSize"
          :pageSizes='pagination.pageSizes'
          :total="pagination.total"
          :page-count="pagination.pageCount"
          :pager-count='pagination.pagerCount'
          :currentPage='pagination.currentPage'
          :layout='pagination.layout'
          :popper-class='pagination.popperClass'
          :prev-text='pagination.prevText'
          :next-text='pagination.nextText'
          :disabled='pagination.disabled'
          @size-change='sizeChange'
          @current-change='currentChange_'
          @prev-click='prevClick'
          @next-click='nextClick'
      >
      </el-pagination>
    </div>
    <div v-if="table.export === true"  style="margin-top:10px;">
      <el-button @click="exportTable">
        <a ref="href">导出当前表格</a>
      </el-button>
    </div>
   </div>
</template>

<script>
var end
export default {
  name: 'GlTable',
  props: {
    table: {
      type: Object,
      default: _ => {
        return {}
      },
      required: true
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          show: false
        }
      }
    }
  },
  data() {
    return {
      pageData: [],
      headerContextmenu: this.table.headerContextmenu === undefined ? () => null : this.table.headerContextmenu,
      headerClick: this.table.headerClick === undefined ? () => null : this.table.headerClick,
      rowDblclick: this.table.rowDblclick === undefined ? () => null : this.table.rowDblclick,
      rowContextmenu: this.table.rowContextmenu === undefined ? () => null : this.table.rowContextmenu,
      rowClick: this.table.rowClick === undefined ? () => null : this.table.rowClick,
      cellDblclick: this.table.cellDblclick === undefined ? () => null : this.table.cellDblclick,
      cellClick: this.table.cellClick === undefined ? () => null : this.table.cellClick,
      mouseLeave: this.table.cellMouseLeave === undefined ? () => null : this.table.cellMouseLeave,
      mouseHover: this.table.cellMouseEnter === undefined ? () => null : this.table.cellMouseEnter,
      select: this.table.select === undefined ? () => null : this.table.select,
      selectAll: this.table.selectAll === undefined ? () => null : this.table.selectAll,
      selectionChange: this.table.selectionChange === undefined ? () => null : this.table.selectionChange,
      currentChange: this.table.currentChange === undefined ? () => null : this.table.currentChange,
      headerDragend: this.table.headerDragend === undefined ? () => null : this.table.headerDragend,
      expandChange: this.table.expandChange === undefined ? () => null : this.table.expandChange,
      pageSize: this.pagination.pageSize === undefined ? 10 : this.pagination.pageSize,
      sizeChange: this.pagination.sizeChange === undefined ? this._sizeChange : this.pagination.sizeChange,
      currentChange_: this.pagination.currentChange === undefined ? this._currentChange : this.pagination.currentChange,
      prevClick: this.pagination.prevClick === undefined ? _ => null : this.pagination.prevClick,
      nextClick: this.pagination.nextClick === undefined ? _ => null : this.pagination.nextClick
    }
  },
  computed: {
    collapseClass() {
      return this.table.collapse.className === undefined ? 'gl-collapse' : this.table.collapse.className
    }
  },
  methods: {
    exportTable() {
      let table = "<html><head><meta charset='utf-8' /></head><body>" + this.$refs.table.$el.children[1].children[0].outerHTML +this.$refs.table.bodyWrapper.children[0].outerHTML + "</body></html>"
      let blob = new Blob([table], { type: "application/vnd.ms-excel" })
      this.$refs.href.href = URL.createObjectURL(blob)
      this.$refs.href.download = '表格.xls'
    },
    _sizeChange(val) {
      this.pageSize = val
      this._currentChange(this.pagination.currentPage || 1)
    },
    _currentChange(val) {
      this.pagination.currentPage = val
      this.pageChangeFun(this.table.data)
    },
    pageChangeFun(list) {
      end = this.pagination.currentPage * this.pageSize
      this.pageData = []
      for (let start = (this.pagination.currentPage - 1) * this.pageSize; start < end; start++) {
        if (list[start]) {
          this.pageData.push(list[start])
        }
      }
    },
    setData() {
      if (this.pagination.show) {
        // this.pagination.total = this.table.data.length
        if (this.pagination.total > this.pageSize) {
          for (let i = 0; i < this.pageSize; i++) {
            this.pageData.push(this.table.data[i])
          }
        } else {
          this.pageData = this.table.data
        }
      }
    }
  },
  mounted() {
    setTimeout(_ => {
      if(this.pageData.length === 0 && this.pagination.show) {
        this.setData()
      }
    },1000)
  }
}
</script>

<style> 
  .gl-collapse .el-form-item {
    display: inline-block;
    margin-right: 0;
    width: 50%;
  }
    .gl-collapse .el-form-item .el-form-item__content{
      color: red;
      font-weight: 700;
    }
  /* .tableBox ::-webkit-scrollbar {
    width: 17px;
    background-color: #fff;
    border-radius: 8px;
  }
  .tableBox ::-webkit-scrollbar-thumb {
    background-color: #409EFF;
    border-radius: 8px;
  } */
</style>

