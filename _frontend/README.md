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


## Destructor 解析器
```js
const arr = [1, 2, 3, 4]
const [c, d] = arr

c -> 1
d -> 2
```
## react-image-lightbox library

```jsx
import './BuildWatch.scss';

//把library用到的style用上去 （做好的插件用上去）
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
// 吧library import成一个component名字随便取，在这里是LightBox
import LightBox from 'react-image-lightbox';
import React, {useState} from 'react';

import 机械电子 from '../../asset/images/watches/机械电子.png';
import 极简表盘 from '../../asset/images/watches/极简表盘.png';
import 淡雅金 from '../../asset/images/watches/淡雅金.png';
import 火烈鸟 from '../../asset/images/watches/火烈鸟.png';
import 珍爱永恒 from '../../asset/images/watches/珍爱永恒.png';
import 珍珠白 from '../../asset/images/watches/珍珠白.png';
import 粉红女郎 from '../../asset/images/watches/粉红女郎.png';
import 经典 from '../../asset/images/watches/经典.png';
import 绽放 from '../../asset/images/watches/绽放.png';
import 缎金 from '../../asset/images/watches/缎金.png';
import 缎金绿 from '../../asset/images/watches/缎金绿.png';
import 缎金黑 from '../../asset/images/watches/缎金黑.png';
import 花花公子 from '../../asset/images/watches/花花公子.png';
import 蓝调 from '../../asset/images/watches/蓝调.png';
import 轮回 from '../../asset/images/watches/轮回.png';
import 银白 from '../../asset/images/watches/银白.png';

const IMAGES = [
  机械电子,
  极简表盘,
  淡雅金,
  火烈鸟,
  珍爱永恒,
  珍珠白,
  粉红女郎,
  经典,
  绽放,
  缎金,
  缎金绿,
  缎金黑,
  花花公子,
  蓝调,
  轮回,
  银白,
];

const BuildWatch = () => {
  // useState产生 => [状态值，更改状态值的函数],
  // 用useState function 的时候需要一个默认值，默认值是0，默认值是给状态值一个初始值
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='alert alert-warning'>
        A simple primary alert—check it out!
      </div>
      <div className='h1 text-center'>Customize Your Watch</div>
      <span>word one</span>
      <p>word two</p>

      {/** Photo Gallery */}
      <div>
        <button className='btn btn-info' onClick={() => setIsOpen(true)}>
          let's see
        </button>
        {/**  ternary condition 必须有一个？和一个：
         * 问号是判断逻辑，冒号是选择逻辑，冒号前后共有两个值，当前者为true，后者为false的对应值
         */}
        {isOpen ? (
          <LightBox
            mainSrc={IMAGES[photoIndex]}
            nextSrc={IMAGES[(photoIndex + 1) % IMAGES.length]}
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % IMAGES.length)
            }
            prevSrc={IMAGES[(photoIndex + IMAGES.length - 1) % IMAGES.length]}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + IMAGES.length - 1) % IMAGES.length)
            }
            onCloseRequest={() => setIsOpen(false)}
            animationDuration={1000}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BuildWatch;

```
