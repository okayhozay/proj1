import React, { Component } from "react";
class New1 extends Component{
    constructor(){
        super()
        this.state = {firstname: "Bilal"}
    }
    render(){
        return(
            <h1>firstname is {this.state.firstname}</h1>
        );
    }
}
export default New1;