-----------

#### 功能

> 获取指定帖子信息

#### URL

> GET /api/v1/posts/{postId}

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
       author: {
        userId: 22,
        nickname: 'blab', // 如果匿名,此项固定填写 匿名用户
        avatar: 'fake.png' // 如果匿名,此项固定为匿名图片
       },
       createDate: 123213123123,
       content: 'test content',
       agreeCount: 100,
       disagreeCount: 200,
       commentCount: 200
    }
```
##### 发帖者被冻结且权限不足: 403
##### 帖子不存在: 404


