-----------

#### 功能

> 获取指定评论信息

#### 接口

> GET  /api/comments/{commentId}

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------|
|postId| string | 所属帖子id |
|userId| string | 评论者id |
|nickname | string | 用户名 |
|avatar | string | 用户头像链接 |
|date | timestamp | 发布日期 |
|content | string | 评论内容 |
|agreeNum | int | 点赞次数 |
|disagreeNum | int | 踩次数 |
|commentNum | int | 评论次数 |

#### 响应：
##### 获取成功: 200
JSON
```
    {
       postId: 'pid',
       userId: 'uId',
       nickname: 'phantom',
       avatar: 'blbla.png',
       date: 123213123123,
       content: 'test content',
       agreeNum: 100,
       disagreeNum: 100,
       commentNum: 200
    }
```
##### 评论者被冻结且权限不足: 401
##### 评论不存在: 404
