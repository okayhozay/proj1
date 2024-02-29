import React, { Component } from "react";
class StateTest3 extends Component{
    constructor(props){
        super(props);
        this.state = {car: "audi", year: 2019, color: "black"}
    }
    change = ()=> {
        this.setState({
            car: "Mercedes",
            year: 2015
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.car}</h1>
                <h1>{this.state.year}</h1>
                <h1>{this.state.color}</h1>

                <button onClick={this.change}>change button</button>
                
            </div>
        );
    }
}
export default StateTest3;