-----------

#### 功能

>

#### 接口

> GET  /api/comments/{commentId}?postId=id

#### 请求参数(queryString)

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string|帖子Id|

#### 响应：
##### 获取成功: 200
JSON
```
    {
       comment: 'uuid',
       nickname: 'phantom',
       avatar: 'blbla.png',
       date: 123213123123,
       content: 'test content',
       likeTimes: 100,
       commentTimes: 200
    }
```
##### 评论或帖子不存在: 404
