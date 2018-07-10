-----------

#### 功能

> 获取指定评论信息

#### 接口

> GET  /api/comments/{commentId}

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------|
|postId| string | 所属帖子id |
|author| object | 评论者信息 |
|createDate | timestamp | 发布日期 |
|content | string | 评论内容 |
|agreeCount | int | 点赞次数 |
|disagreeCount| int | 踩次数 |
|commentCount | int | 评论次数 |

#### 响应：
##### 获取成功: 200
JSON
```
    {
       // 如果匿名
       author: {
         userId: 'cid'
       },
       // 否则
       author: {
         userId: 'cid',
         nickname: 'blbb',
         avatar: 'blb.png'
       },
       postId: 'pid',
       createDate: 123213123123,
       content: 'test content',
       agreeCount: 100,
       disagreeCount: 100,
       commentCount: 200
    }
```
##### 评论者被冻结且权限不足: 401
##### 评论不存在: 404
