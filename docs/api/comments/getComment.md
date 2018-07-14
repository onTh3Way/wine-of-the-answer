-----------

#### 功能

> 获取指定评论信息

#### 接口

> GET  /api/v1/comments/{commentId}

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------|
|author| object | 评论者信息 |
|createDate | timestamp | 发布日期 |
|content | string | 内容 |
|agreeCount | int | 点赞次数 |
|disagreeCount| int | 踩次数 |
|reliesCount | int | 回复次数 |

#### 响应：
##### 获取成功: 200
JSON
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
       disagreeCount: 100,
       reliesCount: 200
    }
```
##### 评论者被冻结且权限不足: 403
##### 评论不存在: 404
