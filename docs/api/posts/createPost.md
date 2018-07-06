-----------

#### 接口功能

> 创建帖子

#### URL

> http://www.api.com/posts

#### 支持格式

> JSON

#### HTTP请求方式

> POST

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|userId |true |string|用户id|
|content |true |string|烦恼内容|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：创建成功； 1: 用户id不存在, 创建失败; 2: 内容不可为空, 创建失败;|

#### 接口示例
```js
axios
  .post('http://www.api.com/posts', {id: 2, content: '测试内容'})
  .then(res => {
    console.log(res.data) // {state: 0}
  })
```

