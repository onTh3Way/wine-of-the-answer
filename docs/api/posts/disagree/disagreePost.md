-----------
#### 功能

> 踩指定帖子

#### 接口

> PUT /api/v1/posts/{postId}/disagreement

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

