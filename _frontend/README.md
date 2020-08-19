## jsx
- x是指xml- cross markup language 用别的语言写html 好处是render的更快

## react 和html之前的联系
- 在index.html里面,有
```html
<div id="root"></div>
```

- index.js里面，有
```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

- 将App component导入html里面

- 如果在project 里面import .js或者.jsx 是不用加后缀的
- 比如import App.jsx
```js
import AppComponent from './components/app/App';
```


## 开developer console
- shift + command + c


## VScode 快捷键
- 删掉一行 command + x
- 删掉一行 shift + command + k
- 移行 option + 方向键

## 常用的tag
- div -> dimension 下面可以放任何东西, 会占一行
- span -> 可以放在任何东西下面，并且与任何东西并行
- p -> paragraph 能放span，a, button。p会占一行
- a -> link
- button
- form
- input
- textarea
- li -> list 会占一行
- ul / ol -> un-order list / order list
- img -> picture

## 状态编程 state programming
- 网页很多个状态
- 控制每个状态能够显示不一样的东西
```jsx


## Destructor 解析器
```js
const arr = [1, 2, 3, 4]
const [c, d] = arr

c -> 1
d -> 2
```

## margin 和padding的区别
- margin是外间距
- margin: up right down left 四个参数
- margin: up (right & left) down 三个参数
- margin：(up & down) (right & left) 两个参数
- margin：1px 只有一个参数时表示上下左右全部相同间距

- padding是内间距
- 判断两个区别的最好方法是给一个background color去看

## border
- border: px type color
- border: 8px solid red 例子

## border-radius
- 是画弧用的，可以给px 可以给%
- 如果要画到圆就是50%

## img
- 一般要修改img的style 都要在外面加一个div

## position relative 和absolute 的关系
- relative直接在parent
- absolute 在children，有absolute就一定有方向，方向包括上下左右
- default是left:0 top:0

## flexbox
- flex-direction 为row 的情况，justify-content是左右对齐，algin-item是上下对齐
- flex-direction 为 column 的情况，justify-content是上下对齐，algin-item是左右对齐
- flexbox default direction是row


## onClick function
- 任何元素上都可以有
-这个function不是马上执行的，它只有满足user click这个动作的时候才会执行

## 大括号的使用
- 如果在html里面写Javascript都要加大括号 （react的规定）
- html tag例如<div></div> 里面加property， 只有property value要加大括号，如果value是 fixed 的string可以不加大括号

## table
- <thead></thead> table head 最上面哪一行
- <tr> table row
- <th> table cell head
- <td> table cell
