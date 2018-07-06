-----------

#### 接口功能

> 获取用户信息

#### URL

> http://www.api.com/users/{code}

#### 支持格式

> JSON

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|code |true |string| 用于请求access_token的票据|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：正常；1: 用户不存在 2:未同意条款; 3: 被冻结; 4: 授权过期|
|userId | string | 用户id |
|nickname | string | 用户名 |
|avatar | string | 头像地址,用户无头像时此项为空 |

#### 接口示例
```js
axios
  .get('http://www.api.com/users/exampleCode')
  .then(res => {
    console.log(res.data)
    {
      state: 0,
      userId: 'id',
      nickname: 'phantom',
      avatar: 'avatar.jpg'
    }
  })
```
