-----------

#### 功能

> 获取用户信息

#### URL

> GET /api/users/{userId}

#### 返回字段
|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|nickname | string | 用户名 |
|avatar | string | 头像地址,用户无头像时此项为空 |

#### 响应：
##### 成功：200 <br>
响应格式：JSON
```
    {
       nickname: 'phantom',
       avatar: 'blbla.png'
    }
```
##### 权限不足: 401
##### 用户不存在: 404
##### 账号被冻结: 460
响应格式：JSON
```
    {
       nickname: 'phantom',
       avatar: 'blbla.png',
       time: 111111 // 冻结截止时间
    }
```
