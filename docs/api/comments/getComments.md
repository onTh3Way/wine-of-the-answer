-----------

#### 功能

> 获取帖子列表

#### URL

> GET /api/comments?postId=id&sort=date&offset=0&limit=5

#### 请求参数(queryString)

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|postId| true | string | | 帖子id|
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|offset| true| int| | 从第几个开始获取|
|limit| true| int| | 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|dataList | Array\<post> | 帖子信息 |

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
