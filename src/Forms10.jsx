import React, { Component } from "react";
class Forms10 extends Component{
    constructor(props){
        super(props)

        this.state = {fname: "", age: "", errorMessage: ""}

        this.errorM = this.errorM.bind(this)
        this.submitMethod = this.submitMethod.bind(this)

    }

    errorM = (event) => {
        var nm = event.target.name
        var ag = event.target.value
        this.setState({
            [nm]:ag
        });
    }

    submitMethod = (event) => {
        event.preventDefault()

        var ge = this.state.age;
        var ok = "";
        if(ge != "" && !Number(ge))
        {
            ok = <b>Age must be a number</b>
        }
        else
        {
            ok = "";
        }
        this.setState({
            errorMessage: ok
        })
    }

    render(){
        return(
            <form onSubmit = {this.submitMethod}>
                <h1>F10 {this.state.fname}{this.state.age}</h1>
                <p>Enter Name</p>
                <input type = "text" name = "somthing" onChange={this.errorM}></input>
                <p>Enter AGE</p>
                <input type = "text" name = "age" onChange = {this.errorM}></input>
                {this.state.errorMessage}
                <input type = "submit" value = "SUBMIT"></input>
            </form>

        )
    }
}
export default Forms10;