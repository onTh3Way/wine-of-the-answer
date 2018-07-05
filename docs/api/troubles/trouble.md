-----------

#### 接口功能

> 获取烦恼列表

#### URL

> http://www.api.com/troubles

#### 支持格式

> JSON

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|默认值|说明|
|:----- |:-------|:-----|:-----|----- |
|sort |false |string|hot|排序方式, 'date'日期排序, 'hot'热门排序|
|part| true | string | | 所在分区|
|||||

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|state | int |返回结果状态。0：正常；1：授权过期,请重新授权; 2: 冻结; 3: 永久冻结|
|nickname | string | 昵称 |
|headimgurl | string | 头像地址,用户无头像时此项为空 |

#### 接口示例

> 地址：http://www.api.com/users/exampleCode

{ <br>
"state": 0, <br>
"nickname": "phantom", <br>
"headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/sXcfQTEvTpZibKM5YxgFz59nk6mtgrpSVk6iaVvsx7GRSYaWzRohsmYiaMv7YpwQFdSUtF5pmvCEkkrAwog2yKDlQ/132" <br>
}

-------------

