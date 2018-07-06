-----------

#### 接口功能

> 用户同意条款

#### URL

> http://www.api.com/protocol/{userId}

#### 支持格式

> JSON

#### HTTP请求方式

> POST

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|userId |true |string| 用户id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0: 已同意条款；1：用户不存在;|

#### 接口示例
```js
axios
  .post('http://www.api.com/protocol/id')
  .then(res => {
    console.log(res.data) // {state: 0}
  })
```

