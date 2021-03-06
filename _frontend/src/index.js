import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import {configStore} from './store/store';
import * as serviceWorker from './serviceWorker';
import AppComponent from './components/app/App';

const store = configStore();
//index.js是连接html 和App.jsx的桥梁
// document.getElementById('root') 用来定位html上id="root" 的tag
// 然后把 app component放在“root”的tag(DOM,document object model)
// provider是一个加载器
ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
