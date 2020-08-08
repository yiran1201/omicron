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

## 导入东西
- 文件text.js
``` javascript
export const sample = 123;
export const sample2 = 888
export const sample3 = 999
const sample4 = 1000
export default 456;
```

- 导入
``` javascript
import { sample2 } from './test.js' // 999
import Test from './test.js' // 456
console.log(sample2)
```

- 导入普通的export要用大括号且名字需对上
- 导入export default不需大括号且名字随便起

## http- 网络传输协议
- status code
- 200 success
- 302 redirect
- 404 not found
- 403 access forbidden
- 500 internal server error

## 异步 async
``` javascript
const yibu = () => {
  console.log(1111)

// 用来对未来做事情 这个case是隔1000毫秒
// setTimeout 属于promise的一种 
// promise是异步操作
// 异步是asynchronous，简称async
  setTimeout(() => {
    console.log(2222)
  }, 3000)

  console.log(3333)
}

console.log(yibu())
```
## 不小心进入文本
- 按esc 
- 按 shift+:
- 输入q
- enter

## 创建新的route
- 在routes folder下写route 文件
```javascript
import { Router } from "express";
const router = Router();
router.get("/", (request, response) => {
  response.status(200).json("xxx");
})
export default router;
```

- 去index.js import文件
```javascript
import 随便取一个名字 from './routes/文件名'
app.use(route_path, 随便取一个名字)
```

- 定义模型 去models folder下写model 文件
- get post put delete
- postman 

## 什么是MVC
- M是model，定义数据结构跟数据库的数据形状
- C是Controler，等同于每一个route下面的操作
- V是view，前端展示逻辑

## change directory 改变路径/目录
- cd ../是回上一级
- ls 是展示当前路径的所有东西
- cd <文件夹名> 去文件夹名下面的目录
