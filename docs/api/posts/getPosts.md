-----------

#### 功能

> 获取帖子列表

#### URL

> GET /api/posts?sort=date&part=study&offset=0&limit=5

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|part| true | string | | 所在分区|
|offset| false| int| 0| 从第几个开始获取|
|limit| false| int| 10| 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
| dataList | Array\<post> | 帖子列表 |
| total | int | 帖子总数 |

#### 响应
##### 获取成功: 200
JSON
```
    {
        dataList: [{
               postId: 'pid',
               userId: 'uid',
               nickname: 'phantom',
               avatar: 'blbla.png',
               date: 123213123123,
               content: 'test content',
               likeCount: 100,
               commentCount: 200
        }],
        total: 5000
    }
```
##### 参数不合法: 400
