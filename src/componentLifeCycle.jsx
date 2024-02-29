import React, { Component } from "react";
class LifeCycle extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {userName:"Bilal"}
        this.method1 = this.method1.bind(this)
    }

    method1(){
        this.setState({
            userName: "Syed"
        })
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component DID mount");
    }

    componentWillReceiveProps(newProps){
        console.log("Component will receive props")
    }

    componentUpdate(newProps, newState)
    {
        return true;
    }

    componentWillUpdate(nextProp, nextState){
        console.log("Component will update")
    }

    componentDidUpdate(prevProp, prevState)
    {
        console.log("Component DID update")
    }

    componentWillUnmount()
    {
        console.log("Component will unmount")
    }

    render(){
        return(
            <div>
                {this.state.userName}
                <input type = "submit" value = "Enter" onClick={this.method1}></input>
            </div>
        )
    }
}
export default LifeCycle;