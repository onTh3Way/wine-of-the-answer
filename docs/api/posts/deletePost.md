-----------
# 管理员专属
#### 功能

> 删除指定的帖子

#### 接口

> DELETE /api/posts/{postId}

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string|帖子id|


#### 响应：
##### 删除成功：200
##### 权限不足: 401
##### 帖子不存在: 404
