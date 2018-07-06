-----------

#### 接口功能

> 获取烦恼列表

#### URL

> http://www.api.com/posts?sort=date&part=study&offset=0&limit=5

#### 支持格式

> JSON

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|userId| false | string | | 用户id, 如果有此日期排序字段则返回指定用户的烦恼列表|
|sort |false |string|hot|排序方式, 'date', 'hot'热门排序|
|part| true | string | | 所在分区|
|offset| true| int| | 从第几个开始获取|
|limit| true| int| | 获取数量|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：正常；1: 参数不正确;|
|dataList | Array\<post> | 帖子信息 |

#### 接口示例
```js
axios
  .get('http://www.api.com/posts?sort=date&part=study&offset=0&limit=1')
  .then(res => {
    console.log(res.data)
    {
        state: 0,
        dataList: [{
          postId: 1,
          nickname: 'phantom',
          avatar: 'http://avatar.com',
          date: 1113213123,
          likeTimes: 100,
          commentTimes: 122
        }]
    }
  })
```
