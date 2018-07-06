-----------
# 管理员专属
#### 接口功能

> 删除指定的帖子

#### URL

> http://www.api.com/posts/{postId}

#### 支持格式

> JSON

#### HTTP请求方式

> DELETE

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string|帖子id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：删除成功；1: 目标已被删除或不存在; 2: 权限不足;|

#### 接口示例
```js
axios
  .delete('http://www.api.com/troubles/exampleID')
  .then(res => {
    console.log(res.data) // {state: 0}
  })
```

