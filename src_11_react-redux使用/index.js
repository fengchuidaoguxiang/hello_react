import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';

import App from './containers/App';

// 渲染整个应用
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById("root"));

// 监听store对象发生变化
// store.subscribe(()=>{
//     console.log("我监听到你变化了。。。");
//    // 渲染整个应用
//     ReactDOM.render((
//         <App store={store}/>
//     ), document.getElementById("root"));
// });