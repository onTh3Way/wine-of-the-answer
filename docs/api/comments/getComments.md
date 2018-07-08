-----------

#### 功能

> 获取评论列表

#### URL

> GET /api/comments?postId=id&sort=date&offset=0&limit=5

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|postId| true | string | | 帖子id|
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|offset| false| int| 0 | 从第几个开始获取|
|limit| false| int| 5 | 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|dataList | Array\<comment> | 评论信息 |
|total | int | 评论总数量 |

#### 响应
##### 获取成功: 200
JSON
```
    {
        dataList: [
         {
		       commentId: 'cid',
		       userId: 'uId',
		       nickname: 'phantom',
		       avatar: 'blbla.png',
		       date: 123213123123,
		       content: 'test content',
		       agreeNum: 100,
		       disagreeNum: 100,
		       commentNum: 200
         }
        ],
        total: 4000
    }
```
##### 参数不正确: 400
##### 发帖者被冻结且权限不足: 401
##### 帖子不存在: 404
