import React, { Component } from "react";
class States extends Component{
    constructor(props){
        super(props);
        this.state = {car: "lexus", year: 2016, color: "red"}
    }
    render(){
        return(
            <div>
                <h1>{this.state.car}</h1>
                <h1>{this.state.year}</h1>
                <h1>{this.state.color}</h1>
            </div>
        );
    }
}
export default States;