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
|state | int |返回结果状态。0：正常；1：授权过期,请重新授权; 2: 冻结; 3: 永久冻结|
|以下字段只有state为0才返回|
|id | string | 用户id
|nickname | string | 昵称 |
|headimgurl | string | 头像地址,用户无头像时此项为空 |

#### 接口示例

> 地址：http://www.api.com/users/exampleCode

{ <br>
"state": 0, <br>
"id": "exampleId", <br>
"nickname": "phantom", <br>
"headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/sXcfQTEvTpZibKM5YxgFz59nk6mtgrpSVk6iaVvsx7GRSYaWzRohsmYiaMv7YpwQFdSUtF5pmvCEkkrAwog2yKDlQ/132" <br>
}

-------------

