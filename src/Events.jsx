import React, { Component } from "react";
class Events1 extends Component
{
    func1(){
        alert("This is an alert.")
    }

    render(){
        return(
            <div>
                <h1>Events</h1>
                <input type = "submit" value = "SUBMIT" onClick={this.func1}></input>
            </div>
        )
    }
}
export default Events1;