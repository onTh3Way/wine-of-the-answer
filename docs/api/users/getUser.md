-----------

#### 功能

> 获取用户信息

#### URL

> GET /api/users/{code}

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|code |true |string| 用于请求access_token的票据|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|userId | string | 用户id |
|nickname | string | 用户名 |
|avatar | string | 头像地址,用户无头像时此项为空 |

#### 响应：
##### 成功：200 <br>
响应格式：JSON
```
    {
       userId: 'uuid',
       nickname: 'phantom',
       avatar: 'blbla.png'
    }
```
##### 用户不存在: 404
