import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Installation from '@/components/Installation'
import Container from '@/components/Container'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Radio from '@/components/Radio'
import CheckBox from '@/components/CheckBox'
import Input from '@/components/Input'
import InputNumber from '@/components/InputNumber'
import Select from '@/components/Select'
import Cascader from '@/components/Cascader'
import Switch from '@/components/Switch'
import Slider from '@/components/Slider'
import TimePicker from '@/components/TimePicker'
import DatePicker from '@/components/DatePicker'
import DateTimePicker from '@/components/DateTimePicker'
import Upload from '@/components/Upload'
import Rate from '@/components/Rate'
import ColorPicker from '@/components/ColorPicker'
import Transfer from '@/components/Transfer'
import Form from '@/components/Form'
import Table from '@/components/Table'
import Tag from '@/components/Tag'
import Progress from '@/components/Progress'
import Tree from '@/components/Tree'
import Pagination from '@/components/Pagination'
import Badge from '@/components/Badge'
import Alert from '@/components/Alert'
import Loading from '@/components/Loading'
import Message from '@/components/Message'
import MessageBox from '@/components/MessageBox'
import Notification from '@/components/Notification'
import Menu from '@/components/Menu'
import Tabs from '@/components/Tabs'
import Breadcrumb from '@/components/Breadcrumb'
import Dropdown from '@/components/Dropdown'
import Steps from '@/components/Steps'
import Dialog from '@/components/Dialog'
import Tooltip from '@/components/Tooltip'
import Popover from '@/components/Popover'
import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Collapse from '@/components/Collapse'
const routers = [
  Layout,
  Installation,
  Container,
  Icon,
  Button,
  Radio,
  CheckBox,
  Input,
  InputNumber,
  Select,
  Cascader,
  Switch,
  Slider,
  TimePicker,
  DatePicker,
  DateTimePicker,
  Upload,
  Rate,
  ColorPicker,
  Transfer,
  Form,
  Table,
  Tag,
  Tree,
  Pagination,
  Progress,
  Badge,
  Alert,
  Loading,
  Message,
  MessageBox,
  Notification,
  Menu,
  Tabs,
  Breadcrumb,
  Dropdown,
  Steps,
  Dialog,
  Tooltip,
  Popover,
  Card,
  Carousel,
  Collapse
]
const getRouters = (arr = []) => {
  for (const iterator of routers) {
    arr.push({
      path: `/${iterator.name}`,
      name: iterator.name,
      component: iterator
    })
  }
  return arr
} 
Vue.use(Router)
export default new Router({
  routes: getRouters()
})