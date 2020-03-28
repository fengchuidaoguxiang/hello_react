import React from 'react';

export default class News extends React.Component {

    state = {
        newsArr: ['news01','news02','news03','news04']
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <ul>
                   {
                       this.state.newsArr.map((item, index)=>{
                           return (
                               <li key={index}>{item}</li>
                           )
                       })
                   }
               </ul>
            </div>
        );
    }
}

