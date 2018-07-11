-----------

#### 功能

> 回复评论

#### 接口

> POST  /api/v1/comments/{commentId}/replies

#### 请求参数(JSON)

|参数|必选 |类型|默认值|说明|
|:----- |:-------|:-----|:----- |:----- |
|senderId |true |string||回复者Id|
|receiverId |false |string||接受者Id|
|content |true |string||内容|
|anonymous |false |boolean|false|是否匿名|

#### 响应：
##### 发布成功：201
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
    // 权限不足
    code: 2
    msg: 'no permission'
	}
```

