import React from 'react';
import {NavLink} from "react-router-dom";

export default class MyNavLink extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        return(
        <NavLink className="list-group-item" activeClassName="demo" {...this.props}></NavLink>
    )

        {/*<NavLink className="list-group-item" activeClassName="demo" to={this.props.to}></NavLink>*/}
    }
}
