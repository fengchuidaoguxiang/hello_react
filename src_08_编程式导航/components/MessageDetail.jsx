import React from 'react';

export default class MessageDetail extends React.Component{
    state = {
      MessageDetails :[
          {id: 1, title: 'Message001', content: '我爱你，中国'},
          {id: 2, title: 'Message002', content: '我爱你，老婆'},
          {id: 3, title: 'Message003', content: '我爱你，孩子'},
          {id: 4, title: 'Message004', content: '我爱你，007'},

      ]
    };
    constructor(props){
        super(props);
    }

    render() {
        let {id} = this.props.match.params;
        let detailObj = this.state.MessageDetails.find((item, index) =>item.id === id * 1);
        console.log(detailObj)
        return (
            <div>
                <p>MessageDetail 组件内容</p>
                <p>id:{detailObj.id}</p>
                <p>title:{detailObj.title}</p>
                <p>content:{detailObj.content}</p>

            </div>
        );
    }
}