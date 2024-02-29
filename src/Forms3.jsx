import React, { Component } from "react";
class Forms3 extends Component{
    constructor(props){
        super(props)
        this.state = {username: ""}
        this.func2 = this.func2.bind(this)
        this.submit = this.submit.bind(this)
    }

    func2 = (event) => {this.setState({
        username: event.target.value
    })}

    submit = (event) => {
        event.preventDefault()
        alert(this.state.username)
    }

    render(){
        return(
            <form onSubmit={this.submit}>
            <div>
                
                <h1>Welcome Forms3 {this.state.username}</h1>
                <p>Enter Username</p>
                <input type = "text" onChange={this.func2}></input>
                <input type = "submit" value = "button!"></input>
            </div>
            </form>
        )
    }
}
export default Forms3