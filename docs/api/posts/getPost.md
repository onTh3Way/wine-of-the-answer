-----------

#### 功能

> 获取指定帖子信息

#### URL

> GET /api/posts/{postId}

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|author | object | 发帖者信息 |
|createDate | timestamp | 发布日期 |
|content | string | 帖子内容 |
|agreeCount | int | 点赞次数 |
|disagreeCount | int | 踩次数 |
|commentCount | int | 评论次数 |

#### 响应：
##### 获取成功：200
响应格式：JSON
```
    {
       // 如果匿名
       author: {
        userId: 22,
       },
       // 不匿名
       author: {
        userId: 22,
        nickname: 'blab',
        avatar: 'fake.png'
       },
       createDate: 123213123123,
       content: 'test content',
       agreeCount: 100,
       disagreeCount: 200,
       commentCount: 200
    }
```
##### 用户被冻结且权限不足: 401
##### 帖子不存在: 404


