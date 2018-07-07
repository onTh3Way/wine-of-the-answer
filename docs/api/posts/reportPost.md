-----------

#### 功能

> 举报指定帖子

#### URL

> POST api/posts/{postId}

#### 请求参数(JSON)

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|postId |true |string| 帖子id|
|userId |true |string| 举报者id|
|reason |true |string| 举报原因|


#### 响应
##### 举报成功: 200
##### 举报原因不可为空: 400
##### 帖子不存在: 404

