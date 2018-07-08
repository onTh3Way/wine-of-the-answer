-----------

#### 功能

> 获取指定帖子信息

#### URL

> GET /api/posts/{postId}

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|userId | string | 发帖者id |
|nickname | string | 用户名 |
|avatar | string | 用户头像链接 |
|date | timestamp | 发布日期 |
|content | string | 帖子内容 |
|likeCount | int | 点赞次数 |
|commentCount | int | 评论次数 |

#### 响应：
##### 获取成功：200
响应格式：JSON
```
    {
       userId: 'uid',
       nickname: 'phantom',
       avatar: 'blbla.png',
       date: 123213123123,
       content: 'test content',
       likeCount: 100,
       commentCount: 200
    }
```
##### 用户被冻结且权限不足: 401
##### 帖子不存在: 404


