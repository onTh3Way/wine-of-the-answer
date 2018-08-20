# BottomDialog - 底部弹出框
## 继承于BaseModal

#### slot(可用插槽)
|属性值|说明|
|:----- |:------|
| title | 标题 |
| options | 选项 |

#### 使用方法
```js
<template>
  <bottom-dialog ref="modal">
    <template slot="title">
    	标题
    </template>
    <template slot="options">
      <div>选项1</div>
      <div>选项2</div>
      <div data-role="cancel">取消</div>
    </template>
  </bottom-dialog>
<template>

<script>
  import {BottomDialog} from 'components'

  export default {
    components: {BottomDialog},
    methods: {
      showModal() { this.$refs.modal.show() }
      hideModal() { this.$refs.modal.hide() }
    }
  }
</script>
```