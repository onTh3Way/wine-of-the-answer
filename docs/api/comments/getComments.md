-----------

#### 功能

> 获取指定帖子评论列表

#### URL

> GET /api/v1/posts/{postId}/comments?sort=date&offset=0&limit=5

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|offset| false| int| 0 | 从第几个开始获取|
|limit| false| int| 5 | 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|data | Array\<comment> | 数据列表 |
|total | int | 总数量 |

#### 响应
##### 获取成功: 200
JSON
```
    {
        data: [{
          commentId: 'cid',
          // 其他数据同getComment
        }],
        total: 4000
    }
```
##### 参数不正确: 400
##### 帖子不存在: 404
