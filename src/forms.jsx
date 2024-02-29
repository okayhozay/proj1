import React, { Component } from "react";
class Forms1 extends Component{
    constructor(props){
        super(props);
        this.state = {username: ""}
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
    }

    handleChangeEvent = (event) => {this.setState({
        username: event.target.value
    })}

    render(){
        return(
            <div>
                <h1>Welcome {this.state.username}</h1>
                <p>Enter Username</p>
                <input type = "text" onChange={this.handleChangeEvent}></input>
            </div>
        )
    }
}
export default Forms1;