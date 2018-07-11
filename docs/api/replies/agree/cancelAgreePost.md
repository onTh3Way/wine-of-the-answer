-----------
#### 功能

> 取消赞同指定回复

#### 接口

> DELETE /api/v1/replies/{replyId}/agreement

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
    // 权限不足
    code: 2
    msg: 'no permission'
	}
```
##### 帖子不存在: 404

