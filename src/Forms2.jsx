import React, { Component } from "react";
class Forms2 extends Component{
    constructor(props){
        super(props);
        this.state = {username: ""}
        this.func1 = this.func1.bind(this)
        
    }
    func1 = (event) => {this.setState({
        username: event.target.value
    })}

    render(){
        var test = ""
        if(this.state.username){
            test = <h1>hello there, {this.state.username}</h1>
        }
        else
        {
            test = ""
        }

        return(
            <div>
                {test}
                <h1>Welcome {this.state.username}</h1>
                <p>Enter Username</p>
                <input type = "text" onChange={this.func1}></input>
            </div>

        );
    }
}
export default Forms2