import React from 'react';


export default class CommentItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {commentItem} = this.props;
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;">删除</a>
                </div>
                <p className="user"><span>{commentItem.username}</span><span>说:</span></p>
                <p className="centence">{commentItem.content}</p>
            </li>
        );
    }
}