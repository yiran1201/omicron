import * as serviceWorker from './serviceWorker';

import AppComponent from './components/app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import HttpsRedirect from 'react-https-redirect';

import {configStore} from './store/store';

const store = configStore();
//index.js是连接html 和App.jsx的桥梁
// document.getElementById('root') 用来定位html上id="root" 的tag
// 然后把 app component放在“root”的tag(DOM,document object model)
// provider是一个加载器
ReactDOM.render(
  <HttpsRedirect>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </HttpsRedirect>,
  document.getElementById('root')
);

serviceWorker.unregister();
