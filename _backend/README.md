## 打开markdown file 
- shift + command + v

## package.json 
- 开启项目的钥匙
- 也是项目library的管理

## npm 
- node.js package manager
- express 是基于javascript的网络框架，library 
- 不要碰node_modules 和package-lock.json

## jsconfig.json 
- 用来配置项目里面的javascript syntax
- 

## babel 是用来转码
-  polyfill 是将es6 转回es5

## 启动project
```bash
npm run start
```

## 关闭sever是control +c

## database
- yiranchen
- Yc123456


## Mongoose - ODM (Object Document Mapper)
-  用来连接node.js 和mongodb


## RESTful APIs request请求
- GET  读取
- POST 添加
- PUT 修改
- DELETE 删除

## 定义schema（用在sql) model(用在编程里)
- schema 定义了数据长什么样，包括数据类型还有数据限制 

## collection -
- 一个database会有很多的collection
- 一个collection会有很多documents
- documents必须符合collection定义的格式（schema)
- 理解schema和document 之间的关系 （格式和内容的区别）

## Dog
- dog-route.js

## Invoice
- invoice-route.js
- invoice-model.js

##  创造路径
- 写好的路径要放在index.js

## 常见问题
- Error: listen EADDRINUSE: address already in use :::7777  
- exit console control+c
- solution：把浏览器整个关闭 command+q q可能要按两次，在console重新输入npm run start



## Server的两个主要作用
- 展示网页
- 处理数据 一般处理数据开头的route都在前面会加api

## project的全局搜索
- 是shift +command+f