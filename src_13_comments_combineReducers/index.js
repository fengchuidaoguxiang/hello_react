import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import App from './App';

/**
 * index.js: 入口文件,只负责渲染整个应用
 */

// 渲染组件到页面容器
ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
), document.getElementById('root'));