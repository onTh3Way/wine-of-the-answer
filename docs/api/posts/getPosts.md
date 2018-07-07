-----------

#### 功能

> 获取帖子列表

#### URL

> GET /api/posts?sort=date&part=study&offset=0&limit=5

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|userId| false | string | | 用户id, 如果有此日期排序字段则返回指定用户的烦恼列表|
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|part| true | string | | 所在分区|
|offset| true| int| | 从第几个开始获取|
|limit| true| int| | 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
| | Array\<post> | 帖子列表 |
|dataList | Array\<post> | 帖子列表 |

#### 响应
##### 获取成功: 200
JSON
```
    {
        dataList: [{
               postId: 'uuid',
               nickname: 'phantom',
               avatar: 'blbla.png',
               date: 123213123123,
               content: 'test content',
               likeTimes: 100,
               commentTimes: 200
        }]
    }
```
##### 参数不正确: 400
##### 用户不存在: 404
