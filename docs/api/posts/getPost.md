-----------

#### 接口功能

> 获取指定烦恼信息

#### URL

> http://www.api.com/posts/{postId}

#### 支持格式

> JSON

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string|帖子id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：正常；1: 目标已被删除或不存在;|
|postId| string | 帖子id |
|nickname | string | 用户名 |
|avatar | string | 用户头像链接 |
|date | timestamp | 发布日期 |
|content | string | 帖子内容 |
|likeTimes | int | 点赞次数 |
|commentTimes | int | 评论次数 |

#### 接口示例
```js
axios
  .get('http://www.api.com/posts/exampleID')
  .then(res => {
    console.log(res.data)
    {
        state: 0,
        postId: 1,
        nickname: 'phantom',
        avatar: 'http://avatar.com',
        date: 1113213123,
        likeTimes: 100,
        commentTimes: 122
    }
  })
```

