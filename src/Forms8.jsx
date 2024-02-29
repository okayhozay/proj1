import React, { Component } from "react";
class Forms8 extends Component{
    constructor(props){
        super(props)

        this.state = {fname: "", age: ""}

        this.func1 = this.func1.bind(this)
        this.func2 = this.func2.bind(this)
    }
    func1 = (event) => {
        var n1 = event.target.name;
        var a1 = event.target.value;

        this.setState({[n1]: a1})
    }
    func2 = (event) => {
        event.preventDefault()

        let localAge = this.state.age
        if(!Number(localAge))
        {
            alert("Age must be a number " + localAge)
        }
        else
        {
            alert(this.state.fname + " " + this.state.age)
        }
    }
    render(){
        return(
            <form onSubmit = {this.func2}>
                <h1>F8 {this.state.fname}{this.state.age}</h1>
                <p>Enter name</p>
                <input type = "text" name = "h1" onChange={this.func1}></input>
                <p>Enter age</p>
                <input type = "text" name = "age" onChange = {this.func1}></input>
                <input type = "submit" value = "submit"></input>
            </form>
        )
    }
}
export default Forms8;