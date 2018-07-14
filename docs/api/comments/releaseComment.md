-----------

#### 功能

> 发表评论

#### 接口

> POST  /api/v1/posts/{postId}/comments

#### 请求参数(JSON)

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|content |true |string|内容|
|anonymous |true |boolean|是否匿名|

#### 响应：
##### 创建成功: 201
##### 参数不合法: 400
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
##### 帖子不存在: 404


