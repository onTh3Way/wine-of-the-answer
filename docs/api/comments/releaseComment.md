-----------

#### 功能

> 发表评论

#### 接口

> POST  /api/comments

#### 请求参数(JSON)

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|userId |true |string|用户id|
|postId |true |string|帖子id|
|content |true |string|评论内容|
|anonymous |true |boolean|是否匿名|

#### 响应：
##### 创建成功: 201
##### 参数不合法(如userId等为空): 400
##### 权限不足(被冻结或userId不是自己的): 401
##### 用户未同意协议: 460
##### 用户被冻结: 461


