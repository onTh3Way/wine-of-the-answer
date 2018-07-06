-----------

#### 接口功能

> 举报指定帖子

#### URL

> http://www.api.com/posts/{postId}

#### 支持格式

> JSON

#### HTTP请求方式

> POST

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string| 帖子id|
|userId |true |string| 举报者id|
|reason |true |string| 举报原因|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：举报成功; 1: 帖子不存在,举报失败; 2: 参数不正确;|

#### 接口示例
```js
axios
  .post('http://www.api.com/posts/id', {postId: 2, reason: '侮辱', userId: 4})
  .then(res => {
    console.log(res.data) // { state: 0 }
  })
```
