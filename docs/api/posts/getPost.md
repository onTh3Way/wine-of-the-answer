-----------

#### 功能

> 获取指定帖子信息

#### URL

> GET /api/posts/{postId}

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string|帖子id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|postId| string | 帖子id |
|nickname | string | 用户名 |
|avatar | string | 用户头像链接 |
|date | timestamp | 发布日期 |
|content | string | 帖子内容 |
|likeTimes | int | 点赞次数 |
|commentTimes | int | 评论次数 |

#### 响应：
##### 获取成功：200
响应格式：JSON
```
    {
       postId: 'uuid',
       nickname: 'phantom',
       avatar: 'blbla.png',
       date: 123213123123,
       content: 'test content',
       likeTimes: 100,
       commentTimes: 200
    }
```
##### 帖子不存在: 404


