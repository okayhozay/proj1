import React, { Component } from "react";
class Forms9 extends Component{
    constructor(props){
        super(props)

        this.state = {fname:"", age:"", errorMessage:""};

        this.errorM = this.errorM.bind(this)

    }

    errorM = (event) => {
        var nm = event.target.name;
        var ag = event.target.value;
        var er = "";
        
        if(nm === "age")
        {
            if(ag != "" && !Number(ag))
            {
                er = "Age must be a number"
            }
        }
        this.setState({
            errorMessage: er, [nm] : ag
        });

    }

    render(){
        return(
            <form>
                <h1>F9 {this.state.fname}{this.state.age}</h1>
                <p>Enter Name</p>
                <input type = "text" name = "hi" onChange={this.errorM}></input>
                <p>Enter age</p>
                <input type = "text" name = "age" onChange = {this.errorM}></input>
                {this.state.errorMessage}
            </form>
        )
    }
}
export default Forms9;