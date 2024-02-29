import React, { Component } from "react";
class Forms5 extends Component{
    constructor(props){
        super(props);
        this.state = {name: "", age: null};
        this.func1 = this.func1.bind(this);
        this.func2 = this.func2.bind(this);

    }

    func1 = (event) => {
        var name2 = event.target.name;
        var tester = event.target.value;
        this.setState({
            [name2]: tester
        })
    }

    func2 = (event) => {
        event.preventDefault()
        alert("Welcome" + this.state.name);
    }

    render(){
        return(
            <form onSubmit = {this.func2}>
            <div>
                <h1>welcome Forms5 {this.state.name}{this.state.age}</h1>
                {/* <p>Enter USername</p>
                <input type = "text" onChange={this.func1}></input> */}
                <p>Enter Name</p>
                <input type = "text" onChange={this.func1}></input>
                <p>Enter Age</p> 
                <input type = "text" onChange={this.func1}></input>
                <input type = "submit" value = "99"></input>
            </div>
            </form>
        )
    }
}
export default Forms5;