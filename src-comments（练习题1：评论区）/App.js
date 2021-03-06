import React,{Component} from 'react';

import AddComment from './components/AddComment';
import CommentsList from './components/CommentsList';

import './app.css';

/**
 * App.js：代表整个应用，本质就是一个组件
 */

// // 定义组件
// class App extends React.Component{
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         return(
//             <div>
//                 <h1>App应用</h1>
//             </div>
//         )
//     }
// }
//
// // 暴露组件
// export default App;

//（合二为一）定义组件 + 暴露组件
export default class App extends Component{
    // 初始化评论内容的数据
    state = {
      commentsArr: [
          {username: '山西人', content:'我们有煤矿'},
          {username: '雄安人', content:'我在雄安有两亩地'}
      ]
    };
    constructor(props){
        super(props);
    }

    add = (commentObj) => {
        let commentsArr = [commentObj, ...this.state.commentsArr];
        // 更新commentsArr的状态值
        this.setState({
            commentsArr
        });
    }

    del = (index) => {
        console.log('index: ', index);
        let { commentsArr } = this.state;
        commentsArr.splice(index, 1);
        this.setState({
            commentsArr
        });
    }

    render(){
        return(
            <div>
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <AddComment add={this.add}/>
                        <CommentsList del={this.del} commentsArr={this.state.commentsArr}/>
                    </div>
                </div>
            </div>
        )
    }
}
