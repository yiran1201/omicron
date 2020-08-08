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

