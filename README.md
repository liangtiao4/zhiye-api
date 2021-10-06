## 前言

此项目是基于 Node.js express + nodemon + MySQL 实现的[之也（vue3-zhiye）项目](https://github.com/liangtiao4/vue3-zhiye)对应功能的接口。

具有登录、注册、专栏、文章对应的接口。

## 技术栈

Node.js express + nodemon + MySQL

## 说明

> 如果对您对此项目有兴趣，可以点 "Star" 支持一下 谢谢！ ^_^

> 目前该项目尚未达到理想目标，将继续更新~ 

> 适合想要学习或刚学习完 Node.js express 框架，想找项目练手的小伙伴

## 项目运行

1 下载项目

```
git clone https://github.com/liangtiao4/zhiye-api
```

2 修改数据库配置

在 /config/db.js 文件中修改 database 和 password

```
MYSQL_CONF = {
    host: 'localhost',
    port: '3306',
    database: 'test_db',  // 你的数据库
    user: 'root',
    password: '123456'    // 你的密码
  }
```

3 运行项目

```
cd zhiye-api

npm install

npm run start.dev
```

## 实现功能

- [x] 登录接口（post） -- 完成
- [x] 用户信息接口（post） -- 完成
- [x] 注册接口（post） -- 完成
- [x] 验证邮箱接口（post） -- 完成
- [x] 专栏列表接口（get） -- 完成
- [x] 专栏详情接口（get） -- 完成
- [x] 文章接口（get） -- 完成
- [x] 文章详情接口（get） -- 完成
- [x] 新建文章接口（post） -- 完成
