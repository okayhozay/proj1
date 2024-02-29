import React, { Component } from "react";
class StateTest extends Component{
    constructor(props){
        super(props);
        this.state = {plant: "Tree"}
    }
    render(){
        return(
            <div>
                <h1>{this.state.plant}</h1>
            </div>
        );
    }
}
export default StateTest;