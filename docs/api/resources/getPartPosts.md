-----------

#### 功能

> 获取指定分区的帖子列表

#### URL

> GET /api/v1/{part}/posts

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|data | Array\<object> | 数据列表 |
|total | int | 总数 |

#### 响应：
##### 获取成功：200
响应格式：JSON
```
	{
		data: [{
       author: {
        userId: 22,
        nickname: 'blab', // 如果匿名,此项固定填写 匿名用户
        avatar: 'fake.png' // 如果匿名,此项固定为 匿名图片
       },
       createDate: 123213123123,
       content: 'test content',
       agreeCount: 100,
       disagreeCount: 200,
       commentCount: 200
		}]
	}
```
##### 分区不存在: 404