-----------
#### 功能

> 踩指定评论

#### 接口

> PUT /api/v1/comments/{commentId}/disagreement

#### 响应：
##### 成功：204
##### 未登录: 401
##### 禁止: 403
JSON
```js
	{
		// 未同意授权
		code: 0
    msg: 'no agree protocol'
    // 账户被冻结
    code: 1
    msg: 'user is frozen'
    // 无效的token
    code: 2
    msg: 'invalid token'
    // 权限不足
    code: 3
    msg: 'no permission'
	}
```
##### 评论不存在: 404

