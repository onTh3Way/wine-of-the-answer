-----------

#### 功能

> 登录

#### URL

> POST /api/v1/wx/sessions/{code}

#### 响应：
##### 成功：200
JSON
```js
  {
    userId: 'uid'
  }
```
##### 用户不存在: 404
