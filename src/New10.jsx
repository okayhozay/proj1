import React, { Component } from "react";
class New10 extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.tester}</h1>
            </div>
        )
    }
}
//passing data from one component to another component
class Newest10 extends Component{
    render(){
        return(
            <div>
                <New10 tester = "test prop value"></New10>
            </div>
        )
    }
}
export default Newest10;