-----------

#### 功能

> 获取帖子列表

#### URL

> GET /api/v1/{part}/posts?sort=date&offset=0&limit=10

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|offset| false| int| 0| 从第几个开始获取|
|limit| false| int| 10| 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
| data | Array\<post> | 帖子列表 |
| total | int | 帖子总数 |

#### 响应
##### 获取成功: 200
JSON
```
    {
        data: [{
          postId: 'pid',
          // 其它同getPost数据
        }],
        total: 5000
    }
```
##### 参数不合法: 400
##### 分区不存在: 404
