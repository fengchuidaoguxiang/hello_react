import React from 'react';


class Search extends React.Component{

    constructor(props){
        super(props);
    }
    //React 16.3.0 添加了 React.createRef()
    myRefs = React.createRef();
    handleSearch = () => {
      // 1. 收集关键字数据
      let searchContent = this.myRefs.current.value;
     // let searchContent = this.refs.textDOM.value;
     // 验证输入的内容是否合法
      if(!searchContent.trim()){
          alert('输入的内容不能为空');
          return;
      }
      // 2. 将数据传到App组件中
      this.props.getSearchContent(searchContent);

      // 3. 清空搜索框内容
       this.myRefs.current.value = '';
    };
    render() {
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.myRefs} type="text" placeholder="enter the name you search"/>
                    {/*<input ref='textDOM' type="text" placeholder="enter the name you search"/>*/}
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;