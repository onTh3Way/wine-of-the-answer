-----------

#### 功能

> 获取资源列表

#### URL

> GET /api/v1/{posts || comments || replies}?sort=date&offset=0&limit=10

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|sort |false |string|hot|排序方式, 'date' 日期排序, 'hot'热门排序|
|offset| false| int| 0| 从第几个开始获取|
|limit| false| int| 10| 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
| data | Array\<object> | 资源列表 |
| total | int | 资源总数 |

#### 响应
##### 获取成功: 200
JSON
```
    {
        data: [{
         id: 1,
	       author: {
	        userId: 22,
	        nickname: 'blab', // 如果匿名,此项固定填写 匿名用户
	        avatar: 'fake.png' // 如果匿名,此项固定为匿名图片
	       },
	       replyToAuthor: {}, // 如果为replies的话,加上此项
	       createDate: 123213123123,
	       content: 'test content',
	       agreeCount: 100,
	       disagreeCount: 200,
	       commentCount: 200
        }],
        total: 5000
    }
```
##### 参数不合法: 400
