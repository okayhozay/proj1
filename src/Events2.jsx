import React, { Component } from "react";
class Events2 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {userName:""}
    }

    func1(event)
    {
        this.setState({
            userName: event.target.value
        })
    }

    render(){
        return(
            <div>
                <p>Username:</p>
                <input type = "text" name = "" onChange={this.func1.bind(this)}></input>
                {this.state.userName}
            </div>
        )
    }
}
export default Events2;