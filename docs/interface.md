# Interface

接口结构

```json
{
    "status": 0, // 0 成功, 1 error
    "data": "",
    "message": "success" // 提示信息
}
```

## 注册

POST: /api/sign-up

入参:

```json
user_name: 'jane',
password: '23456789',
email: '' 
```

返回:

```json
{
    "status": 0,
    "data": "success",
    "message": "" // 成功返回 success, 失败返回错误原因, 如用户名重复
}
```

## 登陆

POST: /api/login

入参

```json
user_name: "",
password: ""
```

返回

```json
{
    "status": 0, // 0 登陆成功, 1 error
    "data": null,
    "message": "success" // 提示信息
}
```

## 密码列表

GET: /api/password/list?query=taobao

返回

```json
{
    "status": 0, // 0 登陆成功, 1 error
    "data": {
        "list": [{
            "id": "", 
            "website": "qq",
            "url": "",
            "user_name": "jane",
            "password": "125432",
            "phone": "1234567",
            "email": "jane@qq.com",
            "other": "" // 其他
        }],
        "page_info": {
            "page_no": 1,
            "page_size": 10,
            "total": 100
        }
    },
    "message": "success" // 提示信息
}
```

## 新增密码

POST: /api/password/add

入参

```json
{
    "website": "qq",
    "user_name": "jane",
    "password": "125432",
    "phone": "1234567",
    "email": "jane@qq.com",
    "other": "" // 其他
}
```

返回

```json
{
    "status": 0, // 0 登陆成功, 1 error
    "data": null,
    "message": "success" // 提示信息
}
```


## 编辑密码

POST: /api/password/edit

入参

```json
{
    "id": "",
    "website": "qq",
    "user_name": "jane",
    "password": "125432",
    "phone": "1234567",
    "email": "jane@qq.com",
    "other": "" // 其他
}
```

返回

```json
{
    "status": 0, // 0 操作成功, 1 error
    "data": null,
    "message": "success" // 提示信息
}
```
