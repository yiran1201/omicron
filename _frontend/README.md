## jsx

- x 是指 xml- cross markup language 用别的语言写 html 好处是 render 的更快

## react 和 html 之前的联系

- 在 index.html 里面,有

```html
<div id="root"></div>
```

- index.js 里面，有

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

- 将 App component 导入 html 里面

- 如果在 project 里面 import .js 或者.jsx 是不用加后缀的
- 比如 import App.jsx

```js
import AppComponent from './components/app/App';
```

## 开 developer console

- shift + command + c

## VScode 快捷键

- 删掉一行 command + x
- 删掉一行 shift + command + k
- 移行 option + 方向键

## 常用的 tag

- div -> dimension 下面可以放任何东西, 会占一行
- span -> 可以放在任何东西下面，并且与任何东西并行
- p -> paragraph 能放 span，a, button。p 会占一行
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
const [unitPrice, setUnitPrice] = useState(500);
```

- unitPrice 是状态值
- setUnitPrice 是改变状态值的函数也是一个 function
- 500 是状态初始值

## Destructor 解析器

```js
const arr = [1, 2, 3, 4]
const [c, d] = arr

c -> 1
d -> 2
```

## margin 和 padding 的区别

- margin 是外间距
- margin: up right down left 四个参数
- margin: up (right & left) down 三个参数
- margin：(up & down) (right & left) 两个参数
- margin：1px 只有一个参数时表示上下左右全部相同间距

- padding 是内间距
- 判断两个区别的最好方法是给一个 background color 去看

## border

- border: px type color
- border: 8px solid red 例子

## border-radius

- 是画弧用的，可以给 px 可以给%
- 如果要画到圆就是 50%

## img

- 一般要修改 img 的 style 都要在外面加一个 div

## position relative 和 absolute 的关系

- relative 直接在 parent
- absolute 在 children，有 absolute 就一定有方向，方向包括上下左右
- default 是 left:0 top:0

## flexbox

- flex-direction 为 row 的情况，justify-content 是左右对齐，algin-item 是上下对齐
- flex-direction 为 column 的情况，justify-content 是上下对齐，algin-item 是左右对齐
- flexbox default direction 是 row

## onClick function

- 任何元素上都可以有 -这个 function 不是马上执行的，它只有满足 user click 这个动作的时候才会执行

## 大括号的使用

- 如果在 html 里面写 Javascript 都要加大括号 （react 的规定）
- html tag 例如<div></div> 里面加 property， 只有 property value 要加大括号，如果 value 是 fixed 的 string 可以不加大括号

## table

- <thead></thead> table head 最上面哪一行
- <tr> table row
- <th> table cell head
- <td> table cell

## onChange

- input select textarea 里面都有的 event trigger
- event.target.value 能拿到状态转换之后的值
- event.preventDefault() 阻止除了当前 input 以外的 event 改变
- event.target.value 默认返回 string 值

## props

- parent 把 form 传递到 child
- submitForm 是来自 parent state 的值
- attribute 的名字是随便取的,for example 在这里是 form

```jsx
<Generator form={submitForm} />
```

- child 能通过 props 读取 parent 传进来的值

```jsx
const Generator = (props) => {
  return <div>{props.form.logistic}</div>;
};
```

## 书名号

- 如果两个书名号之间没有 children 则书名号可以简写,下面是 example

```jsx
<div></div>
```

等同于

```jsx
<div />
```

```jsx
<Generator></Generator>
```

等同于

```jsx
<Generator />
```

## style 里面常用的 size 暗号

- xl 大于 1200 px
- lg 是 large 992 到 1200 之间
- md 是 medium 768 到 992 之间
- sm 是 small 576 到 768 之间
- xs 小于 576

## react router

- browserouter 加 switch相当于一个一个书本的夹子
- route 就相当于书本的每一页，path相当于页码，component相当于内容
````jsx
<BrowserRouter>
  <Switch>
    <Route path='/' component={BuildWatchPage} exact />
    <Route path='/contract' component={ContractPage} exact />
  </Switch>
</BrowserRouter>
````
## form submit
- <AvForm></AvForm>的底层是<form></form>
- 有Form的地方就会跟一个onSubmit={}的property
- 大括号{}里面是处理submit的function逻辑
- 通过<button type="submit">来trigger
- 在form下面的所有<button>都会default成type='submit'
- <button type='button'>不参与form的逻辑

## debugger
- 是一个浏览器的命令，主要是在代码里设置停止点以便查看上文的值
- 可以放在前段的javascript code里面

## useEffect
- 是一个生命周期function,会被react function自己call 不需要手动trigger
- 当状态改变的时候或者render改变的时候useEffect会被trigger
- 状态改变会导致整个component re-render

## fetch
- 是一个async call 会返回一个promise，因此要用await来等它完成
- 要看fetch 的结果，要去call .json(),也是一个promise，因此也要加一个await来等它完成

## JSON
- 是一种网络数据传输的格式，具体用法有两个
- JSON.stringify(),是将数据转换成JSON格式的string
- JSON.parse(),是将JSON格式的string还原成原数据类型

## POST request
``` js
fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data),
})
```
- POST里面一般会有body，它要JSON string
- 有body就要定义headers，以及里面的Content-Type

## setState function
- 所有的setState不一定inline执行的，有快有慢，概念类似于PROMISE async function
- 每一次跑setState都会重新render一次component，不会重复进入useEffect

## cache 是一个缓存策略
- 它的作用是不Load重复的信息，就是如果发现你的数据是Load过就不需要再从数据库Load
- react下面是有一页，它的分页效果是通过component切换做成的
- component切换会被需要re-render，以及trigger useEffect,其中可能造成多余的API call

## Redux 的概念
- 在app的scope做一个全局范围的store，储存的信息能被所有component共享

## useEffect 被trigger的两种情况
- 1第一次pass 完component render
- 2是发现如果有定义的property有更新

## setState function

- setState function会trigger component re-render
- component props 的改动(Redux)会trigger useEffect()
