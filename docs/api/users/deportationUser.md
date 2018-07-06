-----------
# 管理员专属
#### 接口功能

> 永久冻结用户

#### URL

> http://www.api.com/users/{userId}

#### 支持格式

> JSON

#### HTTP请求方式

> DELETE

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|userId |true |string| 用户id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0: 冻结成功; 1: 用户不存在; 2: 权限不足;|

#### 接口示例
```js
axios
  .delete('http://www.api.com/users/exampleID')
  .then(res => {
    console.log(res.data) // {state: 0}
  })
```

